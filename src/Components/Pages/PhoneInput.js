import React from "react";

function PhoneInput() {
  return (
    <>
      <section className="cta_section">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <div className="row flex-wrap align-items-center">
                <div className="col-auto">
                  <img
                    src={require("../assets/img/gallery/travel.webp")}
                    alt="footer"
                    height={"50"}
                    width={"50"}
                  />
                </div>
                <div className="col-auto">
                  <h1>Your journey towards your dreamland starts here!</h1>
                  <p className="my-1">
                    Yeah whatever bro whatever you wanna believe
                  </p>
                </div>
              </div>
            </div>
            <div className="col-auto text-end">
              <div className="d-flex">
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  className="cta_input"
                />
                <a href="#" aria-label="Go" className="btn mx-2 w-25">
                  Go!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PhoneInput;
