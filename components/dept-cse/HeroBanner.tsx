
"use client";

import { getImageProps } from "next/image";
import { useRef, useState } from "react";

import type { Swiper as SwiperType } from "swiper";
import {
  A11y,
  Autoplay,
  EffectFade,
  Keyboard,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import type {
  BannerData,
  BannerSlide,
  DepartmentOption,
} from "@/types/department";

import DepartmentSwitcher from "@/components/dept-cse/DepartmentSwitcher";

const RING_LENGTH = 88;

function HeroPicture({
  slide,
  priority,
}: {
  slide: BannerSlide;
  priority: boolean;
}) {
  const d = slide.desktopImage;
  const m = slide.mobileImage;

  const desktop = getImageProps({
    src: d.src,
    alt: d.alt,
    width: d.width,
    height: d.height,
    sizes: "100vw",
    quality: 80,
  });

  const mobile = getImageProps({
    src: m.src,
    alt: m.alt || d.alt,
    width: m.width,
    height: m.height,
    sizes: "100vw",
    quality: 80,
    priority,
  });

  return (
    <picture>
      <source
        media="(min-width:992px)"
        srcSet={desktop.props.srcSet ?? desktop.props.src}
      />

      <img
        {...mobile.props}
        className="img-fluid w-100"
        alt={m.alt || d.alt}
      />
    </picture>
  );
}

interface Props {
  data: BannerData;
  options: DepartmentOption[];
  currentSlug: string;
  currentName: string;
}

export default function HeroBanner({
  data,
  options,
  currentSlug,
  currentName,
}: Props) {
  const [active, setActive] = useState(0);

  const swiperRef = useRef<SwiperType | null>(null);
  const ringRef = useRef<SVGCircleElement | null>(null);

  const multiple = data.slides.length > 1;

  const resetProgress = () => {
    if (ringRef.current) {
      ringRef.current.style.strokeDashoffset = String(RING_LENGTH);
    }
  };

  return (
    <section className="deptmain_banner">
      <div className="container-fluid px-lg-0">
        <Swiper
          className="depcse_slider"
          modules={[
            Autoplay,
            EffectFade,
            A11y,
            Keyboard,
          ]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={800}
          loop={multiple}
          keyboard={{ enabled: true }}
          allowTouchMove={multiple}
          autoplay={
            multiple
              ? {
                  delay: data.autoplayMs || 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
              : false
          }
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setActive(swiper.realIndex);
          }}
          onSlideChange={(swiper) => {
            setActive(swiper.realIndex);
            resetProgress();
          }}
          onAutoplayTimeLeft={(_swiper, _time, progress) => {
            if (ringRef.current) {
              ringRef.current.style.strokeDashoffset = String(
                RING_LENGTH * progress
              );
            }
          }}
        >
          {data.slides.map((slide, i) => (
            <SwiperSlide key={slide.id}>
              <HeroPicture
                slide={slide}
                priority={i === 0}
              />

              <div className="caption_wrap">
                <div className="container-md">
                  <div className="caption">
                    <div className="heading">
                      {slide.heading}

                      {slide.headingAccent && (
                        <span>{slide.headingAccent}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {multiple && (
        <div
          className="custom-pagination"
          role="tablist"
          aria-label="Banner slides"
        >
          {data.slides.map((slide, i) => {
            const isActive = i === active;

            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${i + 1}`}
                className={`swiper-pagination-bullet ${
                  isActive
                    ? "swiper-pagination-bullet-active"
                    : ""
                }`}
                onClick={() => {
                  swiperRef.current?.slideToLoop(i);
                  resetProgress();
                }}
              >
                {i + 1}

                {isActive && (
                  <svg
                    className="progress-ring"
                    viewBox="0 0 30 30"
                    aria-hidden="true"
                  >
                    <circle
                      ref={ringRef}
                      className="progress-ring__circle"
                      cx="15"
                      cy="15"
                      r="14"
                      style={{
                        strokeDashoffset: RING_LENGTH,
                      }}
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}

      <DepartmentSwitcher
        label={data.switcherLabel}
        options={options}
        currentSlug={currentSlug}
        currentName={currentName}
      />
    </section>
  );
}
