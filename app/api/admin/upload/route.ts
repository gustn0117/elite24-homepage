import { promises as fs } from "node:fs";
import {
  ALLOWED_EXT,
  MAX_BYTES_BY_TYPE,
  dirFor,
  extOf,
  isAuthed,
  isMediaType,
  pathFor,
  safeName,
} from "@/lib/storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  if (!isAuthed(req)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return Response.json({ error: "Invalid multipart body" }, { status: 400 });
  }

  const type = form.get("type");
  const file = form.get("file");

  if (!isMediaType(type)) {
    return Response.json(
      { error: "type must be images | videos | music" },
      { status: 400 },
    );
  }
  if (!(file instanceof File)) {
    return Response.json({ error: "file required" }, { status: 400 });
  }

  const ext = extOf(file.name);
  const allowed = ALLOWED_EXT[type];
  if (!allowed.includes(ext)) {
    return Response.json(
      { error: `허용되지 않는 확장자입니다. (${allowed.join(", ")})` },
      { status: 400 },
    );
  }

  const maxBytes = MAX_BYTES_BY_TYPE[type];
  if (file.size > maxBytes) {
    return Response.json(
      {
        error: `파일이 너무 큽니다. 최대 ${(maxBytes / 1024 / 1024).toFixed(0)}MB.`,
      },
      { status: 413 },
    );
  }

  await fs.mkdir(dirFor(type), { recursive: true });

  const baseName = safeName(file.name);
  let finalName = baseName;
  let counter = 1;
  while (true) {
    try {
      await fs.access(pathFor(type, finalName));
      const dot = baseName.lastIndexOf(".");
      finalName =
        dot > 0
          ? `${baseName.slice(0, dot)}-${counter}${baseName.slice(dot)}`
          : `${baseName}-${counter}`;
      counter++;
      if (counter > 100) throw new Error("too many name collisions");
    } catch (e: unknown) {
      // ENOENT — name is free
      const err = e as NodeJS.ErrnoException;
      if (err?.code === "ENOENT") break;
      if (counter > 100)
        return Response.json({ error: "이름 충돌이 너무 많습니다." }, { status: 500 });
    }
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(pathFor(type, finalName), buffer);
  } catch (err) {
    return Response.json(
      {
        error:
          err instanceof Error ? err.message : "파일 저장 중 오류가 발생했습니다.",
      },
      { status: 500 },
    );
  }

  return Response.json({ ok: true, type, name: finalName, size: file.size });
}
