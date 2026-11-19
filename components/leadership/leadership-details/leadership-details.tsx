import type {
  LeadershipAssets,
  LeadershipMember,
  LeadershipPageContent,
} from "@/types/leadership-types";
import LeadershipHeading from "@/components/leadership/leadership-heading/leadership-heading";
import LeadershipHero from "@/components/leadership/leadership-hero/leadership-hero";
import LeadershipBiography from "@/components/leadership/leadership-biography/leadership-biography";
import LeadershipProfile from "@/components/leadership/leadership-profile/leadership-profile";
import LeadershipVideo from "@/components/leadership/leadership-video/leadership-video";
import { hasHtml, hasSocialLinks, hasText } from "@/lib/leadership/leadership-utils";
import "@/components/leadership/shared/leadership-shared.css";
import "@/components/leadership/leadership-details/leadership-details.css";

interface LeadershipDetailsProps {
  member: LeadershipMember;
  content: LeadershipPageContent;
  assets: LeadershipAssets;
}

export default function LeadershipDetails({ member, content, assets }: LeadershipDetailsProps) {
  const hasBiography = hasHtml(member.biography);
  const showVideo = hasText(member.videoUrl) || hasText(member.videoThumbnail);
  const showBottom = hasBiography || showVideo || hasSocialLinks(member.socialLinks);

  return (
    <div className="ld-page">
      <LeadershipHeading eyebrow={content.eyebrow} title={content.title} />
      <LeadershipHero
        member={member}
        background={assets.detailsBackground}
        overlay={assets.detailsOverlay}
      />

      {showBottom && (
        <section className="leader_btm">
          <div className="container">
            <div className={showVideo ? "ldrbtm_grid" : "ldrbtm_grid ldrbtm_grid--single"}>
              <div className="ldrbtm_cont">
                <LeadershipBiography html={member.biography} />
                <LeadershipProfile member={member} />
              </div>
              {showVideo && (
                <LeadershipVideo
                  title={member.name}
                  videoUrl={member.videoUrl}
                  thumbnail={member.videoThumbnail}
                  playIcon={assets.videoPlayIcon}
                />
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
