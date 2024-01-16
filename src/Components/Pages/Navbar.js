import React, { useEffect, useRef, useState } from "react";
import Aos from "aos";
import { useSelector, useDispatch } from "react-redux";
import { visibleNumber, hiddenNumber } from "../GlobalData/GlobalMetaData";
import { Link } from "react-router-dom";
var $ = require("jquery");

function Navbar() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const [show, setShow] = useState(false);
  function scrollToTop(e) {
    setShow(false);
    window.scrollTo(0, 0);
  }
  Aos.init({
    duration: 1000,
    offset: 200,
    easing: "ease",
    once: true,
    mirror: "true",
  });

  const sidenavbarRef = useRef(null);
  useEffect(() => {
    // Function to close the dropdown when clicked outside
    const handleClickOutside = (event) => {
      if (
        sidenavbarRef.current &&
        !sidenavbarRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // useEffect(() => {
  //   $("#nav_btn").click(function (e) {
  //     e.stopPropagation();
  //     $("#nav_menu").toggleClass("menushow");
  //     $(".site_logo").css("display", "none");
  //     $('section, .travel-search').css({'opacity':'0.5', 'transition':'none'});
  //     $('.header').css('opacity', '1');
  //   });

  //   $("#nav_menu").click(function (e) {
  //     e.stopPropagation();
  //   });

  //   $("body,html").click(function (e) {
  //     $("#nav_menu").removeClass("menushow");
  //     $(".site_logo").css("display", "block");
  //     $('section, .travel-search').css('opacity', '1');
  //   });
  //   // Clean up event listeners when the component unmounts
  //   return () => {
  //     $("#nav_btn").off("click");
  //     $("#nav_menu").off("click");
  //     $("body,html").off("click");
  //   };
  // }, []);

  function handleClick() {
    dispatch({
      type: "SET_COUNTER",
      counter: window.location.pathname,
    });
  }

  return (
    <div>
      <section className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4">
              <div onClick={handleClick} className="site_logo">
                <Link
                  aria-label="img"
                  className={`navbar-brand `}
                  onClick={scrollToTop}
                  to="/"
                >
                  <img
                    src={require("../assets/img/gallery/plane.webp")}
                    alt="nav"
                    height={"50"}
                    width={"50"}
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-10 col-md-8 col-sm-8">
              <ul className="menu my-1" id="#">
                <li
                  onClick={handleClick}
                  className={counter === "/" ? "active" : ""}
                >
                  <Link aria-label=" Home" to="/">
                    Home
                  </Link>
                </li>
                <li
                  onClick={handleClick}
                  className={counter === "/about-us" ? "active" : ""}
                >
                  <Link
                    aria-label="About Us"
                    to="/about-us"
                    onClick={scrollToTop}
                    className="text-nowrap"
                  >
                    About Us
                  </Link>
                </li>
                {/* <li
                  onClick={handleClick}
                  className={counter === "/flights" ? "active" : ""}
                >
                  <Link
                    aria-label="Flights"
                    to="/flights"
                    onClick={scrollToTop}
                  >
                    Flights
                  </Link>
                </li> */}
                <li
                  onClick={handleClick}
                  className={counter === "/business-class" ? "active" : ""}
                >
                  <Link
                    aria-label="business class"
                    to="/business-class"
                    onClick={scrollToTop}
                  >
                    Business Class
                  </Link>
                </li>
                <li
                  onClick={handleClick}
                  className={counter === "/first-class" ? "active" : ""}
                >
                  <Link
                    aria-label="first class"
                    to="/first-class"
                    onClick={scrollToTop}
                  >
                    First Class
                  </Link>
                </li>
                <li
                  onClick={handleClick}
                  className={counter === "/contact" ? "active" : ""}
                >
                  <Link
                    aria-label="Support"
                    to="/contact"
                    onClick={scrollToTop}
                  >
                    Support
                  </Link>
                </li>
                {/* <div  className="w-100">
                    <a
                      href="tel:+18003266623"
                      className="custombtn rounded-pill text-white fw-normal ms-2"
                    >
                      Get Advice
                    </a>
                    <a
                      href="tel:+18003266623"
                      className="custombtngrp border-start-0 rounded-end-pill fw-normal"
                    >
                      Packages
                    </a>
                    <a
                      href="tel:+18003266623"
                      className="custombtngrp border-start-0 border-end-0 fw-normal"
                    >
                      Tours
                    </a>
                    <a
                      href="tel:+18003266623"
                      className="custombtngrp border-end-0 rounded-start-pill fw-normal"
                    >
                      Hotels
                    </a>
                  </div> */}
              </ul>
            </div>
            <div
              className="sidenav_btn"
              onClick={() => setShow(!show)}
              id="nav_btn"
            >
              <a className="sidenav_btn" role="button">
                <span className="sidenav_icon">
                  <i className="icofont-navigation-menu text-primary" />
                </span>
              </a>
            </div>
            <div
              id="nav_menu"
              ref={sidenavbarRef}
              className={`${show ? "menushow" : ""}`}
            >
              <ul className="sidenav_nav p-0">
                <li>
                  <Link
                    to="/"
                    onClick={scrollToTop}
                    className="border-bottom w-100 p-0 logo_sidenav "
                  >
                    <img
                      src={require("../assets/img/gallery/plane.webp")}
                      alt="LOGO"
                      height={"50"}
                      width={"50"}
                      className="ms-3 mt-1"
                    />
                  </Link>
                </li>
                <li className="border-bottom">
                  <Link onClick={scrollToTop} aria-label="Home" to="/">
                    <i className="icofont-home me-2 fs-2 text-primary-emphasis" />
                    Home
                  </Link>
                </li>
                <li className="border-bottom">
                  <Link
                    to="/about-us"
                    onClick={scrollToTop}
                    aria-label="About Us"
                  >
                    <i className="icofont-users me-2 fs-2 text-primary-emphasis" />{" "}
                    About Us
                  </Link>
                </li>
                <li className="border-bottom">
                  <Link
                    onClick={scrollToTop}
                    aria-label="Business Class"
                    to="/business-class"
                  >
                    <i className="icofont-briefcase-1 me-2 fs-2 text-primary-emphasis" />{" "}
                    Business Class
                  </Link>
                </li>
                <li className="border-bottom">
                  <Link
                    onClick={scrollToTop}
                    aria-label="First Class"
                    to="/first-class"
                  >
                    <i className="icofont-award me-2 fs-2 text-primary-emphasis" />{" "}
                    First Class
                  </Link>
                </li>
                <li className="text-muted fw-medium">Products</li>
                <li className="border-bottom">
                  <Link
                    onClick={scrollToTop}
                    aria-label="Flights"
                    to="/flights"
                  >
                    <i className="icofont-airplane me-2 fs-2 text-primary-emphasis" />{" "}
                    Flights
                  </Link>
                </li>
                {/* <li className="border-bottom">
                    <a href="#">
                      <i className="icofont-hotel me-2 fs-2 text-primary-emphasis" />
                      Hotels
                    </a>
                  </li> */}
                <li className="border-bottom">
                  <Link
                    onClick={scrollToTop}
                    aria-label="Support"
                    to="/contact"
                  >
                    <i className="icofont-headphone-alt me-2 fs-2 text-primary-emphasis" />{" "}
                    Support
                  </Link>
                </li>
                <li className="text-muted fw-medium">Official Info</li>
                <li className="border-bottom">
                  <Link onClick={scrollToTop} to="/terms-conditions">
                    <i className="icofont-book-mark me-1 fs-2 text-primary-emphasis" />{" "}
                    Terms & Conditions
                  </Link>
                </li>
                <li className="border-bottom">
                  <Link onClick={scrollToTop} to="/refund-policy">
                    <i className="icofont-dollar-true me-1 fs-2 text-primary-emphasis" />{" "}
                    Refund Policy
                  </Link>
                </li>

                <li className="border-bottom bg-primary-subtle">
                  <a href={hiddenNumber} className="mx-auto fw-semibold fs-4">
                    Get Expert Advice
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
