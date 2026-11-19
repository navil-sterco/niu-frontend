import "@/components/home/research/research.css";
import { researchHeading, researchItems, researchFacts } from "@/data/research_data";

const Research = () => {
  return (
    <section className="research">
      <div className="container">
        <div className="research_top">
          <div className="heading">
            <h3 data-aos="fade-up" data-aos-duration="800">
              {researchHeading.title}
            </h3>
            <blockquote data-aos="fade-up" data-aos-duration="800">
              {researchHeading.tagline} <span>{researchHeading.taglineHighlight}</span>
            </blockquote>
          </div>
          <div className="btn_para">
            <p data-aos="fade-up" data-aos-duration="800">
              {researchHeading.description}
            </p>
            <a
              href={researchHeading.cta.href}
              className="load_more"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="line"></div>
              <p>{researchHeading.cta.label}</p>
            </a>
          </div>
        </div>

        <div className="rech_grid">
          {researchItems.map((item, index) => (
            <div
              key={item.id}
              className="rech_box"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index === 2 ? 500 : (index + 2) * 100}
            >
              <figure className="shine_effect">
                <img src={item.image} alt={item.alt} className="img w-100" />
              </figure>
              <div className="rech_detl">
                <p>{item.title}</p>
                <div className="round_btn btn_hovefct">
                  <img src={researchHeading.arrowIcon} alt="icon" />
                </div>
              </div>
              <a href={item.href} className="link_stretched" aria-label={item.title}></a>
            </div>
          ))}
        </div>

        <ul
          className="rech_fact"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="700"
        >
          {researchFacts.map((fact) => (
            <li key={fact.id}>
              <div className="counter" data-count="10" data-target={fact.value}>
                {fact.prefix && <span>{fact.prefix}</span>}
                <span className="num">{fact.value}</span>
                {fact.suffix && <> {fact.suffix}</>}
                {fact.plus && <sup>+</sup>}
              </div>
              <p>
                {fact.label} <span>{fact.sublabel}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Research;