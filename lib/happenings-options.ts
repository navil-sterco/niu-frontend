import type { FilterOption, HappeningItem } from "@/types/happenings";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const byLabel = (a: FilterOption, b: FilterOption) => a.label.localeCompare(b.label);

export function deriveOptions(items: HappeningItem[]) {
  const schools = new Map<string, string>();
  const departments = new Map<string, { label: string; parents: Set<string> }>();
  const types = new Map<string, string>();
  const monthKeys = new Set<string>();
  const yearKeys = new Set<string>();

  for (const item of items) {
    for (const s of item.schools) schools.set(s.slug, s.title);
    for (const d of item.departments) {
      const entry = departments.get(d.slug) ?? { label: d.title, parents: new Set<string>() };
      for (const s of item.schools) entry.parents.add(s.slug); 
      departments.set(d.slug, entry);
    }
    if (item.eventType) types.set(item.eventType.slug, item.eventType.title);
    if (/^\d{4}-\d{2}-\d{2}$/.test(item.date)) {
      monthKeys.add(item.date.slice(0, 7));
      yearKeys.add(item.date.slice(0, 4));
    }
  }

  const multiYear = yearKeys.size > 1;
  const months: FilterOption[] = [...monthKeys]
    .sort()
    .reverse()
    .map((key) => {
      const [y, m] = key.split("-");
      return { value: key, label: multiYear ? `${MONTH_NAMES[Number(m) - 1]} ${y}` : MONTH_NAMES[Number(m) - 1] };
    });

  return {
    schools: [...schools].map(([value, label]) => ({ value, label })).sort(byLabel),
    departments: [...departments]
      .map(([value, e]) => ({ value, label: e.label, parents: [...e.parents] }))
      .sort(byLabel),
    types: [...types].map(([value, label]) => ({ value, label })).sort(byLabel),
    months,
    years: [...yearKeys].sort().reverse().map((y) => ({ value: y, label: y })),
  };
}
