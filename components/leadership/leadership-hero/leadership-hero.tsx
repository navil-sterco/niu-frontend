import Image from "next/image";
import type { LeadershipMember } from "@/types/leadership-types";
import CmsHtml from "@/components/leadership/shared/cms-html/cms-html";
import { hasHtml, hasText } from "@/lib/leadership/leadership-utils";
import "@/components/leadership/leadership-hero/leadership-hero.css";

interface LeadershipHeroProps {
  member: LeadershipMember;
  background: string;
  overlay: string;
}

export default function LeadershipHero({ member, background, overlay }: LeadershipHeroProps) {
  const hasIntro = hasText(member.introductionHeading) || hasHtml(member.introduction);
  const photo = member.heroImage ?? member.image;

  return (
    <section className="leader_details">
      <Image
        src={overlay}
        alt=""
        width={802}
        height={620}
        className="img-fluid leader_overlay"
        aria-hidden="true"
      />
      <figure>
        <Image
          src={background}
          alt=""
          width={1920}
          height={750}
          className="img-fluid w-100"
          priority
        />
        <figcaption>
          <div className="container-md">
            <div className="details_grid">
              <div className="leader_img">
                <Image
                  src={photo}
                  alt={member.name}
                  width={786}
                  height={980}
                  className="img-fluid w-100"
                  sizes="(max-width: 991px) 90vw, 45vw"
                  priority
                />
              </div>
              <div className="leader_cont">
                {hasIntro ? (
                  <>
                    {hasText(member.introductionHeading) && <h4>{member.introductionHeading}</h4>}
                    <CmsHtml html={member.introduction} />
                  </>
                ) : (
                  <>
                    <h4>{member.name}</h4>
                    <p>{member.designation}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
