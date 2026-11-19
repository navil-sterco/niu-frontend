import type { Program, ProgramLevel, School } from "@/types/program";


const clean = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[.'’]/g, "")
    .replace(/[^a-z0-9\s]/g, " ");

const toWords = (s: string) => clean(s).split(/\s+/).filter(Boolean);

function withinOneEdit(a: string, b: string): boolean {
  if (a === b) return true;
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0;
  let j = 0;
  let edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      i++;
      j++;
      continue;
    }
    if (++edits > 1) return false;
    if (a.length > b.length) i++;
    else if (a.length < b.length) j++;
    else {
      i++;
      j++;
    }
  }
  return edits + (a.length - i) + (b.length - j) <= 1;
}



const COURSE_ALIASES: [prefix: string, alias: string][] = [
  ["btech", "bachelor of technology be engineering"],
  ["mtech", "master of technology me engineering"],
  ["bsc", "bachelor of science"],
  ["msc", "master of science"],
  ["bca", "bachelor of computer applications"],
  ["mca", "master of computer applications"],
  ["bba", "bachelor of business administration management"],
  ["mba", "master of business administration management"],
  ["bcom", "bachelor of commerce"],
  ["phd", "doctor of philosophy doctorate research"],
];

const LEVEL_ALIASES: Record<ProgramLevel, string> = {
  undergraduate: "undergraduate under graduate ug bachelor bachelors graduation",
  postgraduate: "postgraduate post graduate pg master masters",
  doctoral: "doctoral doctorate doctor phd research",
};



export interface SearchIndex {
  words: string[];
  compact: string;
}

export function buildSearchIndex(program: Program, schools: School[]): SearchIndex {
  const schoolName = schools.find((s) => s.id === program.schoolId)?.name ?? "";
  const titleCompact = toWords(program.title).join("");
  const alias = COURSE_ALIASES.find(([prefix]) => titleCompact.startsWith(prefix))?.[1] ?? "";

  const text = [
    program.title,
    schoolName,
    program.level,
    LEVEL_ALIASES[program.level],
    program.duration,
    alias,
  ].join(" ");

  const words = toWords(text);
  return { words, compact: words.join("") };
}

export function matchesQuery(query: string, index: SearchIndex): boolean {
  const tokens = toWords(query);
  if (tokens.length === 0) return true;

  const glued = tokens.join("");
  if (glued.length >= 4 && index.compact.includes(glued)) return true;

  
  return tokens.every(
    (t) =>
      (t.length >= 4 && index.compact.includes(t)) ||
      index.words.some((w) => w.startsWith(t) || (t.length >= 4 && withinOneEdit(w, t)))
  );
}
