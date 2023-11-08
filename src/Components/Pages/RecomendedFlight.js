import React from "react";
import { generalGetFunction } from "../Model/GlobalFunction";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function RecomendedFlight() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const adult = useSelector((state) => state.adult);
  const children = useSelector((state) => state.children);
  const infants = useSelector((state) => state.infants);
  const tripClass = useSelector((state) => state.tripClass);
  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + 7);
  const date = nextDate.toISOString().split("T")[0];
  function suggestFlightClick(
    departure,
    arrival,
    arrivalItaCode,
    departureItaCode
  ) {
    dispatch({
      type: "SET_ADULT",
      adult: 1,
    })
    dispatch({
      type: "SET_CHILDREN",
      children: 0,
    })
    dispatch({
      type: "SET_INFANTS",
      infants: 0,
    })
    window.scrollTo(0, 0);
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
    dispatch({
      type: "SET_ARRIVAL",
      arrival: arrival,
    });
    dispatch({
      type: "SET_ARRIVALITACODE",
      arrivalItaCode: arrivalItaCode,
    });
    dispatch({
      type: "SET_DEPARTURE",
      departure: departure,
    });
    dispatch({
      type: "SET_DEPARTUREITACODE",
      departureItaCode: departureItaCode,
    });
    dispatch({
      type: "SET_TRIPCLASS",
      tripClass: "ECONOMY",
    });
    dispatch({
      type: "SET_TOTALPASSENGER",
      totalPassenger: 1,
    });
    localStorage.setItem("totalPassenger",1)
    localStorage.setItem("tripClass","ECONOMY")
    localStorage.setItem("adult",1)
    localStorage.setItem("children",0)
    localStorage.setItem("infants",0)
    localStorage.setItem("departure", departure);
    localStorage.setItem("departureItaCode", departureItaCode);
    localStorage.setItem("arrival", arrival);
    localStorage.setItem("arrivalItaCode", arrivalItaCode);
    async function fetchData() {
      // Dispatch data to redux for instant change
      var offerData = await generalGetFunction(
        `v2/shopping/flight-offers?originLocationCode=${departureItaCode}&destinationLocationCode=${arrivalItaCode}&currencyCode=USD&departureDate=${date}&adults=${adult}&travelClass=ECONOMY&children=${children}&infants=${infants}&max=90`
      );
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
            includedCheckedBags:{
              // weight:item.travelerPricings[0]["fareDetailsBySegment"][0]["includedCheckedBags"]["weight"]!==undefined?"":"",
              // weightUnit:item.travelerPricings[0]["fareDetailsBySegment"][0]["includedCheckedBags"]["weightUnit"]!==undefined?item.travelerPricings[0]["fareDetailsBySegment"][0]["includedCheckedBags"]["weightUnit"]:""
              weight:"",
              weightUnit:""
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
  return (
    <>
      <section className="my-5 recom_flights">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <p className="h1">
                <sup>
                  <i
                    className="icofont-rounded-left-up prim-color"
                    data-aos="fade"
                  />
                </sup>
                Recommended Flights
                <sub>
                  <i
                    className="icofont-rounded-right-down prim-color"
                    data-aos="fade"
                    data-aos-delay={100}
                  />
                </sub>
              </p>
              <p className="text-white-1">Whatchu looking for mate?</p>
            </div>
            <div
              className="col-lg-2 text-end"
              
            >
              
            </div>
          </div>
          <div
            className="col-lg-8 col-12 col-md-12 bg-light p-3 my-4 border border-1 rounded mx-auto"
            data-aos="fade"
          >
            <div className="row justify-content-between">
              <div className="col-0 col-xl-1 col-lg-1 airline_logo">
                <img
                  src={require("../assets/img/gallery/airlogo1.webp")}
                  alt="Recomended"
                  height={"40"}
                  width={"40"}
                />
              </div>
              <div className="col-12 col-xl-6 col-lg-6">
                <div className="row text-center">
                  <div className="col-3 col-xl-auto">
                    <div className="fw-semibold">LOS ANGELES</div>
                    <div className="text-white-1 text-nowrap">4:00 PM</div>
                  </div>
                  <div className="col text-center">
                    <div className="flightLine">
                      <div />
                      <div />
                      <div />
                    </div>
                    <div className="my-3 text-white-1">
                    5h 4m <br/> <span className="flight_stops">One Stop</span>
                    </div>
                  </div>
                  <div className="col-3 col-xl-auto">
                    <div className="fw-semibold">SEATTLE</div>
                    <div className="text-white-1 text-nowrap">9:04 PM</div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-5 col-lg-5">
                <div className="d-flex align-items-center">
                  <div className="text-end">
                    <div className="fw-semibold">US$44</div>
                    <div className="text-white-1 text-nowrap">10 Deals</div>
                  </div>
                  <button onClick={()=>suggestFlightClick("LOS ANGELES","SEATTLE","SEA","LAX")} className="btn mx-4" >
                    View Deal <i className="icofont-double-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-8 col-12 col-md-12 bg-light p-3 my-4 border border-1 rounded mx-auto"
            data-aos="fade"
          >
            <div className="row justify-content-between">
              <div className="col-0 col-xl-1 col-lg-1 airline_logo">
                <img
                  src={require("../assets/img/gallery/airlogo1.webp")}
                  alt="Recomended"
                  height={"40"}
                  width={"40"}
                />
              </div>
              <div className="col-12 col-xl-6 col-lg-6">
                <div className="row text-center">
                  <div className="col-3 col-xl-auto">
                    <div className="fw-semibold">ATLANTA</div>
                    <div className="text-white-1 text-nowrap">5:35 PM</div>
                  </div>
                  <div className="col text-center">
                    <div className="flightLine">
                      <div />
                      <div />
                    </div>
                    <div className="my-3 text-white-1">
                    1h 31m <br/> <span className="flight_stops">Non Stop</span>
                    </div>
                  </div>
                  <div className="col-3 col-xl-auto">
                    <div className="fw-semibold">TAMPA</div>
                    <div className="text-white-1 text-nowrap">7:06 PM</div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-5 col-lg-5">
                <div className="d-flex align-items-center">
                  <div className="text-end">
                    <div className="fw-semibold">US$36</div>
                    <div className="text-white-1 text-nowrap">10 Deals</div>
                  </div>
                  <button onClick={()=>suggestFlightClick("ATLANTA","TAMPA","TPA","ATL")} className="btn mx-4" >
                    View Deal <i className="icofont-double-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-8 col-12 col-md-12 bg-light p-3 my-4 border border-1 rounded mx-auto"
            data-aos="fade"
          >
            <div className="row justify-content-between">
              <div className="col-0 col-xl-1 col-lg-1 airline_logo">
                <img
                  src={require("../assets/img/gallery/airlogo1.webp")}
                  alt="Recomended"
                  height={"40"}
                  width={"40"}
                />
              </div>
              <div className="col-12 col-xl-6 col-lg-6">
                <div className="row text-center">
                  <div className="col-3 col-xl-auto">
                    <div className="fw-semibold">DENVER</div>
                    <div className="text-white-1 text-nowrap">8:34 PM</div>
                  </div>
                  <div className="col text-center">
                    <div className="flightLine">
                      <div />
                      <div />
                    </div>
                    <div className="my-3 text-white-1">
                    2h 23m <br/> <span className="flight_stops">Non Stop</span>
                    </div>
                  </div>
                  <div className="col-3 col-xl-auto">
                    <div className="fw-semibold">CHICAGO</div>
                    <div className="text-white-1 text-nowrap">11:57 PM</div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-5 col-lg-5">
                <div className="d-flex align-items-center">
                  <div className="text-end">
                    <div className="fw-semibold">US$99</div>
                    <div className="text-white-1 text-nowrap">10 Deals</div>
                  </div>
                  <button onClick={()=>suggestFlightClick("DENVER","CHICAGO","ORD","DEN")} className="btn mx-4" >
                    View Deal <i className="icofont-double-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-8 col-12 col-md-12 bg-light p-3 my-4 border border-1 rounded mx-auto"
            data-aos="fade"
          >
            <div className="row justify-content-between">
              <div className="col-0 col-xl-1 col-lg-1 airline_logo">
                <img
                  src={require("../assets/img/gallery/airlogo1.webp")}
                  alt="Recomended"
                  height={"40"}
                  width={"40"}
                />
              </div>
              <div className="col-12 col-xl-6 col-lg-6">
                <div className="row text-center">
                  <div className="col-3 col-xl-auto">
                    <div className="fw-semibold">SEATTLE</div>
                    <div className="text-white-1 text-nowrap">4:45 PM</div>
                  </div>
                  <div className="col text-center">
                    <div className="flightLine">
                      <div />
                      <div />
                    </div>
                    <div className="my-3 text-white-1">
                    5h 2m <br/> <span className="flight_stops">Non Stop</span>
                    </div>
                  </div>
                  <div className="col-3 col-xl-auto">
                    <div className="fw-semibold">NEW YORK</div>
                    <div className="text-white-1 text-nowrap">12:47 AM</div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-5 col-lg-5">
                <div className="d-flex align-items-center">
                  <div className="text-end">
                    <div className="fw-semibold">US$223</div>
                    <div className="text-white-1 text-nowrap">10 Deals</div>
                  </div>
                  <button onClick={()=>suggestFlightClick("SEATTLE","NEW YORK","JFK","SEA")} className="btn mx-4" >
                    View Deal <i className="icofont-double-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-8 col-12 col-md-12 bg-light p-3 my-4 border border-1 rounded mx-auto"
            data-aos="fade"
          >
            <div className="row justify-content-between">
              <div className="col-0 col-xl-1 col-lg-1 airline_logo">
                <img
                  src={require("../assets/img/gallery/airlogo1.webp")}
                  alt="Recomended"
                  height={"40"}
                  width={"40"}
                />
              </div>
              <div className="col-12 col-xl-6 col-lg-6">
                <div className="row text-center">
                  <div className="col-3 col-xl-auto">
                    <div className="fw-semibold">LOS ANGELES</div>
                    <div className="text-white-1 text-nowrap">12:46 PM</div>
                  </div>
                  <div className="col text-center">
                    <div className="flightLine">
                      <div />
                      <div />
                      <div/>
                    </div>
                    <div className="my-3 text-white-1">
                      3h 05m <br/> <span className="flight_stops">One Stop</span>
                    </div>
                  </div>
                  <div className="col-3 col-xl-auto">
                    <div className="fw-semibold">PARIS</div>
                    <div className="text-white-1 text-nowrap">12:30 PM</div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-5 col-lg-5">
                <div className="d-flex align-items-center">
                  <div className="text-end">
                    <div className="fw-semibold">US$370</div>
                    <div className="text-white-1 text-nowrap">10 Deals</div>
                  </div>
                  <button onClick={()=>suggestFlightClick("LOS ANGELES","PARIS","CDG","LAX")} className="btn mx-4" >
                    View Deal <i className="icofont-double-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RecomendedFlight;
