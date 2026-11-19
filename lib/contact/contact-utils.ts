export function hasText(value?: string | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
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

export function isGoogleMapsEmbed(url?: string | null): url is string {
  if (!hasText(url)) return false;
  try {
    const parsed = new URL(url);
    return (
      parsed.protocol === "https:" &&
      (parsed.hostname === "www.google.com" ||
        parsed.hostname === "google.com") &&
      parsed.pathname.startsWith("/maps/embed")
    );
  } catch {
    return false;
  }
}
