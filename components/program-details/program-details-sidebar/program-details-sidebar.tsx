import type { ProgramSidebar } from "@/types/program-details";
import ProgramImageView from "@/components/program-details/shared/program-image/program-image";
import ProgramLink from "@/components/program-details/shared/program-link/program-link";
import { hasItems } from "@/lib/program-details/program-details-utils";
import "@/components/program-details/program-details-sidebar/program-details-sidebar.css";

interface ProgramDetailsSidebarProps {
  sidebar: ProgramSidebar;
}

export default function ProgramDetailsSidebar({ sidebar }: ProgramDetailsSidebarProps) {
  const facts = sidebar.facts ?? [];
  const hasButtons = Boolean(sidebar.applyLink || sidebar.brochureLink);

  return (
    <aside className="prog_sticky" aria-label="Program summary">
      <div className="prog_bx">
        {sidebar.banner && (
          <figure>
            <ProgramImageView image={sidebar.banner} className="img-fluid w-100" priority />
            {sidebar.badge && (
              <figcaption>
                <ProgramImageView image={sidebar.badge.image} className="img-fluid nba_icons" />
                <p>{sidebar.badge.text}</p>
              </figcaption>
            )}
          </figure>
        )}

        {hasItems(facts) && (
          <div className="prog_bx_contents">
            {facts.map((fact) => (
              <div className="prog_bx_grp" key={fact.id}>
                {fact.icon && (
                  <figure>
                    <ProgramImageView image={fact.icon} className="img-fluid w-100" />
                  </figure>
                )}
                <div className="prog_list">
                  <h4>{fact.value}</h4>
                  <p>{fact.label}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {hasButtons && (
          <div className="sticky_btn">
            {sidebar.applyLink && (
              <ProgramLink link={sidebar.applyLink} className="apply-btn" />
            )}
            {sidebar.brochureLink && (
              <ProgramLink link={sidebar.brochureLink} className="down-btn">
                <ProgramImageView image={sidebar.brochureIcon} className="img-fluid" />
                {sidebar.brochureLink.label}
              </ProgramLink>
            )}
          </div>
        )}
      </div>
    </aside>
  );
}