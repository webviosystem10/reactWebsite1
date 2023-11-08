import React from "react";
import TripForm from "./TripForm";
import FlightLoader from "./FlightLoader";
import { useSelector } from "react-redux";
import {
  aboutDesc,
  aboutTitle,
  websiteName,
} from "../GlobalData/GlobalMetaData";
import { Helmet } from "react-helmet";
function About() {
  const loading = useSelector((state) => state.loading);
  return (
    <>
    <Helmet>
        <title>{aboutTitle}</title>
        <meta name="description" content={aboutDesc} />
      </Helmet>
      {loading ? (
        <FlightLoader />
      ) : (
        <>
          {/* Front Page */}
          <section>
            <div className="about_front_page about">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-12 col-md-12 col-xl-12 text-center aboutBanner_text">
                    <div className="front_page_text" data-aos="fade-up">
                      <h1>
                        About <span className="front_page_highlight">Us</span>
                      </h1>
                      <p className="text-white">
                        We are here to Make your Travel Comfortable.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-12 col-12 col-md-12 mx-auto mt-5 p-5 pb-0 padding_revert">
                    <div className="travel-search" data-aos="fade-up">
                      <TripForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About Us Details Section */}
          <section className="section_margin">
            <div className="about_content about">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12 pt-xl-0 pt-lg-0 pt-5 mt-xl-0 mt-lg-0 text-center">
                    <h1>
                      <sup>
                        <i
                          className="icofont-rounded-left-up prim-color"
                          data-aos="fade-left"
                        />
                      </sup>
                      Why {websiteName}?
                      <sub>
                        <i
                          className="icofont-rounded-right-down prim-color"
                          data-aos="fade-left"
                          data-aos-delay={100}
                        />
                      </sub>
                    </h1>
                    <p className="text-white-1">Whatchu looking for mate?</p>
                  </div>
                  <div className="col-xl-8 p-5 text_content mx-auto">
                    <p data-aos="fade">
                      Aliquip duis ex consequat elit aliquip excepteur velit
                      aute. Duis velit non velit velit ad fugiat labore ut
                      veniam magna consequat. Cupidatat consequat mollit ut
                      minim ipsum et dolor cupidatat deserunt ea excepteur. Anim
                      ea incididunt irure labore proident id veniam Lorem fugiat
                      commodo.
                    </p>
                    <p data-aos="fade">
                      Pariatur veniam aliqua nulla cupidatat irure laboris. Do
                      laborum sint velit aliqua minim duis cillum incididunt
                      officia quis proident ut. Cillum esse eu sit est pariatur.
                      Enim eu irure ipsum ex esse incididunt excepteur aliquip
                      quis in cillum eiusmod nisi. Nulla Lorem nulla id laboris
                      ea eiusmod est ipsum et ipsum cupidatat in. Ea ipsum et
                      dolore nisi incididunt.
                    </p>
                    <p data-aos="fade">
                      Est duis adipisicing adipisicing velit. Anim exercitation
                      consequat ad officia. Esse culpa nulla commodo dolor.
                      Exercitation nulla quis ex ut sint irure duis cupidatat
                      laboris elit. Nulla sint aliqua aliquip eiusmod excepteur
                      Lorem dolore aute sit ut laborum amet. Ut exercitation eu
                      id ut ipsum eiusmod consectetur. Enim dolore nulla ad enim
                      cillum sit aliquip proident velit dolor duis et.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About Us Details Section End */}
          {/* Banner Section */}
          <section className="filler_banner" id="banner3">
            <div className="container">
              <div className="black-overlay" />
              <div className="row">
                <div
                  className="col-lg-8 col-12 py-xl-2 py-lg-2 py-0 my-xl-4 my-lg-4 my-0"
                  data-aos="fade-right"
                >
                  <span className="filler_banner_span">Relax &amp; Enjoy</span>
                  <h1 className="my-2">
                    Get your <span className="front_page_highlight">Bags!</span>{" "}
                    Leave the rest to{" "}
                    <span className="front_page_highlight">US</span>!
                  </h1>
                  <p className="my-2">
                    We are here to Make your Journey Comfortable.
                  </p>
                  <a href="#" className="btn my-2">
                    Get Quote <i className="icofont-caret-right" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Banner Section End */}
          {/* About Us Content Table */}
          <section className="my-5">
            <div className="about_content_list about">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="row mx-0">
                      <div className="col-xl-12 col-lg-12 text_content">
                        <h1>
                          Our Mission{" "}
                          <i
                            className="icofont-hand-drawn-right prim-color"
                            data-aos="fade-right"
                          />
                        </h1>
                        <p className="p-3 py-5">
                          Id labore eu do eu sunt non. Cupidatat sunt eiusmod
                          proident est occaecat eu sunt enim cupidatat aliquip
                          irure. Elit labore est aliqua exercitation labore in
                          enim proident. Eu aliquip adipisicing anim ut tempor
                          proident culpa. Enim ea laborum tempor voluptate sunt
                          dolore consequat ipsum consectetur sit laboris. Anim
                          culpa magna duis veniam ipsum laborum nostrud occaecat
                          esse consectetur.
                        </p>
                      </div>
                    </div>
                    <div className="row mx-0">
                      <div className="col-xl-12 col-lg-12 p-5 text_content">
                        <p className="fst-italic fw-light">
                          Travel is fatal to prejudice, bigotry, and
                          narrow-mindedness, and many of our people need it
                          sorely on these accounts. Broad, wholesome, charitable
                          views of men and things cannot be acquired by
                          vegetating in one little corner of the earth all one’s
                          lifetime.
                        </p>
                        <p className="text-end fw-semibold">
                          - Mark Twain, 1869
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="col-xl-12 cl-lg-12 text_content">
                      <h1>
                        Our Core Values{" "}
                        <i
                          className="icofont-hand-drawn-down prim-color"
                          data-aos="fade-down"
                        />
                      </h1>
                      <ul className="p-3 py-5">
                        <li data-aos="fade-up">
                          <div className="row">
                            <div className="col-auto align-middle">
                              <img
                                src={require("../assets/img/gallery/saleico.webp")}
                                width={"50"}
                                height={"50"}
                                alt="saleico"
                                className="my-2"
                              />
                            </div>
                            <div className="col-auto">
                              <h4>Best Price at Best Airlines</h4>
                              <p>Get the best deals on your desired flights.</p>
                            </div>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={100}>
                          <div className="row">
                            <div className="col-auto">
                              <img
                                src={require("../assets/img/gallery/officeico.webp")}
                                width={"50"}
                                height={"50"}
                                alt="officeico"
                                className="my-3"
                              />
                            </div>
                            <div className="col-auto">
                              <h4>Promote meritocracy</h4>
                              <p>
                                Advancement based on achievement and attitude{" "}
                                <br />
                                not tenure or pedigree.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={200}>
                          <div className="row">
                            <div className="col-auto">
                              <img
                                src={require("../assets/img/gallery/planeico.webp")}
                                width={"50"}
                                height={"50"}
                                alt="planeico"
                                className="my-2"
                              />
                            </div>
                            <div className="col-auto">
                              <h4>Love Travel &amp; Technology</h4>
                              <p>
                                We pride ourselves on being both explorers and
                                geeks.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay={300}>
                          <div className="row">
                            <div className="col-auto">
                              <img
                                src={require("../assets/img/gallery/globeico.webp")}
                                width={"50"}
                                height={"50"}
                                alt="globeico"
                                className="my-3"
                              />
                            </div>
                            <div className="col-auto">
                              <h4>Use global benchmarks</h4>
                              <p>
                                We want to be the world’s best at what we do,
                                <br /> not just local champions.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About Us Content Table End */}
        </>
      )}
    </>
  );
}

export default About;
