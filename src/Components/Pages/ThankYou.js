import React from "react";
import {visibleNumber, websiteName} from '../GlobalData/GlobalMetaData'
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom'

function ThankYou() {
  const navigate = useNavigate()
  const leadId = useSelector((state) => state.leadId);
  useEffect(()=>{
    if(leadId===null){
      navigate("/")
    }
  })
  console.log(leadId,"This is lead");
  return (
    <>
      <div
        className="thankyou-bg"
      >
        <div className="overlay-thankyou" />
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-3 col-6">
            </div>
            <div className="col-xl-6 col-md-9 col-6">
              <div className="thankyoudate text-right">
                <p className="pt-4">Date Here</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="thankyou-text1 mb-2">
                <p>
                  <b>
                    Thank you for choosing {websiteName}
                    </b>
                  <br />
                  <br />
                  <span>
                    Your Booking id is {leadId}
                  </span>
                  <br />
                  <br />
                  We faced with an issue while processing your payment with the
                  card. One of our executive will get back to you soon to help
                  with the booking.
                  <br />
                  <br />
                  You may also call us at our Toll Free{" "}
                  <a href="tel: ">
                    {visibleNumber}
                  </a>
                  <br />
                  for immediate help.
                  <br />
                  <br />
                  Inconvenience is regreted
                </p>
                <div className="thankyou-btn">
                  <Link to="/">
                    <button type="button" className="bntchatthank mt-4 border-0">
                      Back To Home{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="thankyou-social">
                <img
            src={require("../assets/img/gallery/thank-you.webp")}
            alt="booking confirmation"
            className="pt-4"
            title="Your Store"
            
          />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThankYou;
