import React from 'react'
import { Link } from 'react-router-dom'

function Sitemap() {
  function goToTop(){
    window.scrollTo(0,0)
  }
  return (
    <section className="sitemap section_margin">
  <div className="container">
    <div className="row">
      <div className="col-md-12 col-12 col-lg-12" data-aos="fade-up">
        <div className="section-title text-center why_title">
          <span>Site-Map Generation</span>
          <h1>
            <sup>
              <i
                className="icofont-rounded-left-up prim-color"
                data-aos="fade-left"
              />
            </sup>
            Going Places <span className="text-primary">Together</span>!
            <sub>
              <i
                className="icofont-rounded-right-down prim-color"
                data-aos="fade-left"
              />
            </sub>
          </h1>
        </div>
      </div>
      {/* END COL */}
      <div className="col-md-12 col-12 col-lg-12 mt-5 d-flex" data-aos="right">
        <p className="h4">Quick Links</p>
        <i className="icofont-hand-drawn-right" data-aos="right" />
      </div>
      <div className="row mt-2">
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/">Home</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/about-us">About Us</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/flights">Flights</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/contact">Contact Us</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/refund-policy">Refund Policy</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/privacy-policy">Privacy Policy</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/terms-conditions">Terms &amp; Conditions</Link>
        </div>
      </div>
      <div className="divider" />
      <div className="col-md-12 col-lg-12 col-12 mt-5 d-flex" data-aos="right">
        <p className="h4">Popular Airlines</p>
        <i className="icofont-hand-drawn-right" />
      </div>
      <div className="row mt-2">
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/air-canada">Air Canada</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/alaska-airline">Alaska Airlines</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/delta-airline">Delta Airlines</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/jetBlue-airline">JetBlue Airlines</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/qatar">Qatar Airlines</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/aeromexico-airline">Aeromexico Airlines</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/emirates-airline">Emirates Airlines</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/frontiar-airline">Frontier Airlines</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/southwest-airline">SouthWest Airlines</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/westjet-airline">WestJet Airlines</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/air-france">Air France</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/etihad-airline">Etihad Airways</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/united-airline">United Airlines</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/american-airline">American Airlines</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/hawaiian-airline">Hawaiian Airlines</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/spirit-airline">Spirit Airlines</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/lufthansa-airline">Lufthansa Airlines</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/british-airline">British Airlines</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/turkish-airline">Turkish Airlines</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/klm-royal-dutch-airline">KLM Dutch Airlines</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/lot-polish-airline">LOT Polish Airlines</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/cathay-pacific-airline">Cathay Pacific Airlines</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/phillipine-airline">Philippine Airlines</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/air-transat">Air Transat Airlines</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/singapore-airline">Singapore Airlines</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/eva-airline">Eva Air</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/brussels-airline">Brussels Airlines</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/allegient-airline">Allegiant Airlines</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/ethiopian-airline">Ethiopian Airlines</Link>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <Link onClick={goToTop} to="/lynx-airline">Lynx Air</Link>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Sitemap