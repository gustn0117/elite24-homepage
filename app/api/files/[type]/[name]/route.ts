import { createReadStream, promises as fs } from "node:fs";
import { Readable } from "node:stream";
import {
  MIME_BY_EXT,
  extOf,
  isMediaType,
  pathFor,
  safeName,
} from "@/lib/storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Ctx = { params: { type: string; name: string } };

export async function GET(req: Request, { params }: Ctx) {
  if (!isMediaType(params.type)) {
    return new Response("Not found", { status: 404 });
  }
  const name = safeName(decodeURIComponent(params.name));
  const filePath = pathFor(params.type, name);

  let stat;
  try {
    stat = await fs.stat(filePath);
    if (!stat.isFile()) throw new Error("not file");
  } catch {
    return new Response("Not found", { status: 404 });
  }

  const ext = extOf(name);
  const mime = MIME_BY_EXT[ext] ?? "application/octet-stream";
  const total = stat.size;
  const range = req.headers.get("range");

  const cacheHeaders = {
    "Cache-Control": "public, max-age=3600",
    "Accept-Ranges": "bytes",
  };

  // HTTP Range — required for HTML5 video/audio scrubbing
  if (range) {
    const m = /^bytes=(\d*)-(\d*)$/.exec(range);
    if (m) {
      const start = m[1] === "" ? 0 : parseInt(m[1], 10);
      const end =
        m[2] === "" ? total - 1 : Math.min(parseInt(m[2], 10), total - 1);

      if (
        Number.isNaN(start) ||
        Number.isNaN(end) ||
        start > end ||
        start >= total
      ) {
        return new Response("Range Not Satisfiable", {
          status: 416,
          headers: { "Content-Range": `bytes */${total}` },
        });
      }

      const nodeStream = createReadStream(filePath, { start, end });
      const webStream = Readable.toWeb(nodeStream) as ReadableStream;
      return new Response(webStream, {
        status: 206,
        headers: {
          ...cacheHeaders,
          "Content-Type": mime,
          "Content-Length": String(end - start + 1),
          "Content-Range": `bytes ${start}-${end}/${total}`,
        },
      });
    }
  }

  const nodeStream = createReadStream(filePath);
  const webStream = Readable.toWeb(nodeStream) as ReadableStream;
  return new Response(webStream, {
    status: 200,
    headers: {
      ...cacheHeaders,
      "Content-Type": mime,
      "Content-Length": String(total),
    },
  });
}
