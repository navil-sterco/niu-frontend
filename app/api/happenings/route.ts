
import { NextResponse, type NextRequest } from "next/server";
import { getTabConfig } from "@/data/happenings";
import {
  getFilterFields,
  getHappeningsPage,
  parseFilters,
} from "@/lib/happenings";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;

  const config = getTabConfig(params.get("tab") ?? "");

  if (!config || config.status !== "ready") {
    return NextResponse.json(
      { error: "Unknown tab" },
      { status: 400 },
    );
  }

  const page = Math.min(
    Math.max(
      parseInt(params.get("page") ?? "1", 10) || 1,
      1,
    ),
    200,
  );

  try {
    const fields = await getFilterFields(config.slug);

    const rawFilters = Object.fromEntries(params.entries());

    const filters = parseFilters(rawFilters, fields);

    const result = await getHappeningsPage(
      config.slug,
      filters,
      page,
    );

    return NextResponse.json(result);
  } catch (error) {
    console.error("[api/happenings]", error);

    return NextResponse.json(
      { error: "Failed to load happenings" },
      { status: 500 },
    );
  }
}
