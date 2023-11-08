import React from "react";

function ChooseUs() {
  return (
    <>
      <section className="section_margin">
        <div className="container">
          <div className="row text-center pt-lg-0 my-lg-0">
            <h1>
              Why Choose Us?{" "}
              <i
                className="icofont-hand-drawn-right prim-color"
                data-aos="fade"
              />
            </h1>
            <p className="text-white-1 my-1">
              Cause we have a fancy website ofcourse! Nah just kidding fam.
            </p>
            <div className="col-lg-3 col-12 col-md-6 my-5 margin_revert">
              <div className="filler_content" data-aos="fade-up">
                <div className="filler_content_img">
                  <img src={require("../assets/img/gallery/deal.webp")} alt="choose us" height={"91"} width={"91"} />
                </div>
                <div className="filler_content_text my-4">
                  <h2>Unbelievable Deals</h2>
                  <p className="my-1">
                    Culpa ipsum sint excepteur anim incididunt mollit labore eu
                    Lorem duis anim deserunt aliquip.
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
                    alt="choose us" height={"91"} width={"91"}
                  />
                </div>
                <div className="filler_content_text my-4">
                  <h2>1-1 Client Support</h2>
                  <p className="my-1">
                    Culpa ipsum sint excepteur anim incididunt mollit labore eu
                    Lorem duis anim deserunt aliquip.
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
                    alt="choose us" height={"91"} width={"91"}
                  />
                </div>
                <div className="filler_content_text my-4">
                  <h2>Quote-on-Budget</h2>
                  <p className="my-1">
                    Culpa ipsum sint excepteur anim incididunt mollit labore eu
                    Lorem duis anim deserunt aliquip.
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
                    alt="choose us" height={"91"} width={"91"}
                  />
                </div>
                <div className="filler_content_text my-4">
                  <h2>Instant Booking Confirmation</h2>
                  <p className="my-1">
                    Culpa ipsum sint excepteur anim incididunt mollit labore eu
                    Lorem duis anim deserunt aliquip.
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
