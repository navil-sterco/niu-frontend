"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "@/components/home/about-niu/about-niu.css";

import {
  aboutNiuSection,
  aboutSlides,
  industrySection,
  partnerLogos,
} from "@/data/aboutniu_data";

const RING_LENGTH = 88;

const AboutNiu = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const aboutSwiperRef = useRef<SwiperType | null>(null);
  const ringRef = useRef<SVGCircleElement | null>(null);

  const hasMultipleSlides = aboutSlides.length > 1;
  const hasMultipleLogos = partnerLogos.length > 4;

  return (
    <section className="about_niu">
      <div className="container-md">
        <div className="heading">
          <h5 className="title_24" data-aos="fade-up" data-aos-duration="800">
            {aboutNiuSection.title}
          </h5>

          <blockquote
            className="title_45"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {aboutNiuSection.headingMain}
            <span>{aboutNiuSection.headingHighlight }</span>
          </blockquote>
        </div>

        <div className="swiper hmabout">
          <Swiper
            modules={[Autoplay]}
            className="mySwiper"
            centeredSlides
            slidesPerView={1}
            spaceBetween={0}
            speed={1200}
            loop={hasMultipleSlides}
            autoplay={
              hasMultipleSlides
                ? {
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
                : false
            }
            onSwiper={(swiper) => {
              aboutSwiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveSlide(swiper.realIndex);
            }}
            onAutoplayTimeLeft={(_swiper, _time, progress) => {
              if (ringRef.current) {
                ringRef.current.style.strokeDashoffset = String(
                  RING_LENGTH * progress,
                );
              }
            }}
          >
            {aboutSlides.map((slide, index) => (
              <SwiperSlide key={slide.id}>
                <figure>
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    width={1920}
                    height={800}
                    sizes="100vw"
                    priority={index === 0}
                    className="img-fluid w-100"
                  />

                  <figcaption>
                    <div className="container">
                      <div className="fact_wrap">
                        <div
                          className="counter"
                          data-count="10"
                          data-target={slide.count}
                        >
                          <span className="num">{slide.count}</span>
                          {slide.suffix}
                          <sup>+</sup>
                        </div>

                        <p>{slide.label}</p>
                      </div>
                    </div>

                    <a
                      data-fancybox="hmabout-gallery"
                      className="link_stretched video_icon"
                      href={slide.videoSrc}
                      aria-label="Play video"
                    >
                      <Image
                        src={aboutNiuSection.videoIcon}
                        alt="Play video"
                        width={60}
                        height={60}
                      />
                    </a>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>

          {hasMultipleSlides && (
            <div className="custom-pagination about-custom-pagination">
              {aboutSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  className={`pagination-dot ${
                    activeSlide === index ? "active" : ""
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={activeSlide === index ? "true" : undefined}
                  onClick={() => aboutSwiperRef.current?.slideToLoop(index)}
                />
              ))}
            </div>
          )}

          <a
            className="virtual_tour btn_hovefct"
            href={aboutNiuSection.virtualTour.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={aboutNiuSection.virtualTour.icon}
              alt=""
              width={24}
              height={24}
            />
            {aboutNiuSection.virtualTour.label}
          </a>
        </div>
      </div>

      <div className="container">
        <div
          className="abt_logo"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <div className="abtlogo_grid">
            <div className="abt_title">
              <h5>{industrySection.title}</h5>
              <p>{industrySection.subtitle}</p>
            </div>

            <div className="about_logo">
              <div className="swiper hmabt_logo">
                <Swiper
                  modules={[Autoplay]}
                  className="mySwiper"
                  spaceBetween={15}
                  slidesPerView={2}
                  grabCursor
                  loop={hasMultipleLogos}
                  speed={800}
                  autoplay={
                    hasMultipleLogos
                      ? {
                          delay: 2500,
                          disableOnInteraction: false,
                          pauseOnMouseEnter: true,
                        }
                      : false
                  }
                  breakpoints={{
                    576: {
                      slidesPerView: 3,
                      spaceBetween: 15,
                    },
                    992: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                  }}
                >
                  {partnerLogos.map((logo) => (
                    <SwiperSlide key={logo.id}>
                      <figure>
                        <Image
                          src={logo.image}
                          alt={logo.alt}
                          width={200}
                          height={80}
                          sizes="(max-width: 576px) 50vw, (max-width: 992px) 33vw, 25vw"
                          className="img-fluid w-100"
                        />
                      </figure>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNiu;
