import type { FilterOption } from "@/types/happenings";

interface Props {
  id: string;
  label: string; 
  value: string;
  options: FilterOption[];
  onChange: (value: string) => void;
}

export default function FilterSelect({ id, label, value, options, onChange }: Props) {
  const empty = options.length === 0;

  return (
    <div className={`form_group contact_dropdown select_wrap ${empty ? "is-empty" : ""}`.trim()}>
      <select
        id={id}
        className={`form-select custm_select ${value ? "" : "no_clear_icon"}`}
        aria-label={label}
        value={value}
        disabled={empty}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{label}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>

      {value && (
        <button type="button" className="select_clear_btn" aria-label={`Clear ${label}`} onClick={() => onChange("")}>
          <svg viewBox="0 0 12 12" aria-hidden="true">
            <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
