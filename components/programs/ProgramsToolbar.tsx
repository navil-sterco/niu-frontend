import Image from "next/image";
import type { School, ViewMode } from "@/types/program";
interface Props {
  search: string;
  onSearch: (v: string) => void;
  onSearchBlur?: () => void;
  schools: School[];
  schoolId: string;
  onSchoolChange: (id: string) => void;
  onSchoolClear: () => void;
  view: ViewMode;
  onViewChange: (v: ViewMode) => void;
}

export default function ProgramsToolbar({
  search,
  onSearch,
  onSearchBlur,
  schools,
  schoolId,
  onSchoolChange,
  onSchoolClear,
  view,
  onViewChange,
}: Props) {
  const hasSchool = schoolId !== "all";

  return (
    <div className="view_toolbar">
      <div className="input_group">
        <input
          type="text"
          placeholder="Search by Program"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          onBlur={onSearchBlur}
          aria-label="Search by program"
        />
        <button type="button" aria-label="Search">
          <Image src="/images/programs-icons-3.svg" alt="icons" width={20} height={20} className="img-fluid" />
        </button>
      </div>

      <div className="form_group contact_dropdown select_wrap">
        <select
          className={`form-select custm_select ${hasSchool ? "" : "no_clear_icon"}`}
          aria-label="Filter by school"
          value={schoolId}
          onChange={(e) => onSchoolChange(e.target.value)}
        >
          <option value="all">All Schools</option>
          {schools.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
        {hasSchool && (
          <button type="button" className="select_clear_btn" onClick={onSchoolClear} aria-label="Clear school filter" />
        )}
      </div>

      <button
        type="button"
        className={`view_btn ${view === "grid" ? "active" : ""}`}
        onClick={() => onViewChange("grid")}
        aria-label="Row view"
      >
        <Image src="/images/programs-icons-1.svg" alt="icons" width={20} height={20} className="img-fluid" />
      </button>
      <button
        type="button"
        className={`view_btn ${view === "list" ? "active" : ""}`}
        onClick={() => onViewChange("list")}
        aria-label="Card view"
      >
        <Image src="/images/programs-icons-2.svg" alt="icons" width={20} height={20} className="img-fluid" />
      </button>
    </div>
  );
}
