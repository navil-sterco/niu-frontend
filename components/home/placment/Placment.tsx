import "@/components/home/placment/placment.css";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Placment = () => {
  return (
    <>
      <section className="placment">
        <div className="container">
          <div className="plcmnt_top">
            <div className="heading_wrap">
              <div className="heading">
                <h2 data-aos="fade-up" data-aos-duration="800">
                  Placements
                </h2>
                <blockquote data-aos="fade-up" data-aos-duration="800">
                  Trusted by Leading <span>Global Employers</span>
                </blockquote>
                <p data-aos="fade-up" data-aos-duration="800">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque
                </p>
              </div>
              <a
                href="#0"
                className="load_more"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className="line"></div>
                <p>Learn More</p>
              </a>
            </div>
            <ul
              className="plcmnt_fact"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <li>
                <div className="counter" data-count="1" data-target="6.5">
                  <span className="num">6.5</span> K<sup>+</sup>
                </div>
                <p>Students Hired</p>
              </li>
              <li>
                <div className="counter" data-count="1" data-target="14">
                  <span className="num">14</span>K<sup>+</sup>
                </div>
                <p>LPA Max</p>
              </li>
              <li>
                <div className="counter" data-count="20" data-target="85">
                  <span className="num">85</span>
                  <sup>%</sup>
                </div>
                <p>Recruiters</p>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="container max-container"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="swiper hmplcmnt_slider">
           
              <div className="swiper-wrapper">
              <Swiper
              spaceBetween={5}
              slidesPerView={2.7}
              grabCursor={true}


              // centeredSlides={true}
              autoplay={{
                // delay: 2500,
                // disableOnInteraction: false,
              }}
             
              modules={[Autoplay]}
              className="mySwiper"
            >



                {/* Video Slide 1 */}
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="video_wrap">
                      <video
                        src="/video/niu.mp4"
                        className="auto-video"
                        muted
                      ></video>
                      <div className="center-play-btn"></div>
                      <div className="custom-container custom-videocontol">
                        <div className="controls">
                          <button className="control-btn"></button>
                          <div className="progcont_wrap">
                            <div className="progress-container">
                              <div className="progress-bar"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="caption">
                        <blockquote>Ali Ghodsi</blockquote>
                        <p>CEO - Databricks</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Image Slide */}
                <SwiperSlide>
                  <div className="swiper-slide">
                    <figure>
                      <img
                        src="/images/prathyarthi-kashyap.webp"
                        alt="placement"
                        className="img-fluid w-100"
                      />
                      <figcaption>
                        <div className="name">Prathyarthi Kashyap</div>
                        <ul className="education">
                          <li>B.Tech CSE</li>
                          <li>
                            <span>Batch</span> 2025
                          </li>
                        </ul>
                        <div className="package">
                          <p>Package</p>
                          <div className="amount">
                            <sup>₹</sup>
                            <blockquote>10.50 L</blockquote>
                          </div>
                        </div>
                        <div className="placmt_logo">
                          <img
                            src="/images/placment-capgem.webp"
                            alt="placement logo"
                            className="img-fluid"
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </SwiperSlide>


                {/* Image Slide */}
                <SwiperSlide>

                  <div className="swiper-slide">
                    <figure>
                      <img
                        src="/images/sahil-aiyan.webp"
                        alt="placement"
                        className="img-fluid w-100"
                      />
                      <figcaption>
                        <div className="name">Md. Sahil Aiyan</div>
                        <ul className="education">
                          <li>B.Tech CSE</li>
                          <li>
                            <span>Batch</span> 2025
                          </li>
                        </ul>
                        <div className="package">
                          <p>Package</p>
                          <div className="amount">
                            <sup>₹</sup>
                            <blockquote>8.50 L</blockquote>
                          </div>
                        </div>
                        <div className="placmt_logo">
                          <img
                            src="/images/placment-tcs.webp"
                            alt="placement logo"
                            className="img-fluid"
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </SwiperSlide>


                {/* Video Slide 1 */}
                <SwiperSlide>

                  <div className="swiper-slide">
                    <div className="video_wrap">
                      <video
                        src="/video/niu.mp4"
                        className="auto-video"
                        muted
                      ></video>
                      <div className="center-play-btn"></div>
                      <div className="custom-container custom-videocontol">
                        <div className="controls">
                          <button className="control-btn"></button>
                          <div className="progcont_wrap">
                            <div className="progress-container">
                              <div className="progress-bar"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="caption">
                        <blockquote>Ali Ghodsi</blockquote>
                        <p>CEO - Databricks</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Image Slide */}
                <SwiperSlide>

                  <div className="swiper-slide">
                    <figure>
                      <img
                        src="/images/prathyarthi-kashyap.webp"
                        alt="placement"
                        className="img-fluid w-100"
                      />
                      <figcaption>
                        <div className="name">Prathyarthi Kashyap</div>
                        <ul className="education">
                          <li>B.Tech CSE</li>
                          <li>
                            <span>Batch</span> 2025
                          </li>
                        </ul>
                        <div className="package">
                          <p>Package</p>
                          <div className="amount">
                            <sup>₹</sup>
                            <blockquote>10.50 L</blockquote>
                          </div>
                        </div>
                        <div className="placmt_logo">
                          <img
                            src="/images/placment-capgem.webp"
                            alt="placement logo"
                            className="img-fluid"
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </SwiperSlide>
                <SwiperSlide>

                  {/* Image Slide */}
                  <div className="swiper-slide">
                    <figure>
                      <img
                        src="/images/sahil-aiyan.webp"
                        alt="placement"
                        className="img-fluid w-100"
                      />
                      <figcaption>
                        <div className="name">Md. Sahil Aiyan</div>
                        <ul className="education">
                          <li>B.Tech CSE</li>
                          <li>
                            <span>Batch</span> 2025
                          </li>
                        </ul>
                        <div className="package">
                          <p>Package</p>
                          <div className="amount">
                            <sup>₹</sup>
                            <blockquote>8.50 L</blockquote>
                          </div>
                        </div>
                        <div className="placmt_logo">
                          <img
                            src="/images/placment-tcs.webp"
                            alt="placement logo"
                            className="img-fluid"
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </SwiperSlide>


            </Swiper>
              </div>
          </div>
        </div>


        <div className="container">
          <div className="placment_logo">
            <div className="swiper hmplcmnt_logo">
              <Swiper
                slidesPerView={6}
                spaceBetween={30}
                grabCursor={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}

                modules={[Autoplay]}
                className="mySwiper"
              >

                <div className="swiper-wrapper">

                  {/* Video Slide 1 */}
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <figure>
                        <img
                          src="/images/placment-hmlogo1.webp"
                          alt="placement logo"
                          className="img-fluid w-100"
                        />
                      </figure>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide">
                      <figure>
                        <img
                          src="/images/placment-hmlogo2.webp"
                          alt="placement logo"
                          className="img-fluid w-100"
                        />
                      </figure>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide">
                      <figure>
                        <img
                          src="/images/placment-hmlogo3.webp"
                          alt="placement logo"
                          className="img-fluid w-100"
                        />
                      </figure>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide">
                      <figure>
                        <img
                          src="/images/placment-hmlogo4.webp"
                          alt="placement logo"
                          className="img-fluid w-100"
                        />
                      </figure>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide">
                      <figure>
                        <img
                          src="/images/placment-hmlogo5.webp"
                          alt="placement logo"
                          className="img-fluid w-100"
                        />
                      </figure>
                    </div>
                  </SwiperSlide>


                  <SwiperSlide>
                    <div className="swiper-slide">
                      <figure>
                        <img
                          src="/images/placment-hmlogo6.webp"
                          alt="placement logo"
                          className="img-fluid w-100"
                        />
                      </figure>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default Placment;
