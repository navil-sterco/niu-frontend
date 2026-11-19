import "@/components/home/exp-program/exp-program.css";

const ExpProgram = () => {
  return (
    <>
      <section className="exp_program">
        <div
          className="container-md"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <ul className="program_serarch">
            <li>Explore Our 100+ Programs</li>
            <li>
              <a href="#">Undergraduate</a>
            </li>
            <li>
              <a href="#">Postgraduate</a>
            </li>
            <li>
              <a href="#">Doctoral</a>
            </li>
            <li>
              <a href="#">Diploma</a>
            </li>
            <li>
              <div className="input_group">
                <input type="text" placeholder="Search Programs" />
                <button type="submit">
                  {" "}
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Group_22"
                    data-name="Group 22"
                    width="20.109"
                    height="20.245"
                    viewBox="0 0 20.109 20.245"
                  >
                    <g
                      id="Ellipse_6"
                      data-name="Ellipse 6"
                      fill="none"
                      stroke=""
                      stroke-width="1.5"
                    >
                      <ellipse
                        cx="8.403"
                        cy="8.726"
                        rx="8.403"
                        ry="8.726"
                        stroke="none"
                      />
                      <ellipse
                        cx="8.403"
                        cy="8.726"
                        rx="7.653"
                        ry="7.976"
                        fill="none"
                      />
                    </g>
                    <line
                      id="Line_20"
                      data-name="Line 20"
                      x2="4.995"
                      y2="4.995"
                      transform="translate(14.584 14.719)"
                      fill="none"
                      stroke=""
                      stroke-width="1.5"
                    />
                  </svg> */}
                </button>
              </div>
            </li>
            <li>
              <a href="#" className="btn_hovefct">
                Apply For 2027
              </a>
            </li>
          </ul>
          <ul className="pgfact">
            <li>
              <div className="counter" data-count="10" data-target="15">
                <span className="num">15</span>
                <sup>+</sup>
              </div>
              <p>
                Years of Institutional <span>Excellence</span>
              </p>
            </li>
            <li>
              <div className="counter" data-count="10" data-target="65">
                <span className="num">65</span>
                <sup>+</sup>
              </div>
              <p>
                Countries <span>Student Diversity</span>
              </p>
            </li>
            <li>
              <div className="counter" data-count="10" data-target="14">
                <span className="num">14</span>
              </div>
              <p>
                Schools a diverse <span>academic ecosystem</span>
              </p>
            </li>
            <li>
              <div className="counter" data-count="10" data-target="100">
                <span className="num">100</span>
                <sup>+</sup>
              </div>
              <p>
                Programmes Diverse <span>opportunities to learn</span>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ExpProgram;
