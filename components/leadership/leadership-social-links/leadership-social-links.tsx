import Image from "next/image";
import type { ReactNode } from "react";
import type { LeadershipSocialLinks } from "@/types/leadership-types";
import { hasSocialLinks, hasText } from "@/lib/leadership/leadership-utils";
import "@/components/leadership/leadership-social-links/leadership-social-links.css";

interface LeadershipSocialLinksProps {
  links?: LeadershipSocialLinks | null;
  name: string;
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.9.4-1.7 1.8-1.7h1.6V3.8S15.6 3.5 14.3 3.5c-2.7 0-4.4 1.6-4.4 4.5v2.5H7v3.3h2.9V22h3.6z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

interface SocialItem {
  key: string;
  label: string;
  href?: string | null;
  icon: ReactNode;
}

export default function LeadershipSocialLinks({ links, name }: LeadershipSocialLinksProps) {
  if (!hasSocialLinks(links)) return null;

  const items: SocialItem[] = [
    {
      key: "linkedin",
      label: "LinkedIn",
      href: links?.linkedin,
      icon: <Image src="/images/in.svg" alt="" width={20} height={20} />,
    },
    { key: "facebook", label: "Facebook", href: links?.facebook, icon: <FacebookIcon /> },
    { key: "instagram", label: "Instagram", href: links?.instagram, icon: <InstagramIcon /> },
    {
      key: "x",
      label: "X",
      href: links?.x,
      icon: <Image src="/images/x.svg" alt="" width={20} height={20} />,
    },
  ];

  return (
    <div className="leader_social">
      {items.map(({ key, label, href, icon }) => {
        if (!hasText(href)) return null;
        const isPlaceholder = href.startsWith("#");
        return (
          <a
            key={key}
            href={href}
            aria-label={`${name} on ${label}`}
            {...(isPlaceholder ? {} : { target: "_blank", rel: "noopener noreferrer" })}
          >
            {icon}
          </a>
        );
      })}
    </div>
  );
}
