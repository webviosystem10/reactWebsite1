import React from "react";
import { Link } from "react-router-dom";
import { hiddenNumber } from "../GlobalData/GlobalMetaData";

function FlyingPartners() {
  function handleTop(){
    window.scrollTo(0,0)
  }
  return (
    <>
      <section className="partners_section">
        <div className="container">
          <div className="row mx-0">
            <div className="col-lg-10">
              <p className="h1">
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
              </p>
              <p className="text-white-1">We roll in the big boys club</p>
            </div>
            <div className="col-lg-2 text-end">
              <Link onClick={handleTop} to="/flights" className="view_more">
                View More
                <i className="icofont-caret-right" />
              </Link>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-xl-9 col-12">
              <div className="row mx-0">
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-12"
                  data-aos="fade-up"
                >
                  <div className="partner_flight_content">
                    <Link aria-label="Air Canada" onClick={handleTop} to="/air-canada">
                      <div className="partner_flight_image">
                        <img
                          src={require("../assets/img/flights/aircanada.webp")}
                          alt="Air Canada"
                          height={"37"}
                          width={"200"}
                        />
                      </div>
                    </Link>
                    <div className="partner_flight_text my-3">
                      <Link aria-label="Air Canada" onClick={handleTop} to="/air-canada">
                        <p  className="h4 text-dark">Air Canada</p>
                        <p className="text-dark">Let your dreams fly higher!</p>
                      </Link>
                      <div className="partner_flight_button text-end">
                        
                        <Link aria-label="Air Canada" onClick={handleTop} to="/air-canada">
                        Air Canada
                          <span>
                            <i className="icofont-rounded-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-12"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="partner_flight_content">
                    <Link aria-label="Delta Airlines" onClick={handleTop} to="/delta-airline">
                      <div className="partner_flight_image">
                        <img
                          src={require("../assets/img/flights/deltaair.webp")}
                          alt="Delta Airlines"
                          height={"37"}
                          width={"200"}
                        />
                      </div>
                    </Link>
                    <div className="partner_flight_text my-3">
                      <Link aria-label="Delta Airlines" onClick={handleTop} to="/delta-airline">
                        <p  className="h4 text-dark">Delta Airlines</p>
                        <p className="text-dark">Let your dreams fly higher!</p>
                      </Link>
                      <div className="partner_flight_button text-end">
                        <Link aria-label="Delta Airlines" onClick={handleTop} to="/delta-airline">
                        Delta Airlines
                          <span>
                            <i className="icofont-rounded-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-12"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="partner_flight_content">
                    <Link aria-label="KLM Royal Dutch" onClick={handleTop} to="/klm-royal-dutch-airline">
                      <div className="partner_flight_image">
                        <img src={require("../assets/img/flights/klm.webp")}
                        alt="KLM Royal Dutch"
                        height={"37"}
                        width={"200"}
                         />
                      </div>
                    </Link>
                    <div className="partner_flight_text my-3">
                      <Link aria-label="KLM Royal Dutch" onClick={handleTop} to="/klm-royal-dutch-airline">
                        <p  className="h4 text-dark">KLM Royal Dutch</p>
                        <p className="text-dark">Let your dreams fly higher!</p>
                      </Link>
                      <div className="partner_flight_button text-end">
                        <Link aria-label="KLM Royal Dutch" onClick={handleTop} to="/klm-royal-dutch-airline">
                        KLM Royal Dutch
                          <span>
                            <i className="icofont-rounded-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mx-0">
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-12"
                  data-aos="fade-up"
                >
                  <div className="partner_flight_content">
                    <Link aria-label="Jet Blue" onClick={handleTop} to="/jetBlue-airline">
                      <div className="partner_flight_image">
                        <img
                          src={require("../assets/img/flights/jetblue.webp")}
                          alt="Jet Blue"
                          height={"37"}
                          // width={"200"}
                        />
                      </div>
                    </Link>
                    <div className="partner_flight_text my-3">
                      <Link aria-label="Jet Blue" onClick={handleTop} to="/jetBlue-airline">
                        <p  className="h4 text-dark">Jet Blue</p>
                        <p className="text-dark">Let your dreams fly higher!</p>
                      </Link>
                      <div className="partner_flight_button text-end">
                        <Link aria-label="Jet Blue" onClick={handleTop} to="/jetBlue-airline">
                        Jet Blue
                          <span>
                            <i className="icofont-rounded-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-12"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="partner_flight_content">
                    <Link aria-label="Qatar Airways" onClick={handleTop} to="/qatar">
                      <div className="partner_flight_image">
                        <img src={require("../assets/img/flights/qatar.webp")} 
                        alt="Qatar Airways"
                        height={"37"}
                        // width={"200"}
                        />
                      </div>
                    </Link>
                    <div className="partner_flight_text my-3">
                      <Link aria-label="Qatar Airways" onClick={handleTop} to="/qatar">
                        <p  className="h4 text-dark">Qatar Airways</p>
                        <p className="text-dark">Let your dreams fly higher!</p>
                      </Link>
                      <div className="partner_flight_button text-end">
                        <Link aria-label="Qatar Airways" onClick={handleTop} to="/qatar">
                        Qatar Airways
                          <span>
                            <i className="icofont-rounded-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-12"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="partner_flight_content">
                    <Link aria-label="Alaska Airlines" onClick={handleTop} to="/alaska-airline">
                      <div className="partner_flight_image">
                        <img
                          src={require("../assets/img/flights/alaskaair.webp")}
                          alt="Alaska Airlines"
                          height={"37"}
                          // width={"200"}
                        />
                      </div>
                    </Link>
                    <div className="partner_flight_text my-3">
                      <Link aria-label="Alaska Airlines" onClick={handleTop} to="/alaska-airline">
                        <p  className="h4 text-dark">Alaska Airlines</p>
                        <p className="text-dark">Let your dreams fly higher!</p>
                      </Link>
                      <div className="partner_flight_button text-end">
                        <Link aria-label="Alaska Airlines" onClick={handleTop} to="/alaska-airline">
                        Alaska Airlines
                          <span>
                            <i className="icofont-rounded-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-12 col-12">
              <div
                className="col-lg-3 col-xl-3 partner_flight_call"
                data-aos="fade-left"
              >
                <div className="partner_flight_text position-absolute bottom-0 p-3 mt-auto">
                  <p  className="h4 text-white">
                    Why wait for the perfect moment?
                  </p>
                  <p className="text-white">Make it Happen Now!</p>
                  <Link aria-label="Get Quote!" to={hiddenNumber} className="btn text-white w-75 mt-3">
                    Get Quote!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FlyingPartners;
