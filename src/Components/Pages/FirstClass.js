import React from 'react'
import {Helmet} from 'react-helmet'
import TripForm from '../Pages/TripForm-p'

import {  firstClassDesc, firstClassTitle } from '../GlobalData/GlobalMetaData'
function FirstClass() {
  return (
    <>
    <Helmet>
        <title>{firstClassTitle}</title>
        <meta name="description" content={firstClassDesc} />
      </Helmet>
      <section className="my-5 airlines_page">
      <div className="container">
        <div className="row containBox">
          <div className="col-lg-8 col-md-12 col-12">
            <div className="airlines_text p-xl-5">
              <span className="front_page_span">Experience the Exquisute</span>
              <h1>
                Check our{" "}
                <sup>
                  <i className="icofont-rounded-left-up prim-color" />
                </sup>
                Business Class
                <sub>
                  <i className="icofont-rounded-right-down prim-color" />
                </sub>{" "}
                Extravaganza?
              </h1>
              <p className="mt-3">
                Air Canada strives to provide reliable service, a wide network of
                destinations, and a rewarding loyalty program for its passengers.
                With a focus on innovation and customer satisfaction, Air Canada
                continues to be a prominent player in the global aviation industry.
                It also offers additional services and products to enhance the
                travel experience.
              </p>
              <div className='mt-4'>
                <img
                  src={require("../assets/img/gallery/firstclass.webp")}
                  width="100%"
                />
              </div>
              <h1 className="mt-5">
                Enjoy Your Journey With <span>Business Class</span>’s Tickets
              </h1>
              <p className="fw-semibold">
                The reasons behind the huge demand for{" "}
                <span className="fw-bold">Business Class</span> flights are:
              </p>
              <ul className='ul_padding_remove'>
                <li>
                  <b> Aeroplan:</b> The entry-level tier of Air Canada's Aeroplan
                  program allows members to earn and redeem points for flights,
                  upgrades, and travel services. They also enjoy exclusive
                  promotions and offers.
                </li>
                <li>
                  <b>
                    {" "}
                    Aeroplan <span className="fw-bold">25K</span>:
                  </b>{" "}
                  25K tier can be earned with 25,000 miles or 25 flight segments.
                  Offers priority check-in, boarding, lounge access, flight bonus
                  miles, and preferred reward pricing.
                </li>
                <li>
                  <b>
                    {" "}
                    Aeroplan <span className="fw-bold">50K</span>:
                  </b>{" "}
                  It can be earned with 50,000 miles or 50 flight segments. Offers
                  priority waitlisting, upgrade priority, more Maple Leaf Lounges
                  access, and higher flight bonus miles.
                </li>
                <li>
                  <b>
                    {" "}
                    Aeroplan <span className="fw-bold">75K</span>:
                  </b>{" "}
                  Partner Benefits: Club Premier Members earn points from flights
                  and partner activities like hotels, car rentals, shopping, dining,
                  and more. Points can be redeemed for rewards with renowned brand
                  partners.
                </li>
                <li>
                  <b>
                    {" "}
                    Aeroplan <span className="fw-bold">Super Elite 100K</span>:
                  </b>{" "}
                  100K tier can be earned with 100,000 miles or 100 flight segments.
                  Provides guaranteed reservations, priority airport services,
                  concierge services, highest flight bonus miles, and extra Star
                  Alliance benefits.
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
    
    </>
  )
}

export default FirstClass