"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { A11y, Autoplay, Keyboard, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import type { FacultyData } from "@/types/department";
import Reveal from "@/components/dept-cse/Reveal";
import SafeImage from "@/components/dept-cse/SafeImage";

const AUTOPLAY_DELAY = 3500; 
const SLIDE_SPEED = 900; 

export default function FacultySlider({ data }: { data: FacultyData }) {
  const swiperRef = useRef<SwiperType | null>(null);
  const canLoop = data.members.length >= 6; 
  const canAutoplay = data.members.length > 1;

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper || !canAutoplay || !swiper.el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      swiper.autoplay?.stop();
      return;
    }
    if (typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) swiper.autoplay?.start();
        else swiper.autoplay?.stop();
      },
      { threshold: 0.25 }
    );
    io.observe(swiper.el);
    return () => io.disconnect();
  }, [canAutoplay]);

  return (
    <section className="dept_faculty">
      <div className="container max-container">
        <div className="faculty_inner">
          <div className="left_border" />

          <div className="faculty_heading">
            <div className="heading">
              <Reveal as="h5">{data.eyebrow}</Reveal>
              <Reveal as="blockquote">{data.title}</Reveal>
            </div>
            <div className="btn_para">
              {data.description && <Reveal as="p">{data.description}</Reveal>}
              <Reveal>
                <Link href={data.cta.href} className="load_more">
                  <div className="line" />
                  <p>{data.cta.label}</p>
                </Link>
              </Reveal>
            </div>
          </div>

          <div className="swiper_custombtn">
            <div className="swiper-button-prev deptfac-prev" aria-label="Previous faculty" />
            <div className="swiper-button-next deptfac-next" aria-label="Next faculty" />
          </div>

          <Swiper
            className="dept_facslider"
            modules={[Navigation, Autoplay, A11y, Keyboard]}
            navigation={{ prevEl: ".deptfac-prev", nextEl: ".deptfac-next" }}
            keyboard={{ enabled: true }}
            autoplay={
              canAutoplay
                ? { delay: AUTOPLAY_DELAY, disableOnInteraction: false, pauseOnMouseEnter: true }
                : false
            }
            loop={canLoop}
            rewind={!canLoop}
            speed={SLIDE_SPEED}
            grabCursor
            watchOverflow
            slidesPerView={1.15}
            spaceBetween={16}
            breakpoints={{
              480: { slidesPerView: 1.6, spaceBetween: 16 },
              640: { slidesPerView: 2.2, spaceBetween: 20 },
              992: { slidesPerView: 3.2, spaceBetween: 24 },
              1400: { slidesPerView: 4, spaceBetween: 24 },
            }}
            onSwiper={(s) => (swiperRef.current = s)}
          >
            {data.members.map((m) => (
              <SwiperSlide key={m.id}>
                <figure>
                  <SafeImage
                    src={m.image.src}
                    alt={m.image.alt || m.name}
                    width={m.image.width}
                    height={m.image.height}
                    sizes="(max-width: 640px) 80vw, (max-width: 992px) 40vw, 25vw"
                    className="img-fluid w-100"
                  />
                </figure>
                <div className="dept_facdetil">
                  <h5>{m.name}</h5>
                  <p>{m.designation}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
