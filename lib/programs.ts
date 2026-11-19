import { allPrograms, levels, schools } from "@/data/programs/programs-data";

export async function getProgramsData() {
  return { programs: allPrograms, schools, levels };
}
