import { cache } from "react";
import type { ProgramDetails } from "@/types/program-details";
import { getApiProgramDetails } from "@/lib/program-details/sources/api-source";
import {
  getLocalProgramDetails,
  getLocalProgramSlugs,
} from "@/lib/program-details/sources/local-source";

/** Switch with PROGRAM_DETAILS_SOURCE=api in .env.local. Default is local. */
function useApiSource(): boolean {
  return process.env.PROGRAM_DETAILS_SOURCE === "api";
}

/** Both sources return the same ProgramDetails; cache() dedupes page + metadata calls. */
export const getProgramDetails = cache(
  async (slug: string): Promise<ProgramDetails | null> => {
    const safeSlug = slug.trim();
    if (!safeSlug) return null;
    return useApiSource()
      ? getApiProgramDetails(safeSlug)
      : getLocalProgramDetails(safeSlug);
  },
);

/** API mode renders on demand, so nothing is prebuilt. */
export async function getProgramDetailsSlugs(): Promise<string[]> {
  return useApiSource() ? [] : getLocalProgramSlugs();
}