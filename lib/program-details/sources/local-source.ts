import {
  programDetailsBySlug,
  programDetailsList,
} from "@/data/programs/programs-details-data";
import type { ProgramDetails } from "@/types/program-details";

export async function getLocalProgramDetails(
  slug: string,
): Promise<ProgramDetails | null> {
  return Object.prototype.hasOwnProperty.call(programDetailsBySlug, slug)
    ? programDetailsBySlug[slug]
    : null;
}

export async function getLocalProgramSlugs(): Promise<string[]> {
  return programDetailsList.map((program) => program.slug);
}