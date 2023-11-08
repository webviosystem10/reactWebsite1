import React from "react";
import { Helmet } from "react-helmet";
import TripForm from "../../Pages/TripForm-p";

import {
  AustralianDesc,
  AustralianTitle,
} from "../../GlobalData/GlobalMetaData";
import { useSelector } from "react-redux";
import FlightLoader from "../FlightLoader";
function Australian() {
  const loading = useSelector((state) => state.loading);
  return (
    <>
      <Helmet>
        <title>{AustralianTitle}</title>
        <meta name="description" content={AustralianDesc} />
      </Helmet>
      {loading ? (
        <FlightLoader />
      ) : (
        <section className="my-5 airlines_page">
          <div className="container">
            <div className="row containBox">
              <div className="col-lg-8 col-md-12 col-12">
                <div className="airlines_text p-xl-5">
                  <span className="front_page_span">Air Canada Airlines</span>
                  <h1>
                    Why{" "}
                    <sup>
                      <i className="icofont-rounded-left-up prim-color" />
                    </sup>
                    Air Canada
                    <sub>
                      <i className="icofont-rounded-right-down prim-color" />
                    </sub>{" "}
                    Is Popular?
                  </h1>
                  <p className="mt-3">
                    Air Canada strives to provide reliable service, a wide
                    network of destinations, and a rewarding loyalty program for
                    its passengers. With a focus on innovation and customer
                    satisfaction, Air Canada continues to be a prominent player
                    in the global aviation industry. It also offers additional
                    services and products to enhance the travel experience.
                  </p>
                  <div>
                    <img
                      src="https://itravelofare.com/assets/images/flights/air-canada.webp"
                      width="100%"
                    />
                  </div>
                  <h1 className="mt-5">
                    Enjoy Your Journey With <span>Air Canada</span>’s Aeroplan
                  </h1>
                  <p className="fw-semibold">
                    The reasons behind the huge demand for{" "}
                    <span className="fw-bold">Air Canada</span> flights are:
                  </p>
                  <ul>
                    <li>
                      <b> Aeroplan:</b> The entry-level tier of Air Canada's
                      Aeroplan program allows members to earn and redeem points
                      for flights, upgrades, and travel services. They also
                      enjoy exclusive promotions and offers.
                    </li>
                    <li>
                      <b>
                        {" "}
                        Aeroplan <span className="fw-bold">25K</span>:
                      </b>{" "}
                      25K tier can be earned with 25,000 miles or 25 flight
                      segments. Offers priority check-in, boarding, lounge
                      access, flight bonus miles, and preferred reward pricing.
                    </li>
                    <li>
                      <b>
                        {" "}
                        Aeroplan <span className="fw-bold">50K</span>:
                      </b>{" "}
                      It can be earned with 50,000 miles or 50 flight segments.
                      Offers priority waitlisting, upgrade priority, more Maple
                      Leaf Lounges access, and higher flight bonus miles.
                    </li>
                    <li>
                      <b>
                        {" "}
                        Aeroplan <span className="fw-bold">75K</span>:
                      </b>{" "}
                      Partner Benefits: Club Premier Members earn points from
                      flights and partner activities like hotels, car rentals,
                      shopping, dining, and more. Points can be redeemed for
                      rewards with renowned brand partners.
                    </li>
                    <li>
                      <b>
                        {" "}
                        Aeroplan{" "}
                        <span className="fw-bold">Super Elite 100K</span>:
                      </b>{" "}
                      100K tier can be earned with 100,000 miles or 100 flight
                      segments. Provides guaranteed reservations, priority
                      airport services, concierge services, highest flight bonus
                      miles, and extra Star Alliance benefits.
                    </li>
                  </ul>
                  <h1 className="mt-5">
                    Future Initiatives Of <span>Air Canada</span>
                  </h1>
                  <p>
                    The airline is planning to add more flights to the fleet and
                    introduce new fly routes to enhance its connectivity across
                    the globe. Air Canada is committed to maintain its
                    reputation as one of the top airlines in the world.
                  </p>
                  <ul>
                    <li>
                      <h4 className="mt-5">What is Air Canada Known For?</h4>
                      <p>
                        Air Canada is Canada's largest airline with an extensive
                        flight network, prioritizing safety and offering a
                        premium travel experience.
                      </p>
                    </li>
                    <li>
                      <h4 className="mt-3">
                        What is the loyalty program of Air Canada called?
                      </h4>
                      <p>
                        Air Canada's loyalty program, Aeroplan, rewards members
                        with points for flights and offers various redemption
                        options, elite status tiers, and partner benefits.
                      </p>
                    </li>
                    <li>
                      <h4 className="mt-3">
                        Does Air Canada offer inflight entertainment?
                      </h4>
                      <p>
                        Air Canada provides inflight entertainment with movies,
                        TV shows, music, and more.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-12">
                <div className="travel-search">
                  <TripForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Australian;
