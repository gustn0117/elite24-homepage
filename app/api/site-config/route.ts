import { getSiteConfig } from "@/lib/site-config-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json(getSiteConfig());
}
