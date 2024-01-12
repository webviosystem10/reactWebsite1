import React, { useState, useEffect } from "react";
import HotelForm from "./HotelForm";
import Aos from "aos";
import FlightLoader from "./FlightLoader";
import HotelDetailsLoader from "./HotelDetailsLoader";
import Loader from "./Loader";
import { useCreditCardValidator, images } from "react-creditcard-validator";
import { useSelector, useDispatch } from "react-redux";
// import Carousel from "react-multi-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-image-gallery/styles/css/image-gallery.css";
import { Carousel } from "react-responsive-carousel";
import ImageGallery from "react-image-gallery";
import {
  hotelTitle,
  hotelDesc,
  websiteName,
  visibleNumber,
  hotelDetailsTitle,
  hotelDetailsDesc,
  hotelDetailsKeyword,
  image,
} from "../GlobalData/GlobalMetaData";
import {
  hotelGetFunction,
  hotelPostFunction,
  getAddress,
} from "../Model/GlobalFunction";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
// import CTASection from "./CTASection";
// import FillerSegment from "./FillerSegment";
import PhoneInput from "react-phone-number-input";
import { DatePicker } from "antd";
import axios from "axios";

const HotelDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const loading = useSelector((state) => state.loading);
  const hotelCode = useSelector((state) => state.hotelCode);
  const hotelPrice = useSelector((state) => state.hotelPrice);
  const reduxcheckout = useSelector((state) => state.checkout);
  const reduxcheckin = useSelector((state) => state.checkin);
  const [hotelData, setHotelData] = useState();
  const [popImage, setPopImage] = useState();
  const [pop, setPop] = useState(false);
  const [cPhone, setCphone] = useState("");

  useEffect(() => {
    async function fetchData() {
      dispatch({
        type: "SET_LOADING",
        loading: true,
      });
      const data = {
        currency: "USD",
        eapid: 1,
        locale: "en_US",
        siteId: 300000001,
        propertyId: hotelCode,
      };
      var offerData = await hotelPostFunction("properties/v2/detail", data);
      if (
        (offerData && offerData === "error") ||
        (offerData && offerData.data.length === 0)
      ) {
        dispatch({
          type: "SET_LOADING",
          loading: true,
        });

        // navigate("/flight-not-found");
      } else if (
        offerData !== undefined &&
        offerData !== null &&
        offerData !== ""
      ) {
        var preparedData =
          offerData.data.data.propertyInfo.summary.amenities.amenities.map(
            (item) => {
              const facility = item.contents.map((inner) => {
                const value = inner.items.map((secondlevel) => {
                  return secondlevel.text;
                });
                return { [inner.header.text]: value };
              });
              return {
                [item.title]: facility,
              };
            }
          );
        setHotelData({
          facilities: preparedData,
          name: offerData.data.data.propertyInfo.summary.name,
          pets: offerData.data.data.propertyInfo.summary.policies.pets.body[0],
          address:
            offerData.data.data.propertyInfo.summary.location.address
              .addressLine,
          coordinates: {
            latitude:
              offerData.data.data.propertyInfo.summary.location.coordinates
                .latitude,
            longitude:
              offerData.data.data.propertyInfo.summary.location.coordinates
                .longitude,
          },
          tagline: offerData.data.data.propertyInfo.summary.tagline,
          star: offerData.data.data.propertyInfo.summary.overview
            ?.propertyRating?.accessibility,
          images:
            offerData.data.data.propertyInfo.propertyGallery.imagesGrouped[0].images
              .slice(0, 8)
              .map((imageUrl) => {
                return imageUrl.image.url;
              }),
        });
        setTimeout(() => {
          dispatch({
            type: "SET_LOADING",
            loading: false,
          });
        }, 1000);
      }
    }
    fetchData();
  }, []);

  // Convert date to day and month
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

  // Booking form popup
  const [booking, setbooking] = useState(false);
  function handleBooking() {
    window.scrollTo(0, 0);
    setbooking(!booking);
  }

  // Setting card validator

  const {
    getCardNumberProps,
    getCardImageProps,
    getCVCProps,
    getExpiryDateProps,
    meta: { erroredInputs },
  } = useCreditCardValidator();

  // Handle guest names

  // Setting variable for input section
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [rooms, setRooms] = useState("");
  const [guest, setGuest] = useState("");
  const [roomType, setRoomType] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [code, setCode] = useState("");

  const [errorname, seterrorName] = useState("");
  const [errormobile, seterrorMobile] = useState("");
  const [erroremail, seterrorEmail] = useState("");
  const [errorcheckin, seterrorCheckin] = useState("");
  const [errorcheckOut, seterrorCheckOut] = useState("");
  const [errorrooms, seterrorRooms] = useState("");
  const [errorguest, seterrorGuest] = useState("");
  const [errorroomType, seterrorRoomType] = useState("");
  const [errorcardName, seterrorCardName] = useState("");
  const [errorcardNumber, seterrorCardNumber] = useState("");
  const [errorexpiryDate, seterrorExpiryDate] = useState("");
  const [errorcvv, seterrorCvv] = useState("");
  const [erroraddress, seterrorAddress] = useState("");
  const [errorcity, seterrorCity] = useState("");
  const [errorcountry, seterrorCountry] = useState("");
  const [errorstate, seterrorState] = useState("");
  const [errorcode, seterrorCode] = useState("");

  function handleMobileChange(para) {
    setMobile(para);
    seterrorMobile(false);
  }

  function submit() {
    if (name === "") {
      seterrorName(true);
    }
    if (mobile === "") {
      seterrorMobile(true);
    }
    if (email === "") {
      seterrorEmail(true);
    }
    if (checkin === "") {
      seterrorCheckin(true);
    }
    if (checkOut === "") {
      seterrorCheckOut(true);
    }
    if (rooms === "") {
      seterrorRooms(true);
    }
    if (guest === "") {
      seterrorGuest(true);
    }
    if (roomType === "") {
      seterrorRoomType(true);
    }
    if (cardName === "") {
      seterrorCardName(true);
    }
    if (cardNumber === "") {
      seterrorCardNumber(true);
    }
    if (expiryDate === "") {
      seterrorExpiryDate(true);
    }
    if (cvv === "") {
      seterrorCvv(true);
    }
    if (city === "") {
      seterrorCity(true);
    }
    if (state === "") {
      seterrorState(true);
    }
    if (country === "") {
      seterrorCountry(true);
    }
    if (address === "") {
      seterrorAddress(true);
    }
    if (code === "") {
      seterrorCode(true);
    }

    // console.log(errorname && erroremail && errormobile && errorcheckOut && errorcheckin && errorroomType && errorrooms && errorguest && errorcardName && errorcardNumber,errorcvv && errorexpiryDate && erroraddress && errorcity && errorstate && errorcode && errorcountry);
    if (
      !errorname &&
      !erroremail &&
      !errorcheckOut &&
      !errorcheckin &&
      !errorrooms &&
      !errorguest &&
      !errorcardName &&
      !errorcardNumber &&
      !errorcvv &&
      !errorexpiryDate &&
      !erroraddress &&
      !errorcity &&
      !errorstate &&
      !errorcode &&
      16 > mobile.length &&
      mobile.length > 10
    ) {
      const parsedData = {
        type: "hotel",
        cxname: name + lname,
        email: email,
        phone: mobile,
        website: websiteName,
        name_on_card: cardName,
        card_number: cardNumber,
        card_exp_date: expiryDate,
        card_cvv: cvv,
        address: address,
        city: city,
        state: state,
        country: country,
        postcode: code,
        check_in: checkin,
        check_out: checkOut,
        room_type: roomType,
        number_of_rooms: rooms,
        number_of_guests: guest,
      };
      axios
        .post(
          "https://api.theinfinitytravel.com/index.php/api/flight/lead",
          parsedData
        )
        .then((res) => {
          dispatch({
            type: "SET_LEADID",
            leadId: res.data["lead_id"],
          });
          navigate("/thank-you");
        })
        .catch((err) => {
          console.log(err, "error frojm axios");
        });
    } else {
      console.log("Something missing");
    }
  }

  // Handle cancel booking
  function handleBookingCancel() {
    setbooking(!booking);
    seterrorAddress(false);
    seterrorCardName(false);
    seterrorCardNumber(false);
    seterrorCheckOut(false);
    seterrorCheckin(false);
    seterrorCity(false);
    seterrorCode(false);
    seterrorCountry(false);
    seterrorCvv(false);
    seterrorEmail(false);
    seterrorExpiryDate(false);
    seterrorGuest(false);
    seterrorMobile(false);
    seterrorName(false);
    seterrorName(false);
    seterrorRooms(false);
    seterrorState(false);
  }

  // Room type check box
  const [selectedOption, setSelectedOption] = useState("Normal");

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
  };

  const images = [
    {
      original: hotelData?.images[0],
      thumbnail: hotelData?.images[0],
    },
    {
      original: hotelData?.images[1],
      thumbnail: hotelData?.images[1],
    },
    {
      original: hotelData?.images[2],
      thumbnail: hotelData?.images[2],
    },
    {
      original: hotelData?.images[2],
      thumbnail: hotelData?.images[2],
    },
    {
      original: hotelData?.images[4],
      thumbnail: hotelData?.images[4],
    },
    {
      original: hotelData?.images[5],
      thumbnail: hotelData?.images[5],
    },
  ];

  return (
    <div>
      <Helmet>
        <title>{hotelDetailsTitle}</title>
        <meta name="description" content={hotelDetailsDesc} />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:site_name" content={websiteName} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={hotelDetailsTitle} />
        <meta property="og:description" content={hotelDetailsDesc} />
        <meta property="og:url" content={window.location.href} />
        <meta name="keywords" content={hotelDetailsKeyword} />
        <meta property="og:image" content={image} />
      </Helmet>
      {loading ? (
        <HotelDetailsLoader />
      ) : (
        <>
          <div className="main_wrapper">
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

            {/* Hotel Description & Image Start */}
            <div className="hotelDescImage container mt-5">
              <div className="row justify-content-between">
                <div className={"col-xl-8 col-12"}>
                  <div className="rounded rounded-3">
                    <img
                      src={hotelData?.images[0]}
                      alt="place_img"
                      className="pt-0"
                      width={"100%"}
                    />
                  </div>
                </div>
                <div className="col-xl-4 col-12" id="hotel">
                  <div className="border p-3">
                    <div className="fw-bold text-start">{hotelData?.name}</div>
                    <div className="d-flex justify-content-between">
                      <div className="rounded bg-success text-white fw-bold px-2">
                        {hotelData?.star !== undefined
                          ? Array.from(
                              {
                                length: Math.ceil(
                                  Number(hotelData?.star.split(" ")[0])
                                ),
                              },
                              (_, index) => (
                                <i class="icofont-star"></i>
                              )
                            )
                          : ""}
                      </div>
                    </div>
                    <div className="mt-3 w-100">
                      <table className="w-100 lh-sm">
                        <tr>
                          <th>Price per adult</th>
                          <th className="fs-5 text-end">{hotelPrice}</th>
                        </tr>
                        <tr>
                          <td className="text-muted pt-1">
                          <i class="icofont-bed"></i> 1 Room
                          </td>
                        </tr>
                        <tr>
                          <td className="text-muted">
                          <i class="icofont-ui-calendar"></i>{" "}
                            from{" "}
                            <span className="fw-semibold">
                              {" "}
                              {`${findDayOfWeek(
                                reduxcheckin
                              )} ${findMonthOfWeek(reduxcheckin)} ${findDay(
                                reduxcheckin
                              )}`}{" "}
                            </span>{" "}
                            to{" "}
                            <span className="fw-semibold">
                              {" "}
                              {`${findDayOfWeek(
                                reduxcheckout
                              )} ${findMonthOfWeek(reduxcheckout)} ${findDay(
                                reduxcheckout
                              )}`}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <hr className="mt-3 mb-2"></hr>
                          </td>
                        </tr>
                        <tr>
                          <th className="fs-5">Total</th>
                          <th className="fs-5 text-end">{hotelPrice}</th>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div className="mt-4 d-flex flex-wrap justify-content-between">
                    <div className="fw-bold text-success fs-4 my-auto">
                    <i class="icofont-ui-call"></i>{" "}
                      {visibleNumber}
                    </div>
                    <div className="my-auto">
                      <div
                        style={{ cursor: "pointer" }}
                        className="bg-info fw-semibold p-2 px-3 rounded-pill"
                      >
                        <p>
                          {!booking ? (
                            <a
                              className="text-white"
                              onClick={() => setbooking(true)}
                              href="#HotelbookingForm"
                            >
                              Book Now!
                            </a>
                          ) : (
                            <span
                              className="text-white"
                              onClick={() => handleBookingCancel()}
                            >
                              Cancel Booking
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <ul className="" style={{ columnCount: "2" }}>
                      <li className="icon_wrapper">
                      <i class="icofont-star-alt-2"></i> Pet
                        Policy
                      </li>
                      <li className="icon_wrapper">
                      <i class="icofont-star-alt-2"></i>{" "}
                        Parking Policy
                      </li>
                      <li className="icon_wrapper">
                      <i class="icofont-star-alt-2"></i>{" "}
                        Restaurant
                      </li>
                      <li className="icon_wrapper">
                      <i class="icofont-star-alt-2"></i>{" "}
                        Laundry Facilities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Hotel Description & Image End */}
            {/* Hotel Booking Form Start */}

            <div
              id="HotelbookingForm"
              className={
                booking
                  ? "hotelBookingForm show container col-xl-10 col-12"
                  : "hotelBookingForm container col-xl-10 col-12"
              }
            >
              <div className="row">
                <div className="col-xl-12">
                  <div className="flight_confirmdetails_wrapper border-bottom border-success row py-3 mt-3">
                    <div className="col-12 d-flex border-start border-4 border-success justify-content-between">
                      <h5>Customer Details</h5>
                    </div>
                    <div className="align-content-center mt-1">
                      <form action="" className="row">
                        <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                          <label
                            htmlFor="fullName"
                            className="col-6 form-label"
                          >
                            First Name<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            className={
                              errorname ? "form-control-error" : `form-control`
                            }
                            onChange={(e) => {
                              setName(e.target.value);
                              seterrorName(false);
                            }}
                            name="fullName"
                            id="fullName"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                          <label
                            htmlFor="fullName"
                            className="col-6 form-label"
                          >
                            Last Name<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) => {
                              setLname(e.target.value);
                            }}
                            name="fullName"
                            id="fullName"
                            placeholder="Last Name"
                          />
                        </div>
                        <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                          <label htmlFor="email" className="form-label">
                            Email Address
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            className={
                              erroremail ? "form-control-error" : `form-control`
                            }
                            onChange={(e) => {
                              setEmail(e.target.value);
                              seterrorEmail(false);
                            }}
                          />
                        </div>
                        <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                          <label htmlFor="phoneNumber" className="form-label">
                            Phone Number
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <PhoneInput
                            defaultCountry="US"
                            value={mobile}
                            onChange={(number) => handleMobileChange(number)}
                            className={
                              errormobile
                                ? "form-control-error"
                                : `form-control`
                            }
                            name="phoneNumber"
                            id="phoneNumber"
                            placeholder="Enter Your Mobile No."
                          />
                        </div>
                        <div className="border my-2" />
                      </form>
                    </div>
                  </div>
                  <div className="flight_confirmdetails_wrapper border-bottom border-success row py-3 mt-3">
                    <div className="col-12 d-flex border-start border-4 border-success justify-content-between">
                      <h5>Room Details</h5>
                    </div>
                    <div className="align-content-center mt-1">
                      <form action="" className="row">
                        <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                          <label
                            htmlFor="fullName"
                            className="col-6 form-label"
                          >
                            Check in <span style={{ color: "red" }}>*</span>
                          </label>
                          <DatePicker
                            className={
                              errorcheckin
                                ? "form-control-error"
                                : `form-control`
                            }
                            autoComplete="off"
                            aria-label="datefrom"
                            name="date_from"
                            id="datefrom"
                            placeholder="CheckIn"
                            disabledDate={(current) =>
                              current && current < new Date()
                            }
                            onChange={(inde, date) => {
                              setCheckin(date);
                              seterrorCheckin(false);
                            }}
                          />
                        </div>
                        <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                          <label htmlFor="email" className="form-label">
                            Check Out
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <DatePicker
                            className={
                              errorcheckOut
                                ? "form-control-error"
                                : `form-control`
                            }
                            autoComplete="off"
                            aria-label="datefrom"
                            name="date_from"
                            id="datefrom"
                            placeholder="Check Out"
                            disabledDate={(current) =>
                              current && current < new Date()
                            }
                            onChange={(inde, date) => {
                              setCheckOut(date);
                              seterrorCheckOut(false);
                            }}
                          />
                        </div>
                        <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                          <label htmlFor="country" className="form-label">
                            No. of Rooms
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="number"
                            className={
                              errorrooms ? "form-control-error" : `form-control`
                            }
                            onChange={(e) => {
                              setRooms(e.target.value);
                              seterrorRooms(false);
                            }}
                            name="country"
                            id="country"
                            placeholder="No. of Rooms"
                          />
                        </div>

                        <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                          <label htmlFor="country" className="form-label">
                            No. of Guest
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="number"
                            className={
                              errorguest ? "form-control-error" : `form-control`
                            }
                            onChange={(e) => {
                              setGuest(e.target.value);
                              seterrorGuest(false);
                            }}
                            name="country"
                            id="country"
                            placeholder="No. of Rooms"
                          />
                        </div>

                        <div className="col-12">
                          <label htmlFor="country" className="form-label">
                            Room Types
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <div className="d-flex flex-wrap">
                            <label className="me-3">
                              <input
                                type="checkbox"
                                checked={selectedOption === "Normal"}
                                onChange={() => handleCheckboxChange("Normal")}
                              />{" "}
                              Normal
                            </label>

                            <label className="me-3">
                              <input
                                type="checkbox"
                                checked={
                                  selectedOption === "Normal + Breakfast"
                                }
                                onChange={() =>
                                  handleCheckboxChange("Normal + Breakfast")
                                }
                              />{" "}
                              Normal + Breakfast
                            </label>

                            <label className="me-3">
                              <input
                                type="checkbox"
                                checked={selectedOption === "Delux"}
                                onChange={() => handleCheckboxChange("Delux")}
                              />{" "}
                              Delux
                            </label>

                            <label className="me-3">
                              <input
                                type="checkbox"
                                checked={selectedOption === "Delux + Breakfast"}
                                onChange={() =>
                                  handleCheckboxChange("Delux + Breakfast")
                                }
                              />{" "}
                              Delux + Breakfast
                            </label>
                          </div>
                        </div>
                        <div className="border my-2" />
                      </form>
                    </div>
                  </div>
                  <div className="flight_confirmdetails_wrapper border-bottom border-success row py-3 mt-3">
                    <div className="col-12 d-flex border-start border-4 border-success justify-content-between">
                      <h5>Credit Card Information</h5>
                    </div>
                    {/* <div className="row">
                    <div className="col-md-2 col-6">
                      <div className="payment-img">
                        <img
                          height={"40"}
                          width={"80"}
                          src={require("./paypal1.png")}
                          alt="paypal"
                        />
                      </div>
                    </div>
                    <div className="col-md-2 col-6">
                      <div className="payment-img">
                        <img
                          height={"40"}
                          width={"80"}
                          src={require("./Discover1.png")}
                          alt="Discover"
                        />
                      </div>
                    </div>
                    <div className="col-md-2 col-6">
                      <div className="payment-img">
                        <img
                          height={"40"}
                          width={"80"}
                          src={require("./mastercard1.png")}
                          alt="mastercard"
                        />
                      </div>
                    </div>
                    <div className="col-md-2 col-6">
                      <div className="payment-img">
                        <img
                          height={"40"}
                          width={"80"}
                          src={require("./VISA1.png")}
                          alt="VISA"
                        />
                      </div>
                    </div>
                    <div className="col-md-2 col-6">
                      <div className="payment-img">
                        <img
                          height={"40"}
                          width={"80"}
                          src={require("./Strip.png")}
                          alt="E-bay"
                        />
                      </div>
                    </div>
                  </div> */}

                    <div className="align-content-center mt-1">
                      <div className="card-deataols">
                        <div className="card card-body">
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-group">
                                <label className="review-label">
                                  Card Holder's Name
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                  placeholder="Card Holder's Name"
                                  className={
                                    errorcardName
                                      ? "form-control-error"
                                      : `form-control`
                                  }
                                  onChange={(e) => {
                                    setCardName(e.target.value);
                                    seterrorCardName(false);
                                  }}
                                  name="traveller_name_on_card"
                                  id="traveller_name_on_card"
                                  type="text"
                                  autoComplete="off"
                                />
                                <small className="text-muted p-1">
                                  (As it appears on your credit card)
                                </small>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label className="review-label">
                                  Card Number
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <div className="tvlrFormField make_relative card-reader card">
                                  <span
                                    id="CreditCardImg"
                                    className="CreditCardImg"
                                  />
                                  <svg
                                    className="cardImage"
                                    {...getCardImageProps({ images })}
                                  />
                                  <input
                                    placeholder="Card Number"
                                    className={
                                      errorcardNumber
                                        ? "form-control-error"
                                        : `form-control`
                                    }
                                    name="traveller_card_number"
                                    id="traveller_card_number"
                                    type="text"
                                    // value={cardNumber}
                                    {...getCardNumberProps({
                                      onChange: (e) => {
                                        setCardNumber(e.target.value);
                                        seterrorCardNumber(false);
                                      },
                                    })}
                                  />
                                  <small className="error">
                                    {erroredInputs.cardNumber &&
                                      erroredInputs.cardNumber}
                                  </small>
                                  <div style={{ clear: "both" }} />
                                  <p className="status">
                                    <span className="status_icon" />
                                    <span className="status_message" />
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row">
                                <div className="col-12">
                                  <div className="form-group">
                                    <label className="review-label text-nowrap">
                                      Expiry Date
                                      <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input
                                      placeholder="YEAR"
                                      className={`form-control travellerdetails payment_exp_date `}
                                      name="traveller_card_cvv"
                                      type="number"
                                      {...getExpiryDateProps({
                                        onChange: (e) => {
                                          setExpiryDate(e.target.value);
                                          seterrorExpiryDate(false);
                                        },
                                      })}
                                    />
                                    <small className="error">
                                      {erroredInputs.expiryDate &&
                                        erroredInputs.expiryDate}
                                    </small>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label className="review-label">
                                  CVV Code
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                {/* <input type="text" className="form-control"  placeholder="0000"> */}
                                <input
                                  placeholder="cvv"
                                  className={
                                    errorcvv
                                      ? "form-control-error"
                                      : `form-control`
                                  }
                                  onChange={(e) => {
                                    setCvv(e.target.value);
                                    seterrorCvv(false);
                                  }}
                                  name="traveller_card_cvv"
                                  maxLength="3"
                                  // id="traveller_card_cvv"
                                  type="number"
                                />
                                <small className="error">
                                  {errorcvv ? "Enter correct CVV" : ""}
                                </small>
                                <small className="text-muted p-1">
                                  {/* 3 digit number from your card &nbsp;{" "} */}
                                  <img
                                    width={"44"}
                                    height={"28"}
                                    src={require("./card.gif")}
                                    alt="card"
                                  />
                                </small>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group1">
                                <label className="review-label">
                                  Address
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                  autoComplete="none"
                                  placeholder="Address"
                                  className={
                                    erroraddress
                                      ? "form-control-error"
                                      : `form-control`
                                  }
                                  onChange={(e) => {
                                    setAddress(e.target.value);
                                    seterrorAddress(false);
                                  }}
                                  name="traveller_address"
                                  id="traveller_address"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="form-group1">
                                <label className="review-label">
                                  City<span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                  autoComplete="none"
                                  placeholder="City"
                                  className={
                                    errorcity
                                      ? "form-control-error"
                                      : `form-control`
                                  }
                                  onChange={(e) => {
                                    setCity(e.target.value);
                                    seterrorCity(false);
                                  }}
                                  name="traveller_city"
                                  id="traveller_city"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="form-group1 destination-placeholder">
                                <label className="review-label">
                                  State<span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                  autoComplete="none"
                                  placeholder="State"
                                  className={
                                    errorstate
                                      ? "form-control-error"
                                      : `form-control`
                                  }
                                  onChange={(e) => {
                                    setState(e.target.value);
                                    seterrorState(false);
                                  }}
                                  name="traveller_state"
                                  id="traveller_state"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group1">
                                <label className="review-label">
                                  Country
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                {/* <input type="text" className="form-control"  placeholder="Enter Country"> */}
                                <input
                                  placeholder="Country"
                                  className={
                                    errorcountry
                                      ? "form-control-error"
                                      : `form-control`
                                  }
                                  onChange={(e) => {
                                    setCountry(e.target.value);
                                    seterrorCountry(false);
                                  }}
                                  name="traveller_card_cvv"
                                  // id="traveller_card_cvv"
                                  type="text"
                                />
                              </div>
                            </div>

                            <div className="col-md-2">
                              <div className="form-group1">
                                <label className="review-label">
                                  Zipcode
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                  autoComplete="none"
                                  placeholder="Zipcode"
                                  className={
                                    errorcode
                                      ? "form-control-error"
                                      : `form-control`
                                  }
                                  onChange={(e) => {
                                    setCode(e.target.value);
                                    seterrorCode(false);
                                  }}
                                  name="traveller_postcode"
                                  id="traveller_postcode"
                                  type="number"
                                />
                              </div>
                            </div>
                          </div>
                          <div>
                            <button
                              className="form_submit_btn bg-success text-white mt-3"
                              onClick={() => submit()}
                            >
                              Pay Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel Booking Form End */}
            {/* Hotel Description & Image */}
            <div className={pop ? "image-popup" : "none"}>
              <p className="close" onClick={() => setPop(false)}>
                X
              </p>
              <img src={popImage} alt="place_img" className="popupImage" />
            </div>
            {/* Trending Hotels Slider Start */}
            <div
              className="px-3 px-xl-5 px-lg-5 mt-4 slider_segment row"
              id="hotelDetailImageSlider"
            >
              {" "}
              <div className="col-12 mb-3">
                <h4 className="mb-0">{hotelData?.name}</h4>
                <span className="sub-heading">{hotelData?.tagline}</span>
              </div>
              <div className="col-12 col-xl-6">
                {hotelData !== undefined ? (
                  <div className="slider1">
                    {/* Image and Location  */}
                    <div className="imageSlider">
                      <div className="imageSlider-item">
                        <ImageGallery showPlayButton={false} items={images} />
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="col-12 col-xl-6 mb-auto mt-3 mt-xl-0">
                <iframe
                  width="100%"
                  height="500"
                  allowfullscreen=""
                  loading="lazy"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src={`https://maps.google.com/maps?q=${hotelData?.coordinates?.latitude},${hotelData?.coordinates?.longitude}&hl=es&z=14&output=embed`}
                ></iframe>
              </div>
            </div>
            {/* Trending Hotels Slider End */}

            {/* Professional CTA Section Start */}
            {/* <CTASection /> */}
            {/* Professional CTA Section End */}

            {/* Hotel Amenities Section Start */}

            {hotelData?.facilities.map((items) => {
              return (
                <div className="container propertyAmenities mt-4">
                  <h4 className="mb-3 d-flex">
                    <div>
                    <i class="icofont-building-alt"></i>
                    </div>
                    &nbsp;{Object.keys(items)[0]}
                  </h4>
                  <div className="row">
                    {items[Object.keys(items)[0]].map((innr) => {
                      return (
                        <div className="col-12 col-xl-3 my-2">
                          <span className="fw-bold">
                            {Object.keys(innr)[0]}
                          </span>
                          <ul className="p-0">
                            {innr[Object.keys(innr)[0]].map((last) => {
                              return (
                                <li>
                                  <i class="icofont-star-alt-2"></i>{" "}
                                  {last}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/* Hotel Amenities Section End */}

            {/* Hotel Amenities Section Start */}
            {/* <div className="container propertyAmenities mt-4">
            <h4 className="mb-3 d-flex">
              <div>
                <i className="ph-duotone ph-bed fs-3"></i>
              </div>
              &nbsp;Room Amenities
            </h4>
            <div className="row">
              {hotelData?.facilities[2]?.["Room amenities"]?.map((item) => {
                if (item["Freshen up"]) {
                  return (
                    <div className="col-12 col-xl-3">
                      <span className="fw-bold">Facilities</span>
                      <ul className="p-0">
                        {item["Freshen up"].map((second, index) => (
                          <li key={index}>
                            <i className="ph-duotone ph-asterisk-simple text-info"></i>{" "}
                            {second}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }
              })}

              <div className="col-12 col-xl-3">
                <span className="fw-bold">Entertained</span>
                <ul className="p-0">
                  {hotelData?.facilities[2]?.["Room amenities"]?.map((item) => {
                    if (item["Home comfort"]) {
                      return item["Home comfort"].map((second, index) => (
                        <li key={index}>
                          <i className="ph-duotone ph-asterisk-simple text-info"></i>{" "}
                          {second}
                        </li>
                      ));
                    }
                  })}
                  {hotelData?.facilities[2]?.["Room amenities"]?.map((item) => {
                    if (item["Stay connected"]) {
                      return item["Stay connected"].map((second, index) => (
                        <li key={index}>
                          <i className="ph-duotone ph-asterisk-simple text-info"></i>{" "}
                          {second}
                        </li>
                      ));
                    }
                  })}
                  {hotelData?.facilities[2]?.["Room amenities"]?.map((item) => {
                    if (item["Be entertained"]) {
                      return item["Be entertained"].map((second, index) => (
                        <li key={index}>
                          <i className="ph-duotone ph-asterisk-simple text-info"></i>{" "}
                          {second}
                        </li>
                      ));
                    }
                  })}
                </ul>
              </div>
              <div className="col-12 col-xl-3">
                <span className="fw-bold">Services</span>
                <ul className="p-0">
                  {hotelData?.facilities[2]?.["Room amenities"]?.map((item) => {
                    if (item["Sleep well"]) {
                      return item["Sleep well"].map((second, index) => (
                        <li key={index}>
                          <i className="ph-duotone ph-asterisk-simple text-info"></i>{" "}
                          {second}
                        </li>
                      ));
                    }
                  })}
                  {hotelData?.facilities[2]?.["Room amenities"]?.map((item) => {
                    if (item["Food and drink"]) {
                      return item["Food and drink"].map((second, index) => (
                        <li key={index}>
                          <i className="ph-duotone ph-asterisk-simple text-info"></i>{" "}
                          {second}
                        </li>
                      ));
                    }
                  })}
                  {hotelData?.facilities[2]?.["Room amenities"]?.map((item) => {
                    if (item["More"]) {
                      return item["More"].map((second, index) => (
                        <li key={index}>
                          <i className="ph-duotone ph-asterisk-simple text-info"></i>{" "}
                          {second}
                        </li>
                      ));
                    }
                  })}
                </ul>
              </div>
              <div className="col-12 col-xl-3">
                <span className="fw-bold">More</span>
                <ul className="p-0">
                  {hotelData?.facilities[0]["At a glance"]?.map((item) => {
                    if (item["Pets"]) {
                      return item["Pets"].map((second, index) => (
                        <li key={index}>
                          <i className="ph-duotone ph-asterisk-simple text-info"></i>{" "}
                          {second}
                        </li>
                      ));
                    }
                  })}
                  {hotelData?.facilities[0]["At a glance"]?.map((item) => {
                    if (item["Special check-in instructions"]) {
                      return item["Special check-in instructions"].map(
                        (second, index) => (
                          <li key={index}>
                            <i className="ph-duotone ph-asterisk-simple text-info"></i>{" "}
                            {second}
                          </li>
                        )
                      );
                    }
                  })}
                </ul>
              </div>
            </div>
          </div> */}
            {/* Hotel Amenities Section End */}

            {/* FAQ Mini Section Start */}
            <div className="px-3 px-xl-5 px-lg-5 mt-5">
              <h4 className="fw-bold">Frequently Asked Questions</h4>
              <div className="row gx-4">
                <div className="col-12 col-xl-6 col-lg-6">
                  <div className="col-12">
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapse1"
                            aria-expanded="true"
                            aria-controls="flush-collapseOne"
                          >
                            What documents do I need to travel internationally?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse1"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            The required documents for international travel
                            depend on your destination and your nationality. In
                            general, you will need a valid passport and, in some
                            cases, a visa. It's important to research the
                            specific entry requirements for your destination
                            well in advance of your trip to ensure you have all
                            the necessary documents.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="col-12">
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapse2"
                            aria-expanded="true"
                            aria-controls="flush-collapseOne"
                          >
                            Is travel insurance necessary?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse2"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            While travel insurance is not always necessary, it
                            can provide important protection and peace of mind
                            in case of unexpected events such as flight
                            cancellations, medical emergencies, or lost luggage.
                            It's a good idea to research your options and
                            consider purchasing travel insurance for your trip.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-6 col-lg-6">
                  <div className="col-12">
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapse4"
                            aria-expanded="true"
                            aria-controls="flush-collapseOne"
                          >
                            Who are we?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse4"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            Infinity Travels, a leader in the global aviation
                            industry, introduces advance booking options for
                            frequent travelers. Secure affordable airfares to
                            any destination that align with your budgetary
                            preferences.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="col-12">
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapse3"
                            aria-expanded="true"
                            aria-controls="flush-collapseOne"
                          >
                            How far in advance should I book my travel?
                          </button>
                        </h2>
                        <div
                          id="flush-collapse3"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            It depends on the type of travel and your personal
                            preferences, but generally booking flights and
                            accommodations 2-3 months in advance, from our site,
                            can help you find better deals and secure
                            availability.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* FAQ Mini Section End */}
          </div>
        </>
      )}
    </div>
  );
};

export default HotelDetails;
