"use client";

import Image from "next/image";
import { useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import type { ContactImage } from "@/types/contact-types";

export interface ReachPanelView {
  id: string;
  title: string;
  image: ContactImage;
  content: ReactNode;
}

interface ContactReachPanelsProps {
  panels: ReachPanelView[];
  defaultActiveId?: string | null;
}

export default function ContactReachPanels({
  panels,
  defaultActiveId,
}: ContactReachPanelsProps) {
  const [activeId, setActiveId] = useState<string | undefined>(
    panels.some((panel) => panel.id === defaultActiveId)
      ? (defaultActiveId ?? undefined)
      : panels[0]?.id,
  );

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>, id: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveId(id);
    }
  };

  return (
    <div className="panel_wrap">
      {panels.map((panel) => {
        const isActive = panel.id === activeId;
        return (
          <div
            key={panel.id}
            className={isActive ? "panel active" : "panel"}
            role="button"
            tabIndex={0}
            aria-expanded={isActive}
            onClick={() => setActiveId(panel.id)}
            onKeyDown={(event) => onKeyDown(event, panel.id)}
          >
            <figure>
              <Image
                src={panel.image.src}
                alt={panel.image.alt}
                width={panel.image.width}
                height={panel.image.height}
                className="img-fluid w-100"
                sizes="(max-width: 991px) 100vw, 60vw"
              />
              <figcaption>
                <div
                  className="name_text"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div className="exp_wrap">
                    <h5>{panel.title}</h5>
                    {panel.content}
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        );
      })}
    </div>
  );
}
