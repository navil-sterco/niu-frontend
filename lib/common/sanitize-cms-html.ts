import sanitizeHtml from "sanitize-html";

const ALLOWED_TAGS = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "div",
  "span",
  "br",
  "hr",
  "strong",
  "b",
  "em",
  "i",
  "u",
  "s",
  "sup",
  "sub",
  "small",
  "mark",
  "ul",
  "ol",
  "li",
  "dl",
  "dt",
  "dd",
  "blockquote",
  "a",
  "pre",
  "code",
  "table",
  "thead",
  "tbody",
  "tfoot",
  "tr",
  "th",
  "td",
  "caption",
  "colgroup",
  "col",
  "img",
  "figure",
  "figcaption",
  "video",
  "source",
  "iframe",
];

export function sanitizeCmsHtml(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: ALLOWED_TAGS,
    allowedAttributes: {
      "*": ["class", "style", "title", "dir", "lang"],
      a: ["href", "target", "rel", "title", "class"],
      img: ["src", "srcset", "alt", "width", "height", "title", "class"],
      th: ["colspan", "rowspan", "scope", "class", "style"],
      td: ["colspan", "rowspan", "class", "style"],
      col: ["span", "width"],
      colgroup: ["span"],
      video: [
        "src",
        "controls",
        "poster",
        "width",
        "height",
        "preload",
        "class",
      ],
      source: ["src", "type"],
      iframe: [
        "src",
        "width",
        "height",
        "title",
        "allow",
        "allowfullscreen",
        "loading",
        "class",
      ],
    },
    allowedStyles: {
      "*": {
        "text-align": [/^(left|right|center|justify)$/],
        "font-weight": [/^(normal|bold|[1-9]00)$/],
        "font-style": [/^(normal|italic)$/],
        "text-decoration": [/^(none|underline|line-through)$/],
      },
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    allowedSchemesByTag: {
      img: ["http", "https"],
      video: ["http", "https"],
      source: ["http", "https"],
    },
    allowProtocolRelative: false,
    allowedIframeHostnames: [
      "www.youtube.com",
      "www.youtube-nocookie.com",
      "player.vimeo.com",
      "www.google.com",
    ],
    exclusiveFilter: (frame) =>
      (frame.tag === "iframe" || frame.tag === "img") && !frame.attribs.src,
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

const ENTITIES: Record<string, string> = {
  "&nbsp;": " ",
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
};

export function stripHtml(html?: string | null): string {
  if (!html) return "";
  return html
    .replace(/<\/(p|div|h[1-6]|li|tr|td|th)>|<br\s*\/?>/gi, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/&(nbsp|amp|lt|gt|quot|#39);/g, (m) => ENTITIES[m] ?? m)
    .replace(/\s+/g, " ")
    .trim();
}

export function hasVisibleHtml(html?: string | null): html is string {
  if (typeof html !== "string" || html.trim().length === 0) return false;
  return (
    stripHtml(html).length > 0 || /<(img|table|iframe|video)\b/i.test(html)
  );
}
