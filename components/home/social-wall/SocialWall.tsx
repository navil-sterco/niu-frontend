import "@/components/home/social-wall/social-wall.css";
import {
  socialWallSection,
  socialPosts,
  socialLinks,
} from "@/data/socialwall_data";

const SocialWall = () => {
  return (
    <section className="social_wall">
      <div className="container">
        <div className="heading">
          <h5
            className="title_24"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            {socialWallSection.title}
          </h5>
        </div>

        <div className="social_grid">
          {socialPosts.map((post, index) => (
            <figure
              key={post.id}
              className="img-fluid w-100 shine_effect"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={200 + index * 100}
            >
              <img src={post.image} className="img-fluid w-100" alt={post.alt} />
            </figure>
          ))}
        </div>
        {/* social_grid-end */}

        <div
          className="social_link"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="600"
        >
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-label={link.name}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <img src={link.icon} alt={link.name} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialWall;