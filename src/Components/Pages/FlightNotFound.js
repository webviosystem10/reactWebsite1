import React from "react";
import { useSelector } from "react-redux";
import TripForm from "./TripForm";

function FlightNotFound() {
  const arrival = useSelector((state) => state.arrival);
  const departureDate = useSelector((state) => state.departureDate);
  const arrivalDate = useSelector((state) => state.arrivalDate);
  const totalPassenger = useSelector((state) => state.totalPassenger);
  const tripClass = useSelector((state) => state.tripClass);
  const departure = useSelector((state) => state.departure);
  function scrollToTop() {
    window.scrollTo(0, 0);
    window.history.back();
  }
  return (
    <>
      <section className="bg-white pb-3 pt-2">
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
                  <i className="icofont-direction-sign text-primary" />{" "}
                  {arrival} <i className="icofont-caret-down fs-6" />
                </span>
                <br />
                <span className="fw-light text-muted">
                  {departureDate}
                  {arrivalDate !== null &&
                  arrivalDate !== undefined &&
                  arrivalDate !== ""
                    ? `  /${arrivalDate}`
                    : ""}{" "}
                  ({totalPassenger} Passenger,{tripClass})
                </span>
              </a>
              <div className="collapse mt-2 border-top" id="collapseExample">
                <TripForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="outer-container-not-found">
        <div className="FlightNotFound">
          <img
            className="noFlightImage"
            src={require("../assets/img/gallery/travel.webp")}
            alt="Not found"
          />
          <p className="notFoundTotle">Sorry, Flights Not Found.</p>
          <p className="notFoundDesc">
            We could not find flights for this search. Please go back to make a
            different selection.
          </p>
          <button onClick={scrollToTop} className="goBack">
            GO BACK
          </button>
        </div>
      </div>
    </>
  );
}

export default FlightNotFound;
