import React from 'react'
import { useSelector } from "react-redux";

function FlightLoader() {
    const reduxArrival = useSelector((state) => state.arrival);
  const reduxDeparture = useSelector((state) => state.departure);
  const reduxDate = useSelector((state) => state.departureDate);
  const reduxArrivalIta = useSelector((state) => state.arrivalItaCode);
  const reduxDepartureIta = useSelector((state) => state.departureItaCode);
  return (
    <div className='flight-loader'>
        <p className='loader-title'>{reduxDeparture} to {reduxArrival} , {reduxDate}</p>
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
        </div>
    </div>
  )
}

export default FlightLoader