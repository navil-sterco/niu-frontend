import type { OverviewStat } from "@/types/overview-types";
import OverviewCounter from "@/components/overview/shared/overview-counter/overview-counter";
import OverviewText from "@/components/overview/shared/overview-text/overview-text";

interface OverviewStatsProps {
  stats?: OverviewStat[] | null;
}

export default function OverviewStats({ stats }: OverviewStatsProps) {
  if (!stats || stats.length === 0) return null;

  return (
    <ul>
      {stats.map((stat) => (
        <li key={stat.id}>
          <div className="counter">
            <OverviewCounter value={stat.value} suffix={stat.suffix} />
          </div>
          <p>
            <OverviewText text={stat.label} />
          </p>
        </li>
      ))}
    </ul>
  );
}
