import "@/styles/common.css";
import "@/styles/home.css";
// import "@/js/custom"

interface HeaderProps {
  headerClass?: string;
}

export default function InnerHeader({ headerClass = "" }: HeaderProps) {
  return (
    <header className={`inner_header ${headerClass}`}>
      <div className="container-md">
        <div className="tolfree">
          <figure>
            <img src="/images/header-call.svg" alt="Phone icon" />
          </figure>
          <a href="tel:1800-102-1900">1800-102-1900</a>
        </div>

        <div className="navbar-brand">
          <a href="/" className="main_logo">
            <img
              src="/images/niu-logo.webp"
              className="img-fluid color_logo"
              alt="Noida International University"
              fetchPriority="high"
            />
            <img
              src="/images/niu-white-logo.webp"
              className="img-fluid white_logo"
              alt="Noida International University"
              fetchPriority="high"
            />
          </a>

          <a href="#0" className="nac_logo">
            <img
              src="/images/header-naac-logo.webp"
              className="img-fluid color_logo"
              alt="NAAC logo"
            />
            <img
              src="/images/naac-logo-white.webp"
              className="img-fluid white_logo"
              alt="NAAC logo"
            />
          </a>
        </div>

        <ul className="navbar_nav">
          <li className="nav-item">
            <a className="nav-link" href="#0">
              Academics
              <img src="/images/drop-icon.svg" alt="" />
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/program">
              Program
              <img src="/images/drop-icon.svg" alt="" />
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#0">
              Research
              <img src="/images/drop-icon.svg" alt="" />
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#0">
              Campus Life
              <img src="/images/drop-icon.svg" alt="" />
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#0">
              Placements
              <img src="/images/drop-icon.svg" alt="" />
            </a>
          </li>

          <li className="nav-item admison_menu">
            <a className="nav-link" href="#0">
              Admission
            </a>

            <div className="admsion_wrap">
              <figure>
                <img
                  src="/images/adm-menubg.webp"
                  alt="Admission background"
                  className="img-fluid w-100"
                />

                <figcaption>
                  <div className="top_menu">
                    <div className="heading">
                      Begin Your <span>Journey at NIU</span>
                    </div>

                    <ul className="adm_menu">
                      <li>
                        <a href="#0">
                          <p>Overview</p>
                          <img src="/images/left-errow.svg" alt="" />
                        </a>
                      </li>

                      <li>
                        <a href="#0">
                          <p>Hostel Fee and Policies</p>
                          <img src="/images/left-errow.svg" alt="" />
                        </a>
                      </li>

                      <li>
                        <a href="#0">
                          <p>
                            Scholarship &amp; <span>Financial Assistance</span>
                          </p>
                          <img src="/images/left-errow.svg" alt="" />
                        </a>
                      </li>

                      <li>
                        <a href="#0">
                          <p>
                            Transport Fee and <span>Policies</span>
                          </p>
                          <img src="/images/left-errow.svg" alt="" />
                        </a>
                      </li>

                      <li>
                        <a href="#0">
                          <p>
                            Course, Eligibility &amp; <span>Fee Structure</span>
                          </p>
                          <img src="/images/left-errow.svg" alt="" />
                        </a>
                      </li>

                      <li>
                        <a href="#0">
                          <p>
                            Admission Document <span>&amp; Undertaking</span>
                          </p>
                          <img src="/images/left-errow.svg" alt="" />
                        </a>
                      </li>

                      <li>
                        <a href="#0">
                          <p>International Admission</p>
                          <img src="/images/left-errow.svg" alt="" />
                        </a>
                      </li>

                      <li>
                        <a href="#0">
                          <p>FAQ</p>
                          <img src="/images/left-errow.svg" alt="" />
                        </a>
                      </li>
                    </ul>

                    <ul className="btn_group">
                      <li>
                        <a href="#0" className="btn_hovefct aply_btn">
                          Apply For 2027
                        </a>
                      </li>

                      <li>
                        <a href="#0" className="btn_hovefct pdf_btn">
                          <img src="/images/pdf-icon.webp" alt="" />
                          Download Brochure
                        </a>
                      </li>
                    </ul>
                  </div>

                  <ul className="botm_menu">
                    <li>
                      <a href="#">Admission Process</a>
                    </li>
                    <li>
                      <a href="#">Apply for CUET counselling</a>
                    </li>
                    <li>
                      <a href="#">Student Reporting</a>
                    </li>
                    <li>
                      <a href="#">Guidelines &amp; Policies</a>
                    </li>
                  </ul>
                </figcaption>
              </figure>
            </div>
          </li>

          {/* Hamburger menu trigger */}
          <li className="nav-item">
            <a href="#0" className="nav-link hemburgure" aria-label="Open menu">
              <img src="/images/hemburgure-icon.svg" alt="" />
            </a>
          </li>
        </ul>

        {/* Side menu */}
        <div className="hembugrside_menu">
          <div className="close_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.785"
              height="17.785"
              viewBox="0 0 17.785 17.785"
              aria-label="Close menu"
              role="img"
            >
              <g
                transform="translate(0.531 0.531)"
                fill="none"
                stroke="currentColor"
              >
                <line x2="23.651" transform="rotate(45)" strokeWidth="1.5" />
                <line
                  x2="23.651"
                  transform="translate(16.724 0) rotate(135)"
                  strokeWidth="1.5"
                />
              </g>
            </svg>
          </div>

          <ul className="mobmenu_top">
            <li className="mob_dropdown">
              <a href="#0">
                <span>Happenings</span>
                <img src="/images/right-chevron.svg" alt="" />
              </a>

              <ul className="second_level">
                <li>
                  <a href="/news">News &amp; Events</a>
                </li>
                <li>
                  <a href="/gallery">Gallery</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#0">Customers</a>
            </li>
            <li>
              <a href="/contact-us">Contact</a>
            </li>
          </ul>

          <ul className="mobmenu_botm">
            <li>
              <a href="#0">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#0">Privacy Policy</a>
            </li>
            <li>
              <a href="#0">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="opacity_bg" />

        {/* Search form */}
        <div className="search_form">
          <a href="#0" aria-label="Close search" className="search-close">
            <img src="/images/close-icon.webp" alt="" />
          </a>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
            <input
              type="button"
              className="btn"
              aria-label="Submit search"
              value=""
            />
          </div>
        </div>
      </div>
    </header>
  );
}
