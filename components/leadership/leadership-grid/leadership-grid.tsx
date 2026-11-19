import type { LeadershipMember } from "@/types/leadership-types";
import LeadershipCard from "@/components/leadership/leadership-card/leadership-card";
import "@/components/leadership/leadership-grid/leadership-grid.css";

interface LeadershipGridProps {
  members: LeadershipMember[];
}

export default function LeadershipGrid({ members }: LeadershipGridProps) {
  if (members.length === 0) return null;

  return (
    <div className="leader_grid">
      {members.map((member, index) => (
        <LeadershipCard key={member.id} member={member} priority={index < 3} />
      ))}
    </div>
  );
}
