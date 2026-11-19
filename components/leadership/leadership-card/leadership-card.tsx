import Image from "next/image";
import Link from "next/link";
import type { LeadershipMember } from "@/types/leadership-types";
import "@/components/leadership/leadership-card/leadership-card.css";

interface LeadershipCardProps {
  member: LeadershipMember;
  priority?: boolean;
}

const IMAGE_WIDTH = 600;
const IMAGE_HEIGHT = 720;

export default function LeadershipCard({ member, priority = false }: LeadershipCardProps) {
  return (
    <div className="leader_list">
      <figure>
        <Image
          src={member.image}
          alt={member.name}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          className="img-fluid w-100"
          sizes="(max-width: 575px) 50vw, (max-width: 1750px) 25vw, 450px"
          priority={priority}
        />
      </figure>
      <figcaption>
        <h4>{member.name}</h4>
        <p>{member.designation}</p>
      </figcaption>
      <Link
        href={`/leadership/${member.slug}`}
        className="leadership_links"
        aria-label={`${member.name}, ${member.designation}`}
      >
        {member.name}
      </Link>
    </div>
  );
}
