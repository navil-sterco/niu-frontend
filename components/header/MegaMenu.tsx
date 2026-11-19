import type { MegaMenuConfig } from "@/types/header";
import HeaderImage from "@/components/header/HeaderImage";
import SmartLink from "@/components/header/SmartLink";

export default function MegaMenu({ data }: { data: MegaMenuConfig }) {
  return (
    <div className="admsion_wrap">
      <figure>
        {data.image && <HeaderImage image={data.image} className="img-fluid w-100" />}
        <figcaption>
          <div className="top_menu">
            <div className="heading">
              {data.heading} {data.headingAccent && <span>{data.headingAccent}</span>}
            </div>

            <ul className="adm_menu">
              {data.links.map((l) => (
                <li key={l.id}>
                  <SmartLink href={l.href}>
                    <p>
                      {l.label} {l.accent && <span>{l.accent}</span>}
                    </p>
                    {data.arrowIcon && <HeaderImage image={data.arrowIcon} />}
                  </SmartLink>
                </li>
              ))}
            </ul>

            {data.actions.length > 0 && (
              <ul className="btn_group">
                {data.actions.map((a) => (
                  <li key={a.id}>
                    <SmartLink href={a.href} className={`btn_hovefct ${a.kind === "primary" ? "aply_btn" : "pdf_btn"}`}>
                      {a.icon && <HeaderImage image={a.icon} />} {a.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {data.bottomLinks.length > 0 && (
            <ul className="botm_menu">
              {data.bottomLinks.map((l) => (
                <li key={l.id}>
                  <SmartLink href={l.href}>{l.label}</SmartLink>
                </li>
              ))}
            </ul>
          )}
        </figcaption>
      </figure>
    </div>
  );
}
