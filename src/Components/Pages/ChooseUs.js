import React from "react";

function ChooseUs() {
  return (
    <>
      <section className="section_margin">
        <div className="container">
          <div className="row text-center pt-lg-0 my-lg-0">
            <h1>
              Why are We the best for you?{" "}
              <i
                className="icofont-hand-drawn-right prim-color"
                data-aos="fade"
              />
            </h1>
            <p className="text-white-1 my-1">
              Making your every journey unforgettable is our promise
            </p>
            <div className="col-lg-3 col-12 col-md-6 my-5 margin_revert">
              <div className="filler_content" data-aos="fade-up">
                <div className="filler_content_img">
                  <img
                    src={require("../assets/img/gallery/deal.webp")}
                    alt="choose us"
                    height={"91"}
                    width={"91"}
                  />
                </div>
                <div className="filler_content_text my-4">
                  <h2>Mind-Blowing Deals</h2>
                  <p className="my-1">
                    Unlock unparalleled adventures with jaw-dropping discounts
                    on flights—because your wanderlust deserves mind-blowing
                    deals!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 col-md-6 my-5 margin_revert">
              <div
                className="filler_content"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="filler_content_img">
                  <img
                    src={require("../assets/img/gallery/customer-sup.webp")}
                    alt="choose us"
                    height={"91"}
                    width={"91"}
                  />
                </div>
                <div className="filler_content_text my-4">
                  <h2>Personalized Support</h2>
                  <p className="my-1">
                    Plan your VIP travel using our flight site – enjoy
                    personalized recommendations, benefits, and assistance!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 col-md-6 my-5 margin_revert">
              <div
                className="filler_content"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="filler_content_img">
                  <img
                    src={require("../assets/img/gallery/quote.webp")}
                    alt="choose us"
                    height={"91"}
                    width={"91"}
                  />
                </div>
                <div className="filler_content_text my-4">
                  <h2>Unmatched Flexibility</h2>
                  <p className="my-1">
                    Seize flights on your terms! This is your ticket to travel
                    freedom and choice!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 col-md-6 my-5">
              <div
                className="filler_content"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="filler_content_img">
                  <img
                    src={require("../assets/img/gallery/instant-booking.webp")}
                    alt="choose us"
                    height={"91"}
                    width={"91"}
                  />
                </div>
                <div className="filler_content_text my-4">
                  <h2>Swift Booking Confirmations</h2>
                  <p className="my-1">
                    Get set for the jet! Instantly lock your seat – swift
                    booking, no delays, pure thrill.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
