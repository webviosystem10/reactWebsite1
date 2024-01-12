import React, { useEffect, useState } from "react";
import HotelForm from "./HotelForm";
import Aos from "aos";
// import FlightLoader from "./FlightLoader";
import HotelLoader from "./HotelLoader";
// import Loader from "./Loader";
import { useSelector, useDispatch } from "react-redux";
import {
  hotelTitle,
  hotelDesc,
  hotelKeyword,
  image,
  website,
  websiteName,
} from "../GlobalData/GlobalMetaData";
import Carousel from "react-multi-carousel";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
// import CTASection from "./CTASection";
// import OurAppCTA from "./OurAppCTA";
// import FillerSegment from "./FillerSegment";
import { getAddress, hotelPostFunction } from "../Model/GlobalFunction";
// import FAQModule from "./FAQModule";

const HotelLanding = () => {
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const responsiveSlider2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const loading = useSelector((state) => state.loading);
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  function hotelClick(rate, code) {
    window.scrollTo(0, 0);
    dispatch({
      type: "SET_HOTELPRICE",
      hotelPrice: `$${rate}`,
    });
    dispatch({
      type: "SET_HOTELCODE",
      hotelCode: code,
    });
    localStorage.setItem("hotelCode", code);
    localStorage.setItem("hotelPrice", `$${rate}`);
    navigate(`/hotel-detail/${code}`);
  }

  // Suggested destination click
  useEffect(() => {
    const update = new Date();
    const second = new Date();
    update.setDate(update.getDate() + 5);
    second.setDate(second.getDate() + 6);
    setDateFrom(update.toISOString().split("T")[0]);
    setDateTo(second.toISOString().split("T")[0]);
  }, []);
  // console.log(Number(dateFrom.slice(-2)));
  const offerSearch = (areaCode, area) => {
    window.scrollTo(0, 0);
    // e.preventDefault();
    async function fetchData() {
      dispatch({
        type: "SET_LOADING",
        loading: true,
      });
      dispatch({
        type: "SET_AREACODE",
        areaCode: areaCode,
      });
      localStorage.setItem("areaCode", areaCode);
      localStorage.setItem("checkin", dateFrom);
      localStorage.setItem("checkout", dateTo);
      dispatch({
        type: "SET_CHECKOUT",
        checkout: dateTo,
      });
      dispatch({
        type: "SET_CHECKIN",
        checkin: dateFrom,
      });
      dispatch({
        type: "SET_AREA",
        area: area,
      });
      localStorage.setItem("area", area);
      const data = {
        currency: "USD",
        eapid: 1,
        locale: "en_US",
        siteId: 300000001,
        destination: {
          regionId: areaCode,
        },
        checkInDate: {
          day: Number(dateFrom.slice(-2)),
          month: Number(dateFrom.slice(-5, -3)),
          year: Number(dateFrom.slice(0, 4)),
        },
        checkOutDate: {
          day: Number(dateTo.slice(-2)),
          month: Number(dateTo.slice(-5, -3)),
          year: Number(dateTo.slice(0, 4)),
        },
        rooms: [
          {
            adults: 1,
          },
        ],
        resultsStartingIndex: 0,
        resultsSize: 60,
        sort: "PRICE_LOW_TO_HIGH",
      };
      var offerData = await hotelPostFunction("properties/v2/list", data);

      var address = [];
      if (
        (offerData && offerData === "error") ||
        (offerData && offerData.data.length === 0)
      ) {
        setTimeout(() => {
          dispatch({
            type: "SET_LOADING",
            loading: false,
          });
        }, 1000);
        // navigate("/flight-not-found");
      } else if (
        offerData !== undefined &&
        offerData !== null &&
        offerData !== ""
      ) {
        var hotelData = offerData["data"]["data"]["propertySearch"][
          "properties"
        ]
          .filter((hotel) => {
            return !hotel["availability"]["available"] === false;
          })
          .map((hotel, index) => {
            return {
              id: hotel["id"],
              name: hotel["name"],
              image: hotel["propertyImage"]["image"]["url"],
              latitude: hotel["mapMarker"]["latLong"]["latitude"],
              longitude: hotel["mapMarker"]["latLong"]["longitude"],
              offerSummary: hotel["offerSummary"]["attributes"]?.[0]?.["type"],
              payLater: hotel["offerSummary"]["messages"]?.[1]?.["type"],
              price: hotel["price"]["options"]?.[0]?.["formattedDisplayPrice"],
              primary: hotel["offerBadge"]?.["primary"],
              ratingscore: hotel["reviews"]["score"],
              ratingtotal: hotel["reviews"]["total"],
              distance:
                hotel["destinationInfo"]["distanceFromDestination"]["value"],
              star: hotel["star"],
            };
          });
        if (hotelData.length > 1) {
          hotelData.map((hotel, index) => {
            async function fetchData() {
              const data = await getAddress(
                hotel["latitude"],
                hotel["longitude"]
              );
              if (data !== "error") {
                address.push([hotel["name"], data]);
              } else {
              }
            }
            fetchData();
            if (hotelData.length - 1 === index) {
              setTimeout(() => {
                dispatch({
                  type: "SET_LOADING",
                  loading: false,
                });
                navigate("/hotel-search");
              }, 2000);
            }
          });
        } else {
          console.log("|Not ok");
        }
        dispatch({
          type: "SET_HOTELS",
          hotels: hotelData,
        });
        localStorage.setItem("hotels", JSON.stringify(hotelData));

        setTimeout(() => {
          dispatch({
            type: "SET_ADDRESS",
            address: address,
          });
          localStorage.setItem("address", JSON.stringify(address));
        }, 1000);
      }
    }

    fetchData();
  };
  return (
    <>
      <Helmet>
        <title>{hotelTitle}</title>
        <meta name="description" content={hotelDesc} />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:site_name" content={websiteName} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={hotelTitle} />
        <meta property="og:description" content={hotelDesc} />
        <meta property="og:url" content={window.location.href} />
        <meta name="keywords" content={hotelKeyword} />
        <meta property="og:image" content={image} />
      </Helmet>
      {loading ? (
        <HotelLoader />
      ) : (
        <>
          <div className="main_wrapper hotel_listbox">
            {/* Search Form Start */}
            <div className="searchformyes pb-3 px-3">
              {/* <svg
                width="100%"
                height="100%"
                id="svg"
                viewBox="0 0 1440 590"
                xmlns="http://www.w3.org/2000/svg"
                className="transition duration-300 ease-in-out delay-150"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="25%"
                    y1="0%"
                    x2="50%"
                    y2="50%"
                  >
                    <stop offset="5%" stopColor="#28C7BF" />
                    <stop offset="95%" stopColor="#2fe6de" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0,600 C 0,600 0,300 0,300 C 92.74641148325358,274.8038277511962 185.49282296650716,249.60765550239233 282,257 C 378.50717703349284,264.39234449760767 478.77511961722496,304.37320574162675 565,317 C 651.224880382775,329.62679425837325 723.4066985645933,314.8995215311005 827,296 C 930.5933014354067,277.1004784688995 1065.5980861244018,254.0287081339713 1173,254 C 1280.4019138755982,253.9712918660287 1360.2009569377992,276.9856459330143 1440,300 C 1440,300 1440,600 1440,600 Z"
                  stroke="none"
                  strokeWidth={0}
                  fill="url(#gradient)"
                  fillOpacity={1}
                  className="transition-all duration-300 ease-in-out delay-150 path-0"
                  transform="rotate(-180 720 300)"
                />
              </svg> */}
              <div className="pt-3 pt-xl-5 pt-lg-5 pt-md-4 ps-0 ps-xl-3 pb-3">
                <p className="ms-0 ms-xl-4 fw-bold fs-3">
                  Find best hotels from 1000s of trusted partners
                </p>
              </div>
              <div className="col-12 col-xl-10 ps-0 ps-xl-3 ms-0 ms-xl-4">
                <HotelForm />
              </div>
            </div>
            {/* Search Form End */}
            {/* Filler Segment Start */}
            {/* <FillerSegment /> */}
            {/* Filler Segment End */}
            {/* Professional CTA Section Start */}
            {/* <CTASection /> */}
            {/* Professional CTA Section End */}
            {/* Trending Hotels Slider Start */}
            <div className="px-3 px-xl-5 px-lg-5 mt-5 slider_segment">
              <h4 className="mb-0">Hotels & Stays</h4>
              <span className="sub-heading">
                Unlock exclusive Hotel & Stays deals. Enjoy comfort, savings,
                and unforgettable experiences on your travels with our curated
                selections.
              </span>
              <div className="slider1 mt-3">
                <Carousel
                  responsive={responsive}
                  autoPlay={true}
                  infinite={true}
                  showDots={false}
                  showArrows={true}
                  className="pt-3"
                >
                  <div
                    onClick={() => hotelClick("91", "1564541")}
                    className="d-flex flex-wrap flight_slider_wrapper"
                  >
                    <div className="position-absolute bg-light textwrap_route">
                      <span>Direct</span>
                    </div>
                    <img
                      src={require("../assets/img/gallery/hotel5.webp")}
                      alt="place_img"
                      className="img3"
                    />
                    <div className="mt-2 textwrap_cont">
                      <div className="fw-bold">Normandie Hotel</div>
                      <span>from $91</span>
                    </div>
                  </div>
                  <div
                    onClick={() => hotelClick("63", "5660562")}
                    className="d-flex flex-wrap flight_slider_wrapper"
                  >
                    <div className="position-absolute bg-light textwrap_route">
                      <span>Direct</span>
                    </div>
                    <img
                      src={require("../assets/img/gallery/hotel2.webp")}
                      alt="place_img"
                      className="img3"
                    />
                    <div className="mt-2 textwrap_cont">
                      <div className="fw-bold">Bowery Grand Hotel</div>
                      <span>from $63</span>
                    </div>
                  </div>
                  <div
                    onClick={() => hotelClick("82", "8365826")}
                    className="d-flex flex-wrap flight_slider_wrapper"
                  >
                    <div className="position-absolute bg-light textwrap_route">
                      <span>Direct</span>
                    </div>
                    <img
                      src={require("../assets/img/gallery/hotel4.webp")}
                      alt="place_img"
                      className="img3"
                    />
                    <div className="mt-2 textwrap_cont">
                      <div className="fw-bold">Pahrump Nugget Hotel</div>
                      <span>from $82</span>
                    </div>
                  </div>
                  <div
                    onClick={() => hotelClick("46", "7735793")}
                    className="d-flex flex-wrap flight_slider_wrapper"
                  >
                    <div className="position-absolute bg-light textwrap_route">
                      <span>Direct</span>
                    </div>
                    <img
                      src={require("../assets/img/gallery/hotel6.webp")}
                      alt="place_img"
                      className="img3"
                    />
                    <div className="mt-2 textwrap_cont">
                      <div className="fw-bold">Wrigley Hostel</div>
                      <span>from $46</span>
                    </div>
                  </div>
                  <div
                    onClick={() => hotelClick("86", "11638533")}
                    className="d-flex flex-wrap flight_slider_wrapper"
                  >
                    <div className="position-absolute bg-light textwrap_route">
                      <span>Direct</span>
                    </div>
                    <img
                      src={require("../assets/img/gallery/hotel3.webp")}
                      alt="place_img"
                      className="img3"
                    />
                    <div className="mt-2 textwrap_cont">
                      <div className="fw-bold">Lavender Hotel</div>
                      <span>from $86</span>
                    </div>
                  </div>
                  <div
                    onClick={() => hotelClick("14", "15421614")}
                    className="d-flex flex-wrap flight_slider_wrapper"
                  >
                    <div className="position-absolute bg-light textwrap_route">
                      <span>Direct</span>
                    </div>
                    <img
                      src={require("../assets/img/gallery/hotel1.webp")}
                      alt="place_img"
                      className="img3"
                    />
                    <div className="mt-2 textwrap_cont">
                      <div className="fw-bold">Bhurban Apartments</div>
                      <span>from $14</span>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
            {/* Trending Hotels Slider End */}
            {/* Popular Hotels Start */}
            <div className="px-3 px-xl-5 px-lg-5 mt-5 XSflights_segment">
              <div className="row justify-content-between">
                {/* <svg viewBox="0 0 1000 220" className="planeanim">
                  <path
                    className="planePath"
                    id="planePath"
                    d="M 0 10 C 200 222 250 50 550 150 C 850 250 700 190 1000 200 "
                  />
                  <g id="plane" className="plane">
                    <polygon
                      className="fill1"
                      points="-141,-10 199,0 -198,-72 -188,-61 -171,-57 -184,-57 "
                    />
                    <polygon
                      className="fill2"
                      points="199,0 -141,-10 -163,63 -123,9 "
                    />
                    <polygon
                      className="fill3"
                      points="-95,39 -113,32 -123,9 -163,63 -105,53 -108,45 -87,48 -90,45 -103,41 -94,41 "
                    />
                    <path
                      className="fill4"
                      d="M-87 48l-21 -3 3 8 19 -4 -1 -1zm-26 -16l18 7 -2 -1 32 -7 -29 1 11 -4 -24 -1 -16 -18 10 23zm10 9l13 4 -4 -4 -9 0z"
                    />
                    <polygon
                      className="fill1"
                      points="-83,28 -94,32 -65,31 -97,38 -86,49 -67,70 199,0 -123,9 -107,27 "
                    />
                  </g>
                  <animateMotion
                    xlinkHref="#plane"
                    dur="6s"
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath xlinkHref="#planePath" />
                  </animateMotion>
                </svg> */}
                <div className="col-12 col-xl-3 col-lg-3 my-auto">
                  <h4>Popular Destinations</h4>
                  <span className="sub-heading">
                    Book cheap flights with our ticketing partners.
                  </span>
                </div>
                <div className="col-12 col-xl-9 col-lg-9 mt-3 mt-xl-0 mt-lg-0 secondCarousel">
                  <Carousel
                    responsive={responsiveSlider2}
                    autoPlay={false}
                    infinite={true}
                    showDots={true}
                    showArrows={false}
                    draggable={true}
                    className="pt-3"
                  >
                    <div className="retardedhotellist">
                      <div className="content">
                        <div
                          onClick={() =>
                            offerSearch(
                              "6053839",
                              "Dubai, Dubai, United Arab Emirates"
                            )
                          }
                        >
                          <img
                            src={require("../assets/img/hotels/popular_desti/dubai.webp")}
                            alt="dubai"
                            width="220px"
                          />
                          <span>
                            <p>Dubai</p>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="retardedhotellist">
                      <div className="content">
                        <div
                          onClick={() =>
                            offerSearch(
                              "2011",
                              "Los Angeles, California, United States of America"
                            )
                          }
                        >
                          <img
                            src={require("../assets/img/hotels/popular_desti/losangeles.webp")}
                            alt="los angeles"
                            width="220px"
                          />
                          <span>
                            <p>Los Angeles</p>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="retardedhotellist">
                      <div className="content">
                        <div
                          onClick={() =>
                            offerSearch(
                              "3593",
                              "Tokyo, Tokyo Prefecture, Japan"
                            )
                          }
                        >
                          <img
                            src={require("../assets/img/hotels/popular_desti/tokyo.webp")}
                            alt="tokyo"
                            width="220px"
                          />
                          <span>
                            <p>Tokyo</p>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="retardedhotellist">
                      <div className="content">
                        <div
                          onClick={() =>
                            offerSearch("4089", "Toronto, Ontario, Canada")
                          }
                        >
                          <img
                            src={require("../assets/img/hotels/popular_desti/toronto.webp")}
                            alt="toronto"
                            width="220px"
                          />
                          <span>
                            <p>Toronto</p>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="retardedhotellist">
                      <div className="content">
                        <div
                          onClick={() =>
                            offerSearch(
                              "2297",
                              "Miami, Florida, United States of America"
                            )
                          }
                        >
                          <img
                            src={require("../assets/img/hotels/popular_desti/miami.webp")}
                            alt="miami"
                            width="220px"
                          />
                          <span>
                            <p>Miami</p>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="retardedhotellist">
                      <div className="content">
                        <div
                          onClick={() =>
                            offerSearch(
                              "2008",
                              "Las Vegas, Nevada, United States of America"
                            )
                          }
                        >
                          <img
                            src={require("../assets/img/hotels/popular_desti/lasvegas.webp")}
                            alt="las vegas"
                            width="220px"
                          />
                          <span>
                            <p>Las Vegas</p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
            {/* Popular Hotels End */}

            {/* Other CTA Start */}
            {/* <OurAppCTA /> */}
            {/* Other CTA End */}

            {/* FAQ Mini Section Start */}
            {/* <FAQModule /> */}
            {/* FAQ Mini Section End */}
          </div>
        </>
      )}
    </>
  );
};

export default HotelLanding;
