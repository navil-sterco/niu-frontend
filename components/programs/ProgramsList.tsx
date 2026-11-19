import type { Program, School } from "@/types/program";
import LoadMoreButton from "@/components/programs/LoadMoreButton";
import ProgramCard from "@/components/programs/ProgramCard";

interface Props {
  programs: Program[]; 
  schools: School[];
  hasMore: boolean;
  onLoadMore: () => void;
  hiddenMatches?: number; 
  onResetFilters?: () => void;
}

export default function ProgramsList({
  programs,
  schools,
  hasMore,
  onLoadMore,
  hiddenMatches = 0,
  onResetFilters,
}: Props) {
  const groups = schools
    .map((school) => ({ school, items: programs.filter((p) => p.schoolId === school.id) }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="programs_schools">
      {groups.length === 0 && (
        <p className="programs_empty">
          {hiddenMatches > 0 ? (
            <>
              No programs found in the selected school / level, but {hiddenMatches} match
              {hiddenMatches > 1 ? "es were" : " was"} found elsewhere.{" "}
              <a
                href="#"
                style={{ textDecoration: "underline", color: "var(--color_46)" }}
                onClick={(e) => {
                  e.preventDefault();
                  onResetFilters?.();
                }}
              >
                Show all matches
              </a>
            </>
          ) : (
            "No programs found. Try a different search or filter."
          )}
        </p>
      )}

      {groups.map(({ school, items }) => (
        <div className="school_group" key={school.id}>
          <h4>{school.name}</h4>
          <div className="programs_grid_view">
            {items.map((p) => (
              <ProgramCard key={p.id} program={p} />
            ))}
          </div>
        </div>
      ))}

      {hasMore && <LoadMoreButton onClick={onLoadMore} />}
    </div>
  );
}
