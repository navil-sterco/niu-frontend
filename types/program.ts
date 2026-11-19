export type ProgramLevel =
  | "undergraduate"
  | "postgraduate"
  | "doctoral";

export interface School {
  id: string;
  name: string;
}

export interface ProgramInput {
  id: string;
  title: string;
  schoolId: string;
  level: ProgramLevel;
  duration: string;
}

export interface Program extends ProgramInput {
  slug: string;
  eligibilityUrl: string;
  applyUrl: string;
  detailsUrl: string;
  fees?: string | null;
  brochure?: string | null;
}

export interface LevelCardData {
  id: ProgramLevel;
  title?: string;
  image?: string ; 
  link?: string| null;
  bannerImage?:string| null;
  courseLevel?:string|null;
  slug?:string|null;
}



export type ViewMode = "grid" | "list";

// export interface Program {
//   id: number | string;
//   title: string;
//   duration: string;
// }

export interface Program extends ProgramInput {
  slug: string;
  eligibilityUrl: string;
  applyUrl: string;
  detailsUrl: string;
  fees?: string | null;
  brochure?: string | null;
}


export interface ProgramApiResponse {
  status: boolean;
  module: string;
  data: {
    detail: {
      title: string;
      sub_title: string | null;
      duration: string;
      fees: string;
      brochures: string;
      "course-level": string;
    };
    cms: unknown[];
    modular: {
      schools: {
        title: string;
        id: number;
        slug: string;
      }[];
      departments: {
        title: string;
        schools: string;
        id: number;
        slug: string;
      }[];
    };
  };
}

