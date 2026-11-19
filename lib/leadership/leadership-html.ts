import sanitizeHtml from "sanitize-html";


export function sanitizeCmsHtml(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: [
      "h2", "h3", "h4", "h5", "h6", "h1",
      "p", "div", "span", "br", "hr",
      "strong", "b", "em", "i", "u", "sup", "sub",
      "ul", "ol", "li", "blockquote", "a", "img",
    ],
    allowedAttributes: {
      "*": ["class"],
      a: ["href", "target", "rel", "title"],
      img: ["src", "alt", "width", "height"],
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
