import Link from "next/link";
import type { ElementType } from "react";
import parse, {
  attributesToProps,
  domToReact,
  Element,
  type DOMNode,
  type HTMLReactParserOptions,
} from "html-react-parser";
import {
  hasVisibleHtml,
  sanitizeCmsHtml,
} from "@/lib/common/sanitize-cms-html";
import "@/components/common/html-content.css";

export interface HtmlContentProps {
  html?: string | null;
  className?: string;
  as?: "div" | "span" | "section" | "article";

  prose?: boolean;
  wrap?: boolean;
}

export default function HtmlContent({
  html,
  className,
  as = "div",
  prose = false,
  wrap = true,
}: HtmlContentProps) {
  if (!hasVisibleHtml(html)) return null;

  const clean = sanitizeCmsHtml(html);
  if (!hasVisibleHtml(clean)) return null;

  const options: HTMLReactParserOptions = {
    replace(node) {
      if (!(node instanceof Element)) return undefined;

      if (node.name === "table") {
        return (
          <div className="html-content__table">
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

      if (node.name === "a") {
        const href = node.attribs.href;
        const isInternal =
          typeof href === "string" &&
          href.startsWith("/") &&
          !href.startsWith("//") &&
          node.attribs.target !== "_blank";

        if (isInternal) {
          return (
            <Link {...attributesToProps(node.attribs)} href={href}>
              {domToReact(node.children as DOMNode[], options)}
            </Link>
          );
        }
      }

      return undefined;
    },
  };

  const content = parse(clean, options);
  if (!wrap) return <>{content}</>;

  const Tag: ElementType = as;
  const classes = [
    "html-content",
    prose ? "html-content--prose" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classes}>{content}</Tag>;
}
