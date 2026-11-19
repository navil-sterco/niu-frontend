import type { OverviewTextValue } from "@/types/overview-types";

export function hasText(value?: string | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function hasTextValue(value?: OverviewTextValue | null): boolean {
  if (!value) return false;
  if (typeof value === "string") return hasText(value);
  return value.some((segment) => hasText(segment.text));
}

export function stripHtml(html?: string | null): string {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function hasHtml(html?: string | null): boolean {
  return hasText(html) && (stripHtml(html).length > 0 || /<img\b/i.test(html));
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
      if (id)
        return {
          kind: "iframe",
          src: `https://player.vimeo.com/video/${id}?autoplay=1`,
        };
    }
  } catch {}
  return { kind: "file", src: url };
}

function youtube(id: string): string {
  return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0`;
}
