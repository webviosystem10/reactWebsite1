import React, { useEffect } from 'react'
import TripForm from './TripForm-p';
import Aos from 'aos';
import AllFlights from './AllFlights/AllFlights';
import 'aos/dist/aos.css';
import { useSelector } from "react-redux";
import FlightLoader from "./FlightLoader";
import ChooseUs from './ChooseUs';
import { Helmet } from 'react-helmet';
import { flightsDesc, flightsTitle } from '../GlobalData/GlobalMetaData';

function Flights() {
  const loading = useSelector((state) => state.loading);
    useEffect(() => {
        Aos.init({
          offset: 200,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 100,
        });
      }, []);
      function handleTop(){
        window.scrollTo(0,0)
      }
  return (
    <>
    <Helmet>
        <title>{flightsTitle}</title>
        <meta name="description" content={flightsDesc} />
      </Helmet>
     {loading ? (
        <FlightLoader />
      ) :   <>
      {/* Front Page */}
      <section>
        <div className="home_front_page flights">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 col-md-12 col-xl-6 py-lg-5 my-lg-5 py-xl-2 my-xl-0 text-center row1">
                <div className="front_page_text p-xl-5" data-aos="fade-up">
                  <span className="front_page_span">Relax &amp; Enjoy</span>
                  <h1>
                    Unleash Your{" "}
                    <span className="front_page_highlight">Wanderlust</span> Today
                  </h1>
                  <p className="mt-3">
                    We are here to Make your Travel Comfortable.
                  </p>
                  <a href="#" className="btn w-25 mt-2">
                    Search
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-xl-4 col-12 col-md-12 mx-auto my-xl-5 px-0">
                <div
                  className="travel-search"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                 <TripForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Search Form End*/}
      <br/>
      <br/>
      <br/>
      {/* Our Partners Start */}
      <AllFlights/>
      {/* Our Partners End */}
      <ChooseUs/>
    </>}
  

    </>
  )
}

export default Flights