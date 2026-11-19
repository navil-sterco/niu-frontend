import sanitizeHtml from "sanitize-html";

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

/** Plain text from an HTML string (used for emptiness checks and metadata). */
export function stripHtml(html?: string | null): string {
  if (!html) return "";
  return html
    .replace(/<\/(p|div|h[1-6]|li|tr|td|th)>|<br\s*\/?>/gi, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/&(nbsp|amp|lt|gt|quot|#39|rsquo|lsquo);/g, (m) => ENTITIES[m] ?? m)
    .replace(/\s+/g, " ")
    .trim();
}

export function hasText(value?: string | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function cleanText(value?: string | null): string | null {
  return hasText(value) ? value.trim() : null;
}

/** True when the HTML renders something visible (text, image or table). */
export function hasHtml(html?: string | null): boolean {
  if (!hasText(html)) return false;
  return stripHtml(html).length > 0 || /<(img|table)\b/i.test(html);
}

export function hasItems<T>(items?: readonly T[] | null): items is readonly T[] {
  return Array.isArray(items) && items.length > 0;
}

/**
 * Server-side sanitizer for CMS HTML. html-react-parser does NOT sanitize.
 * - h1 becomes h2 so the page keeps a single <h1>
 * - ids are dropped so CMS content can never create duplicate section IDs
 */
export function sanitizeCmsHtml(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: [
      "h1", "h2", "h3", "h4", "h5", "h6",
      "p", "div", "span", "br", "hr",
      "strong", "b", "em", "i", "u", "s", "sup", "sub", "small",
      "ul", "ol", "li", "blockquote", "a",
      "table", "thead", "tbody", "tfoot", "tr", "th", "td", "caption", "colgroup", "col",
      "img", "figure", "figcaption",
    ],
    allowedAttributes: {
      "*": ["class"],
      a: ["href", "target", "rel", "title"],
      img: ["src", "alt", "width", "height", "title"],
      th: ["colspan", "rowspan", "scope"],
      td: ["colspan", "rowspan"],
      col: ["span"],
      colgroup: ["span"],
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    allowedSchemesByTag: { img: ["http", "https"] },
    allowProtocolRelative: false,
    transformTags: {
      h1: "h2",
      a: (tagName, attribs) => ({
        tagName,
        attribs:
          attribs.target === "_blank"
            ? { ...attribs, rel: "noopener noreferrer" }
            : attribs,
      }),
    },
  });
}