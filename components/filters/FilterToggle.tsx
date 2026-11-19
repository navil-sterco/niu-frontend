import type { FilterOption } from "@/types/happenings";

interface Props {
  label: string;
  value: string;
  options: FilterOption[];
  onChange: (value: string) => void;
}

export default function FilterToggle({ label, value, options, onChange }: Props) {
  return (
    <div className="filter_toggle" role="group" aria-label={label}>
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          className={value === o.value ? "active" : undefined}
          aria-pressed={value === o.value}
          onClick={() => onChange(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
