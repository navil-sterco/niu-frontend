"use client";

import type {
  LevelCardData,
  ProgramLevel,
} from "@/types/program";

import LevelCard from "@/components/programs/LevelCard";

interface Props {
  levels: LevelCardData[];
  activeLevel: ProgramLevel | null;
  onToggle: (level: ProgramLevel) => void;
}

export default function LevelCards({
  levels,
  activeLevel,
  onToggle,
}: Props) {
  return (
    <div className="activity_wrapper_grp">
      {levels.map((level) => (
        <LevelCard
          key={level.id}
          data={level}
          active={activeLevel === level.id}
          onSelect={() => onToggle(level.id)}
        />
      ))}
    </div>
  );
}