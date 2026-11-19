"use client";

import { useState } from "react";
import type { LevelCardData } from "@/types/program";

interface Props {
  data: LevelCardData;
  active: boolean;
  onSelect: () => void;
}

export default function LevelCard({
  data,
  active,
  onSelect,
}: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`activity_card ${active ? "active" : ""}`}>
      {!failed && data.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={data.image}
          alt={data.title}
          className="img-fluid w-100 level_img"
          onError={() => setFailed(true)}
        />
      )}

      <div className="activity_content">
        <h4>{data.title}</h4>
      </div>

      <button
        type="button"
        className="program_links"
        onClick={onSelect}
        aria-pressed={active}
      >
        {data.title}
      </button>
    </div>
  );
}