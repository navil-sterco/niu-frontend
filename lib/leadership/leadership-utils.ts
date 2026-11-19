import type { LeadershipSocialLinks } from "@/types/leadership-types";


const ENTITIES: Record<string, string> = {
  "&nbsp;": " ",
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&rsquo;": "’",
  "&lsquo;": "‘",
};

export function stripHtml(html?: string | null): string {
  if (!html) return "";
  return html
    .replace(/<\/(p|div|h[1-6]|li)>|<br\s*\/?>/gi, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/&(nbsp|amp|lt|gt|quot|#39|rsquo|lsquo);/g, (m) => ENTITIES[m] ?? m)
    .replace(/\s+/g, " ")
    .trim();
}

export function hasText(value?: string | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function hasHtml(html?: string | null): boolean {
  if (!hasText(html)) return false;
  return stripHtml(html).length > 0 || /<img\b/i.test(html);
}

export function hasSocialLinks(links?: LeadershipSocialLinks | null): boolean {
  if (!links) return false;
  return [links.linkedin, links.facebook, links.instagram, links.x].some(hasText);
}

export type VideoEmbed =
  | { kind: "file"; src: string }
  | { kind: "iframe"; src: string };

export function getVideoEmbed(rawUrl: string): VideoEmbed {
  const url = rawUrl.trim();
  if (url.startsWith("/")) return { kind: "file", src: url };

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = parsed.pathname.slice(1);
      if (id) return { kind: "iframe", src: youtube(id) };
    }
    if (host.endsWith("youtube.com")) {
      const id =
        parsed.searchParams.get("v") ??
        parsed.pathname.match(/^\/(?:embed|shorts)\/([\w-]+)/)?.[1];
      if (id) return { kind: "iframe", src: youtube(id) };
    }
    if (host.endsWith("vimeo.com")) {
      const id = parsed.pathname.match(/\/(\d+)/)?.[1];
      if (id) {
        return { kind: "iframe", src: `https://player.vimeo.com/video/${id}?autoplay=1` };
      }
    }
  } catch {
  }
  return { kind: "file", src: url };
}

function youtube(id: string): string {
  return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0`;
}
