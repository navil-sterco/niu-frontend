"use client";


import { useDebounce } from "@/components/programs/useDebounce";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Program, ProgramLevel, School, ViewMode } from "@/types/program";
import { buildSearchIndex, matchesQuery } from "@/lib/search";



export const PAGE_SIZE = 9;

interface Options {
  programs: Program[];
  schools: School[];
  defaultLevel?: ProgramLevel | null;
  defaultSchoolId?: string;
  defaultView?: ViewMode;
}

export function useProgramsFilter({
  programs,
  schools,
  defaultLevel = null,
  defaultSchoolId = "all",
  defaultView = "list",
}: Options) {
  const [search, setSearch] = useState("");
  const [schoolId, setSchoolId] = useState(defaultSchoolId);
  const [level, setLevel] = useState<ProgramLevel | null>(defaultLevel);
  const [view, setView] = useState<ViewMode>(defaultView);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const debouncedSearch = useDebounce(search, 250);


  const indexed = useMemo(
    () => programs.map((p) => ({ program: p, index: buildSearchIndex(p, schools) })),
    [programs, schools]
  );

  const filtered = useMemo(
    () =>
      indexed
        .filter(({ program: p, index }) => {
          if (schoolId !== "all" && p.schoolId !== schoolId) return false;
          if (level && p.level !== level) return false;
          return matchesQuery(debouncedSearch, index);
        })
        .map(({ program }) => program),
    [indexed, debouncedSearch, schoolId, level]
  );

  const visible = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);
  const hasMore = visibleCount < filtered.length;


  const manualSchool = useRef(false);
  const manualLevel = useRef(false);
  const schoolRef = useRef(schoolId);
  const levelRef = useRef(level);
  schoolRef.current = schoolId;
  levelRef.current = level;

  useEffect(() => {
    const q = debouncedSearch.trim();

    if (!q) {
      if (!manualSchool.current) setSchoolId(defaultSchoolId);
      if (!manualLevel.current) setLevel(defaultLevel);
      return;
    }

    const matches = indexed.filter(({ index }) => matchesQuery(q, index)).map(({ program }) => program);
    if (matches.length === 0) return;

    let nextSchool = schoolRef.current;
    if (!manualSchool.current) {
      const ids = Array.from(new Set(matches.map((p) => p.schoolId)));
      nextSchool = ids.length === 1 ? ids[0] : "all";
    }

    let nextLevel: ProgramLevel | null = levelRef.current;
    if (!manualLevel.current) {
      const pool = matches.filter((p) => nextSchool === "all" || p.schoolId === nextSchool);
      const lv = Array.from(new Set(pool.map((p) => p.level)));
      nextLevel = lv.length === 1 ? lv[0] : null;
    }

    if (nextSchool !== schoolRef.current) setSchoolId(nextSchool);
    if (nextLevel !== levelRef.current) setLevel(nextLevel);
    setVisibleCount(PAGE_SIZE);
  }, [debouncedSearch, indexed, defaultSchoolId, defaultLevel]);


  const hiddenMatches = useMemo(() => {
    const q = debouncedSearch.trim();
    if (!q || filtered.length > 0) return 0;
    return indexed.filter(({ index }) => matchesQuery(q, index)).length;
  }, [indexed, debouncedSearch, filtered.length]);


  const changeSearch = useCallback((v: string) => {
    setSearch(v);
    setVisibleCount(PAGE_SIZE);
  }, []);

  const changeSchool = useCallback((v: string) => {
    manualSchool.current = v !== "all";
    setSchoolId(v);
    setVisibleCount(PAGE_SIZE);
  }, []);

  const clearSchool = useCallback(() => {
    manualSchool.current = false;
    setSchoolId("all");
    setVisibleCount(PAGE_SIZE);
  }, []);

  const toggleLevel = useCallback((l: ProgramLevel) => {
    const next = levelRef.current === l ? null : l;
    manualLevel.current = next !== null;
    setLevel(next);
    setVisibleCount(PAGE_SIZE);
  }, []);

  const resetFilters = useCallback(() => {
    manualSchool.current = false;
    manualLevel.current = false;
    setSchoolId("all");
    setLevel(null);
    setVisibleCount(PAGE_SIZE);
  }, []);

  const loadMore = useCallback(() => setVisibleCount((c) => c + PAGE_SIZE), []);

  return {
    search,
    schoolId,
    level,
    view,
    setView,
    changeSearch,
    changeSchool,
    clearSchool,
    toggleLevel,
    resetFilters,
    loadMore,
    visible,
    total: filtered.length,
    hasMore,
    hiddenMatches,
  };
}
