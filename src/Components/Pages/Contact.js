import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  visibleNumber,
  hiddenNumber,
  email,
  address,
  websiteName,
  website,
  contactTitle,
  contactDesc,
} from "../GlobalData/GlobalMetaData";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Helmet } from "react-helmet";

function Contact() {
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [phone, setPhone] = useState("");
  const [errorPhone, setErrorPhone] = useState(false);
  const [msg, setMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [errorCaptcha, setErrorCaptcha] = useState(false);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const doSubmit = () => {
    let user_captcha = document.getElementById("user_captcha_input").value;

    if (validateCaptcha(user_captcha) === true) {
      console.log(user_captcha, "This is valid captcha");
      document.getElementById("user_captcha_input").value = "";
      setErrorCaptcha(false);
    } else {
      console.log(user_captcha, "This is not valid captcha");
      document.getElementById("user_captcha_input").value = "";
      toast.error("Captcha not matched")
      setErrorCaptcha(true);
    }
    if (name.length < 3 || name.length > 20) {
      setErrorName(true);
    }
    if (
      userEmail.length < 3 ||
      userEmail.length > 25 ||
      !userEmail.includes("@")
    ) {
      setErrorEmail(true);
    }
    if (phone.length < 8 || phone.length > 15) {
      setErrorPhone(true);
    }
    if (msg.length < 5 || msg.length > 300) {
      setErrorMsg(true);
    }

    // console.log(!errorCaptcha && !errorEmail && !errorMsg && !errorName && phone.length>10,"This is value checker for false and true condition")
    if (
      !errorCaptcha &&
      user_captcha.length===6 &&
      ( userEmail.length > 3 &&
        userEmail.length < 25 &&
        userEmail.includes("@")) &&
        (msg.length > 5 && msg.length < 300) &&
        (name.length > 3 && name.length < 20) &&
      (phone.length > 8 && phone.length < 15)
    ) {
      const parsedData = {
        from: "React Website",
        to: "raviraj0884@gmail.com",
        subject: "Contact enquery",
        content: `
        <style>
        .content .header{
            /* background-color: aqua; */
            width: 100%;
            border-bottom: 1px solid #ddd;
            
        }
        .header td{
            padding: 10px;
            /* width: 100%; */
            
        }
        .review-details .h{
            padding-right: 100px;
            color: #464646;
        }
        .review-details tr{
            line-height: 10px;
        }
        .redirection{
            margin-top: 20px;
        }
        .redirection a{
            padding: 10px 20px 10px 20px;
            background-color: rgb(0, 81, 255);
            text-decoration: none;
            color: white;
        }
    </style>
    <table id="marin_content" class="content" style="margin-left: auto; margin-right: auto; border: 1px solid #ddd; padding: 10px;">
        
        <tr class="header">
            <td style="font-size: 18px; display: flex; justify-content: space-between; vertical-align: middle; border-bottom: 1px solid #ddd">
                <img src="https://theinfinitytravel.com/assets/images/Infinity_Travels_White_BG_1.png" alt="logo" width="100px">
                
            </td>
        </tr>
        <tr class="body">
            <td>
                <p>Hi Admin</p>
                <p>Details of user who fill the contact us form!</p>
                <h3 style="margin-top:20px;margin-bottom: 10px;">Please review them carefully</h3>
            </td>
        </tr>
        
        
        <tr>
            <td>
                <table class="review-details" style="padding:0 25px 0 25px">
                    <tr>
                        <td class="h">
                            <p><b>Customer Name:</b></p>
                        </td>
                        <td>
                            <p>${name}</p>
                        </td>
                
                    </tr>
                    <tr>
                        <td class="h">
                            <p><b>Customer Email:</b></p>
                        </td>
                        <td>
                            <p>${userEmail}</p>
                        </td>
                
                    </tr>
                    <tr>
                        <td class="h">
                            <p><b>Customer Mobile:</b></p>
                        </td>
                        <td>
                            <p>${phone}</p>
                        </td>
                    </tr>
                    <tr>
                    <td class="h">
                        <p><b>Customer Message:</b></p>
                    </td>
                    <td>
                        <p>${msg}</p>
                    </td>
                </tr>
                <tr>
                        <td class="h">
                            <p><b>Website Name:</b></p>
                        </td>
                        <td>
                            <p>${websiteName}</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
          `,
      };
      axios
        .post(
          // "https://api.theinfinitytravel.com/index.php/api/flight/sendmail",
          parsedData
        )
        .then((res) => {
          console.log(res, "This is correct response");
          toast.success(
            "Thanks for contacting us, we will get back to you soon!"
          );
        })
        .catch(console.log("this is error message"));
    }
  };
  return (
    <>
      {/* Front Page Section */}
      <Helmet>
        <title>{contactTitle}</title>
        <meta name="description" content={contactDesc} />
      </Helmet>
      <section>
        <div className="contact_front_page">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 col-md-12 col-xl-12 text-center">
                <div className="front_page_text" data-aos="fade-up">
                  <h1>
                    Contact <span className="front_page_highlight">Us</span>
                  </h1>
                  <p className="text-white">
                    We are here to Make your Travel Comfortable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Front Page Section End */}
      {/* Contact Page Section */}
      <section>
        <div className="contact_section_content">
          <div className="container">
            <div className="row">
            <div className="col-lg-6 col-12 col-md-6">
                <p className="h4 text-center">
                  Connect with us<span className="text-primary">!</span>
                </p>
                <div className="row">
                  <div className="col-lg-12 mt-5">
                    <div className="row connect_content">
                      <div className="connect_img col-auto">
                        <i className="icofont-building-alt fs-1" />
                      </div>
                      <div className="connect_text col-10">
                        <h5>Office Location</h5>
                        <p>{address}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row connect_content">
                      <div className="connect_img col-auto">
                        <i className="icofont-headphone-alt fs-1" />
                      </div>
                      <div className="connect_text col-auto">
                        <h5>Phone Number</h5>
                        <p>
                          <a href={hiddenNumber} className="text-black">
                            {visibleNumber}
                          </a>{" "}
                          -{" "}
                          <span className="fst-italic text-primary">
                            Toll FREE Number!
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row connect_content">
                      <div className="connect_img col-auto">
                        <i className="icofont-ui-email fs-1" />
                      </div>
                      <div className="connect_text col-auto">
                        <h5>Email Address</h5>
                        <p>
                          <a href="#" className="text-black">
                            {email}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 col-md-6 mt-lg-0 mt-5 contact_form">
                <p className="h4 text-center">
                  Get in Touch<span className="text-primary">!</span>
                </p>
                <div className="form">
                  <div className="form-group py-2">
                    <input
                      type="email"
                      className={`form-control ${
                        errorName ? "error-border" : ""
                      }`}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setErrorName(false);
                      }}
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group py-2">
                    <input
                      type="text"
                      className={`form-control ${
                        errorEmail ? "error-border" : ""
                      }`}
                      id="exampleInputPassword1"
                      value={userEmail}
                      onChange={(e) => {
                        setUserEmail(e.target.value);
                        setErrorEmail(false);
                      }}
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group py-2">
                    <input
                      type="number"
                      className={`form-control ${
                        errorPhone ? "error-border" : ""
                      }`}
                      id="exampleCheck1"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        setErrorPhone(false);
                      }}
                    />
                  </div>
                  <div className="form-group py-2">
                    <textarea
                      className={`form-control ${
                        errorMsg ? "error-border" : ""
                      }`}
                      id="exampleFormControlTextarea1"
                      rows="8"
                      placeholder="Your message"
                      value={msg}
                      onChange={(e) => {
                        setMsg(e.target.value);
                        setErrorMsg(false);
                      }}
                    />
                  </div>
                  <div>
                    <div className="container">
                      <div className="form-group row">
                        <div className="col-6 col-xl-6 mt-3 position-relative">
                          <LoadCanvasTemplate reloadColor="red" />
                        </div>

                        <div className="col-6 col-xl-6 mt-3 px-0">
                          <div className="text-end">
                            <input
                              className={errorCaptcha ? "error-border" : ""}
                              placeholder="Enter Captcha Value"
                              id="user_captcha_input"
                              name="user_captcha_input"
                              type="text"
                              onChange={() => setErrorCaptcha(false)}
                              
                            ></input>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <button
                      type="submit"
                      onClick={() => doSubmit()}
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 mx-auto mt-5">
                <p className="h4 text-center">
                  FAQ<span className="text-primary">!</span>
                </p>
                <div className="row">
                  <div className="col-lg-12">
                    <ul className="faq_collapse mt-5">
                      <li className="pb-2">
                        <a
                          href="#drop1"
                          className=""
                          data-bs-toggle="collapse"
                          aria-controls="drop1"
                        >
                          What is {websiteName}?{" "}
                          <i className="icofont-caret-down" />
                        </a>
                        <div className="collapse" id="drop1">
                          <div className="card card-body">
                            <p className="faq_text">
                              Exercitation nostrud minim deserunt anim.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <a
                          href="#drop2"
                          className=""
                          data-bs-toggle="collapse"
                          aria-controls="drop2"
                        >
                          Flight Cancellation{" "}
                          <i className="icofont-caret-down" />
                        </a>
                        <div className="collapse" id="drop2">
                          <div className="card card-body">
                            <p className="faq_text">
                              Exercitation nostrud minim deserunt anim.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <a
                          href="#drop3"
                          className=""
                          data-bs-toggle="collapse"
                          aria-controls="drop3"
                        >
                          Flight Reservation Changes{" "}
                          <i className="icofont-caret-down" />
                        </a>
                        <div className="collapse" id="drop3">
                          <div className="card card-body">
                            <p className="faq_text">
                              Exercitation nostrud minim deserunt anim.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <a
                          href="#drop4"
                          className=""
                          data-bs-toggle="collapse"
                          aria-controls="drop4"
                        >
                          How do I contact customer care?{" "}
                          <i className="icofont-caret-down" />
                        </a>
                        <div className="collapse" id="drop4">
                          <div className="card card-body">
                            <p className="faq_text">
                              Exercitation nostrud minim deserunt anim.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <a
                          href="#drop5"
                          className=""
                          data-bs-toggle="collapse"
                          aria-controls="drop5"
                        >
                          How are we different from other travel booking
                          platforms? <i className="icofont-caret-down" />
                        </a>
                        <div className="collapse" id="drop5">
                          <div className="card card-body">
                            <p className="faq_text">
                              Exercitation nostrud minim deserunt anim.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Page Section End*/}
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default Contact;
