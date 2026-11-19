import type { LeadershipMember } from "@/types/leadership-types";
import LeadershipSocialLinks from "@/components/leadership/leadership-social-links/leadership-social-links";
import "@/components/leadership/leadership-profile/leadership-profile.css";

interface LeadershipProfileProps {
  member: LeadershipMember;
}

export default function LeadershipProfile({ member }: LeadershipProfileProps) {
  return (
    <div className="leader_name">
      <h4>{member.name}</h4>
      <p>{member.designation}</p>
      <LeadershipSocialLinks links={member.socialLinks} name={member.name} />
    </div>
  );
}
