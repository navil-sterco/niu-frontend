import type { HeaderConfig } from "@/types/header";
import HeaderImage from "@/components/header/HeaderImage";

export default function TollFree({ phone }: { phone: NonNullable<HeaderConfig["topBar"]>["phone"] }) {
  return (
    <div className="tolfree">
      <figure>
        <HeaderImage image={phone.icon} />
      </figure>
      <a href={phone.href}>{phone.label}</a>
    </div>
  );
}
