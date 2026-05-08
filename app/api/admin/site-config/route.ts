import { revalidatePath } from "next/cache";
import { isAuthed } from "@/lib/storage";
import { saveSiteConfig } from "@/lib/site-config-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  if (!isAuthed(req)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }
  try {
    const saved = await saveSiteConfig(body);
    revalidatePath("/", "layout");
    return Response.json({ ok: true, config: saved });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "저장 실패";
    return Response.json({ error: msg }, { status: 500 });
  }
}
