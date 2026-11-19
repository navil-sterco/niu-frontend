"use client";

import { useRef, useState } from "react";

import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "@/styles/home.css";

import "swiper/css";
import "swiper/css/effect-fade";

const RING_LENGTH = 88;

export default function HomeBanner() {
  const [active, setActive] = useState(0);

  const swiperRef = useRef<SwiperType | null>(null);
  const ringRef = useRef<SVGCircleElement | null>(null);

  const slides = [
    {
      id: 1,
      desktop: "/images/hmslide-desk1.webp",
      mobile: "/images/hmslide-mobile1.webp",
      heading: "Your Future Begins Here",
      description: "Discover new opportunities, build your skills",
    },
    {
      id: 2,
      desktop: "/images/hmslide-desk2.webp",
      mobile: "/images/hmslide-mobile2.webp",
      heading: "Your Future Begins Here-2",
      description: "Discover new opportunities, build your skills",
    },
  ];

  return (
    <section className="home_banner">
      <div className="container-fluid">
        <div className="swiper home_slide">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              
            }}
            modules={[EffectFade, Autoplay, Pagination]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop={true}
            speed={800}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActive(swiper.realIndex);

              if (ringRef.current) {
                ringRef.current.style.strokeDashoffset = String(RING_LENGTH);
              }
            }}
            onAutoplayTimeLeft={(_swiper, _time, progress) => {
              if (ringRef.current) {
                ringRef.current.style.strokeDashoffset = String(
                  RING_LENGTH * progress,
                );
              }
            }}
            className="mySwiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="swiper-slide">
                  <picture>
                    <source media="(min-width:992px)" srcSet={slide.desktop} />

                    <img
                      src={slide.mobile}
                      alt={slide.heading}
                      className="img-fluid w-100"
                    />
                  </picture>

                  <div className="caption_wrap">
                    <div className="container-lg">
                      <div className="caption">
                        <div className="heading">{slide.heading}</div>

                        <p>{slide.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Progress Pagination */}
          <div
            className="custom-pagination"
            role="tablist"
            aria-label="Banner slides"
          >
            {slides.map((slide, i) => {
              const isActive = i === active;

              return (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`swiper-pagination-bullet ${
                    isActive ? "swiper-pagination-bullet-active" : ""
                  }`}
                  onClick={() => {
                    swiperRef.current?.slideToLoop(i);
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
        </div>
      </div>
    </section>
  );
}
