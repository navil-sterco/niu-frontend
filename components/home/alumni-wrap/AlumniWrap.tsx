"use client"
import "@/components/home/alumni-wrap/alumni-wrap.css";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const AlumniWrap = () => {
  return (
    <>
      <section className="alumni_wrap">
        <div className="container max-container">
          <div className="alum_grid">
            <div className="alum_text">
              <div
                className="alum_head"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <h5>ALUMNI</h5>
                <blockquote className="title_45">
                  Hear from <span>Our Achievers</span>
                </blockquote>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </p>
                <a href="#0" className="load_more">
                  <div className="line"></div>
                  <p>Learn More</p>
                </a>
              </div>
              <div className="counter_wrap">
                <div className="counter" data-count="0" data-target="25">
                  <span className="num">25</span>K<sup>+</sup>
                </div>
                <p>Alumni Network</p>
              </div>
            </div>
            <div className="alumni_slidewrap">
              <div className="swiper hmalumni">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={'auto'}
                  grabCursor={true}


                  // centeredSlides={true}
                  autoplay={{
                    // delay: 2500,
                    // disableOnInteraction: false,
                  }}

                  // modules={[Autoplay]}
                  className="mySwiper"
                >

                  <div className="swiper-wrapper">

                    <SwiperSlide>
                    <div className="swiper-slide is-expanded">
                      <figure>
                        <img
                          src="/images/deeksha-hmalumni.webp"
                          alt="alumni"
                          className="img-fluid"
                        />
                        <figcaption>
                          <div className="capimg_grid">
                            <div className="studnt_info">
                              <img
                                src="/images/quote-green.svg"
                                className="img-fluid"
                                alt="icon"
                              />
                              <blockquote>
                                NIU gave me the knowledge, confidence, and
                                opportunities to build a successful career.”
                              </blockquote>
                              <div className="name_deg">
                                <h5>Deeksha G</h5>
                                <ul>
                                  <li>B.Tech CSE</li>
                                  <li>Batch 2025</li>
                                </ul>
                              </div>
                            </div>
                            <figure>
                              <img
                                src="/images/hmalum-deeksha.webp"
                                alt="ALUMNI"
                                className="img-fluid w-100"
                              />
                            </figure>
                          </div>
                          <a
                            data-fancybox="hmalumni-gallery"
                            className="video_icon"
                            href="video/niu.mp4"
                          >
                            <img src="/images/video-round-icon.svg" alt="icon" />
                          </a>
                        </figcaption>
                      </figure>
                      <div className="alumni_detail">
                        <h5>Prathyarthi Kashyap</h5>
                        <p>
                          B.Tech CSE <span>Batch</span> 2026
                        </p>
                      </div>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    {/* swiper-slide-end */}
                    <div className="swiper-slide">
                      <figure>
                        <img
                          src="/images/rohit-kumar-hmalumni.webp"
                          alt="alumni"
                          className="img-fluid"
                        />
                        <figcaption>
                          <div className="capimg_grid">
                            <div className="studnt_info">
                              <img
                                src="/images/quote-green.svg"
                                className="img-fluid"
                                alt="icon"
                              />
                              <blockquote>
                                NIU gave me the knowledge, confidence, and
                                opportunities to build a successful career.”
                              </blockquote>
                              <div className="name_deg">
                                <h5>Rohit Kumar</h5>
                                <ul>
                                  <li>B.Tech CSE</li>
                                  <li>Batch 2025</li>
                                </ul>
                              </div>
                            </div>
                            <figure>
                              <img
                                src="/images/hmalum-deeksha.webp"
                                alt="ALUMNI"
                                className="img-fluid w-100"
                              />
                            </figure>
                          </div>
                          <a
                            data-fancybox="hmalumni-gallery"
                            className="video_icon"
                            href="video/niu.mp4"
                          >
                            <img src="/images/video-round-icon.svg" alt="icon" />
                          </a>
                        </figcaption>
                      </figure>
                      <div className="alumni_detail">
                        <h5>Rohit Kumar</h5>
                        <p>
                          B.Tech CSE <span>Batch</span> 2026
                        </p>
                      </div>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    {/* swiper-slide-end */}
                    <div className="swiper-slide">
                      <figure>
                        <img
                          src="/images/prathyarthi-hmalumni.webp"
                          alt="alumni"
                          className="img-fluid"
                        />
                        <figcaption>
                          <div className="capimg_grid">
                            <div className="studnt_info">
                              <img
                                src="/images/quote-green.svg"
                                className="img-fluid"
                                alt="icon"
                              />
                              <blockquote>
                                NIU gave me the knowledge, confidence, and
                                opportunities to build a successful career.”
                              </blockquote>
                              <div className="name_deg">
                                <h5>Rohit Kumar</h5>
                                <ul>
                                  <li>B.Tech CSE</li>
                                  <li>Batch 2025</li>
                                </ul>
                              </div>
                            </div>
                            <figure>
                              <img
                                src="/images/hmalum-deeksha.webp"
                                alt="ALUMNI"
                                className="img-fluid w-100"
                              />
                            </figure>
                          </div>
                          <a
                            data-fancybox="hmalumni-gallery"
                            className="video_icon"
                            href="video/niu.mp4"
                          >
                            <img src="/images/video-round-icon.svg" alt="icon" />
                          </a>
                        </figcaption>
                      </figure>
                      <div className="alumni_detail">
                        <h5>Prathyarthi Kashyap</h5>
                        <p>
                          B.Tech CSE <span>Batch</span> 2026
                        </p>
                      </div>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    {/* swiper-slide-end */}
                    <div className="swiper-slide">
                      <figure>
                        <img
                          src="/images/rohit-kumar-hmalumni.webp"
                          alt="alumni"
                          className="img-fluid"
                        />
                        <figcaption>
                          <div className="capimg_grid">
                            <div className="studnt_info">
                              <img
                                src="/images/quote-green.svg"
                                className="img-fluid"
                                alt="icon"
                              />
                              <blockquote>
                                NIU gave me the knowledge, confidence, and
                                opportunities to build a successful career.”
                              </blockquote>
                              <div className="name_deg">
                                <h5>Rohit Kumar-1</h5>
                                <ul>
                                  <li>B.Tech CSE</li>
                                  <li>Batch 2025</li>
                                </ul>
                              </div>
                            </div>
                            <figure>
                              <img
                                src="/images/hmalum-deeksha.webp"
                                alt="ALUMNI"
                                className="img-fluid w-100"
                              />
                            </figure>
                          </div>
                          <a
                            data-fancybox="hmalumni-gallery"
                            className="video_icon"
                            href="video/niu.mp4"
                          >
                            <img src="/images/video-round-icon.svg" alt="icon" />
                          </a>
                        </figcaption>
                      </figure>
                      <div className="alumni_detail">
                        <h5>Rohit Kumar</h5>
                        <p>
                          B.Tech CSE <span>Batch</span> 2026
                        </p>
                      </div>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    {/* swiper-slide-end */}
                    <div className="swiper-slide">
                      <figure>
                        <img
                          src="/images/prathyarthi-hmalumni.webp"
                          alt="alumni"
                          className="img-fluid"
                        />
                        <figcaption>
                          <div className="capimg_grid">
                            <div className="studnt_info">
                              <img
                                src="/images/quote-green.svg"
                                className="img-fluid"
                                alt="icon"
                              />
                              <blockquote>
                                NIU gave me the knowledge, confidence, and
                                opportunities to build a successful career.”
                              </blockquote>
                              <div className="name_deg">
                                <h5>Prathyarthi Kashyap-5</h5>
                                <ul>
                                  <li>B.Tech CSE</li>
                                  <li>Batch 2025</li>
                                </ul>
                              </div>
                            </div>
                            <figure>
                              <img
                                src="/images/hmalum-deeksha.webp"
                                alt="ALUMNI"
                                className="img-fluid w-100"
                              />
                            </figure>
                          </div>
                          <a
                            data-fancybox="hmalumni-gallery"
                            className="video_icon"
                            href="video/niu.mp4"
                          >
                            <img src="/images/video-round-icon.svg" alt="icon" />
                          </a>
                        </figcaption>
                      </figure>
                      <div className="alumni_detail">
                        <h5>Prathyarthi Kashyap</h5>
                        <p>
                          B.Tech CSE <span>Batch</span> 2026
                        </p>
                      </div>
                    </div>
                    </SwiperSlide>
                   
                  </div>
                  </Swiper>

              </div>
            </div>
       
          </div>
        </div>
      </section>
    </>
  );
};

export default AlumniWrap;
