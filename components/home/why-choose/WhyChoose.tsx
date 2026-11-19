import "@/components/home/why-choose/why-choose.css";

const WhyChoose = () => {
  return (
    <>
    <section className="why_choose">
    <div className="container-lg max-container-lg">
      <div className="why_inner">
        <div className="heading">
          <h4 className="title_24" data-aos="fade-up" data-aos-duration="800">Why Choose Us</h4>
        </div>
        <div className="tab_accordian">
          <ul className="nav nav-tabs d-none d-lg-inline-flex" id="whychoseTab" role="tablist" data-aos="fade-up"
            data-aos-duration="800">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="hmwhychose1-tab" data-bs-toggle="tab"
                data-bs-target="#hmwhychose1-tab-pane" type="button" role="tab" aria-controls="hmwhychose1-tab-pane"
                aria-selected="true">Collaborations</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="hmwhychose2-tab" data-bs-toggle="tab" data-bs-target="#hmwhychose2-tab-pane"
                type="button" role="tab" aria-controls="hmwhychose2-tab-pane" aria-selected="false">Clubs &
                Societies</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="hmwhychose3-tab" data-bs-toggle="tab" data-bs-target="#hmwhychose3-tab-pane"
                type="button" role="tab" aria-controls="hmwhychose3-tab-pane" aria-selected="false">Centers of
                Excellence</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="hmwhychose4-tab" data-bs-toggle="tab" data-bs-target="#hmwhychose4-tab-pane"
                type="button" role="tab" aria-controls="hmwhychose4-tab-pane" aria-selected="false">Virtual
                Tour</button>
            </li>

          </ul>
          <div className="tab-content accordion" id="whychoseTabContent">
            <div className="tab-pane fade show active accordion-item" id="hmwhychose1-tab-pane" role="tabpanel"
              aria-labelledby="hmwhychose1-tab" tabIndex={0}>

              <div className="accordion-header d-lg-none" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                  aria-expanded="true" aria-controls="collapseOne">Collaborations</button>
              </div>
              <div id="collapseOne" className="accordion-collapse collapse show  d-lg-block" aria-labelledby="headingOne"
                data-bs-parent="#whychoseTabContent">
                <div className="accordion-body">
                  <div className="why_grid">
                    <div className="why_text">
                      <h5 className="title_45" data-aos="fade-up" data-aos-duration="800">Real-world learning <span>through
                          Global partnerships</span></h5>
                      <p data-aos="fade-up" data-aos-duration="800">Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                      <a href="#0" className="load_more" data-aos="fade-up" data-aos-duration="800">
                        <div className="line"></div>
                        <p>Learn More</p>
                      </a>
                      <div className="hychose_logo" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                        <div className="swiper hmwhychose_logo">
                          <div className="swiper-wrapper">
                            {/* Video Slide 1 */}
                            <div className="swiper-slide">
                              <figure><img src="/images/why-shose-logo1.webp" alt="placement logo"
                                  className="img-fluid w-100" /></figure>
                            </div>
                            <div className="swiper-slide">
                              <figure><img src="/images/why-shose-logo2.webp" alt="placement logo"
                                  className="img-fluid w-100" /></figure>
                            </div>
                            <div className="swiper-slide">
                              <figure><img src="/images/why-shose-logo1.webp" alt="placement logo"
                                  className="img-fluid w-100" /></figure>
                            </div>
                            <div className="swiper-slide">
                              <figure><img src="/images/why-shose-logo3.webp" alt="placement logo"
                                  className="img-fluid w-100" /></figure>
                            </div>
                            <div className="swiper-slide">
                              <figure><img src="/images/why-shose-logo4.webp" alt="placement logo"
                                  className="img-fluid w-100" /></figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <figure className="shine_effect" data-aos="fade-up" data-aos-duration="800"><img
                        src="/images/why-shose-colobration.webp" alt="why-shose-colobration" className="img w-100" /></figure>
                  </div>
                </div>
              </div>

            </div>
            <div className="tab-pane fade accordion-item" id="hmwhychose2-tab-pane" role="tabpanel"
              aria-labelledby="hmwhychose2-tab" tabIndex={0}>
              <div className="accordion-header d-lg-none" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Clubs & Societies
                </button>
              </div>
              <div id="collapseTwo" className="accordion-collapse collapse d-lg-block" aria-labelledby="headingTwo"
                data-bs-parent="#whychoseTabContent">
                <div className="accordion-body">
                  <div className="why_grid">
                    <div className="why_text">
                      <h5 className="title_45" data-aos="fade-up" data-aos-duration="800">Real-world learning <span>through
                          Global partnerships</span></h5>
                      <p data-aos="fade-up" data-aos-duration="800">Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                      <a href="#0" className="load_more" data-aos="fade-up" data-aos-duration="800">
                        <div className="line"></div>
                        <p>Learn More</p>
                      </a>

                    </div>
                    <figure className="shine_effect" data-aos="fade-up" data-aos-duration="800"><img
                        src="/images/why-shose-colobration.webp" alt="why-shose-colobration" className="img w-100" /></figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade accordion-item" id="hmwhychose3-tab-pane" role="tabpanel"
              aria-labelledby="hmwhychose3-tab" tabIndex={0}>
              <div className="accordion-header d-lg-none" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Centers of Excellence
                </button>
              </div>
              <div id="collapseThree" className="accordion-collapse collapse d-lg-block" aria-labelledby="headingThree"
                data-bs-parent="#whychoseTabContent">
                <div className="accordion-body">
                  <strong>Centers of Excellence</strong>
                </div>
              </div>
            </div>
            <div className="tab-pane fade accordion-item" id="hmwhychose4-tab-pane" role="tabpanel"
              aria-labelledby="hmwhychose4-tab" tabIndex={0}>
              <div className="accordion-header d-lg-none" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Virtual Tour
                </button>
              </div>
              <div id="collapseFour" className="accordion-collapse collapse d-lg-block" aria-labelledby="headingFour"
                data-bs-parent="#whychoseTabContent">
                <div className="accordion-body">
                  <strong>Virtual Tour</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    
    </>
  )
}

export default WhyChoose