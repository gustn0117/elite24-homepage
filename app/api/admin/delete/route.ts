import { promises as fs } from "node:fs";
import { isAuthed, isMediaType, pathFor } from "@/lib/storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  if (!isAuthed(req)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json().catch(() => null);
  if (!body || !isMediaType(body.type) || typeof body.name !== "string") {
    return Response.json({ error: "type and name required" }, { status: 400 });
  }
  try {
    await fs.unlink(pathFor(body.type, body.name));
    return Response.json({ ok: true });
  } catch (e) {
    const err = e as NodeJS.ErrnoException;
    if (err?.code === "ENOENT") {
      return Response.json({ error: "파일이 존재하지 않습니다." }, { status: 404 });
    }
    return Response.json(
      { error: err?.message ?? "삭제 실패" },
      { status: 500 },
    );
  }
}
