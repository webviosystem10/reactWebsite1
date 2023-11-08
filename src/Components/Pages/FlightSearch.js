import React, { useEffect, useState } from "react";
import TripForm from "./TripForm";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  generalGetFunction,
  generalPostFunction,
} from "../Model/GlobalFunction";
import FlightLoader from "./FlightLoader";
import { visibleNumber } from "../GlobalData/GlobalMetaData";

function FlightSearch() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const offer = useSelector((state) => state.offer);
  const flightWay = useSelector((state) => state.flightWay);
  const airline = useSelector((state) => state.airlines);
  const loading = useSelector((state) => state.loading);
  const adult = useSelector((state) => state.adult);
  const children = useSelector((state) => state.children);
  const infants = useSelector((state) => state.infants);
  const departure = useSelector((state) => state.departure);
  const departureItaCode = useSelector((state) => state.departureItaCode);
  const arrivalIataCode = useSelector((state) => state.arrivalItaCode);
  const arrival = useSelector((state) => state.arrival);
  const departureDate = useSelector((state) => state.departureDate);
  const arrivalDate = useSelector((state) => state.arrivalDate);
  const totalPassenger = useSelector((state) => state.totalPassenger);
  const tripClass = useSelector((state) => state.tripClass);
  const [directSelect, setDirectSelect] = useState(false);
  const [oneStopSelect, setOneStopSelect] = useState(false);
  const [otherSelect, setOtherSelect] = useState(false);
  const [depEarMorSelect, setDepEarMorSelect] = useState(false);
  const [depMorSelect, setDepMorSelect] = useState(false);
  const [depNoonSelect, setDepNoonSelect] = useState(false);
  const [depEveSelect, setDepEveSelect] = useState(false);
  const [arrEarMorSelect, setArrEarMorSelect] = useState(false);
  const [arrMorSelect, setArrMorSelect] = useState(false);
  const [arrNoonSelect, setArrNoonSelect] = useState(false);
  const [arrEveSelect, setArrEveSelect] = useState(false);
  const [dates, setDates] = useState([]);
  const [prices, setPrices] = useState([]);
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [filterPrice, setFilterPrice] = useState(0);
  const [mShow, setMshow] = useState(false);
  const [progress, setProgress] = useState(0);
  var processedData = [];
  var reservedData = [];
  processedData = [...reservedData];
  const direct = [];
  const oneStop = [];
  const other = [];
  var [filter, setFilter] = useState([...processedData]);
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  // Extract Flights data for filter purpose
  if (
    offer &&
    offer.offer !== null &&
    offer.offer !== undefined &&
    offer.offer !== ""
  ) {
    offer.offer.map((item) => {
      processedData.push(item);
      reservedData.push(item);
      if (item.itineraries[0].segments.length === 1) {
        direct.push(item);
      } else if (item.itineraries[0].segments.length === 2) {
        oneStop.push(item);
      } else {
        other.push(item);
      }
    });
  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  // Getting all airlines details

  // Filter flight serach base on selected value direct,one stop .....
  if (oneStopSelect && otherSelect && directSelect) {
    processedData = [...reservedData];
  } else if (oneStopSelect && otherSelect) {
    processedData = [...oneStop, ...other];
  } else if (directSelect && otherSelect) {
    processedData = [...direct, ...other];
  } else if (directSelect && oneStopSelect) {
    processedData = [...direct, ...oneStop];
  } else if (oneStopSelect) {
    processedData = [...oneStop];
  } else if (otherSelect) {
    processedData = [...other];
  } else if (directSelect) {
    processedData = [...direct];
  } else {
    processedData = [...reservedData];
  }
  useEffect(() => {
    setMinPrice(offer.offer[0]["total"]);
    setMaxPrice(offer.offer[offer.offer.length - 1]["total"]);
    setFilterPrice(offer.offer[offer.offer.length - 1]["total"]);
  }, [offer]);

  // creating a generalize function to get data base on time interval for departure
  function timeFilterForDeparture(
    data,
    startingHour,
    startingMinute,
    endHour,
    endMinute
  ) {
    return data.filter((item) => {
      const [hours, minutes] = item["itineraries"][0]["segments"][0][
        "departure"
      ]["departureAt"]
        .slice(-8, -3)
        .split(":")
        .map(Number);
      const timeDate = new Date();
      timeDate.setHours(hours, minutes);
      return (
        timeDate >= new Date().setHours(startingHour, startingMinute) &&
        timeDate <= new Date().setHours(endHour, endMinute)
      );
    });
  }

  // creating a generalize function to get data base on time interval for arrival
  function timeFilterForArrival(
    data,
    startingHour,
    startingMinute,
    endHour,
    endMinute
  ) {
    return data.filter((item) => {
      const [hours, minutes] = item["itineraries"][0]["segments"][
        item["itineraries"][0]["segments"].length - 1
      ]["arrival"]["arrivalAt"]
        .slice(-8, -3)
        .split(":")
        .map(Number);
      const timeDate = new Date();
      timeDate.setHours(hours, minutes);
      return (
        timeDate >= new Date().setHours(startingHour, startingMinute) &&
        timeDate <= new Date().setHours(endHour, endMinute)
      );
    });
  }

  // Setting departure filter
  var depEarMor = timeFilterForDeparture(reservedData, 0, 0, 4, 59);
  var depAft = timeFilterForDeparture(reservedData, 12, 0, 17, 59);
  var depMor = timeFilterForDeparture(reservedData, 5, 0, 11, 59);
  var depEve = timeFilterForDeparture(reservedData, 18, 0, 23, 59);

  // Setting arrival filter
  var arrEarMor = timeFilterForArrival(reservedData, 0, 0, 4, 59);
  var arrAft = timeFilterForArrival(reservedData, 12, 0, 17, 59);
  var arrMor = timeFilterForArrival(reservedData, 5, 0, 11, 59);
  var arrEve = timeFilterForArrival(reservedData, 18, 0, 23, 59);

  // handle departure time click for filter
  var deptFilter = [...processedData];
  if (depEarMorSelect && depMorSelect && depNoonSelect && depEveSelect) {
    deptFilter = [...depEarMor, ...depMor, ...depAft, ...depEve];
  } else if (depEarMorSelect && depMorSelect && depNoonSelect) {
    deptFilter = [...depEarMor, ...depMor, ...depAft];
  } else if (depEarMorSelect && depMorSelect && depEveSelect) {
    deptFilter = [...depEarMor, ...depMor, ...depEve];
  } else if (depEarMorSelect && depNoonSelect && depEveSelect) {
    deptFilter = [...depEarMor, ...depAft, ...depEve];
  } else if (depMorSelect && depNoonSelect && depEveSelect) {
    deptFilter = [...depMor, ...depAft, ...depEve];
  } else if (depEarMorSelect && depMorSelect) {
    deptFilter = [...depEarMor, ...depMor];
  } else if (depEarMorSelect && depNoonSelect) {
    deptFilter = [...depEarMor, ...depAft];
  } else if (depEarMorSelect && depEveSelect) {
    deptFilter = [...depEarMor, ...depEve];
  } else if (depMorSelect && depNoonSelect) {
    deptFilter = [...depMor, ...depAft];
  } else if (depMorSelect && depEveSelect) {
    deptFilter = [...depMor, ...depEve];
  } else if (depNoonSelect && depEveSelect) {
    deptFilter = [...depAft, ...depEve];
  } else if (depEarMorSelect) {
    deptFilter = [...depEarMor];
  } else if (depMorSelect) {
    deptFilter = [...depMor];
  } else if (depNoonSelect) {
    deptFilter = [...depAft];
  } else if (depEveSelect) {
    deptFilter = [...depEve];
  } else {
    deptFilter = [...processedData];
  }

  // handle arrival time click for filter
  var arrivalFilter = [...processedData];
  if (arrEarMorSelect && arrMorSelect && arrNoonSelect && arrEveSelect) {
    arrivalFilter = [...arrEarMor, ...arrMor, ...arrAft, ...arrEve];
  } else if (arrEarMorSelect && arrMorSelect && arrNoonSelect) {
    arrivalFilter = [...arrEarMor, ...arrMor, ...arrAft];
  } else if (arrEarMorSelect && arrMorSelect && arrEveSelect) {
    arrivalFilter = [...arrEarMor, ...arrMor, ...arrEve];
  } else if (arrEarMorSelect && arrNoonSelect && arrEveSelect) {
    arrivalFilter = [...arrEarMor, ...arrAft, ...arrEve];
  } else if (arrMorSelect && arrNoonSelect && arrEveSelect) {
    arrivalFilter = [...arrMor, ...arrAft, ...arrEve];
  } else if (arrEarMorSelect && arrMorSelect) {
    arrivalFilter = [...depEarMor, ...depMor];
  } else if (arrEarMorSelect && arrNoonSelect) {
    arrivalFilter = [...arrEarMor, ...arrAft];
  } else if (arrEarMorSelect && arrEveSelect) {
    arrivalFilter = [...arrEarMor, ...arrEve];
  } else if (arrMorSelect && arrNoonSelect) {
    arrivalFilter = [...arrMor, ...arrAft];
  } else if (arrMorSelect && arrEveSelect) {
    arrivalFilter = [...arrMor, ...arrEve];
  } else if (arrNoonSelect && arrEveSelect) {
    arrivalFilter = [...arrAft, ...arrEve];
  } else if (arrEarMorSelect) {
    arrivalFilter = [...arrEarMor];
  } else if (arrMorSelect) {
    arrivalFilter = [...arrMor];
  } else if (arrNoonSelect) {
    arrivalFilter = [...arrAft];
  } else if (arrEveSelect) {
    arrivalFilter = [...arrEve];
  } else {
    arrivalFilter = [...processedData];
  }

  // Filter data base on price

  useEffect(() => {
    if (
      Number(filterPrice) >= Number(minPrice) &&
      Number(filterPrice) <= Number(maxPrice)
    ) {
      var rawData = reservedData.filter(
        (item) =>
          Number(item["total"]) <= Number(filterPrice) ||
          Number(item["total"]) === Number(filterPrice)
      );
      setFilter([...rawData]);
    } else {
      setFilter([...processedData]);
    }
  }, [filterPrice, offer]);

  var filteredAirlines = [];
  Object.values(airline.airlines).map((item) => {
    const innerData = processedData.filter(
      (inner) =>
        inner["itineraries"][0]["segments"][0]["carrierCode"]["value"] === item
    );
    filteredAirlines.push({ [item]: innerData });
  });

  // Handle selected airlines

  const handleCheckboxChange = (item) => {
    // Check if the item is already in the selectedAirlines array
    if (selectedAirlines.includes(item)) {
      // If it is, remove it
      setSelectedAirlines(
        selectedAirlines.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      // If it's not, add it
      setSelectedAirlines([...selectedAirlines, item]);
    }
  };

  // Filter and save airlines data from user select

  var filterSelectedAirlines = [];
  if (selectedAirlines.length > 0) {
    selectedAirlines.map((item) => {
      processedData.map((data, index) => {
        <li></li>;
        if (
          data["itineraries"][0]["segments"][0]["carrierCode"]["value"] === item
        ) {
          filterSelectedAirlines.push(data);
        }
      });
    });
  } else {
    filterSelectedAirlines = [...processedData];
  }

  processedData = processedData.filter((element) =>
    deptFilter.includes(element)
  );
  processedData = processedData.filter((element) =>
    arrivalFilter.includes(element)
  );
  processedData = processedData.filter((element) =>
    filterSelectedAirlines.includes(element)
  );
  if (filter.length !== 0) {
    processedData = processedData.filter((element) => filter.includes(element));
  }

  // handle clear filter
  const clearClick = () => {
    setOneStopSelect(false);
    setDirectSelect(false);
    setOtherSelect(false);
    setSelectedAirlines([]);
    setDepEarMorSelect(false);
    setDepMorSelect(false);
    setDepNoonSelect(false);
    setDepEveSelect(false);
    setArrEarMorSelect(false);
    setArrMorSelect(false);
    setArrNoonSelect(false);
    setArrEveSelect(false);
    setFilterPrice(maxPrice);
    setFilter([...reservedData]);
    processedData = [...reservedData];
  };
  useEffect(() => {
    setOneStopSelect(false);
    setDirectSelect(false);
    setOtherSelect(false);
    setSelectedAirlines([]);
    setDepEarMorSelect(false);
    setDepMorSelect(false);
    setDepNoonSelect(false);
    setDepEveSelect(false);
    setArrEarMorSelect(false);
    setArrMorSelect(false);
    setArrNoonSelect(false);
    setArrEveSelect(false);
    setFilterPrice(maxPrice);
    setFilter([...reservedData]);
    processedData = [...reservedData];
  }, [minPrice, maxPrice]);

  useEffect(() => {
    // Assuming you receive departureDate from somewhere else
    if (departureDate) {
      const newDate = new Date(departureDate);
      const currentDate = new Date();
      const previousDates = [];
      const nextDates = [];

      // Check if departureDate is greater than today + 2 days
      const minDate = new Date(currentDate);
      minDate.setDate(currentDate.getDate() + 1);

      if (newDate >= minDate) {
        for (let i = 1; i <= 2; i++) {
          const nextDate = new Date(newDate);
          nextDate.setDate(newDate.getDate() + i);
          nextDates.push(nextDate.toISOString().split("T")[0]);
        }

        for (let i = 1; i <= 2; i++) {
          const prevDate = new Date(newDate);
          prevDate.setDate(newDate.getDate() - i);
          previousDates.push(prevDate.toISOString().split("T")[0]);
        }
      } else if (currentDate.getDate() + 1 === newDate) {
        for (let i = 1; i <= 3; i++) {
          const nextDate = new Date(newDate);
          nextDate.setDate(newDate.getDate() + i);
          nextDates.push(nextDate.toISOString().split("T")[0]);
        }

        for (let i = 1; i <= 1; i++) {
          const prevDate = new Date(newDate);
          prevDate.setDate(newDate.getDate() - i);
          previousDates.push(prevDate.toISOString().split("T")[0]);
        }
      } else {
        // If departureDate is not greater than today + 2 days, adjust previous and next dates accordingly
        for (let i = 1; i <= 4; i++) {
          const nextDate = new Date(newDate);
          nextDate.setDate(newDate.getDate() + i);
          nextDates.push(nextDate.toISOString().split("T")[0]);
        }
      }

      setDates([
        ...previousDates.reverse(),
        newDate.toISOString().split("T")[0],
        ...nextDates,
      ]);
    }
  }, [departureDate]);

  const [l1, setL1] = useState(false);
  const [l2, setL2] = useState(false);
  const [l3, setL3] = useState(false);
  const [l4, setL4] = useState(false);
  const [l5, setL5] = useState(false);
  const [l6, setL6] = useState(false);
  // const [prices,setResults]=useState([])
  useEffect(() => {
    async function processDates() {
      setPrices([]);
      var results = [];

      for (const date of dates) {
        // Wait for a brief moment before making the next request
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Adjust the delay as needed

        try {
          if (flightWay === "One way") {
            if (date === departureDate) {
              results.push(offer.offer[0]["total"]);
            } else {
              const data = await generalGetFunction(
                `v2/shopping/flight-offers?originLocationCode=${departureItaCode}&destinationLocationCode=${arrivalIataCode}&currencyCode=USD&departureDate=${date}&adults=${adult}&travelClass=${tripClass}&children=${children}&infants=${infants}&max=1`
              );

              results.push(data.data[0]["price"]["total"]);
            }
          } else {
            const data = await generalGetFunction(
              `v2/shopping/flight-offers?originLocationCode=${departureItaCode}&destinationLocationCode=${arrivalIataCode}&currencyCode=USD&departureDate=${date}&adults=${adult}&travelClass=${tripClass}&children=${children}&infants=${infants}&max=1`
            );

            results.push(data.data[0]["price"]["total"]);
          }
        } catch (error) {
          console.error(error);
        }
      }
      setPrices([...results]);
    }
    processDates();
  }, [dates, offer]);

  function handleBooking(index) {
    window.scrollTo(0, 0);
    // dispatch({
    //   type: "SET_LOADING",
    //   loading: true,
    // });
    setProgress(45);
    var data = {
      data: {
        type: "flight-offers-pricing",
        flightOffers: [processedData[index]["rawData"]],
      },
    };
    async function getData() {
      const newData = await generalPostFunction(
        "/shopping/flight-offers/pricing",
        data
      );

      setProgress(60);
      if (newData["data"]) {
        setProgress(85);

        dispatch({
          type: "SET_LASTOFFER",
          lastOffer: newData["data"],
        });
        localStorage.setItem("lastOffer", JSON.stringify(newData["data"]));
        // dispatch({
        //   type: "SET_LOADING",
        //   loading: false,
        // });
        setProgress(100);

        navigate("/flight-review");
      }
    }
    setProgress(75);
    getData();
  }

  // Hanlde specific date click
  function handleDateClick(date) {
    setProgress(20);
    window.scrollTo(0, 0);
    // e.preventDefault();
    dispatch({
      type: "SET_FLIGHTWAY",
      flightWay: "One way",
    });
    dispatch({
      type: "SET_DEPARTUREDATE",
      departureDate: date,
    });
    localStorage.setItem("departureDate", date);
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });

    async function fetchData() {
      // Dispatch data to redux for instant change
      var offerData = await generalGetFunction(
        `v2/shopping/flight-offers?originLocationCode=${departureItaCode}&destinationLocationCode=${arrivalIataCode}&currencyCode=USD&departureDate=${date}&adults=${adult}&travelClass=${tripClass}&children=${children}&infants=${infants}&max=90`
      );
      setProgress(50);
      if (
        (offerData && offerData === "error") ||
        (offerData && offerData.data.length === 0)
      ) {
        setProgress(70);
        setTimeout(() => {
          dispatch({
            type: "SET_LOADING",
            loading: false,
          });
        }, 1000);
        setProgress(100);

        navigate("/flight-not-found");
      } else if (
        offerData !== undefined &&
        offerData !== null &&
        offerData !== ""
      ) {
        setProgress(70);
        var main = offerData.data.map((item) => {
          const itineraries = [];
          item.itineraries.map((data) => {
            const segments = [];
            data.segments.map((innerLevel) => {
              segments.push({
                arrival: {
                  arrivalIataCode: innerLevel.arrival["iataCode"],
                  arrivalAt: innerLevel.arrival["at"],
                },
                departure: {
                  departureAt: innerLevel.departure["at"],
                  departureItaCode: innerLevel.departure["iataCode"],
                },
                segmentDuration: innerLevel.duration,
                number: innerLevel.number,
                carrierCode: {
                  code: innerLevel.carrierCode,
                  value:
                    offerData.dictionaries.carriers[innerLevel.carrierCode],
                },
                aircraft: {
                  code: innerLevel.aircraft["code"],
                  value:
                    offerData.dictionaries.aircraft[
                      innerLevel.aircraft["code"]
                    ],
                },
              });
            });
            var duration = data.duration;
            itineraries.push({ segments, duration });
          });
          return {
            id: item.id,
            total: item.price["total"],
            basePrice: item.price["base"],
            numberOfBookableSeats: item.numberOfBookableSeats,
            itineraries: itineraries,
            rawData: item,
            includedCheckedBags: {
              weight:
                item.travelerPricings[0]["fareDetailsBySegment"]?.[0]?.[
                  "includedCheckedBags"
                ]?.["weight"] !== undefined
                  ? item.travelerPricings[0]["fareDetailsBySegment"][0][
                      "includedCheckedBags"
                    ]["weight"]
                  : "",
              weightUnit:
                item.travelerPricings[0]["fareDetailsBySegment"]?.[0]?.[
                  "includedCheckedBags"
                ]?.["weightUnit"] !== undefined
                  ? item.travelerPricings[0]["fareDetailsBySegment"][0][
                      "includedCheckedBags"
                    ]["weightUnit"]
                  : "",
              // weight:"",
              // weightUnit:""
            },
          };
        });
        var allAirlines = offerData.dictionaries["carriers"];
        dispatch({
          type: "SET_AIRLINES",
          airlines: { airlines: allAirlines },
        });
        dispatch({
          type: "SET_OFFER",
          payload: { offer: main },
        });
        setTimeout(() => {
          setProgress(100);
          dispatch({
            type: "SET_LOADING",
            loading: false,
          });
        }, 1000);
        // Storing data in localstorage for data avaliablity
        localStorage.setItem("offer", JSON.stringify(main));
        localStorage.setItem(
          "airlines",
          JSON.stringify(offerData.dictionaries["carriers"])
        );

        // Dispatch data to redux for instant change

        navigate("/flight-search");
      }
    }
    fetchData();
  }

  // Change date to the respective day month and date formate
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

  // Converting time based on Am and Pm
  const formatTimeToAmPm = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const hour = parseInt(hours, 10);
    const minute = parseInt(minutes, 10);
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    const formattedMinute = minute < 10 ? `0${minute}` : minute;

    return `${formattedHour}:${formattedMinute} ${period}`;
  };

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (text) {
      return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    });
  }
  console.log(offer, "this is processed data");
  return (
    <>
      {loading ? (
        <FlightLoader />
      ) : (
        <>
          <section
            className="bg-white pb-3"
            style={{ marginTop: `60px`, paddingTop: "20px" }}
          >
            <div>
              <div className="container">
                <div className="row">
                  <a
                    className=""
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <span className="fs-5 fw-normal text-muted">
                      {departure}{" "}
                      <i className="icofont-map-pins text-primary" /> {arrival}{" "}
                      <i className="icofont-caret-down fs-6" />
                    </span>
                    <br />
                    <span className="fw-light text-muted">
                      {`${findDayOfWeek(departureDate)}, ${findMonthOfWeek(
                        departureDate
                      )} ${findDay(departureDate)}`}
                      {flightWay === "Roundtrip"
                        ? `  /${`${findDayOfWeek(
                            arrivalDate
                          )}, ${findMonthOfWeek(arrivalDate)} ${findDay(
                            arrivalDate
                          )}`}`
                        : ""}{" "}
                      ({totalPassenger}{" "}
                      {Number(totalPassenger) === 1
                        ? "Passenger"
                        : "Passengers"}
                      ,
                      {toTitleCase(tripClass) === "Premium_economy"
                        ? "Premium economy"
                        : toTitleCase(tripClass)}
                      )
                    </span>
                  </a>
                  <div
                    className="collapse mt-2 border-top"
                    id="collapseExample"
                  >
                    <TripForm />
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
          {/* Flight_Search_Destination_Banner End */}
          {/* Flight_Search_Filter */}
          <section className="flight_search_list_section">
            <div>
              <div className="container mt-3">
                <div className="row">
                  <div className="col-xl-3 shadow-sm bg-white p-1">
                    <div className="filter_wrapper_phn bg-white d-flex justify-content-center">
                      <button
                        className="text-primary border-0 bg-transparent fw-medium my-auto"
                        onClick={() => setMshow(true)}
                      >
                        Filter Options <i className="icofont-ui-settings" />
                      </button>
                    </div>
                    <div
                      className={`filter_wrapper py-1 ${
                        mShow ? "d-block" : ""
                      }`}
                    >
                      {/* <p className="claer" onClick={clearClick}>
                        Clear Filter ❌
                      </p> */}
                      <div className="d-flex justify-content-between">
                        <h4 className="px-2">Filter By</h4>
                        <button
                          className="border-0 bg-transparent text-danger"
                          onClick={() => {
                            setMshow(false);
                            window.scrollTo(0, 0);
                          }}
                          aria-label="clear filter"
                        >
                          <i className="icofont-close fs-5 px-2 desktop-hide"></i>
                        </button>
                      </div>
                      <div className="row filter_category mx-auto mt-3">
                        <div className="col-xl-12 border-1 border-bottom">
                          <table className="table mb-1">
                            <thead>
                              <tr>
                                <th className="filter_title">Stops</th>
                                <th className="text-end">From</th>
                              </tr>
                            </thead>
                            <tbody>
                              {direct.length === 0 ? (
                                ""
                              ) : (
                                <tr>
                                  <td>
                                    <label htmlFor="filter_stops_direct"></label>
                                    <input
                                      id="filter_stops_direct"
                                      aria-label="filter_stops_direct"
                                      type="checkbox"
                                      className="form-check-input mx-1"
                                      checked={directSelect}
                                      onChange={() =>
                                        setDirectSelect(!directSelect)
                                      }
                                    />{" "}
                                    Direct({direct.length})
                                  </td>
                                  <td className="text-end">
                                    ${direct[0].total}
                                  </td>
                                </tr>
                              )}
                              {oneStop.length === 0 ? (
                                ""
                              ) : (
                                <tr>
                                  <td>
                                    <label htmlFor="filter_stops_onestop"></label>
                                    <input
                                      id="filter_stops_onestop"
                                      aria-label="filter_stops_onestop"
                                      type="checkbox"
                                      className="form-check-input mx-1"
                                      checked={oneStopSelect}
                                      onChange={() =>
                                        setOneStopSelect(!oneStopSelect)
                                      }
                                    />{" "}
                                    1 Stop({oneStop.length})
                                  </td>
                                  <td className="text-end">
                                    ${oneStop[0].total}
                                  </td>
                                </tr>
                              )}
                              {other.length === 0 ? (
                                ""
                              ) : (
                                <tr>
                                  <td>
                                    <label htmlFor="filter_stops_multiplestop"></label>
                                    <input
                                      id="filter_stops_multiplestop"
                                      aria-label="filter_stops_multiplestop"
                                      type="checkbox"
                                      className="form-check-input mx-1"
                                      checked={otherSelect}
                                      onChange={() =>
                                        setOtherSelect(!otherSelect)
                                      }
                                    />{" "}
                                    2+ Stops({other.length})
                                  </td>
                                  <td className="text-end">
                                    ${other[0].total}
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>
                        <div className="col-xl-12 border-1 border-bottom">
                          <table className="table mb-1">
                            <thead>
                              <tr>
                                <th className="filter_title">Airlines</th>
                                <th className="text-end">From</th>
                              </tr>
                            </thead>
                            <tbody>
                              {airline &&
                                Object.values(airline.airlines).map(
                                  (item, index) => {
                                    return (
                                      filteredAirlines[index][item].length >
                                        0 && (
                                        <tr>
                                          <td key={item}>
                                            <label
                                              htmlFor={`filter_airlines${index}`}
                                            ></label>
                                            <input
                                              id={`filter_airlines${index}`}
                                              aria-label={`filter_airlines${index}`}
                                              type="checkbox"
                                              className="form-check-input mx-1"
                                              checked={selectedAirlines.includes(
                                                item
                                              )}
                                              onChange={() =>
                                                handleCheckboxChange(item)
                                              }
                                            />{" "}
                                            {item} (
                                            {filteredAirlines &&
                                              filteredAirlines[index][item]
                                                .length}
                                            )
                                          </td>
                                          <td className="text-end">
                                            $
                                            {filteredAirlines[index][item]
                                              .length > 0 &&
                                              filteredAirlines[index][item][0][
                                                "total"
                                              ]}
                                          </td>
                                        </tr>
                                      )
                                    );
                                  }
                                )}
                            </tbody>
                          </table>
                        </div>
                        <div className="col-xl-12 mt-2 border-1 border-bottom">
                          <p className="h6 mx-2">Price</p>
                          <div className="px-2 mb-2">
                            <div className="d-flex justify-content-between">
                              <span className="form-label">${minPrice}</span>
                              <span className="form-label">${filterPrice}</span>
                              <span className="form-label">${maxPrice}</span>
                            </div>
                            <label htmlFor="filter_pricerange"></label>
                            <input
                              id="filter_pricerange"
                              aria-label="filter_pricerange"
                              className="mx-5 mx-xl-3 mx-lg-3 position-relative"
                              type="range"
                              min={minPrice}
                              max={maxPrice}
                              onChange={(e) => setFilterPrice(e.target.value)}
                              // step={0.5}
                            />
                          </div>
                        </div>
                        <div className="col-xl-12 mt-2 filter_flight_time border-1 border-bottom">
                          <p className="h6">Departure from {departure}</p>
                          <ul className="departure_box gx-0 mb-2">
                            <li>
                              <button
                                className={`text-center text-wrap ${
                                  depEarMorSelect ? "filterTime-active" : ""
                                }`}
                                onClick={() =>
                                  setDepEarMorSelect(!depEarMorSelect)
                                }
                              >
                                <span className="fw-medium">
                                  <i className="icofont-full-sunny" /> Early
                                  Morning
                                </span>{" "}
                                <br />
                                <span className="filter_time fw-light">
                                  (00:00 - 04:59)
                                </span>
                              </button>
                            </li>
                            <li>
                              <button
                                className={`text-center text-wrap ${
                                  depMorSelect ? "filterTime-active" : ""
                                }`}
                                onClick={() => setDepMorSelect(!depMorSelect)}
                              >
                                <span className="fw-medium">
                                  <i className="icofont-sun-alt" /> Morning
                                </span>{" "}
                                <br />
                                <span className="filter_time fw-light">
                                  (05:00 - 11:59)
                                </span>
                              </button>
                            </li>
                            <li>
                              <button
                                className={`text-center text-wrap ${
                                  depNoonSelect ? "filterTime-active" : ""
                                }`}
                                onClick={() => setDepNoonSelect(!depNoonSelect)}
                              >
                                <span className="fw-medium">
                                  <i className="icofont-sun-rise" /> Afternoon
                                </span>{" "}
                                <br />
                                <span className="filter_time fw-light">
                                  (12:00 - 17:59)
                                </span>
                              </button>
                            </li>
                            <li>
                              <button
                                className={`text-center text-wrap ${
                                  depEveSelect ? "filterTime-active" : ""
                                }`}
                                onClick={() => setDepEveSelect(!depEveSelect)}
                              >
                                <span className="fw-medium">
                                  <i className="icofont-moon" /> Evening
                                </span>{" "}
                                <br />
                                <span className="filter_time fw-light">
                                  (18:00 - 23:59)
                                </span>
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="col-xl-12 mt-2 filter_flight_time">
                          <p className="h6">Arrival at {arrival}</p>
                          <ul className="departure_box gx-0 mb-1">
                            <li>
                              <button
                                className={`text-center text-wrap ${
                                  arrEarMorSelect ? "filterTime-active" : ""
                                }`}
                                onClick={() =>
                                  setArrEarMorSelect(!arrEarMorSelect)
                                }
                              >
                                <span className="fw-medium">
                                  <i className="icofont-full-sunny" /> Early
                                  Morning
                                </span>{" "}
                                <br />
                                <span className="filter_time fw-light">
                                  (00:00 - 04:59)
                                </span>
                              </button>
                            </li>
                            <li>
                              <button
                                className={`text-center text-wrap ${
                                  arrMorSelect ? "filterTime-active" : ""
                                }`}
                                onClick={() => setArrMorSelect(!arrMorSelect)}
                              >
                                <span className="fw-medium">
                                  <i className="icofont-sun-alt" /> Morning
                                </span>{" "}
                                <br />
                                <span className="filter_time fw-light">
                                  (05:00 - 11:59)
                                </span>
                              </button>
                            </li>
                            <li>
                              <button
                                className={`text-center text-wrap ${
                                  arrNoonSelect ? "filterTime-active" : ""
                                }`}
                                onClick={() => setArrNoonSelect(!arrNoonSelect)}
                              >
                                <span className="fw-medium">
                                  <i className="icofont-sun-rise" /> Afternoon
                                </span>{" "}
                                <br />
                                <span className="filter_time fw-light">
                                  (12:00 - 17:59)
                                </span>
                              </button>
                            </li>
                            <li>
                              <button
                                className={`text-center text-wrap ${
                                  arrEveSelect ? "filterTime-active" : ""
                                }`}
                                onClick={() => setArrEveSelect(!arrEveSelect)}
                              >
                                <span className="fw-medium">
                                  <i className="icofont-moon" /> Evening
                                </span>{" "}
                                <br />
                                <span className="filter_time fw-light">
                                  (18:00 - 23:59)
                                </span>
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="col-xl-12 pb-2 d-flex justify-content-around">
                          <button className="btn " onClick={clearClick}>
                            Reset
                          </button>
                          <button
                            className="btn desktop-hide "
                            onClick={() => {
                              setMshow(false);
                              window.scrollTo(0, 0);
                            }}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-9 px-0">
                    <Carousel
                      responsive={responsive}
                      autoPlay={false}
                      infinite={false}
                      showDots={false}
                      showArrows={false}
                      className="pt-3"
                    >
                      {/* <div className="filter_date_qswrap my-3 my-xl-0 my-lg-0 g-0"> */}

                      <div
                        onClick={() => handleDateClick(dates[0])}
                        className="filter_date_qsbox"
                      >
                        <button
                          className={`${
                            dates[0] === departureDate ? "border-blue" : ""
                          }`}
                        >
                          {`${findDayOfWeek(dates[0])}, ${findMonthOfWeek(
                            dates[0]
                          )} ${findDay(dates[0])}`}
                          <br />
                          {prices[0] ? `$${prices[0]}` : "loading..."}
                        </button>
                      </div>
                      <div
                        onClick={() => handleDateClick(dates[1])}
                        className="filter_date_qsbox"
                      >
                        <button
                          className={`${
                            dates[1] === departureDate ? "border-blue" : ""
                          }`}
                        >
                          {`${findDayOfWeek(dates[1])}, ${findMonthOfWeek(
                            dates[1]
                          )} ${findDay(dates[1])}`}{" "}
                          <br />
                          {prices[1] ? `$${prices[1]}` : "loading..."}
                        </button>
                      </div>
                      <div
                        onClick={() => handleDateClick(dates[2])}
                        className="filter_date_qsbox"
                      >
                        <button
                          className={`${
                            dates[2] === departureDate ? "border-blue" : ""
                          }`}
                        >
                          {`${findDayOfWeek(dates[2])}, ${findMonthOfWeek(
                            dates[2]
                          )} ${findDay(dates[2])}`}
                          <br />
                          {prices[2] ? `$${prices[2]}` : "loading..."}
                        </button>
                      </div>
                      <div
                        onClick={() => handleDateClick(dates[3])}
                        className="filter_date_qsbox"
                      >
                        <button
                          className={`${
                            dates[3] === departureDate ? "border-blue" : ""
                          }`}
                        >
                          {`${findDayOfWeek(dates[3])}, ${findMonthOfWeek(
                            dates[3]
                          )} ${findDay(dates[3])}`}
                          <br />
                          {prices[3] ? `$${prices[3]}` : "loading..."}
                        </button>
                      </div>
                      <div
                        onClick={() => handleDateClick(dates[4])}
                        className="filter_date_qsbox"
                      >
                        <button
                          className={`${
                            dates[4] === departureDate ? "border-blue" : ""
                          }`}
                        >
                          {`${findDayOfWeek(dates[4])}, ${findMonthOfWeek(
                            dates[4]
                          )} ${findDay(dates[4])}`}

                          <br />
                          {prices[4] ? `$${prices[4]}` : "loading..."}
                        </button>
                      </div>

                      {/* <div
                        onClick={() => handleDateClick(dates[5])}
                        className={`filter_date_qsbox ${
                          dates[5] === departureDate ? "border-blue" : ""
                        }`}
                      >
                        <button>
                          {`${findDayOfWeek(dates[5])}, ${findMonthOfWeek(
                            dates[5]
                          )} ${findDay(dates[5])}`}
                          <br />
                          {prices[5] ? `$${prices[5]}` : "loading..."}
                        </button>
                      </div> */}
                      {/* </div> */}
                    </Carousel>
                    <div className="divider mt-3 mb-3" />
                    <div className="row flight_search_listwrap mx-xl-5 mx-lg-5 mx-2">
                      {processedData.length !== 0 &&
                      processedData !== null &&
                      processedData !== undefined ? (
                        <>
                          {processedData.map((item, index) => {
                            return (
                              <div
                                key={item.id}
                                className="col-xl-12 col-lg-12 col-12 col-md-12 bg-light p-3 pb-0 mb-3 border border-1 rounded shadow-sm flight_search_listbox"
                              >
                                <div className="row justify-content-between gx-0">
                                  <div className="col-12 col-xl-2 col-lg-2 col-md-12 my-auto airline_logo">
                                    <img
                                      src={
                                        process.env.PUBLIC_URL +
                                        `/FlightLogo/${item.itineraries[0]["segments"][0].carrierCode["code"]}.webp`
                                      }
                                      onError={(e) => {
                                        e.target.style.display = "none"; // Hide the image if it fails to load
                                        // Optionally, you can display a loading indicator here
                                      }}
                                      onLoad={(e) => {
                                        e.target.style.display = "block"; // Show the image if it loads successfully
                                        // Optionally, you can hide the loading indicator here
                                      }}
                                      width={"70"}
                                      // height={"12"}
                                      alt="airline"
                                    />
                                    <span className="fw-semibold logo mx-2 mx-xl-0 mx-lg-0">
                                      {
                                        item.itineraries[0]["segments"][0]
                                          .carrierCode["value"]
                                      }
                                    </span>{" "}
                                    <br />
                                    <span className="text-muted flightid my-auto">
                                      Flight{" "}
                                      {
                                        item.itineraries[0]["segments"][0]
                                          .number
                                      }
                                    </span>
                                  </div>
                                  <div className="col-12 col-xl-7 col-lg-7 mt-2">
                                    <div className="row text-center gx-0">
                                      <div className="col-2 my-auto">
                                        <div className="fw-semibold">
                                          {
                                            item.itineraries[0]["segments"][0]
                                              .departure["departureItaCode"]
                                          }
                                        </div>
                                        <div className="text-white-1 text-nowrap text-center fw-semibold">
                                          {formatTimeToAmPm(
                                            item.itineraries[0][
                                              "segments"
                                            ][0].departure["departureAt"].slice(
                                              -8,
                                              -3
                                            )
                                          )}
                                        </div>
                                        <div className="text-white-1 font-size-12 text-nowrap text-center fw-semibold">
                                          {`${findDayOfWeek(
                                            item.itineraries[0][
                                              "segments"
                                            ][0].departure["departureAt"].slice(
                                              0,
                                              10
                                            )
                                          )}, ${findMonthOfWeek(
                                            item.itineraries[0][
                                              "segments"
                                            ][0].departure["departureAt"].slice(
                                              0,
                                              10
                                            )
                                          )} ${findDay(
                                            item.itineraries[0][
                                              "segments"
                                            ][0].departure["departureAt"].slice(
                                              0,
                                              10
                                            )
                                          )}`}
                                        </div>
                                      </div>
                                      <div className="col-7 text-center">
                                        <div>
                                          <span className="fs-6 fw-medium text-muted">
                                            {item.itineraries[0][
                                              "duration"
                                            ].match(/PT(.*?)H/)?.[1] ===
                                            undefined
                                              ? ""
                                              : `${
                                                  item.itineraries[0][
                                                    "duration"
                                                  ].match(/PT(.*?)H/)?.[1]
                                                }h`}{" "}
                                            {item.itineraries[0][
                                              "duration"
                                            ].match(/H(.*?)M/)?.[1] ===
                                            undefined
                                              ? ""
                                              : `${
                                                  item.itineraries[0][
                                                    "duration"
                                                  ].match(/H(.*?)M/)?.[1]
                                                }m`}
                                          </span>
                                        </div>
                                        <div className="flightLine">
                                          {item.itineraries[0]["segments"].map(
                                            () => {
                                              return <div />;
                                            }
                                          )}
                                          <div />
                                        </div>
                                        <div className="my-3 text-white-1 text-center">
                                          <span className="flight_route_details fw-normal">
                                            {item.itineraries[0]["segments"]
                                              .length === 1 ? (
                                              <>
                                                {
                                                  item.itineraries[0][
                                                    "segments"
                                                  ][0]["departure"][
                                                    "departureItaCode"
                                                  ]
                                                }{" "}
                                                {
                                                  item.itineraries[0][
                                                    "segments"
                                                  ][0]["arrival"][
                                                    "arrivalIataCode"
                                                  ]
                                                }
                                              </>
                                            ) : (
                                              <>
                                                {item.itineraries[0][
                                                  "segments"
                                                ].map(
                                                  (insideSegement, index) => {
                                                    if (index === 0) {
                                                      return (
                                                        <>
                                                          {
                                                            insideSegement[
                                                              "departure"
                                                            ][
                                                              "departureItaCode"
                                                            ]
                                                          }{" "}
                                                          {
                                                            insideSegement[
                                                              "arrival"
                                                            ]["arrivalIataCode"]
                                                          }
                                                        </>
                                                      );
                                                    } else {
                                                      return (
                                                        <>
                                                          {" "}
                                                          {
                                                            insideSegement[
                                                              "arrival"
                                                            ]["arrivalIataCode"]
                                                          }
                                                        </>
                                                      );
                                                    }
                                                  }
                                                )}
                                              </>
                                            )}
                                          </span>{" "}
                                          {/* <span className="fw-semibold text-black">
                                    SAW
                                  </span> */}
                                        </div>
                                      </div>
                                      <div className="col-2 my-auto mx-1">
                                        <div className="fw-semibold">
                                          {
                                            item.itineraries[0]["segments"][
                                              item.itineraries[0]["segments"]
                                                .length - 1
                                            ].arrival["arrivalIataCode"]
                                          }
                                        </div>
                                        <div className="text-white-1 text-nowrap text-center fw-semibold">
                                          {formatTimeToAmPm(
                                            item.itineraries[0]["segments"][
                                              item.itineraries[0]["segments"]
                                                .length - 1
                                            ].arrival["arrivalAt"].slice(-8, -3)
                                          )}
                                        </div>
                                        <div className="text-white-1 font-size-12 text-nowrap text-center fw-semibold">
                                          {/* {item.itineraries[0]["segments"][
                                            item.itineraries[0]["segments"]
                                              .length - 1
                                          ].arrival["arrivalAt"].slice(0, 10)} */}
                                          {`${findDayOfWeek(
                                            item.itineraries[0]["segments"][
                                              item.itineraries[0]["segments"]
                                                .length - 1
                                            ].arrival["arrivalAt"].slice(0, 10)
                                          )}, ${findMonthOfWeek(
                                            item.itineraries[0]["segments"][
                                              item.itineraries[0]["segments"]
                                                .length - 1
                                            ].arrival["arrivalAt"].slice(0, 10)
                                          )} ${findDay(
                                            item.itineraries[0]["segments"][
                                              item.itineraries[0]["segments"]
                                                .length - 1
                                            ].arrival["arrivalAt"].slice(0, 10)
                                          )}`}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-3 col-xl-3 col-lg-3 my-3 mx-auto">
                                    <div className="text-xl-center text-lg-center text-sm-end text-center text-md-end mx-xl-4 mx-lg-4 mx-auto ">
                                      <button
                                        onClick={() => handleBooking(index)}
                                        className="flight_book_btn px-4 py-2 d-flex align-items-center"
                                      >
                                        <span className="fw-bold fs-5">
                                          ${item.total}
                                        </span>
                                      </button>
                                      <span className="book_btn_text">
                                        <span className="text-muted text-nowrap ms-5 per_adulttext">
                                          *Per Adult
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="highlight_text col-xl-12 col-lg-8 col-12 bg-warning-subtle text-center my-xl-2 my-lg-2 mx-auto">
                                    <a
                                      href="#"
                                      className="flight_details text-dark-emphasis"
                                    >
                                      Get{" "}
                                      <span className="fw-bold">$50 OFF</span>{" "}
                                      by calling now!
                                    </a>
                                  </div>

                                  {/*Add Retun offer  */}
                                  {item.itineraries.length > 1 ? (
                                    <>
                                      <div className="col-12 col-xl-2 col-lg-2 col-md-12 my-auto">
                                        <img
                                          width={"70"}
                                          // height={"12"}
                                          alt="airline"
                                          src={
                                            process.env.PUBLIC_URL +
                                            `/FlightLogo/${item.itineraries[1]["segments"][0].carrierCode["code"]}.webp`
                                          }
                                          onError={(e) => {
                                            e.target.style.display = "none"; // Hide the image if it fails to load
                                            // Optionally, you can display a loading indicator here
                                          }}
                                          onLoad={(e) => {
                                            e.target.style.display = "block"; // Show the image if it loads successfully
                                            // Optionally, you can hide the loading indicator here
                                          }}
                                        />
                                        <span className="fw-semibold logo mx-2 mx-xl-0 mx-lg-0">
                                          {
                                            item.itineraries[1]["segments"][0]
                                              .carrierCode["value"]
                                          }
                                        </span>{" "}
                                        <span className="text-muted flightid">
                                          Flight{" "}
                                          {
                                            item.itineraries[1]["segments"][0]
                                              .number
                                          }
                                        </span>
                                      </div>
                                      <div className="col-12 col-xl-10 col-lg-10 mt-2">
                                        <div className="row text-center gx-0">
                                          <div className="col-2 my-auto">
                                            <div className="fw-semibold">
                                              {
                                                item.itineraries[1][
                                                  "segments"
                                                ][0].departure[
                                                  "departureItaCode"
                                                ]
                                              }
                                            </div>
                                            <div className="text-white-1">
                                              {formatTimeToAmPm(
                                                item.itineraries[1][
                                                  "segments"
                                                ][0].departure[
                                                  "departureAt"
                                                ].slice(-8, -3)
                                              )}
                                            </div>
                                            <div className="text-white-1 font-size-12 text-nowrap text-center">
                                              {`${findDayOfWeek(
                                                item.itineraries[1][
                                                  "segments"
                                                ][0].departure[
                                                  "departureAt"
                                                ].slice(0, 10)
                                              )}, ${findMonthOfWeek(
                                                item.itineraries[1][
                                                  "segments"
                                                ][0].departure[
                                                  "departureAt"
                                                ].slice(0, 10)
                                              )} ${findDay(
                                                item.itineraries[1][
                                                  "segments"
                                                ][0].departure[
                                                  "departureAt"
                                                ].slice(0, 10)
                                              )}`}
                                            </div>
                                          </div>
                                          <div className="col-7 text-center">
                                            <div>
                                              <span className="fs-6 fw-medium text-muted">
                                                {
                                                  item.itineraries[1][
                                                    "duration"
                                                  ].match(/PT(.*?)H/)?.[1]
                                                }
                                                h{" "}
                                                {
                                                  item.itineraries[1][
                                                    "duration"
                                                  ].match(/H(.*?)M/)?.[1]
                                                }
                                                m
                                              </span>
                                            </div>
                                            <div className="flightLine">
                                              {item.itineraries[1][
                                                "segments"
                                              ].map(() => {
                                                return <div />;
                                              })}
                                              <div />
                                            </div>
                                            <div className="my-3 text-white-1 text-center">
                                              <span className="flight_route_details fw-normal">
                                                {item.itineraries[1]["segments"]
                                                  .length === 1 ? (
                                                  <>
                                                    {
                                                      item.itineraries[1][
                                                        "segments"
                                                      ][0]["departure"][
                                                        "departureItaCode"
                                                      ]
                                                    }{" "}
                                                    {
                                                      item.itineraries[1][
                                                        "segments"
                                                      ][0]["arrival"][
                                                        "arrivalIataCode"
                                                      ]
                                                    }
                                                  </>
                                                ) : (
                                                  <>
                                                    {item.itineraries[1][
                                                      "segments"
                                                    ].map(
                                                      (
                                                        insideSegement,
                                                        index
                                                      ) => {
                                                        if (index === 0) {
                                                          return (
                                                            <>
                                                              {
                                                                insideSegement[
                                                                  "departure"
                                                                ][
                                                                  "departureItaCode"
                                                                ]
                                                              }{" "}
                                                              {
                                                                insideSegement[
                                                                  "arrival"
                                                                ][
                                                                  "arrivalIataCode"
                                                                ]
                                                              }
                                                            </>
                                                          );
                                                        } else {
                                                          return (
                                                            <>
                                                              {" "}
                                                              {
                                                                insideSegement[
                                                                  "arrival"
                                                                ][
                                                                  "arrivalIataCode"
                                                                ]
                                                              }
                                                            </>
                                                          );
                                                        }
                                                      }
                                                    )}
                                                  </>
                                                )}
                                              </span>{" "}
                                              {/* <span className="flight_route_details fw-light">

                                                {item.itineraries[1]["segments"]
                                                  .length === 1
                                                  ? "Non"
                                                  : item.itineraries[1][
                                                      "segments"
                                                    ].length}{" "}
                                                Stop
                                              </span>{" "} */}
                                              {/* <span className="fw-semibold text-black">
                                    SAW
                                  </span> */}
                                            </div>
                                          </div>
                                          <div className="col-2 my-auto mx-1">
                                            <div className="fw-semibold">
                                              {
                                                item.itineraries[1]["segments"][
                                                  item.itineraries[1][
                                                    "segments"
                                                  ].length - 1
                                                ].arrival["arrivalIataCode"]
                                              }
                                            </div>
                                            <div className="text-white-1">
                                              {formatTimeToAmPm(
                                                item.itineraries[1]["segments"][
                                                  item.itineraries[1][
                                                    "segments"
                                                  ].length - 1
                                                ].arrival["arrivalAt"].slice(
                                                  -8,
                                                  -3
                                                )
                                              )}
                                            </div>
                                            <div className="text-white-1 font-size-12 text-nowrap text-center">
                                              {`${findDayOfWeek(
                                                item.itineraries[1]["segments"][
                                                  item.itineraries[1][
                                                    "segments"
                                                  ].length - 1
                                                ].arrival["arrivalAt"].slice(
                                                  0,
                                                  10
                                                )
                                              )}, ${findMonthOfWeek(
                                                item.itineraries[1]["segments"][
                                                  item.itineraries[1][
                                                    "segments"
                                                  ].length - 1
                                                ].arrival["arrivalAt"].slice(
                                                  0,
                                                  10
                                                )
                                              )} ${findDay(
                                                item.itineraries[1]["segments"][
                                                  item.itineraries[1][
                                                    "segments"
                                                  ].length - 1
                                                ].arrival["arrivalAt"].slice(
                                                  0,
                                                  10
                                                )
                                              )}`}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  ) : (
                                    ""
                                  )}
                                  {/* Return offer end */}

                                  <div className="col-xl-12 col-lg-12 col-9 text-end px-auto my-auto mb-3">
                                    <a
                                      href={`#${item.id}`}
                                      className="flight_details fw-semibold text-primary"
                                      data-bs-toggle="collapse"
                                      // aria-controls="flight_details"
                                    >
                                      Flight Details{" "}
                                      <i className="icofont-caret-down" />
                                    </a>
                                  </div>
                                  <div className="collapse" id={item.id}>
                                    <div className="flight_details_collapsible">
                                      <nav>
                                        <div
                                          className="nav nav-tabs"
                                          id="nav-tab"
                                          role="tablist"
                                        >
                                          <button
                                            className="nav-link active"
                                            id="flight_details_tab"
                                            data-bs-toggle="tab"
                                            data-bs-target={`#flight_details_target${index}`}
                                            type="button"
                                            role="tab"
                                            aria-controls="nav-home"
                                            aria-selected="true"
                                          >
                                            Flight Details
                                          </button>
                                          <button
                                            className="nav-link"
                                            id="fare_data_tab"
                                            data-bs-toggle="tab"
                                            data-bs-target={`#fare_data_target${index}`}
                                            type="button"
                                            role="tab"
                                            aria-controls="nav-profile"
                                            aria-selected="false"
                                          >
                                            Fare Summary
                                          </button>
                                          <button
                                            className="nav-link"
                                            id="cancellation_data_tab"
                                            data-bs-toggle="tab"
                                            data-bs-target={`#cancellation_data_target${index}`}
                                            type="button"
                                            role="tab"
                                            aria-controls="nav-contact"
                                            aria-selected="false"
                                          >
                                            Cancellation
                                          </button>
                                        </div>
                                      </nav>
                                      <div
                                        className="tab-content"
                                        id="nav-tabContent"
                                      >
                                        <div
                                          className="tab-pane fade show active flight_details_data"
                                          style={{ borderBottom: "none" }}
                                          id={`flight_details_target${index}`}
                                          role="tabpanel"
                                          aria-labelledby="flight_details_tab"
                                        >
                                          <div className="row p-3">
                                            <div className="col-xl-12 col-lg-12 col-12 py-2 border">
                                              <span className="fw-semibold">
                                                {departure}{" "}
                                                <span className="fw-normal text-muted">
                                                  {`(${departureItaCode})`} to
                                                </span>{" "}
                                                {arrival}{" "}
                                                <span className="fw-normal text-muted">
                                                  {`(${arrivalIataCode})`}
                                                </span>
                                              </span>
                                            </div>
                                            <div className="row w-100 border mx-auto pb-3">
                                              {item.itineraries[0][
                                                "segments"
                                              ].map((data) => {
                                                return (
                                                  <>
                                                    <div
                                                      key={data}
                                                      className="col-xl-12 col-lg-12 col-12 py-3 px-0 flight_details_airline d-flex justify-content-between"
                                                    >
                                                      <img
                                                        src={
                                                          process.env
                                                            .PUBLIC_URL +
                                                          `/FlightLogo/${data.carrierCode["code"]}.webp`
                                                        }
                                                        width={"90"}
                                                        // height={"9"}
                                                        alt="airline"
                                                        onError={(e) => {
                                                          e.target.style.display =
                                                            "none"; // Hide the image if it fails to load
                                                          // Optionally, you can display a loading indicator here
                                                        }}
                                                        onLoad={(e) => {
                                                          e.target.style.display =
                                                            "block"; // Show the image if it loads successfully
                                                          // Optionally, you can hide the loading indicator here
                                                        }}
                                                      />
                                                      <span className="fw-bold mx-2">
                                                        {
                                                          data.carrierCode[
                                                            "value"
                                                          ]
                                                        }
                                                      </span>{" "}
                                                      <span className="text-dark-emphasis text-nowrap">
                                                        {
                                                          data.carrierCode[
                                                            "code"
                                                          ]
                                                        }{" "}
                                                        | {data.number}
                                                      </span>
                                                    </div>
                                                    <div className="col-xl-2 col-4">
                                                      <span className="fw-bold">
                                                        {formatTimeToAmPm(
                                                          data.departure[
                                                            "departureAt"
                                                          ].slice(-8, -3)
                                                        )}
                                                      </span>{" "}
                                                      <br />
                                                      <span className="fw-semibold date">
                                                        {`${findDayOfWeek(
                                                          data.departure[
                                                            "departureAt"
                                                          ].slice(0, 10)
                                                        )}, ${findMonthOfWeek(
                                                          data.departure[
                                                            "departureAt"
                                                          ].slice(0, 10)
                                                        )} ${findDay(
                                                          data.departure[
                                                            "departureAt"
                                                          ].slice(0, 10)
                                                        )}`}
                                                        {/* {data.departure[
                                                          "departureAt"
                                                        ].slice(0, 10)} */}
                                                      </span>{" "}
                                                      <br />
                                                      <span className="text-muted stop">
                                                        {
                                                          data.departure[
                                                            "departureItaCode"
                                                          ]
                                                        }
                                                      </span>
                                                    </div>
                                                    <div className="col-xl-2 col-4 text-center">
                                                      <div className="flightLine">
                                                        <div />
                                                        <div />
                                                      </div>
                                                      <div>
                                                        <br />
                                                        <span className="fw-medium text-muted">
                                                          {
                                                            data.segmentDuration.match(
                                                              /PT(.*?)H/
                                                            )?.[1]
                                                          }
                                                          { data.segmentDuration.match(
                                                              /PT(.*?)H/
                                                            )?.[1]===undefined?"":"h"}
                                                          {" "}
                                                          {
                                                            data.segmentDuration.match(
                                                              /H(.*?)M/
                                                            )?.[1]
                                                          }
                                                          {data.segmentDuration.match(
                                                              /H(.*?)M/
                                                            )?.[1]===undefined?"":"m"}
                                                          {/* m */}
                                                        </span>
                                                      </div>
                                                    </div>
                                                    <div className="col-xl-2 col-4">
                                                      <span className="fw-bold">
                                                        {formatTimeToAmPm(
                                                          data.arrival[
                                                            "arrivalAt"
                                                          ].slice(-8, -3)
                                                        )}
                                                      </span>{" "}
                                                      <br />
                                                      <span className="fw-semibold date">
                                                        {`${findDayOfWeek(
                                                          data.arrival[
                                                            "arrivalAt"
                                                          ].slice(0, 10)
                                                        )}, ${findMonthOfWeek(
                                                          data.arrival[
                                                            "arrivalAt"
                                                          ].slice(0, 10)
                                                        )} ${findDay(
                                                          data.arrival[
                                                            "arrivalAt"
                                                          ].slice(0, 10)
                                                        )}`}
                                                      </span>{" "}
                                                      <br />
                                                      <span className="text-muted stop">
                                                        {
                                                          data.arrival[
                                                            "arrivalIataCode"
                                                          ]
                                                        }
                                                      </span>
                                                    </div>
                                                    <div className="col-xl-2 col-4 mt-2 mt-xl-0 mt-lg-0">
                                                      <span className="fw-medium">
                                                        BAGGAGE:
                                                      </span>{" "}
                                                      <br />
                                                      <span className="text-muted stop">
                                                        Adult
                                                      </span>
                                                    </div>
                                                    <div className="col-xl-2 col-4 mt-2 mt-xl-0 mt-lg-0">
                                                      <span className="fw-medium">
                                                        CHECK IN:
                                                      </span>{" "}
                                                      <br />
                                                      <span className="text-muted stop">
                                                        {
                                                          item[
                                                            "includedCheckedBags"
                                                          ]["weight"]
                                                        }{" "}
                                                        {
                                                          item[
                                                            "includedCheckedBags"
                                                          ]["weightUnit"]
                                                        }{" "}
                                                        <br />
                                                        {/* <sub>
                                                          (1 piece only)
                                                        </sub> */}
                                                      </span>
                                                    </div>
                                                    <div className="col-xl-2 col-4 mt-2 mt-xl-0 mt-lg-0"></div>
                                                  </>
                                                );
                                              })}
                                            </div>
                                            {/* Adding return segments */}
                                            {item.itineraries.length > 1 ? (
                                              <>
                                                <div
                                                  className="tab-pane fade show active flight_details_data"
                                                  style={{
                                                    borderBottom: "none",
                                                  }}
                                                  id="flight_details_target_old"
                                                  role="tabpanel"
                                                  aria-labelledby="flight_details_tab"
                                                >
                                                  <div className="row pt-3">
                                                    <div className="col-xl-12 col-lg-12 col-12 py-2 border">
                                                      <span className="fw-semibold">
                                                        {arrival}{" "}
                                                        <span className="fw-normal text-muted">
                                                          {`(${arrivalIataCode})`}{" "}
                                                          to
                                                        </span>{" "}
                                                        {departure}{" "}
                                                        <span className="fw-normal text-muted">
                                                          {`(${departureItaCode})`}
                                                        </span>
                                                      </span>
                                                    </div>
                                                    <div className="row w-100 border mx-auto pb-3">
                                                      {item.itineraries[1][
                                                        "segments"
                                                      ].map((data) => {
                                                        return (
                                                          <>
                                                            <div
                                                              key={data}
                                                              className="col-xl-12 col-lg-12 col-12 py-3 px-0 flight_details_airline d-flex justify-content-between"
                                                            >
                                                              <img
                                                                src={
                                                                  process.env
                                                                    .PUBLIC_URL +
                                                                  `/FlightLogo/${data.carrierCode["code"]}.webp`
                                                                }
                                                                width={"90"}
                                                                // height={"9"}
                                                                alt="airline"
                                                                onError={(
                                                                  e
                                                                ) => {
                                                                  e.target.style.display =
                                                                    "none"; // Hide the image if it fails to load
                                                                  // Optionally, you can display a loading indicator here
                                                                }}
                                                                onLoad={(e) => {
                                                                  e.target.style.display =
                                                                    "block"; // Show the image if it loads successfully
                                                                  // Optionally, you can hide the loading indicator here
                                                                }}
                                                              />
                                                              <span className="fw-bold mx-2">
                                                                {
                                                                  data
                                                                    .carrierCode[
                                                                    "value"
                                                                  ]
                                                                }
                                                              </span>{" "}
                                                              <span className="text-dark-emphasis text-end text-nowrap">
                                                                {
                                                                  data
                                                                    .carrierCode[
                                                                    "code"
                                                                  ]
                                                                }{" "}
                                                                | {data.number}
                                                              </span>
                                                            </div>
                                                            <div className="col-xl-2 col-4">
                                                              <span className="fw-bold">
                                                                {formatTimeToAmPm(
                                                                  data.departure[
                                                                    "departureAt"
                                                                  ].slice(
                                                                    -8,
                                                                    -3
                                                                  )
                                                                )}
                                                              </span>{" "}
                                                              <br />
                                                              <span className="fw-semibold date">
                                                                {/* {data.departure[
                                                              "departureAt"
                                                            ].slice(0, 10)} */}
                                                                {`${findDayOfWeek(
                                                                  data.departure[
                                                                    "departureAt"
                                                                  ].slice(0, 10)
                                                                )}, ${findMonthOfWeek(
                                                                  data.departure[
                                                                    "departureAt"
                                                                  ].slice(0, 10)
                                                                )} ${findDay(
                                                                  data.departure[
                                                                    "departureAt"
                                                                  ].slice(0, 10)
                                                                )}`}
                                                              </span>{" "}
                                                              <br />
                                                              <span className="text-muted stop">
                                                                {
                                                                  data
                                                                    .departure[
                                                                    "departureItaCode"
                                                                  ]
                                                                }
                                                              </span>
                                                            </div>
                                                            <div className="col-xl-2 col-4 text-center">
                                                              <div className="flightLine">
                                                                <div />
                                                                <div />
                                                              </div>
                                                              <div>
                                                                <br />
                                                                <span className="fw-light">
                                                                  {
                                                                    data.segmentDuration.match(
                                                                      /PT(.*?)H/
                                                                    )?.[1]
                                                                  }
                                                                  h{" "}
                                                                  {
                                                                    data.segmentDuration.match(
                                                                      /H(.*?)M/
                                                                    )?.[1]
                                                                  }
                                                                  m
                                                                </span>
                                                              </div>
                                                            </div>
                                                            <div className="col-xl-2 col-4">
                                                              <span className="fw-bold">
                                                                {formatTimeToAmPm(
                                                                  data.arrival[
                                                                    "arrivalAt"
                                                                  ].slice(
                                                                    -8,
                                                                    -3
                                                                  )
                                                                )}
                                                              </span>{" "}
                                                              <br />
                                                              <span className="fw-semibold date">
                                                                {/* {data.arrival[
                                                              "arrivalAt"
                                                            ].slice(0, 10)} */}
                                                                {`${findDayOfWeek(
                                                                  data.arrival[
                                                                    "arrivalAt"
                                                                  ].slice(0, 10)
                                                                )}, ${findMonthOfWeek(
                                                                  data.arrival[
                                                                    "arrivalAt"
                                                                  ].slice(0, 10)
                                                                )} ${findDay(
                                                                  data.arrival[
                                                                    "arrivalAt"
                                                                  ].slice(0, 10)
                                                                )}`}
                                                              </span>{" "}
                                                              <br />
                                                              <span className="text-muted stop">
                                                                {
                                                                  data.arrival[
                                                                    "arrivalIataCode"
                                                                  ]
                                                                }
                                                              </span>
                                                            </div>
                                                            <div className="col-xl-2 col-4 mt-2 mt-xl-0 mt-lg-0">
                                                              <span className="fw-medium">
                                                                BAGGAGE:
                                                              </span>{" "}
                                                              <br />
                                                              <span className="text-muted stop">
                                                                Adult
                                                              </span>
                                                            </div>
                                                            <div className="col-xl-2 col-4 mt-2 mt-xl-0 mt-lg-0">
                                                              <span className="fw-medium">
                                                                CHECK IN:
                                                              </span>{" "}
                                                              <br />
                                                              <span className="text-muted stop">
                                                                {
                                                                  item[
                                                                    "includedCheckedBags"
                                                                  ]["weight"]
                                                                }{" "}
                                                                {
                                                                  item[
                                                                    "includedCheckedBags"
                                                                  ][
                                                                    "weightUnit"
                                                                  ]
                                                                }
                                                                <br />
                                                                {/* <sub>
                                                                  (1 piece only)
                                                                </sub> */}
                                                              </span>
                                                            </div>
                                                            <div className="col-xl-2 col-4 mt-2 mt-xl-0 mt-lg-0"></div>
                                                          </>
                                                        );
                                                      })}
                                                    </div>
                                                  </div>
                                                </div>
                                              </>
                                            ) : (
                                              ""
                                            )}

                                            {/* Return segment end */}
                                          </div>
                                        </div>

                                        <div
                                          className="tab-pane fade fare_data"
                                          id={`fare_data_target${index}`}
                                          role="tabpanel"
                                          aria-labelledby="fare_data_tab"
                                        >
                                          <div className="row p-3">
                                            <div className="col-xl-12 col-lg-12 col-12 py-2 border">
                                              <span className="fw-semibold">
                                                Fare Breakup
                                              </span>
                                            </div>
                                            <div className="row w-100 border mx-auto pb-3">
                                              <div className="col-xl-12 col-lg-12 col-12 p-3">
                                                <table className="lh-lg">
                                                  <thead>
                                                    <tr>
                                                      <th>TOTAL</th>
                                                      <th className="px-3">
                                                        ${item.total}
                                                      </th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td className="text-muted fw-light">
                                                        Base Fare
                                                      </td>
                                                      <td className="px-3 text-muted fw-light">
                                                        ${item.basePrice}
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td className="text-muted fw-light">
                                                        Surcharges
                                                      </td>
                                                      <td className="px-3 text-muted fw-light">
                                                        $
                                                        {(
                                                          Number(item.total) -
                                                          Number(item.basePrice)
                                                        ).toFixed(2)}
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="tab-pane fade cancellation_data"
                                          id={`cancellation_data_target${index}`}
                                          role="tabpanel"
                                          aria-labelledby="cancellation_data_tab"
                                        >
                                          <div className="row p-3">
                                            <div className="col-xl-12 col-lg-12 col-12 py-2 border">
                                              <span className="fw-medium">
                                                {departure} - {arrival}
                                              </span>{" "}
                                            </div>
                                            <div className="row w-100 border mx-auto pb-3">
                                              <div className="col-xl-12 col-lg-12 col-12 p-3">
                                                <table className="border my-3">
                                                  <thead>
                                                    <tr className="border">
                                                      <th className="px-3 py-2 border-end">
                                                        Time Frame
                                                      </th>
                                                      <th className="px-3 py-2">
                                                        Airline Fee + Travels
                                                        Fee
                                                      </th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr className="border">
                                                      <td className="text-muted px-3 py-2 border-end">
                                                        0 Hours to 3 Hours*
                                                      </td>
                                                      <td className="text-muted px-3 py-2">
                                                        ADULT:{" "}
                                                        <span className="fw-medium">
                                                          Non Refundable
                                                        </span>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td className="text-muted px-3 py-2 border-end">
                                                        3 Hours to 4 Days*
                                                      </td>
                                                      <td className="px-3 text-muted px-3 py-2">
                                                        ADULT:{" "}
                                                        <span>$100 + $20</span>
                                                      </td>
                                                    </tr>
                                                    <tr className="border">
                                                      <td className="text-muted px-3 py-2 border-end">
                                                        4 Days to 365 Days*
                                                      </td>
                                                      <td className="px-3 text-muted px-3 py-2">
                                                        ADULT:{" "}
                                                        <span>$90 + $20</span>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <span className="text-muted">
                                                  *From the date of departure
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </>
                      ) : (
                        <div className="col-xl-12 col-lg-12 col-12 col-md-12 bg-light p-3 mb-3 border border-1 rounded shadow-sm flight_search_listbox">
                          <p className="alert">
                            Sorry! Something went wrong. Please remove some
                            filters and choose a suitable flight offer price.
                            Call toll free number {visibleNumber} for instant
                            booking and $50.00 discount
                          </p>
                        </div>
                      )}
                      {/*  */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default FlightSearch;
