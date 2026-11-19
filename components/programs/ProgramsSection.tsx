"use client";

import { useRef } from "react";
import type { LevelCardData, Program, School } from "@/types/program";
import { useProgramsFilter } from "@/hooks/useProgramsFilter";
import LevelCards from "@/components/programs/LevelCards";
import ProgramsList from "@/components/programs/ProgramsList";
import ProgramsToolbar from "@/components/programs/ProgramsToolbar";

interface Props {
  programs: Program[];
  schools: School[];
  levels: LevelCardData[];
}

export default function ProgramsSection({ programs, schools, levels }: Props) {
  const f = useProgramsFilter({
    programs,
    schools,
    defaultLevel: null, 
    defaultSchoolId: "all", 
    defaultView: "list",
  });

  const sectionRef = useRef<HTMLElement>(null);
  const hasScrolled = useRef(false);

  const scrollToSection = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    sectionRef.current?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  
  const handleSearch = (value: string) => {
    f.changeSearch(value);

    if (!value.trim()) {
      hasScrolled.current = false;
      return;
    }
    if (hasScrolled.current) return;
    hasScrolled.current = true;
    scrollToSection();
  };

  const handleSchoolChange = (id: string) => {
    f.changeSchool(id);
    scrollToSection();
  };

  return (
    <section className="programs-sec" ref={sectionRef}>
      <div className="container">
        <div className="programs_views">
          <ProgramsToolbar
            search={f.search}
            onSearch={handleSearch}
            onSearchBlur={() => (hasScrolled.current = false)}
            schools={schools}
            schoolId={f.schoolId}
            onSchoolChange={handleSchoolChange}
            onSchoolClear={f.clearSchool}
            view={f.view}
            onViewChange={f.setView}
          />

          <div className={`activity_wrapper ${f.view === "grid" ? "grid_view" : "list_view"}`} id="activityWrapper">
            <LevelCards levels={levels} activeLevel={f.level} onToggle={f.toggleLevel} />
            <ProgramsList
              programs={f.visible}
              schools={schools}
              hasMore={f.hasMore}
              onLoadMore={f.loadMore}
              hiddenMatches={f.hiddenMatches}
              onResetFilters={f.resetFilters}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
