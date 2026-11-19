import {
    allPrograms,
    levels,
    schools as localSchools,
  } from "@/data/programs/programs-data";
  
  import { fetchProgramsFromApi } from "@/lib/programs-api";
  
  import type { Program, School } from "@/types/program";
  
  export async function getProgramsData(): Promise<{
    programs: Program[];
    schools: School[];
    levels: typeof levels;
    source: "api" | "local";
  }> {
    try {
      const apiData = await fetchProgramsFromApi();
  
      return {
        programs: apiData.programs,
        schools: apiData.schools.length
          ? apiData.schools
          : localSchools,
        levels,
        source: "api",
      };
    } catch (error) {
      console.error(
        "Unable to load programs from API. Using local data.",
        error,
      );
  
      return {
        programs: allPrograms,
        schools: localSchools,
        levels,
        source: "local",
      };
    }
  }