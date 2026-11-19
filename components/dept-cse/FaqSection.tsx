"use client";

import { useId, useState } from "react";
import type { FaqData } from "@/types/department";


export default function FaqSection({ data }: { data: FaqData }) {
  const uid = useId();
  const [open, setOpen] = useState<Set<string>>(() => new Set(data.items[0] ? [data.items[0].id] : []));

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <section className="dept_faq">
      <div className="container">
        <div className="heading">
          <h5>{data.title}</h5>
        </div>

        <div className="accordion">
          {data.items.map((item) => {
            const isOpen = open.has(item.id);
            const headId = `${uid}-h-${item.id}`;
            const bodyId = `${uid}-b-${item.id}`;
            return (
              <div className="accordion-item" key={item.id}>
                <div className="accordion-header" id={headId}>
                  <button
                    className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={bodyId}
                    onClick={() => toggle(item.id)}
                  >
                    {item.question}
                  </button>
                </div>

                <div
                  id={bodyId}
                  role="region"
                  aria-labelledby={headId}
                  aria-hidden={!isOpen}
                  className={`faq_panel ${isOpen ? "is-open" : ""}`}
                >
                  <div className="faq_panel_inner">
                    <div className="accordion-body">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
