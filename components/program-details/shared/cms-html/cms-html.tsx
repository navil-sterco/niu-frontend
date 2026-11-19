import type { ElementType } from "react";
import parse, {
  attributesToProps,
  domToReact,
  Element,
  type DOMNode,
  type HTMLReactParserOptions,
} from "html-react-parser";
import {
  hasHtml,
  sanitizeCmsHtml,
} from "@/lib/program-details/program-details-utils";

interface CmsHtmlProps {
  html?: string | null;
  className?: string;
  as?: "div" | "span";
}

export default function CmsHtml({ html, className, as = "div" }: CmsHtmlProps) {
  if (!hasHtml(html)) return null;
  const clean = sanitizeCmsHtml(html ?? "");
  if (!hasHtml(clean)) return null;

  const Tag: ElementType = as;

  const options: HTMLReactParserOptions = {
    replace(node) {
      if (!(node instanceof Element)) return undefined;

      if (node.name === "table") {
        return (
          <div className="table-responsive">
            <table {...attributesToProps(node.attribs)}>
              {domToReact(node.children as DOMNode[], options)}
            </table>
          </div>
        );
      }

      if (node.name === "img") {
        return (
          <img
            {...attributesToProps(node.attribs)}
            alt={node.attribs.alt ?? ""}
            loading="lazy"
            decoding="async"
          />
        );
      }
      return undefined;
    },
  };

  return (
    <Tag className={["cms-html", className].filter(Boolean).join(" ")}>
      {parse(clean, options)}
    </Tag>
  );
}