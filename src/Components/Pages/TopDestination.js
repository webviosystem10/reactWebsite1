import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function TopDestination() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <p className="h1">
              <sup>
                <i
                  className="icofont-rounded-left-up prim-color"
                  data-aos="fade"
                />
              </sup>
              Top Destinations
              <sub>
                <i
                  className="icofont-rounded-right-down prim-color"
                  data-aos="fade"
                  data-aos-delay={100}
                />
              </sub>
            </p>
            <p className="text-white-1">Ready to find your next obsession?</p>
          </div>
          {/* <div className="flights-slider"> */}
          {/* <Slider {...settings} className="flights-slider"> */}
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            showDots={true}
            showArrows={false}
          >
            <div className="slider-content">
              <a href="#">
                <div className="flights-slider-img">
                  <img
                    src={require("../assets/img/gallery/london.webp")}
                    alt="top destination"
                    width={"183"}
                    height={"183"}
                  />
                </div>
                <div className="flights-slider-text">
                  <p className="h5">Idaho</p>
                  <p>Somewhere Unknown</p>
                </div>
              </a>
            </div>
            <div className="slider-content">
              <a href="#">
                <div className="flights-slider-img">
                  <img
                    src={require("../assets/img/gallery/london.webp")}
                    alt="top destination"
                    width={"183"}
                    height={"183"}
                  />
                </div>
                <div className="flights-slider-text">
                  <p className="h5">Zephyr</p>
                  <p>Somewhere Unknown</p>
                </div>
              </a>
            </div>
            <div className="slider-content">
              <a href="#">
                <div className="flights-slider-img">
                  <img
                    src={require("../assets/img/gallery/london.webp")}
                    alt="top destination"
                    width={"183"}
                    height={"183"}
                  />
                </div>
                <div className="flights-slider-text">
                  <p className="h5">Zephyr</p>
                  <p>Somewhere Unknown</p>
                </div>
              </a>
            </div>
            <div className="slider-content">
              <a href="#">
                <div className="flights-slider-img">
                  <img
                    src={require("../assets/img/gallery/london.webp")}
                    alt="top destination"
                    width={"183"}
                    height={"183"}
                  />
                </div>
                <div className="flights-slider-text">
                  <p className="h5">Zephyr</p>
                  <p>Somewhere Unknown</p>
                </div>
              </a>
            </div>
            <div className="slider-content">
              <a href="#">
                <div className="flights-slider-img">
                  <img
                    src={require("../assets/img/gallery/london.webp")}
                    alt="top destination"
                    width={"183"}
                    height={"183"}
                  />
                </div>
                <div className="flights-slider-text">
                  <p className="h5">Zephyr</p>
                  <p>Somewhere Unknown</p>
                </div>
              </a>
            </div>
            <div className="slider-content">
              <a href="#">
                <div className="flights-slider-img">
                  <img
                    src={require("../assets/img/gallery/london.webp")}
                    alt="top destination"
                    width={"183"}
                    height={"183"}
                  />
                </div>
                <div className="flights-slider-text">
                  <p className="h5">Zephyr</p>
                  <p>Somewhere Unknown</p>
                </div>
              </a>
            </div>
          </Carousel>
          {/* </div> */}
        </div>
      </section>
    </>
  );
}

export default TopDestination;
