import React, { useEffect, useState, useRef } from "react";
import {
  hotelGetFunction,
  hotelPostFunction,
  getAddress,
} from "../Model/GlobalFunction";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
function HotelForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reduxarea = useSelector((state) => state.area);
  const reduxcheckout = useSelector((state) => state.checkout);
  const reduxcheckin = useSelector((state) => state.checkin);
  const reduxareacode = useSelector((state) => state.areaCode);
  const [dateFrom, setDateFrom] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [dateTo, setDateTo] = useState(new Date().toISOString().split("T")[0]);
  const [area, setArea] = useState("");
  const [areaSearh, setAreaSearch] = useState(false);
  const [areaData, setAreaData] = useState();
  const [areaDiv, setAreaDiv] = useState(false);
  const [areaCode, setAreaCode] = useState();
  useEffect(() => {
    if (reduxarea === null || reduxarea === undefined) {
      setArea("");
    } else {
      setArea(reduxarea);
    }
    if (reduxcheckin === null || reduxcheckin === undefined) {
      setDateFrom(new Date().toISOString().split("T")[0]);
    } else {
      setDateFrom(new Date(reduxcheckin).toISOString().split("T")[0]);
    }
    if (reduxcheckout === null || reduxcheckout === undefined) {
      setDateTo(new Date().toISOString().split("T")[0]);
    } else {
      setDateTo(new Date(reduxcheckout).toISOString().split("T")[0]);
    }
    if (reduxareacode === null || reduxareacode === undefined) {
      setAreaCode("");
    } else {
      setAreaCode(reduxareacode);
    }
  }, [reduxarea, reduxareacode, reduxcheckin, reduxcheckout]);
  useEffect(() => {
    const update = new Date(dateFrom);
    update.setDate(update.getDate() + 1);
    if (new Date(dateTo) <= new Date(dateFrom)) {
      setDateTo(update.toISOString().split("T")[0]);
    }
  }, [dateFrom, dateTo, reduxcheckin, reduxcheckout]);

  // Define a debounced function to execute after a delay
  const debouncedFunctionForDeparture = () => {
    if (area.includes(",")) {
      console.log();
    } else if (area.length > 1) {
      setAreaSearch(true);
      async function fetchData() {
        const depData = await hotelGetFunction(`locations/v3/search?q=${area}`);
        if (depData !== "error") {
          setAreaData(depData);
          setAreaSearch(false);
        } else {
          setAreaSearch(false);
        }
      }
      fetchData();
    }
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      debouncedFunctionForDeparture();
    }, 600);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [area]);

  const handleDepartureClick = (item) => {
    setAreaCode(item.gaiaId);
    setArea(`${item["regionNames"]["displayName"]}.`);
    setAreaDiv(false);
  };

  // HANDLE OUTSIDE CLICK FOR LOCATION DIV CLOSE
  const divRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (divRef.current && !divRef.current.contains(event.target)) {
        // User clicked outside the div
        setAreaDiv(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Getting all hotels based on user input
  //  calling api for flight offer
  const offerSearch = (e) => {
    window.scrollTo(0, 0);
    // e.preventDefault();
    async function fetchData() {
      if (!area.includes(",")) {
        toast.error("Please fill area");
      } else {
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
      }
      var address = [];
      // for (let i = 0; i < 60; i++) {
      //   address.push(1);
      // }
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

  // Checking if the check in date is less than today
  const formattedDate = new Date();
  formattedDate.setDate(formattedDate.getDate() + 7);
  useEffect(() => {
    if (
      (dateFrom === "" && reduxcheckin === null) ||
      (dateFrom < new Date().toISOString().split("T")[0] && dateFrom !== "")
    ) {
      setDateFrom(formattedDate.toISOString().split("T")[0]);
    }
  }, [dateFrom]);
  return (
    <>
      <div
        action=""
        className="text-center search_form row justify-content-center"
      >
        <input
          type="text"
          className="border-0 px-4 mb-2 mb-xl-0 mb-lg-0 rounded col-xl-6 col-lg-6 col-md-12 col-12 place"
          placeholder="Area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          onClick={() => {
            setAreaDiv(true);
          }}
        />
        {areaSearh ? (
          <img
            src={require("../assets/img/gallery/loader-gif.webp")}
            className=" area-search-loader"
          />
        ) : (
          ""
        )}

        <div className="d-flex mx-2 px-0 rounded col-xl-4 col-lg-4 col-md-12 col-12 flightdate">
          <DatePicker
            className="border-0 px-4 mb-2 mb-xl-0 mb-lg-0 rounded col-12 position-relative z-1 date"
            autoComplete="off"
            aria-label="datefrom"
            name="date_from"
            id="datefrom"
            placeholder="Date From"
            selected={new Date(dateFrom)}
            minDate={new Date()}
            onChange={(date) => setDateFrom(date.toISOString().split("T")[0])}
          />
          <DatePicker
            className="border-0 px-4 mb-2 mb-xl-0 mb-lg-0 rounded col-12 position-relative z-1 date"
            autoComplete="off"
            aria-label="datefrom"
            name="date_from"
            id="datefrom"
            placeholder="Date From"
            selected={new Date(dateTo)}
            minDate={new Date(dateFrom)}
            onChange={(date) => setDateTo(date.toISOString().split("T")[0])}
          />
          {/* <input
            type="text"
            className="border-0 px-4 mb-2 mb-xl-0 mb-lg-0 rounded col-xl-6 col-lg-6 col-md-12 col-12 returndate"
            placeholder="Date To"
          /> */}
        </div>
        <button
          onClick={() => offerSearch()}
          className="border-0 rounded px-4 mt-2 mt-xl-0 bg-dark text-white fw-semibold col-xl-auto col-lg-auto col-6 text-nowrap"
        >
          Search{" "}
          <i className="ph-duotone ph-magnifying-glass text-white align-baseline" />
        </button>
      </div>
      <div ref={divRef} className={areaDiv ? "departure-suggestion" : "none"}>
        {areaData &&
          areaData["sr"].map((item, index) => {
            return (
              <div
                className="airport-list"
                onClick={() => handleDepartureClick(item)}
                key={index}
              >
                <div className="place-name">
                  <p className="country">{item["regionNames"]["fullName"]}</p>
                </div>
              </div>
            );
          })}
      </div>

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

export default HotelForm;
