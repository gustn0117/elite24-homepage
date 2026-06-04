import { isAuthed } from "@/lib/storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// 비밀번호 검증 전용 — 부작용 없음. 200 = OK, 401 = 비밀번호 틀림.
export async function POST(req: Request) {
  if (!isAuthed(req)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  return Response.json({ ok: true });
}
