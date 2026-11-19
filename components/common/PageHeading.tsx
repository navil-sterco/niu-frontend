import type { ReactNode } from "react";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
  
  children?: ReactNode;
}

export default function PageHeading({ title, subtitle, className = "", children }: Props) {
  return (
    <section className={`common_head ${className}`.trim()}>
      <div className="container">
        <div className="common_title">
          <h1>{title}</h1>
          {subtitle && <blockquote>{subtitle}</blockquote>}
          {children}
        </div>
      </div>
    </section>
  );
}
