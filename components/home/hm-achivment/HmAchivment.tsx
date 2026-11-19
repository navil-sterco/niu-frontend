"use client";

import { useState } from "react";
import "@/components/home/hm-achivment/hm-achivment.css";
import { achievements, type Achievement } from "@/data/hmachivment_data";

const INITIAL_COUNT = 8;
const STEP = 4;

const AchievementCard = ({ item, index }: { item: Achievement; index: number }) => {
  const aos = {
    "data-aos": "fade-up",
    "data-aos-duration": "800",
    "data-aos-delay": String(200 + (index % 8) * 100),
  };

  switch (item.type) {
    case "logo":
      return (
        <div className="ach_box" {...aos}>
          <div className="logo">
            <img
              src={item.logo.src}
              srcSet={item.logo.srcSet}
              sizes="100vw"
              alt={item.logo.alt}
              className="img-fluid"
            />
          </div>
          <blockquote>
            {item.title.main} <span>{item.title.highlight}</span>
          </blockquote>
          <p>
            {item.desc.main}
            {item.desc.highlight && <> <span>{item.desc.highlight}</span></>}
          </p>
        </div>
      );

    case "image":
      return (
        <div className="ach_box" {...aos}>
          <figure className="shine_effect">
            <img src={item.image.src} alt={item.image.alt} className="img-fluid w-100" />
          </figure>
        </div>
      );

    case "score":
      return (
        <div className="ach_box" {...aos}>
          <figure>
            <img src={item.image.src} alt={item.image.alt} className="img-fluid w-100" />
            <figcaption>
              <p>{item.caption}</p>
              <blockquote>
                {item.score} <sub>{item.outOf}</sub>
              </blockquote>
              <p>
                {item.desc.main} <span>{item.desc.highlight}</span>
              </p>
            </figcaption>
          </figure>
        </div>
      );

    case "solid":
      return (
        <div className="ach_box solid" {...aos}>
          <div className="fact">{item.fact}</div>
          <span className="d-block">{item.label}</span>
          <blockquote>
            {item.title.main} <span>{item.title.highlight}</span>
          </blockquote>
          <p>
            {item.desc.main} <span>{item.desc.highlight}</span>
          </p>
        </div>
      );
  }
};

const HmAchivment = () => {
  const [visible, setVisible] = useState(INITIAL_COUNT);
  const hasMore = visible < achievements.length;

  return (
    <section className="hmachivment">
      <div className="container">
        <div className="achivmnt_grid">
          {achievements.slice(0, visible).map((item, i) => (
            <AchievementCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {hasMore && (
          <a
            href="#0"
            className="load_more"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="1000"
            onClick={(e) => {
              e.preventDefault();
              setVisible((v) => v + STEP);
            }}
          >
            <div className="line"></div>
            <p>Load More Achievements</p>
          </a>
        )}
      </div>
    </section>
  );
};

export default HmAchivment;