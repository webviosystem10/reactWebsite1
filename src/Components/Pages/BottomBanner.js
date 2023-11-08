import React from "react";

function BottomBanner() {
  return (
    <>
      <section className="filler_banner">
        <div className="container">
          <div className="black-overlay" />
          <div className="row">
            <div
              className="col-lg-6 col-12 pt-0 pt-xl-4 pt-lg-4 my-0 my-xl-3 my-lg-3"
              data-aos="fade-up"
            >
              <span className="filler_banner_span position-relative" style={{zIndex:'10'}}>Relax &amp; Enjoy</span>
              <h1 className="my-2 position-relative" style={{zIndex:'10'}}>
                Dream <span className="front_page_highlight">On!</span> Leave
                the rest to us!
              </h1>
              <p className="my-2 position-relative" style={{zIndex:'10'}}>
                We are here to Make your Journey Comfortable.
              </p>
              <a href="#" className="btn my-2 position-relative" style={{zIndex:'10'}}>
                Get Quote <i className="icofont-caret-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BottomBanner;
