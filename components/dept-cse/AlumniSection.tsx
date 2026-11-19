"use client";

import Link from "next/link";
import { useState } from "react";
import { A11y, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import type { AlumniData } from "@/types/department";
import { useFancybox } from "@/hooks/useFancybox";
import CounterStat from "./CounterStat";
import Reveal from "@/components/dept-cse/Reveal";
import SafeImage from "@/components/dept-cse/SafeImage";

export default function AlumniSection({ data }: { data: AlumniData }) {
  const [expanded, setExpanded] = useState(0);
  useFancybox("deptalumni-gallery");

  return (
    <section className="alumni_wrap deptcse_alumni">
      <div className="container max-container">
        <div className="alum_grid">
          <div className="alum_text">
            <Reveal className="alum_head">
              <h5>{data.eyebrow}</h5>
              <blockquote className="title_45">
                {data.title} {data.titleAccent && <span>{data.titleAccent}</span>}
              </blockquote>
              {data.description && <p>{data.description}</p>}
              <Link href={data.cta.href} className="load_more">
                <div className="line" />
                <p>{data.cta.label}</p>
              </Link>
            </Reveal>
            <CounterStat stat={data.stat} />
          </div>

          <div className="alumni_slidewrap">
            <Swiper
              className="hmalumni"
              modules={[A11y, Keyboard]}
              keyboard={{ enabled: true }}
              slidesPerView="auto"
              spaceBetween={16}
              grabCursor
              watchOverflow
              onSlideChange={(s) => setExpanded(s.activeIndex)}
            >
              {data.items.map((a, i) => (
                <SwiperSlide
                  key={a.id}
                  className={i === expanded ? "is-expanded" : undefined}
                  onClick={() => setExpanded(i)}
                >
                  <figure>
                    <SafeImage
                      src={a.photo.src}
                      alt={a.photo.alt || a.name}
                      width={a.photo.width}
                      height={a.photo.height}
                      sizes="(max-width: 767px) 80vw, 40vw"
                      className="img-fluid"
                    />
                    <figcaption>
                      <div className="capimg_grid">
                        <div className="studnt_info">
                          <SafeImage
                            src={data.quoteIcon.src}
                            alt=""
                            width={data.quoteIcon.width}
                            height={data.quoteIcon.height}
                            className="img-fluid"
                          />
                          <blockquote>“{a.quote}”</blockquote>
                          <div className="name_deg">
                            <h5>{a.name}</h5>
                            <ul>
                              <li>{a.course}</li>
                              {a.batch && <li>Batch {a.batch}</li>}
                            </ul>
                          </div>
                        </div>
                        <figure>
                          <SafeImage
                            src={a.thumb.src}
                            alt={a.thumb.alt || a.name}
                            width={a.thumb.width}
                            height={a.thumb.height}
                            className="img-fluid w-100"
                          />
                        </figure>
                      </div>

                      {a.videoUrl && (
                        <a
                          data-fancybox="deptalumni-gallery"
                          data-caption={a.name}
                          className="video_icon"
                          href={a.videoUrl}
                          aria-label={`Play ${a.name}'s video`}
                        >
                          <SafeImage
                            src={data.videoIcon.src}
                            alt=""
                            width={data.videoIcon.width}
                            height={data.videoIcon.height}
                          />
                        </a>
                      )}
                    </figcaption>
                  </figure>

                  <div className="alumni_detail">
                    <h5>{a.name}</h5>
                    <p>
                      {a.course} {a.batch && <><span>Batch</span> {a.batch}</>}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
