import React from "react";
import { Link } from "react-router-dom";
import PhoneInput from "./PhoneInput";
import {  useDispatch } from "react-redux";
import {website} from '../GlobalData/GlobalMetaData'
function Footer() {
  const dispatch = useDispatch();
  function scrollToTop(){
    dispatch({
      type: "SET_COUNTER",
      counter: window.location.pathname,
    })
    window.scrollTo(0,0)
   
    console.log("click")
  }
  return (
    <>
    <PhoneInput/>
      <section className="footer">
        <footer className="text-center text-white bg-black">
          {/* Grid container */}
          <div className="container">
            {/* Section: Links */}
            <section className="">
              {/* Grid row*/}
              <div className="row text-center d-flex justify-content-center pt-4">
                <div className="col-xl-12 col-12 sub-footer-text">
                  <ul className="sub-footer-nav">
                    <li>
                      <Link className="mx-xl-2" to="/about-us" onClick={scrollToTop}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link className="mx-xl-2" to="/privacy-policy" onClick={scrollToTop}>
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link onClick={scrollToTop} className="mx-xl-2" to="/terms-conditions">
                        Terms & Conditions
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="mx-xl-2" to="/flights" onClick={scrollToTop}>
                        Flight
                      </Link>
                    </li> */}
                    <li>
                      <Link  className="mx-xl-2" to="/refund-policy" onClick={scrollToTop}>
                        Refund Policy
                      </Link>
                    </li>
                    <li>
                      <Link className="mx-xl-2" onClick={scrollToTop} to="/sitemap">
                        Site Map
                      </Link>
                    </li>
                    <li>
                      <Link className="mx-xl-2" to="/contact" onClick={scrollToTop}>
                        Support
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Grid row*/}
            </section>
            {/* Section: Links */}
            <hr className="my-2" />
            {/* Section: Text */}
            <section className="pt-3">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt distinctio earum repellat quaerat voluptatibus placeat
                    nam, commodi optio pariatur est quia magnam eum harum
                    corrupti dicta, aliquam sequi voluptate quas.
                  </p>
                </div>
              </div>
            </section>
            {/* Section: Text */}
          </div>
          {/* Grid container */}
          {/* Copyright */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © {new Date().getFullYear()} Copyright:&nbsp;
            <a className="text-white" href="#">
              {website}
            </a>
          </div>
          {/* Copyright */}
        </footer>
      </section>
    </>
  );
}

export default Footer;
