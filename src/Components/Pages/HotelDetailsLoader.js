import React from "react";
import { useSelector } from "react-redux";

function HotelDetailsLoader() {
  const reduxArrival = useSelector((state) => state.arrival);
  const reduxDeparture = useSelector((state) => state.departure);
  const reduxDate = useSelector((state) => state.departureDate);
  const reduxArrivalIta = useSelector((state) => state.arrivalItaCode);
  const reduxDepartureIta = useSelector((state) => state.departureItaCode);
  return (
    <div className="main_wrapper">
      {/* <p className='loader-title'>{reduxDeparture} to {reduxArrival} , {reduxDate}</p>
        <p className='loader-desc'>Please wait... while we search the cheapest airfares for you, over 500 Airlines.</p>
        <img className='Flight-loader' src={require('./flight-loader.gif')} alt="Loading..." />
        <div className='flight-loader-details'>
            <div className='loader-flights'>
                <p className='loader-item'>{reduxDepartureIta}</p>
                <p className='loader-item'>{reduxDeparture} to {reduxArrival}</p>
                <p className='loader-item'>{reduxDate}</p>
            </div>
            <div className='loader-flights'>
                <p className='loader-item'>{reduxArrivalIta}</p>
                <p className='loader-item'>{reduxDeparture} to {reduxArrival}</p>
                <p className='loader-item'>{reduxDate}</p>
            </div>
        </div> */}
      <section className="skeleton_loader">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading_element">
                <div className="sub_heading_element" />
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div className="hetel_detailsbox">
                <div className="icon_element" />
                <div className="text_box" />
                <div className="text_box" />
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div className="hetel_detailsbox">
                <div className="icon_element" />
                <div className="text_box" />
                <div className="text_box" />
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div className="hetel_detailsbox">
                <div className="icon_element" />
                <div className="text_box" />
                <div className="text_box" />
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div className="hetel_detailsbox">
                <div className="icon_element" />
                <div className="text_box" />
                <div className="text_box" />
              </div>
            </div>
            <div className="col-xl-8 col-md-8 col-12">
              <div className="hotel_details_imagebox"></div>
            </div>
            <div className="col-xl-4 col-md-4 col-12">
              <div className="right_hotel_detailsbox">
                <div className="text_box" />
                <div className="text_box" />
                <div className="text_box" />
                <div className="text_box" />
                <div className="text_box" />
                <div className="text_box" />
                <div className="text_box" />
                <div className="text_box" />
              </div>
              <div className="call_box" />
              <div className="call_box" />
              <div className="call_box" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HotelDetailsLoader;
