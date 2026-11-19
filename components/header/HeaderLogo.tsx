import type { HeaderConfig } from "@/types/header";
import HeaderImage from "@/components/header/HeaderImage";
import SmartLink from "@/components/header/SmartLink";

export default function HeaderLogo({ brand }: { brand: HeaderConfig["brand"] }) {
  return (
    <div className="navbar-brand">
      <SmartLink href={brand.href} className="main_logo" aria-label={brand.logo.color.alt || "Home"}>
        <HeaderImage image={brand.logo.color} className="img-fluid color_logo" loading="eager" fetchPriority="high" />
        <HeaderImage image={brand.logo.white} className="img-fluid white_logo" loading="eager" fetchPriority="high" />
      </SmartLink>
      <SmartLink href={brand.naac.href} className="nac_logo" aria-label={brand.naac.color.alt || "NAAC"}>
        <HeaderImage image={brand.naac.color} className="img-fluid color_logo" loading="eager" />
        <HeaderImage image={brand.naac.white} className="img-fluid white_logo" loading="eager" />
      </SmartLink>
    </div>
  );
}
