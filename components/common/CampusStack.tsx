
"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "@/styles/campus-life.css";

gsap.registerPlugin(ScrollTrigger);

export interface CampusStat {
  value: string | number;
  suffix?: string;
  label: string;
}

export interface CampusMenuItem {
  label: string;
  href: string;
}

export interface CampusSlide {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  menuItems: CampusMenuItem[];
  imageWidth?: number;
  imageHeight?: number;
}

export interface CampusStackProps {
  sectionTitle: string;
  heading: ReactNode;
  learnMoreText?: string;
  learnMoreHref?: string;
  stats: CampusStat[];
  description: string;
  slides: CampusSlide[];
}

export default function CampusStack({
  sectionTitle,
  heading,
  learnMoreText = "Learn More",
  learnMoreHref = "#0",
  stats,
  description,
  slides,
}: CampusStackProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || slides.length === 0) {
      return;
    }

    const ctx = gsap.context(() => {
      const head = section.querySelector<HTMLElement>(".heading_grid");

      const wrappers = gsap.utils.toArray<HTMLElement>(
        ".campus_wrapper",
        section
      );

      const cards = wrappers.map((wrapper) =>
        wrapper.querySelector<HTMLElement>(".campus_item")
      );

      if (!head || wrappers.length === 0) {
        return;
      }

      ScrollTrigger.create({
        trigger: head,
        start: "top 150px",
        endTrigger: section,
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      const getHeaderOffset = () => {
        return head.getBoundingClientRect().height - 20;
      };

      wrappers.forEach((wrapper, index) => {
        const card = cards[index];
        const isLast = index === wrappers.length - 1;

        if (!card) {
          return;
        }

        const getCardTopOffset = () => {
          return getHeaderOffset() + index * 50;
        };

        ScrollTrigger.create({
          trigger: wrapper,
          start: () => `top ${getCardTopOffset()}px`,
          endTrigger: section,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });

        if (!isLast) {
          gsap.to(card, {
            scale: 1 - (wrappers.length - index) * 0.04,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: wrappers[index + 1],
              start: "top bottom",
              end: () =>
                `top ${getHeaderOffset() + (index + 1) * 20}px`,
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        }
      });
    }, section);

    const refreshScrollTrigger = () => {
      ScrollTrigger.refresh();
    };

    const images = section.querySelectorAll("img");

    images.forEach((image) => {
      if (!image.complete) {
        image.addEventListener("load", refreshScrollTrigger);
        image.addEventListener("error", refreshScrollTrigger);
      }
    });

    window.addEventListener("load", refreshScrollTrigger);

    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("load", refreshScrollTrigger);

      images.forEach((image) => {
        image.removeEventListener("load", refreshScrollTrigger);
        image.removeEventListener("error", refreshScrollTrigger);
      });

      ctx.revert();
    };
  }, [slides.length]);

  return (
    <section className="campus_life" ref={sectionRef}>
      <div className="container">
        <div className="heading_grid">
          <div
            className="life_heading"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h5 className="title_24">{sectionTitle}</h5>

            <blockquote className="title_45">{heading}</blockquote>

            <a href={learnMoreHref} className="load_more">
              <div className="line" />
              <p>{learnMoreText}</p>
            </a>
          </div>

          <div
            className="life_fact"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="fact_wrap">
              {stats.map((stat, index) => (
                <div
                  className="counter_wrap"
                  key={`${stat.label}-${index}`}
                >
                  <div
                    className="counter"
                    data-count="10"
                    data-target={stat.value}
                  >
                    <span className="num">{stat.value}</span>
                    {stat.suffix && <sup>{stat.suffix}</sup>}
                  </div>

                  <p>{stat.label}</p>
                </div>
              ))}
            </div>

            <p>{description}</p>
          </div>
        </div>
      </div>

      {slides.map((slide) => (
        <div
          className="campus_wrapper"
          data-slide={slide.id}
          key={slide.id}
        >
          <div className="campus_item">
            <figure>
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                width={slide.imageWidth ?? 1920}
                height={slide.imageHeight ?? 900}
                sizes="100vw"
                className="img-fluid w-100"
              />

              <figcaption>
                <div className="container">
                  <div className="caption_grid">
                    <div
                      className="caption"
                      data-aos="fade-up"
                      data-aos-duration="800"
                    >
                      <h5>{slide.title}</h5>
                      <p>{slide.description}</p>
                    </div>

                    <div className="caption_menu">
                      <ul>
                        {slide.menuItems.map((item, index) => (
                          <li key={`${item.label}-${index}`}>
                            <a href={item.href}>{item.label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      ))}
    </section>
  );
}
