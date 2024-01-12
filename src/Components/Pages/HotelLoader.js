import React from "react";
import { useSelector } from "react-redux";

function HotelLoader() {
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
              <div className="main_heading_box">
                <div className="box1" />
                <div className="box2" />
              </div>
            </div>
            <div className="col-xl-12 col-md-12 col-12">
              <div className="recomended_box remove_padding hotel_detailsbox">
                <div className="main_elementbox">
                  <div className="image_box" />
                  <div className="text_box">
                    <div className="box heading_element" />
                    <div className="box" />
                    <div className="box" />
                    <div className="box" />
                    <div className="box" />
                    <div className="box" />
                    <div className="box" />
                  </div>
                  <div className="stop_box">
                    <div className="element_box" />
                    <div className="element_box" />
                    <div className="element_box" />
                    <div className="element_box button_box" />
                  </div>
                </div>
              </div>
              <div className="recomended_box remove_padding hotel_detailsbox">
                <div className="main_elementbox">
                  <div className="image_box" />
                  <div className="text_box">
                    <div className="box heading_element" />
                    <div className="box" />
                    <div className="box" />
                    <div className="box" />
                    <div className="box" />
                    <div className="box" />
                    <div className="box" />
                  </div>
                  <div className="stop_box">
                    <div className="element_box" />
                    <div className="element_box" />
                    <div className="element_box" />
                    <div className="element_box button_box" />
                  </div>
                </div>
              </div>
              <div className="recomended_box remove_padding hotel_detailsbox">
                <div className="main_elementbox">
                  <div className="image_box" />
                  <div className="text_box">
                    <div className="box heading_element" />
                    <div className="box" />
                    <div className="box" />
                    <div className="box" />
                    <div className="box" />
                    <div className="box" />
                    <div className="box" />
                  </div>
                  <div className="stop_box">
                    <div className="element_box" />
                    <div className="element_box" />
                    <div className="element_box" />
                    <div className="element_box button_box" />
                  </div>
                </div>
              </div>
              <div className="recomended_box remove_padding hotel_detailsbox">
                <div className="main_elementbox">
                  <div className="image_box" />
                  <div className="text_box">
                    <div className="box heading_element" />
                    <div className="box" />
                    <div className="box" />
                    <div className="box" />
                    <div className="box" />
                    <div className="box" />
                    <div className="box" />
                  </div>
                  <div className="stop_box">
                    <div className="element_box" />
                    <div className="element_box" />
                    <div className="element_box" />
                    <div className="element_box button_box" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HotelLoader;
