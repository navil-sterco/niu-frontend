"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useTransition, type FormEvent } from "react";
import type { FilterField, FilterValues } from "@/types/happenings";
import FilterSelect from "@/components/filters/FilterSelect";
import FilterToggle from "@/components/filters/FilterToggle";

interface Props {
  fields: FilterField[];
  values: FilterValues;
}


export default function FilterBar({ fields, values }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [draft, setDraft] = useState<FilterValues>(values);
  const [pending, startTransition] = useTransition();

  const hasApplied = Object.keys(values).length > 0;

  const navigate = (next: FilterValues) => {
    const params = new URLSearchParams();
    for (const f of fields) if (next[f.key]) params.set(f.key, next[f.key]);
    const qs = params.toString();
    startTransition(() => router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false }));
  };

  const change = (key: string, value: string) => {
    const next: FilterValues = { ...draft, [key]: value };

    for (const child of fields.filter((f) => f.dependsOn === key)) {
      const current = next[child.key];
      const option = child.options.find((o) => o.value === current);
      if (current && value && option?.parents?.length && !option.parents.includes(value)) next[child.key] = "";
    }
    setDraft(next);

    const allCleared = fields.every((f) => f.kind === "toggle" || !next[f.key]);
    if (!value && hasApplied && allCleared) navigate(next);
  };

  const optionsFor = (field: FilterField) => {
    if (!field.dependsOn) return field.options;
    const parent = draft[field.dependsOn];
    return parent ? field.options.filter((o) => !o.parents?.length || o.parents.includes(parent)) : field.options;
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    navigate(draft);
  };

  return (
    <form onSubmit={submit} noValidate aria-busy={pending}>
      {fields.map((field) =>
        field.kind === "toggle" ? (
          <FilterToggle
            key={field.key}
            label={field.label}
            value={draft[field.key] ?? field.options[0]?.value ?? ""}
            options={field.options}
            onChange={(v) => change(field.key, v)}
          />
        ) : (
          <FilterSelect
            key={field.key}
            id={`filter-${field.key}`}
            label={field.label}
            value={draft[field.key] ?? ""}
            options={optionsFor(field)}
            onChange={(v) => change(field.key, v)}
          />
        )
      )}
      <button type="submit" className="submit_btn" disabled={pending}>
        {pending ? "Applying…" : "Apply Filter"}
      </button>
    </form>
  );
}
