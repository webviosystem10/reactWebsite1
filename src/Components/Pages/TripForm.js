import React, { useEffect, useState, useRef } from "react";
import { generalGetFunction } from "../Model/GlobalFunction";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function TripForm() {
  const navigate = useNavigate();
  const reduxArrival = useSelector((state) => state.arrival);
  const reduxClass = useSelector((state) => state.tripClass);
  const reduxAdult = useSelector((state) => state.adult);
  const reduxChild = useSelector((state) => state.children);
  const reduxInfants = useSelector((state) => state.infants);
  const reduxWay = useSelector((state) => state.flightWay);
  const reduxDeparture = useSelector((state) => state.departure);
  const reduxArrivalIta = useSelector((state) => state.arrivalItaCode);
  const reduxDepartureIta = useSelector((state) => state.departureItaCode);
  const reduxDate = useSelector((state) => state.departureDate);
  const reduxArrivalDate = useSelector((state) => state.arrivalDate);

  const dispatch = useDispatch();
  const [departure, setDeparture] = useState("KOLKATA(CCU)");
  const [arrival, setArrival] = useState("DELHI(DEL)");
  const [arrivalData, setArrivalData] = useState(null);
  const [departureData, setDepartureData] = useState(null);
  const [selectedValue, setSelectedValue] = useState(
    reduxWay === null ? "One way" : reduxWay
  );
  const [arrivalDiv, setArrivalDiv] = useState(false);
  const [departureDiv, setDepartureDiv] = useState(false);
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [departureItaCode, setDepartureItaCode] = useState("CCU");
  const [arrivalItaCode, setArrivalItaCode] = useState("DEL");
  const [departureSearch, setDepartureSearch] = useState(false);
  const [arrivalSearch, setArrivalSearch] = useState(false);
  const [tripClass, setTripClass] = useState("ECONOMY");
  const [adult, setAdult] = useState(1);
  const [infants, setInfants] = useState(0);
  const [children, setChildren] = useState(0);
  const [total, setTotal] = useState();
  const [dropdown, setDropdown] = useState(false);

  const containerRef = useRef(null);
  // Checking from previous record weather form data is available or not
  useEffect(() => {
    if (
      reduxArrival !== null &&
      reduxArrival !== undefined &&
      reduxArrival !== ""
    ) {
      setArrival(`${reduxArrival}(${reduxArrivalIta})`);
    } else {
      dispatch({
        type: "SET_ARRIVAL",
        departure: "DELHI",
      });
      localStorage.setItem("arrival", "DELHI");
    }
    if (reduxClass !== null && reduxClass !== undefined && reduxClass !== "") {
      setTripClass(reduxClass);
    }
    if (
      reduxArrivalDate !== null &&
      reduxArrivalDate !== undefined &&
      reduxArrivalDate !== ""
    ) {
      setArrivalDate(reduxArrivalDate);
    }
    if (reduxAdult !== null && reduxAdult !== undefined && reduxAdult !== "") {
      setAdult(Number(reduxAdult));
    }
    if (reduxChild !== null && reduxChild !== undefined && reduxChild !== "") {
      setChildren(Number(reduxChild));
    }
    if (
      reduxInfants !== null &&
      reduxInfants !== undefined &&
      reduxInfants !== ""
    ) {
      setInfants(Number(reduxInfants));
    }
    if (reduxWay !== null && reduxWay !== undefined && reduxWay !== "") {
      setSelectedValue(reduxWay);
    }
    if (
      reduxDeparture !== null &&
      reduxDeparture !== undefined &&
      reduxDeparture !== ""
    ) {
      setDeparture(`${reduxDeparture}(${reduxDepartureIta})`);
    } else {
      dispatch({
        type: "SET_DEPARTURE",
        departure: "KOLKATA",
      });
      localStorage.setItem("departure", "KOLKATA");
    }
    if (reduxDate !== null && reduxDate !== undefined && reduxDate !== "") {
      setDepartureDate(reduxDate);
    }
    if (
      reduxArrivalIta !== null &&
      reduxArrivalIta !== undefined &&
      reduxArrivalIta !== ""
    ) {
      setArrivalItaCode(reduxArrivalIta);
    }
    if (
      reduxDepartureIta !== null &&
      reduxDepartureIta !== undefined &&
      reduxDepartureIta !== ""
    ) {
      setDepartureItaCode(reduxDepartureIta);
    }
    if (reduxAdult === null && reduxChild === null && reduxInfants === null) {
      setTotal(1);
      dispatch({
        type: "SET_DEPARTURE",
        departure: "KOLKATA",
      });
      dispatch({
        type: "SET_DEPARTUREITACODE",
        departureItaCode: "CCU",
      });
      dispatch({
        type: "SET_ARRIVAL",
        arrival: "DELHI",
      });
      dispatch({
        type: "SET_ARRIVALITACODE",
        arrivalItaCode: "DEL",
      });
      dispatch({
        type: "SET_ADULT",
        adult: 1,
      });
      dispatch({
        type: "SET_CHILDREN",
        children: 0,
      });
      dispatch({
        type: "SET_INFANTS",
        infants: 0,
      });
      localStorage.setItem("departureItaCode", "CCU");
      localStorage.setItem("arrivalItaCode", "DEL");
    } else {
      setTotal(Number(reduxAdult) + Number(reduxChild) + Number(reduxInfants));
    }
  }, [
    reduxArrival,
    reduxArrivalIta,
    reduxDate,
    reduxDeparture,
    reduxDepartureIta,
  ]);

  // Function to handle radio button change
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    dispatch({
      type: "SET_FLIGHTWAY",
      flightWay: event.target.value,
    })
    
  };

  // Creating a fuction to get departure airport data by sending user input
  // Define a debounced function to execute after a delay
  const debouncedFunctionForDeparture = () => {
    if (departure.includes("(")) {
      console.log();
    } else if (departure.length > 1) {
      setDepartureSearch(true);
      async function fetchData() {
        const depData = await generalGetFunction(
          `v1/reference-data/locations?subType=AIRPORT&keyword=${departure}`
        );
        if (depData !== "error") {
          setDepartureData(depData);
          setDepartureSearch(false);
        } else {
          setDepartureSearch(false);
        }
      }
      fetchData();
    }
  };

  useEffect(() => {
    // Set a timeout to execute the debounced function after a delay (e.g., 500ms)
    const timeoutId = setTimeout(() => {
      debouncedFunctionForDeparture();
    }, 600);
    // Clear the timeout on every input change to reset the delay
    return () => {
      clearTimeout(timeoutId);
    };
  }, [departure]);

  // Creating a fuction to get arrival airport data by sending user input
  const debouncedFunctionForArrival = () => {
    if (arrival.includes("(")) {
      console.log();
    } else if (arrival.length > 1) {
      setArrivalSearch(true);
      async function fetchData() {
        const arrData = await generalGetFunction(
          `v1/reference-data/locations?subType=AIRPORT&keyword=${arrival}`
        );
        if (arrData !== "error") {
          setArrivalData(arrData);
          setArrivalSearch(false);
        } else {
          setArrivalSearch(false);
        }
      }
      fetchData();
    }
  };
  useEffect(() => {
    // Set a timeout to execute the debounced function after a delay (e.g., 500ms)
    const timeoutId = setTimeout(() => {
      debouncedFunctionForArrival();
    }, 600);
    // Clear the timeout on every input change to reset the delay
    return () => {
      clearTimeout(timeoutId);
    };
  }, [arrival]);

  // Adding logic so that when value of arrival or departure will null then suggestion box will not apper
  useEffect(() => {
    if (arrival.length < 2) {
      setArrivalData(null);
    }
    if (departure.length < 2) {
      setDepartureData(null);
    }
  }, [arrival, departure]);

  // Handle arrival and departure on selected airport
  const handleDepartureClick = (item) => {
    setDepartureItaCode(`${item.iataCode}`);
    localStorage.setItem("departure", item.address.cityName);
    localStorage.setItem("departureItaCode", item.iataCode);
    setDeparture(`${item.address.cityName}(${item.iataCode})`);
    setDepartureDiv(false);
    dispatch({
      type: "SET_DEPARTURE",
      departure: item.address.cityName,
    });
    dispatch({
      type: "SET_DEPARTUREITACODE",
      departureItaCode: item.iataCode,
    });
  };
  const handleArrivalClick = (item) => {
    setArrivalItaCode(`${item.iataCode}`);
    localStorage.setItem("arrival", item.address.cityName);
    localStorage.setItem("arrivalItaCode", item.iataCode);
    setArrival(`${item.address.cityName}(${item.iataCode})`);
    setArrivalDiv(false);
    dispatch({
      type: "SET_ARRIVAL",
      arrival: item.address.cityName,
    });
    dispatch({
      type: "SET_ARRIVALITACODE",
      arrivalItaCode: item.iataCode,
    });
  };

  //  calling api for flight offer
  const offerSearch = (e) => {
    window.scrollTo(0, 0);
    e.preventDefault();
    if (arrival === "") {
      toast.error("Pleas Enter Arrival");
    } else if (departure === "") {
      toast.error("Pleas Enter Departure");
    } else if (departureDate === "") {
      toast.error("Pleas Select Departure Date");
    } else if (arrival === departure) {
      toast.error("Arrival and Departure is same");
    } else if (!arrival.includes("(") || !departure.includes(")")) {
      toast.error("Please Select a valid airport");
    } else {
      async function fetchData() {
        if (selectedValue === "One way") {
          localStorage.setItem("departureDate", departureDate);
          dispatch({
            type: "SET_DEPARTUREDATE",
            departureDate: departureDate,
          });
          dispatch({
            type: "SET_ARRIVALDATE",
            arrivalDate: arrivalDate,
          });
          dispatch({
            type: "SET_LOADING",
            loading: true,
          });
          var offerData = await generalGetFunction(
            `v2/shopping/flight-offers?originLocationCode=${departureItaCode}&destinationLocationCode=${arrivalItaCode}&currencyCode=USD&departureDate=${departureDate}&adults=${adult}&travelClass=${tripClass}&children=${children}&infants=${infants}`
          );
        } else {
          if (arrivalDate === "") {
            toast.error("Please Select return date");
          } else if (arrivalDate <= departureDate) {
            toast.error("Return date must greater than departure date");
          } else {
            localStorage.setItem("arrivalDate", arrivalDate);
            localStorage.setItem("departureDate", departureDate);
            dispatch({
              type: "SET_DEPARTUREDATE",
              departureDate: departureDate,
            });
            dispatch({
              type: "SET_ARRIVALDATE",
              arrivalDate: arrivalDate,
            });
            dispatch({
              type: "SET_LOADING",
              loading: true,
            });
            offerData = await generalGetFunction(
              `v2/shopping/flight-offers?originLocationCode=${departureItaCode}&destinationLocationCode=${arrivalItaCode}&departureDate=${departureDate}&currencyCode=USD&returnDate=${arrivalDate}&&adults=${adult}&children=${children}&travelClass=${tripClass}&infants=${infants}`
            );
          }
        }
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

          navigate("/flight-not-found");
        } else if (
          offerData !== undefined &&
          offerData !== null &&
          offerData !== ""
        ) {
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
          dispatch({
            type: "SET_FLIGHTWAY",
            flightWay: selectedValue,
          });
          dispatch({
            type: "SET_TRIPCLASS",
            tripClass: tripClass,
          });
          dispatch({
            type: "SET_TOTALPASSENGER",
            totalPassenger: total,
          });
          dispatch({
            type: "SET_ADULT",
            adult: adult,
          });
          dispatch({
            type: "SET_CHILDREN",
            children: children,
          });
          dispatch({
            type: "SET_INFANTS",
            infants: infants,
          });
          setTimeout(() => {
            dispatch({
              type: "SET_LOADING",
              loading: false,
            });
          }, 1000);
          // Storing data in localstorage for data avaliablity
          localStorage.setItem("flightWay", selectedValue);
          localStorage.setItem("tripClass", tripClass);
          localStorage.setItem("infants", infants);
          localStorage.setItem("children", children);
          localStorage.setItem("adult", adult);
          localStorage.setItem("totalPassenger", total);
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
  };

  useEffect(() => {
    // Add a click event listener to the document
    const handleDocumentClick = (e) => {
      // Check if the click target is not within the container div
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        // Click occurred outside the container, so hide the child div
        setDepartureDiv(false);
        setArrivalDiv(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener("click", handleDocumentClick);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  // Validate date so that a user will not able to select previous date
  // const currentDate = new Date().toISOString().split("T")[0];
  const formattedDate = new Date();
  const currentDate = formattedDate.toISOString().split("T")[0];
  // Add 7 days to the current date
  formattedDate.setDate(formattedDate.getDate() + 7);
  useEffect(() => {
    if ((departureDate === "" && reduxDate === null)|| (departureDate<new Date().toISOString().split("T")[0] && departureDate !== "" )) {
      setDepartureDate(formattedDate.toISOString().split("T")[0]);
    }
  }, [departureDate]);
 useEffect(()=>{
  if(arrivalDate<departureDate){
    const curre = new Date(departureDate)
    curre.setDate(curre.getDate() + 1)
    setArrivalDate(curre.toISOString().split("T")[0])
  }
 },[departureDate])
  // Handle passenger toggle
  const dropdownRef = useRef(null);
  useEffect(() => {
    // Function to close the dropdown when clicked outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // Change trip class to title
  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (text) {
      return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    });
  }
 
  return (
    <>
      <form
        // action="#"
        // method="POST"
        className="travel-search-form"
        name="route_search_frm"
        id="route_search_frm"
      >
        <div className="row">
          <div className="col-md-12">
            <input type="hidden" name="page" id="page" defaultValue="" />
            <div className="text-center11 d-flex">
              <label className="radio-inline">
                <input
                  type="radio"
                  id="roundtrip"
                  value="Roundtrip"
                  className="route_travel_type mx-1"
                  name="travel_type"
                  checked={selectedValue === "Roundtrip"}
                  onChange={handleRadioChange}
                />
                <span />
                <strong>Roundtrip</strong>
              </label>
              <br />
              <label className="radio-inline mx-2">
                <input
                  type="radio"
                  id="one-way"
                  value="One way"
                  className="route_travel_type mx-2"
                  name="travel_type"
                  checked={selectedValue === "One way"}
                  onChange={handleRadioChange}
                />
                <strong>One-way</strong>
              </label>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 mt-md-4 mt-xl-4 mt-4">
            <div className="form-group form-style">
              <i className="icofont-airplane flight_icon11" />
              <input
                type="text"
                className="date_from iata_code quote_frm form-control routeorigincode ui-autocomplete-input"
                autoComplete="off"
                id="routeorigincode"
                name="origincode"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                placeholder="Add Departure"
                onClick={() => {
                  setDepartureDiv(true);
                  setArrivalDiv(false);
                }}
              />
              {departureSearch ? (
                <CircularProgress className="mui-loader-departure" />
              ) : (
                ""
              )}
            </div>
            {/* <CircularProgress className="mui-loader-departure" /> */}
            <div className={departureDiv ? "departure-suggestion" : "none"}>
              {departureData &&
                departureData.data.map((item) => {
                  return (
                    <div
                      className="airport-list"
                      onClick={() => handleDepartureClick(item)}
                      key={item.iataCode}
                    >
                      <div className="place-name">
                        <p className="country">
                          {item.address.cityName},&nbsp;
                          {item.address.countryName}
                        </p>
                        <p className="airportName">{item.name}</p>
                      </div>
                      <p className="airport-code">{item.iataCode}</p>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 mt-md-3 mt-3 mt-xl-4">
            <div className="form-group destination-placeholder form-style">
              <i className="icofont-airplane-alt flight_icon11" />
              <input
                type="text"
                className="date_to iata_code quote_frm form-control ui-autocomplete-input"
                autoComplete="off"
                id="routedestinationcode"
                name="destinationcode"
                placeholder="Add Arrival"
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
                onClick={() => {
                  setArrivalDiv(true);
                  setDepartureDiv(false);
                }}
              />
              {arrivalSearch ? (
                <CircularProgress className="mui-loader-arrival" />
              ) : (
                ""
              )}
            </div>

            <div className={arrivalDiv ? "departure-suggestion" : "none"}>
              {arrivalData &&
                arrivalData.data.map((item) => {
                  return (
                    <div
                      className="airport-list"
                      onClick={() => handleArrivalClick(item)}
                      key={item.iataCode}
                    >
                      <div className="place-name">
                        <p className="country">
                          {item.address.cityName},&nbsp;
                          {item.address.countryName}
                        </p>
                        <p className="airportName">{item.name}</p>
                      </div>
                      <p className="airport-code">{item.iataCode}</p>
                    </div>
                  );
                })}
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 mt-md-3 mt-3 mt-xl-4"
            id="round_dateform"
          >
            <div className="form-group form-style">
              <i className="icofont-ui-calendar flight_icon11" />
              <label htmlFor="datefrom"></label>
              <DatePicker
                className="quote_frm form-control hasDatepicker"
                autoComplete="off"
                aria-label="datefrom"
                name="date_from"
                id="datefrom"
                placeholder="Date From"
                selected={
                  departureDate && departureDate !== "Invalid Date"
                    ? new Date(departureDate)
                    : formattedDate
                }
                minDate={new Date()}
                onChange={(date) =>
                  setDepartureDate(date.toISOString().split("T")[0])
                }
              />
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 mt-md-3 mt-3 mt-xl-4"
            id="oneway_form"
          >
            <div className="form-group form-style">
              <i className="icofont-ui-calendar flight_icon11" />
              <label htmlFor="dateto"></label>
              <DatePicker
                className="quote_frm form-control hasDatepicker"
                autoComplete="off"
                aria-label="dateto"
                name="date_to"
                id="dateto"
                placeholder="Date From"
                selected={
                  arrivalDate && arrivalDate !== "Invalid Date"
                    ? selectedValue === "One way"
                      ? ""
                      : new Date(arrivalDate)
                    : ""
                }
                minDate={
                  departureDate && departureDate !== "Invalid Date"
                    ? new Date(departureDate)
                    : formattedDate
                }
                onChange={(date) =>
                  setArrivalDate(date.toISOString().split("T")[0])
                }
                disabled={selectedValue === "One way" ? true : false}
              />
            </div>
          </div>
          <div className="col-sm-3 col-xl-3 col-12 col-sm-4 mt-3 mt-md-3 mt-xl-4 mx-auto">
            <div className="form-group form-style">
              <input
                type="hidden"
                className="form-control"
                autoComplete="off"
                name="traveller"
                id="traveller"
              />
              <div
                className=""
                data-toggle="dropdown"
                // aria-expanded="true"
                ref={dropdownRef}
              >
                {/* <i className="icofont-users-alt-3 flight_icon12" /> */}
                <div className="travelerselectbox text-center p-0 m-0 d-flex justify-content-around">
                  <div className="passenger_box">
                    <i className="icofont-users-alt-3 fs-3" />
                  </div>
                  <p
                    className="nav-link dropdown-toggle"
                    id="dropdownMenu2"
                    role="button"
                    data-toggle="dropdown"
                    // aria-expanded="false"
                    onClick={() => setDropdown(true)}
                  >
                    <span className="dropdown_face">
                      {total} {total === 1 ? "Passenger" : "Passengers"},{" "}
                      {toTitleCase(tripClass) === "Premium_economy"
                        ? "Premium economy"
                        : toTitleCase(tripClass)}
                    </span>
                  </p>
                  <div
                    className={`dropdown-menu ${dropdown ? "show" : ""}`}
                    // aria-labelledby="dropdownMenu2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="custom-model-main" id="traveller_details">
                      <div className="custom-model-inner">
                        <div className="custom-model-wrap">
                          <div className="pop-up-content-wrap">
                            <div className="row mb-4">
                              <div className="col-auto">
                                <span
                                  className="highlight"
                                  style={{ fontWeight: 600 }}
                                >
                                  Class
                                </span>
                              </div>
                              <div className="col-6 mx-auto">
                                <select
                                  name="fare_class"
                                  className="travelClass"
                                  id="fare_class"
                                  value={tripClass}
                                  onChange={(e) => setTripClass(e.target.value)}
                                >
                                  <option value="ECONOMY">Economy</option>
                                  <option value="PREMIUM_ECONOMY">
                                    Premium Economy
                                  </option>
                                  <option value="BUSINESS">Business</option>
                                  <option value="FIRST">First</option>
                                </select>
                              </div>
                            </div>
                            <div className="row spacing_box">
                              <div className="col-md-6 col-5 col-xl-6">
                                Adults{" "}
                                <p
                                  style={{
                                    color: "#2F2F2F",
                                    fontSize: 12,
                                    marginTop: 1,
                                  }}
                                >
                                  Over 11
                                </p>
                              </div>
                              <div className="col-6">
                                <div className="row justify-content-evenly">
                                  <div className="col-2">
                                    <i
                                      onClick={() =>
                                        adult > 1 &&
                                        (setAdult(adult - 1),
                                        setTotal(total - 1))
                                      }
                                      className="icofont-minus my-1"
                                    />
                                  </div>
                                  <div className="col-2">
                                    <input
                                      type="hidden"
                                      name="no_of_adults"
                                      id="no_of_adults"
                                      className="traveller_no"
                                      value={adult}
                                      onChange={(e) => setAdult(e.target.value)}
                                    />
                                    <span
                                      id="adult_traveller_txt"
                                      className="traveller_txt mx-1"
                                    >
                                      {adult}
                                    </span>
                                  </div>
                                  <div className="col-2 text-left">
                                    <i
                                      onClick={() =>
                                        total < 9 &&
                                        (setAdult(adult + 1),
                                        setTotal(total + 1))
                                      }
                                      className="icofont-plus my-1"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row spacing_box my-2">
                              <div className="col-md-6 col-5 col-xl-6">
                                Children{" "}
                                <p
                                  style={{
                                    color: "#2F2F2F",
                                    fontSize: 12,
                                    marginTop: 1,
                                  }}
                                >
                                  Under 12
                                </p>
                              </div>
                              <div className="col-6">
                                <div className="row justify-content-evenly">
                                  <div className="col-2">
                                    <i
                                      onClick={() =>
                                        children > 0 &&
                                        (setChildren(children - 1),
                                        setTotal(total - 1))
                                      }
                                      className="icofont-minus my-1"
                                    />
                                  </div>
                                  <div className="col-2">
                                    <input
                                      type="hidden"
                                      name="no_of_child"
                                      id="no_of_child"
                                      className="traveller_no"
                                      value={children}
                                      onChange={(e) =>
                                        setChildren(e.target.value)
                                      }
                                    />
                                    <span
                                      id="child_traveller_txt"
                                      className="traveller_txt mx-1"
                                    >
                                      {children}
                                    </span>
                                  </div>
                                  <div className="col-2">
                                    <i
                                      onClick={() =>
                                        total < 9 &&
                                        (setChildren(children + 1),
                                        setTotal(total + 1))
                                      }
                                      className="icofont-plus my-1"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row spacing_box">
                              <div className="col-md-6 col-5 col-xl-6">
                                Infants{" "}
                                <p
                                  style={{
                                    color: "#2F2F2F",
                                    fontSize: 12,
                                    marginTop: 1,
                                  }}
                                >
                                  Under 2
                                </p>
                              </div>
                              <div className="col-6">
                                <div className="row justify-content-evenly">
                                  <div className="col-2">
                                    <i
                                      onClick={() =>
                                        infants > 0 &&
                                        (setInfants(infants - 1),
                                        setTotal(total - 1))
                                      }
                                      className="icofont-minus my-1"
                                    />
                                  </div>
                                  <div className="col-2">
                                    <input
                                      type="hidden"
                                      name="no_of_infant"
                                      id="no_of_infant"
                                      className="traveller_no"
                                      value={infants}
                                      onChange={(e) =>
                                        setInfants(e.target.value)
                                      }
                                    />
                                    <span
                                      id="infants_traveller_txt"
                                      className="traveller_txt mx-1"
                                    >
                                      {infants}
                                    </span>
                                  </div>
                                  <div className="col-2">
                                    <i
                                      onClick={() =>
                                        total < 9 &&
                                        (setInfants(infants + 1),
                                        setTotal(total + 1))
                                      }
                                      className="icofont-plus my-1"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="container p-2">
                            <div className="row">
                              <div className="col-12 text-center mt-1">
                                <p
                                  onClick={() => setDropdown(false)}
                                  className="passnger_submit btn"
                                >
                                  Submit
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            to="/flight-search"
            className="form-group1 form-btn-style col-xl-3 col-12 col-md-12 mt-md-3 mt-3 mt-xl-3 mx-auto"
          >
            <button onClick={offerSearch} className="btn w-100">
              Search
            </button>
          </div>
        </div>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default TripForm;
