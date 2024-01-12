import React, { useEffect, useState } from "react";
import HotelForm from "./HotelForm";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import FlightLoader from "./FlightLoader";
import HotelDetailsLoader from "./HotelDetailsLoader";
import Loader from "./Loader";
import {
  hotelSearchDesc,
  hotelSearchKeyword,
  hotelSearchTitle,
  image,
  visibleNumber,
  websiteName,
} from "../GlobalData/GlobalMetaData";
import { Helmet } from "react-helmet";

const HotelSearch = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);
  const address = useSelector((state) => state.address);
  const hotels = useSelector((state) => state.hotels);
  const area = useSelector((state) => state.area);
  const loading = useSelector((state) => state.loading);
  const checkout = useSelector((state) => state.checkout);
  const checkin = useSelector((state) => state.checkin);
  const [filterOption, setFilterOption] = useState("Price");
  const [filterPrice, setFilterPrice] = useState(
    Number(hotels[hotels.length - 1]["price"].replace("$", ""))
  );
  const [filterData, setFilterData] = useState(hotels);
  useEffect(() => {
    setFilterPrice(Number(hotels[hotels.length - 1]["price"].replace("$", "")));
    setFilterData(hotels);
  }, [hotels]);
  const findDayOfWeek = (dateString) => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const date = new Date(dateString);
    const dayOfWeek = daysOfWeek[date.getDay()];

    return dayOfWeek;
  };
  const findMonthOfWeek = (date) => {
    const month = new Date(date).toLocaleDateString(undefined, {
      month: "long",
    });
    return month.slice(0, 3);
  };
  const findDay = (date) => {
    const day = new Date(date).toLocaleDateString(undefined, {
      day: "numeric",
    });
    return day;
  };

  const distanceFilter = [...hotels];
  distanceFilter.sort((a, b) => a.distance - b.distance);
  const minPrice = Number(hotels[0]["price"].replace("$", ""));
  const maxPrice = Number(hotels[hotels.length - 1]["price"].replace("$", ""));

  // Write function that will execute every time when filter price is changing
  useEffect(() => {
    const filterDataPrice = hotels.filter(
      (item) => Number(item["price"].replace("$", "")) <= Number(filterPrice)
    );
    setFilterData([...filterDataPrice]);
  }, [filterPrice, hotels]);

  // This function is for mile and price sorting
  useEffect(() => {
    if (filterOption === "Price") {
      setFilterData(hotels);
    } else {
      setFilterData(distanceFilter);
    }
  }, [filterOption]);

  function dealClick(rate, code) {
    window.scrollTo(0, 0);
    dispatch({
      type: "SET_HOTELPRICE",
      hotelPrice: rate,
    });
    dispatch({
      type: "SET_HOTELCODE",
      hotelCode: code,
    });
    localStorage.setItem("hotelCode", code);
    localStorage.setItem("hotelPrice", rate);
    navigate(`/hotel-detail/${code}`);
  }

  console.log(address,hotels,"This is address");
  return (
    <>
      <>
        <Helmet>
          <title>{hotelSearchTitle}</title>
          <meta name="description" content={hotelSearchDesc} />
          <link rel="canonical" href={window.location.href} />
          <meta property="og:site_name" content={websiteName} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={hotelSearchTitle} />
          <meta property="og:description" content={hotelSearchDesc} />
          <meta property="og:url" content={window.location.href} />
          <meta name="keywords" content={hotelSearchKeyword} />
          <meta property="og:image" content={image} />
        </Helmet>
      </>
      {loading ? (
        <HotelDetailsLoader />
      ) : (
        <>
          <section className="main_wrapper">
            <section
              className="bg-white pb-3"
              style={{ marginTop: `60px`, paddingTop: "20px" }}
            >
              <div>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <a
                        className="col-auto"
                        data-bs-toggle="collapse"
                        href="#collapseExample"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        <span className="fs-6 fw-normal text-muted">
                          {area} <i class="icofont-curved-down"></i>
                        </span>
                        <br />
                        <span className="fw-light text-muted">
                          {`${findDayOfWeek(checkin)} ${findMonthOfWeek(
                            checkin
                          )} ${findDay(checkin)}`}{" "}
                          -{" "}
                          {`${findDayOfWeek(checkout)} ${findMonthOfWeek(
                            checkout
                          )} ${findDay(checkout)}`}
                        </span>
                      </a>
                    </div>

                    {/* <div
                      onClick={() => mileFilter()}
                      className="col-auto text-end border"
                    >
                      Mile low high Filter
                    </div>
                    <div
                      onClick={() => priceFilter()}
                      className="col-auto text-end border"
                    >
                      Price low to high Filter
                    </div> */}

                    <div
                      className="collapse mt-2 border-top"
                      id="collapseExample"
                    >
                      <HotelForm />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <LoadingBar
              className="top-loadingbar"
              color="#0082ff"
              progress={progress}
              onLoaderFinished={() => setProgress(0)}
            />
            <section className="flight_search_list_section">
              <div className="container mt-3">
                <div className="row">
                  <div className="col-12 text-end pe-xl-5 mb-3">
                    <label htmlFor="cars" className="me-2">
                      Sort By:
                    </label>
                    <select
                      className="travelClass border bg-white rounded"
                      onChange={(e) => setFilterOption(e.target.value)}
                    >
                      <option value="Price">Price - Low to High</option>
                      <option value="Mile">Mile - Low to High</option>
                    </select>
                  </div>
                  <div className="col-xl-12 px-0">
                    {filterData && filterData.length > 0 ? (
                      filterData.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="row flight_search_listwrap mx-xl-5 mx-lg-5 mx-2"
                          >
                            {/* Item in List Page */}
                            <div
                              className="col-xl-12 col-lg-12 col-12 col-md-12 bg-light mb-3 px-0 rounded-3 flight_search_listbox"
                              id="hotel"
                            >
                              <div className="row justify-content-between px-xl-2 px-lg-2 px-1">
                                <div className="col-12 col-xl-3 ps-xl-1 hotelListImageContainer">
                                  <img
                                    src={item["image"]}
                                    width={"100%"}
                                    height={"100%"}
                                    alt="hotel"
                                    onLoad={(e) => {
                                      e.target.style.display = "block"; // Show the image if it loads successfully
                                      // Optionally, you can hide the loading indicator here
                                    }}
                                    className="p-2 my-auto"
                                    style={{
                                      borderRadius: `15px`,
                                      objectFit: `cover`,
                                    }}
                                  />
                                </div>
                                <div className="col-12 col-xl-7 text-start m-auto">
                                  <div className="fw-bold fs-4">
                                    {item["name"]}
                                  </div>
                                  <div>
                                    <span className="fw-semibold text-info">
                                      Locality
                                    </span>{" "}
                                    |{" "}
                                    <span className="text-muted">
                                      {item["distance"]} miles from {area}
                                    </span>
                                  </div>
                                  <ul className="pt-0 mt-2 px-0 mb-0">
                                    <li>
                                    <i class="icofont-ui-calendar"></i>{" "}
                                      <span className="text-muted">
                                        Booking Available from{" "}
                                        <span className="fw-medium">{`${findDayOfWeek(
                                          checkin
                                        )} ${findMonthOfWeek(
                                          checkin
                                        )} ${findDay(checkin)}`}</span>
                                      </span>
                                    </li>
                                    <li className="py-2">
                                    <i class="icofont-location-pin"></i>{" "}
                                      <span className="text-muted">
                                        {address
                                          ? address
                                              .filter(
                                                (items) =>
                                                  items[0] === item["name"]
                                              )
                                              .map((items) => items[1])
                                          : ""}
                                        .
                                      </span>
                                    </li>
                                  </ul>
                                  <ul className="d-flex pt-0 mt-0 p-0">
                                    {item["offerSummary"] ===
                                    "FREE_CANCELLATION" ? (
                                      <li className="text-center me-2 icon_wrapper">
                                        <i class="icofont-dollar"></i>{" "}
                                        Free Cancel
                                      </li>
                                    ) : (
                                      ""
                                    )}
                                    {item["payLater"] === "PAY_LATER" ? (
                                      <li className="text-center mx-2 icon_wrapper">
                                        <i class="icofont-clock-time"></i>{" "}
                                        Pay Later
                                      </li>
                                    ) : (
                                      ""
                                    )}
                                    {item["primary"] === null ? (
                                      ""
                                    ) : (
                                      <li className="text-center mx-2 icon_wrapper">
                                        <i class="icofont-crown"></i>{" "}
                                        Member Deals
                                      </li>
                                    )}
                                  </ul>
                                </div>
                                <div className="col-12 col-xl-2 my-auto border-start">
                                  <div className="px-0 py-0 py-xl-1 py-lg-1 text-center hotelPriceBox">
                                    <ul className="text-start p-0 mb-2">
                                      <li className="fw-bold fs-4">
                                        {item["price"]}
                                      </li>
                                      <li className="fw-light text-muted">
                                        + taxes & fees
                                      </li>
                                      <li className="fw-semibold text-muted">
                                        Per Night
                                      </li>
                                    </ul>
                                    <button
                                      onClick={() =>
                                        dealClick(item["price"], item["id"])
                                      }
                                      className="flight_book_btn d-flex mb-1 w-100"
                                    >
                                      <span className="fw-medium text-nowrap">
                                        View Deal
                                      </span>
                                    </button>
                                  </div>
                                  <div className="hotelPriceBoxPhone">
                                    <div className="container">
                                      <div className="row">
                                        <div className="col-6 d-flex justify-content-evenly px-0 ps-1">
                                          <div
                                            className="col-auto fw-bold my-auto text-start"
                                            style={{ fontSize: 30 }}
                                          >
                                            {item["price"]}
                                          </div>
                                          <div className="col-auto text-end">
                                            <div className="fw-light text-muted">
                                              + taxes & fees
                                            </div>
                                            <div className="fw-semibold text-muted">
                                              Per Night
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-6 my-auto pe-0">
                                          <button
                                            onClick={() =>
                                              dealClick(
                                                item["price"],
                                                item["id"]
                                              )
                                            }
                                            className="flight_book_btn d-flex mb-1 w-100"
                                          >
                                            <span className="fw-medium text-nowrap">
                                              View Deal
                                            </span>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="col-xl-12 col-lg-12 col-12 col-md-12 bg-light p-3 mb-3 border border-1 rounded shadow-sm flight_search_listbox">
                        <p className="alert">
                          Sorry! Something went wrong. Please remove some
                          filters and choose a suitable hotel offer price. Call
                          toll free number {visibleNumber} for instant booking
                          and $50.00 discount
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </section>
        </>
      )}
    </>
  );
};

export default HotelSearch;
