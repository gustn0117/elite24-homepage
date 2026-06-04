import { promises as fs } from "node:fs";
import { dirFor, isMediaType } from "@/lib/storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const type = url.searchParams.get("type");
  if (!isMediaType(type)) {
    return Response.json(
      { error: "type must be images | videos | music" },
      { status: 400 },
    );
  }
  try {
    const dir = dirFor(type);
    let entries: string[] = [];
    try {
      entries = await fs.readdir(dir);
    } catch (e) {
      const err = e as NodeJS.ErrnoException;
      if (err?.code === "ENOENT") {
        return Response.json({ files: [] });
      }
      throw e;
    }
    const files = await Promise.all(
      entries.map(async (name) => {
        // 시스템/숨김/0바이트 파일 제외 (`.`, `_` 접두사 + 빈 파일)
        if (name.startsWith(".") || name.startsWith("_")) return null;
        try {
          const stat = await fs.stat(`${dir}/${name}`);
          if (!stat.isFile()) return null;
          if (stat.size === 0) return null;
          return {
            name,
            size: stat.size,
            modified: stat.mtimeMs,
            url: `/api/files/${type}/${encodeURIComponent(name)}`,
          };
        } catch {
          return null;
        }
      }),
    );
    const valid = files.filter((f): f is NonNullable<typeof f> => f !== null);
    valid.sort((a, b) => b.modified - a.modified);
    return Response.json({ files: valid });
  } catch (e) {
    const err = e instanceof Error ? e.message : "오류";
    return Response.json({ error: err }, { status: 500 });
  }
}
