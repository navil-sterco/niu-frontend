"use client";

import "@/styles/common.css";
import "@/styles/home.css";
import HomeBanner from "@/components/home/home-banner/HomeBanner";
import ExpProgram from "@/components/home/exp-program/ExpProgram";
import HmAchivment from "@/components/home/hm-achivment/HmAchivment";
import HmStudy from "@/components/home/hm-study/HmStudy";
// import Placment from "@/components/home/placment/Placment";
import Research from "@/components/home/research/Research";
import WhyChoose from "@/components/home/why-choose/WhyChoose";
import AboutNiu from "@/components/home/about-niu/AboutNiu";
import CampusLife from "@/components/home/campus-life/CampusLife";
import AlumniWrap from "@/components/home/alumni-wrap/AlumniWrap";
import Hapening from "@/components/home/hapening/Hapening";
import SocialWall from "@/components/home/social-wall/SocialWall";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <>
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" /> */}

      <main>
        <Suspense
          fallback={
            <div className="Hero Section-loading" aria-busy="true">
              Loading department...
            </div>
          }
        >
          <HomeBanner />
        </Suspense>
        <ExpProgram />

        <HmAchivment />

        <HmStudy />

        {/* <Placment /> */}

        <Research />

        <WhyChoose />

        <Suspense
          fallback={
            <div className="About-loading" aria-busy="true">
              Loading department...
            </div>
          }
        >
          <AboutNiu />
        </Suspense>

        <CampusLife />

        <AlumniWrap />

        <Hapening />

        <SocialWall />
      </main>
    </>
  );
}
