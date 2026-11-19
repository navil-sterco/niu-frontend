
"use client";

import { useRouter } from "next/navigation";

import type { DepartmentOption } from "@/types/department";

interface Props {
  label: string;
  options: DepartmentOption[];
  currentSlug: string;
  currentName: string;
}

export default function DepartmentSwitcher({
  label,
  options,
  currentSlug,
  currentName,
}: Props) {
  const router = useRouter();

  const list = options.some(
    (o) => o.slug === currentSlug
  )
    ? options
    : [
        {
          slug: currentSlug,
          name: currentName,
        },
        ...options,
      ];

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedSlug = e.target.value;

    if (!selectedSlug) return;

    router.push(
      `/departments?slug=${encodeURIComponent(selectedSlug)}`
    );
  };

  return (
    <div className="deptcsedrop_wrap">
      <div className="container-md">
        <div className="cse_dropdown">

          <p>{label}</p>

          <div className="form_group">

            <label
              htmlFor="dept-switcher"
              className="visually-hidden"
            >
              {label}
            </label>

            <select
              id="dept-switcher"
              className="form-select custm_select"
              value={currentSlug}
              onChange={handleChange}
            >
              {list.map((o) => (
                <option
                  key={o.slug}
                  value={o.slug}
                >
                  {o.name}
                </option>
              ))}
            </select>

          </div>
        </div>
      </div>
    </div>
  );
}
