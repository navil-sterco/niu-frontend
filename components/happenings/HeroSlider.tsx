"use client";

import Link from "next/link";
import { getImageProps } from "next/image";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { A11y, Autoplay, EffectFade, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { formatDate } from "@/lib/format";
import { isRemoteImage } from "@/lib/images";
import type { HeroSlide } from "@/types/happenings";

const RING_LENGTH = 88; 
const AUTOPLAY_MS = 6000;

function HeroPicture({ slide, priority }: { slide: HeroSlide; priority: boolean }) {
  const d = slide.desktopImage;
  const m = slide.mobileImage;
  const desktop = getImageProps({
    src: d.src,
    alt: d.alt,
    width: d.width,
    height: d.height,
    sizes: "100vw",
    quality: 80,
    unoptimized: isRemoteImage(d.src), 
  });
  const mobile = getImageProps({
    src: m.src,
    alt: m.alt || d.alt,
    width: m.width,
    height: m.height,
    sizes: "100vw",
    quality: 80,
    unoptimized: isRemoteImage(m.src),
    loading: priority ? "eager" : "lazy",
    fetchPriority: priority ? "high" : "auto",
  });

  return (
    <picture>
      <source media="(min-width:992px)" srcSet={desktop.props.srcSet ?? desktop.props.src} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img {...mobile.props} className="img-fluid w-100" alt={m.alt || d.alt} />
    </picture>
  );
}

export default function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const ringRef = useRef<SVGCircleElement | null>(null);
  const multiple = slides.length > 1;

  return (
    <section className="news_banner">
      <Swiper
        className="home_slide"
        modules={[Autoplay, EffectFade, A11y, Keyboard]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        rewind
        keyboard={{ enabled: true }}
        allowTouchMove={multiple}
        autoplay={multiple ? { delay: AUTOPLAY_MS, disableOnInteraction: false } : false}
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={(s) => setActive(s.realIndex)}
        onAutoplayTimeLeft={(_s, _t, progress) => {
          if (ringRef.current) ringRef.current.style.strokeDashoffset = String(RING_LENGTH * progress);
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.id}>
            <HeroPicture slide={slide} priority={i === 0} />
            <div className="caption_wrap">
              <div className="container">
                <div className="col-lg-3">
                  <div className="caption">
                    <div className="date">
                      {slide.date && <time dateTime={slide.date}>{formatDate(slide.date)}</time>}
                      <span>{slide.tag}</span>
                    </div>
                    <div className="heading">{slide.heading}</div>
                    <div className="read_more">
                      <Link href={slide.href}>{slide.ctaLabel}</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {multiple && (
          <div slot="container-end" className="custom-pagination" role="tablist" aria-label="Banner slides">
            {slides.map((slide, i) => {
              const isActive = i === active;
              return (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`swiper-pagination-bullet ${isActive ? "swiper-pagination-bullet-active" : ""}`}
                  onClick={() => swiperRef.current?.slideTo(i)}
                >
                  {i + 1}
                  {isActive && (
                    <svg className="progress-ring" viewBox="0 0 30 30" aria-hidden="true">
                      <circle ref={ringRef} className="progress-ring__circle" cx="15" cy="15" r="14" style={{ strokeDashoffset: RING_LENGTH }} />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </Swiper>
    </section>
  );
}
