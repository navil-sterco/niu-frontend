import { NextResponse } from "next/server";
import { getHeaderConfig } from "@/lib/header";

/** GET /api/header → { config, source }   (the browser uses this to refresh its sessionStorage copy) */
export async function GET() {
  try {
    const { config, source } = await getHeaderConfig();
    return NextResponse.json({ config, source }, { headers: { "Cache-Control": "public, max-age=60" } });
  } catch (error) {
    console.error("[api/header]", error);
    return NextResponse.json({ error: "Failed to load header" }, { status: 500 });
  }
}
