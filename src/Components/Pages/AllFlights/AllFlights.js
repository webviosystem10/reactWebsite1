import React from "react";
import { Link } from "react-router-dom";

function AllFlights() {
  function goToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <section className="partners_section">
        <div className="container">
          <div className="row mx-0">
            <div className="col-lg-10">
              <h1>
                <sup>
                  <i
                    className="icofont-rounded-left-up prim-color"
                    data-aos="fade"
                  />
                </sup>
                Our Flying Partners
                <sub>
                  <i
                    className="icofont-rounded-right-down prim-color"
                    data-aos="fade"
                    data-aos-delay={100}
                  />
                </sub>
              </h1>
              <p className="text-white-1">We roll in the big boys club</p>
            </div>
          </div>
          <div className="row my-5">
            <>
              <div
                className="col-xl-3 col-12 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/air-canada">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        // src={process.env.PUBLIC_URL + "/FlightLogo/aircanada.webp"}
                        src={
                          process.env.PUBLIC_URL + "/FlightLogo/aircanada.webp"
                        }
                        width={200}
                        height={37}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Air Canada</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/air-canada">
                      Air Canada
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/alaska-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/as.webp"}
                        width={163}
                        height={50}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Alaska Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/alaska-airline">
                      Alaska Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/delta-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/dl.webp"}
                        width={93}
                        height={50}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Delta Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/delta-airline">
                      Delta Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/jetBlue-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/b6.webp"}
                        width={140}
                        height={50}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Jetblue Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/jetBlue-airline">
                      Jetblue Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/qatar">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/qr.webp"}
                        width={61}
                        height={50}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Qatar Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/qatar">
                      Qatar Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/aeromexico-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/am.webp"}
                        width={227}
                        height={39}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Aeromexico Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/aeromexico-airline">
                      Aeromexico Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/emirates-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/ek.webp"}
                        width={205}
                        height={50}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Emirates Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/emirates-airline">
                      Emirates Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/frontiar-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/f9.webp"}
                        width={220}
                        height={50}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Frontier Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/frontiar-airline">
                      Frontier Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/southwest-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/wn.webp"}
                        width={227}
                        height={34}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Southwest Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/southwest-airline">
                      Southwest Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/westjet-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/ws.webp"}
                        width={227}
                        height={47}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">WestJet Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/westjet-airline">
                      WestJet Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/air-france">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/af.webp"}
                        width={227}
                        height={20}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Air France Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/air-france">
                      Air France Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/etihad-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/ey.webp"}
                        width={138}
                        height={49}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Etihad Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/etihad-airline">
                      Etihad Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/united-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/ua.webp"}
                        width={227}
                        height={39}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">United Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/united-airline">
                      United Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/american-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/aa.webp"}
                        width={136}
                        height={50}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">American Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/american-airline">
                      American Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/hawaiian-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/ha.webp"}
                        width={169}
                        height={49}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Hawaiian Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/hawaiian-airline">
                      Hawaiian Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/spirit-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/nk.webp"}
                        width={177}
                        height={49}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Spirit Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/spirit-airline">
                      Spirit Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/lufthansa-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/lh.webp"}
                        width={227}
                        height={42}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Lufthansa Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/lufthansa-airline">
                      Lufthansa Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/british-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/ba.webp"}
                        width={227}
                        height={35}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">British Airways</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/british-airline">
                      British Airways
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/turkish-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/tk.webp"}
                        width={185}
                        height={50}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Turkish Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/turkish-airline">
                      Turkish Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/klm-royal-dutch-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/kl.webp"}
                        width={80}
                        height={49}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">KLM Dutch Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/klm-royal-dutch-airline">
                      KLM Dutch Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/air-europa-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/ux.webp"}
                        width={227}
                        height={44}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Air Europa</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/air-europa-airline">
                      Air Europa
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/air-newzealand-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/nz.webp"}
                        width={227}
                        height={36}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Air New Zealand</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/air-newzealand-airline">
                      Air New Zealand
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/all-nippon-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/nh.webp"}
                        width={197}
                        height={50}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">All Nippon Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/all-nippon-airline">
                      All Nippon Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/allegient-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/g4.webp"}
                        width={139}
                        height={50}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Allegient Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/allegient-airline">
                      Allegient Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/avianca-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/av.webp"}
                        width={217}
                        height={50}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Avianca Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/avianca-airline">
                      Avianca Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/brussels-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/sn.webp"}
                        width={224}
                        height={50}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Brussels Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/brussels-airline">
                      Brussels Airlinesv
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/el-al-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/ly.webp"}
                        width={217}
                        height={50}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">El Al Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/el-al-airline">
                      El Al Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/eva-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/br.webp"}
                        width={227}
                        height={46}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Eva Air</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/eva-airline">
                      Eva Air
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/iberia-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/ib.webp"}
                        width={227}
                        height={50}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Iberia Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/iberia-airline">
                      Iberia Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/iceland-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/FlightLogo/icelandairlines.webp"
                        }
                        width={176}
                        height={46}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Iceland Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/iceland-airline">
                      Iceland Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/lynx-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/y9.webp"}
                        width={134}
                        height={50}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Lynx Air</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/lynx-airline">
                      Lynx Air
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/Royal-Air-Jordanian-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/rj.webp"}
                        width={212}
                        height={49}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Royal Air Jordanian</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/Royal-Air-Jordanian-airline">
                      Royal Air Jordanian
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/royal-airmaroc-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/at.webp"}
                        width={75}
                        height={50}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Royal Air Maroc</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/royal-airmaroc-airline">
                      Royal Air Maroc
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/sas-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/FlightLogo/sasairlines.webp"
                        }
                        width={176}
                        height={46}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">SAS Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/sas-airline">
                      SAS Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/saudi-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/sv.webp"}
                        width={221}
                        height={50}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Saudia Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/saudi-airline">
                      Saudia Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/singapore-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/sq.webp"}
                        width={137}
                        height={50}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Singapore Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/singapore-airline">
                      Singapore Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/swiss-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/lx.webp"}
                        width={205}
                        height={49}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Swiss Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/swiss-airline">
                      Swiss Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/tap-portugal-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/tp.webp"}
                        width={227}
                        height={38}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">TAP Portugal Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/tap-portugal-airline">
                      TAP Portugal Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/tunis-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/tu.webp"}
                        width={227}
                        height={46}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Tunis Air</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/tunis-airline">
                      Tunis Air
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/korean-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/ke.webp"}
                        width={227}
                        height={27}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Korean Air</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/korean-airline">
                      Korean Air
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/ethiopian-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/et.webp"}
                        width={121}
                        height={50}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Ethiopian Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/ethiopian-airline">
                      Ethiopian Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/qantas-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/FlightLogo/australianairlines.webp" 
                        }
                        width={176}
                        height={46}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Qantas Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/qantas-airline">
                      Qantas Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/sunwing-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/wg.webp"}
                        width={133}
                        height={50}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Sunwing Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/sunwing-airline">
                      Sunwing Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/phillipine-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/pr.webp"}
                        width={227}
                        height={34}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Phillipine Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/phillipine-airline">
                      Phillipine Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/lot-polish-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/lo.webp"}
                        width={119}
                        height={50}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">LOT Polish Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/lot-polish-airline">
                      LOT Polish Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/cathay-pacific-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/cx.webp"}
                        width={227}
                        height={32}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Cathay Pacific Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/cathay-pacific-airline">
                      Cathay Pacific Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/flair-airline">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/f8.webp"}
                        width={121}
                        height={50}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Flair Airlines</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/flair-airline">
                      Flair Airlines
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-12"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="partner_flight_content">
                  <Link onClick={goToTop} to="/air-transat">
                    <div className="partner_flight_image">
                      <img
                        alt="airlines"
                        loading="lazy"
                        src={process.env.PUBLIC_URL + "/FlightLogo/ts.webp"}
                        width={90}
                        height={50}
                      />
                    </div>
                  </Link>
                  <div className="partner_flight_text my-3">
                    <p className="h4 text-dark">Air Transat</p>
                    <p className="text-dark">Let your dreams fly higher!</p>
                    <div className="partner_flight_button text-end">
                      <Link onClick={goToTop} to="/air-transat">
                      Air Transat
                      </Link>
                      <span>
                        <i className="icofont-rounded-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </section>
    </>
  );
}

export default AllFlights;
