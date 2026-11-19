import "@/components/home/hm-study/hm-study.css";
import {
  studyData,
  programs,
  browseLinks,
  contactInfo,
  admissionLinks,
} from "@/data/hmstudy_data";

const ChevronIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="6.264"
    height="11.114"
    viewBox="0 0 6.264 11.114"
  >
    <path
      data-name="Path 826"
      d="M696.654,1256.869l5.2,5.2-5.2,5.2"
      transform="translate(-696.301 -1256.516)"
      fill="none"
      strokeWidth="1"
    />
  </svg>
);

const HmStudy = () => {
  return (
    <section className="hmstudy">
      <div className="container">
        <div className="heading">
          <h1 data-aos="fade-up" data-aos-duration="800">{studyData.heading}</h1>
          <blockquote data-aos="fade-up" data-aos-duration="800">{studyData.tagline}</blockquote>
          <p data-aos="fade-up" data-aos-duration="800">{studyData.description}</p>
        </div>
      </div>

      <div className="container-lg">
        <div className="pgm_grid">
          {programs.map((item, index) => (
            <figure
              key={item.id}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={(index + 1) * 200}
            >
              <img src={item.image} alt={item.alt} className="img-fluid w-100" />
              <figcaption>
                <div className="caption">
                  <p>{item.title}</p>
                  <div className="left_btn btn_hovefct">
                    <img src={studyData.arrowIcon} alt="icon" />
                  </div>
                </div>
                <a href={item.href} className="link_stretched" aria-label={item.title}></a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="container-md">
        <div className="pgminfo" data-aos="fade-up" data-aos-duration="800" data-aos-delay="700">
          <ul className="brose_schol">
            {browseLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href}>
                  {link.label} <ChevronIcon />
                </a>
              </li>
            ))}
          </ul>

          <ul className="mail_info">
            <li>
              <a href={`mailto:${contactInfo.email.address}`}>
                <img src={contactInfo.email.icon} alt="icon" /> {contactInfo.email.address}
              </a>
            </li>
            <li>
              <a href={`tel:${contactInfo.phone.number}`}>
                <img src={contactInfo.phone.icon} alt="icon" />
                {contactInfo.phone.number}
              </a>
            </li>
            <li>
              <a href={contactInfo.apply.href} className="btn_hovefct">
                {contactInfo.apply.label}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
        <ul className="adminfo">
          {admissionLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href}>
                {link.label} <ChevronIcon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HmStudy;