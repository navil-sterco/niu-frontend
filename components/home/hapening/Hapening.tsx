import "@/components/home/hapening/hapening.css";
import {
  happeningSection,
  featuredHappening,
  happenings,
  type HappeningItem,
} from "@/data/hapening_data";

const CardCaption = ({ item }: { item: HappeningItem }) => {
  if (item.type === "event") {
    return (
      <figcaption>
        <div className="date_link">
          <div className="date">
            <h5>{item.day}</h5>{" "}
            <p>
              {item.month} <span> {item.year}</span>
            </p>
          </div>
          <div className="left_btn btn_hovefct">
            <img src={happeningSection.arrowIcon} alt="icon" />
          </div>
        </div>
        <div className="hpdetail">
          <div className="hpheading">{item.heading}</div>
          <blockquote>
            {item.titleMain} <span>{item.titleHighlight}</span>
          </blockquote>
        </div>
      </figcaption>
    );
  }

  return (
    <figcaption>
      <div className="hpdetail">
        <h5>{item.date}</h5>
        <p>{item.title}</p>
      </div>
    </figcaption>
  );
};

const Hapening = () => {
  return (
    <section className="hapening">
      <div className="container-lg">
        <div className="heading">
          <h5 className="title_24" data-aos="fade-up" data-aos-duration="800">
            {happeningSection.title}
          </h5>
        </div>

        <div className="alum_grid">
          <div className="hplg">
            <figure data-aos="fade-up" data-aos-duration="800">
              <img
                src={featuredHappening.image}
                alt={featuredHappening.alt}
                className="img-fluid w-100"
              />
              <CardCaption item={featuredHappening} />
              <a
                href={featuredHappening.href}
                className="link_stretched"
                aria-label={featuredHappening.alt}
              ></a>
            </figure>
          </div>

          <div className="hpsm">
            {happenings.map((item, index) => (
              <figure
                key={item.id}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={200 + index * 100}
              >
                <img src={item.image} alt={item.alt} className="img-fluid w-100" />
                <CardCaption item={item} />
                <a href={item.href} className="link_stretched" aria-label={item.alt}></a>
              </figure>
            ))}
          </div>
        </div>

        <a
          href={happeningSection.cta.href}
          className="load_more"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="600"
        >
          <div className="line"></div> <p>{happeningSection.cta.label}</p>
        </a>
      </div>
    </section>
  );
};

export default Hapening;