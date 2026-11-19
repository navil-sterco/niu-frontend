"use client";

import { useState, type KeyboardEvent } from "react";
import type { LabItem } from "@/types/department";
import SafeImage from "@/components/dept-cse/SafeImage";

interface Props {
  labs: LabItem[];
  defaultActiveId?: string;
}

export default function LabPanels({ labs, defaultActiveId }: Props) {
  const initial = labs.some((l) => l.id === defaultActiveId) ? defaultActiveId : labs[Math.floor(labs.length / 2)]?.id;
  const [active, setActive] = useState(initial);

  const onKey = (e: KeyboardEvent<HTMLDivElement>, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(id);
    }
  };

  return (
    <div className="deptlab_wrap">
      {labs.map((lab) => {
        const isActive = lab.id === active;
        return (
          <div
            key={lab.id}
            className={`panel ${isActive ? "active" : ""}`}
            role="button"
            tabIndex={0}
            aria-pressed={isActive}
            aria-label={lab.name}
            onMouseEnter={() => setActive(lab.id)}
            onFocus={() => setActive(lab.id)}
            onClick={() => setActive(lab.id)}
            onKeyDown={(e) => onKey(e, lab.id)}
          >
            <figure>
              <SafeImage
                src={lab.image.src}
                alt={lab.image.alt || lab.name}
                width={lab.image.width}
                height={lab.image.height}
                sizes="(max-width: 991px) 100vw, 30vw"
                className="img-fluid w-100"
              />
              <figcaption>
                <h5>{lab.name}</h5>
              </figcaption>
            </figure>
          </div>
        );
      })}
    </div>
  );
}
