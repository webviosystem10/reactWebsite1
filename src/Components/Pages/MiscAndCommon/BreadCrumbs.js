import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const BreadCrumbs = () => {
    const [redirectSite, setRedirectSite] = useState('');
    const [redirectURL, setRedirectURL] = useState('');

    useEffect(() => {
      if (window.location.pathname === '/') {
        setRedirectSite('Home');
        setRedirectURL('/');
      } else if(window.location.pathname === '/about-us') {
        setRedirectSite('About');
        setRedirectURL('/about-us');
      } else if(window.location.pathname === '/flights') {
        setRedirectSite('Flights');
        setRedirectURL('/flights');
      } else if(window.location.pathname === '/contact') {
        setRedirectSite('Contact Us');
        setRedirectURL('/contact');
      } else if(window.location.pathname === '/refund-policy') {
        setRedirectSite('Refund Policy');
        setRedirectURL('/refund-policy');
      } else if(window.location.pathname === '/privacy-policy') {
        setRedirectSite('Privacy Policy');
        setRedirectURL('/privacy-policy');
      } else if(window.location.pathname === '/terms-conditions') {
        setRedirectSite('Terms and Conditions');
        setRedirectURL('/terms-conditions');
      } else if(window.location.pathname === '/air-canada') {
        setRedirectSite('Air Canada');
        setRedirectURL('/air-canada');
      } else if(window.location.pathname === '/alaska-airline') {
        setRedirectSite('Alaska Airline');
        setRedirectURL('/alaska-airline');
      } else if(window.location.pathname === '/delta-airline') {
        setRedirectSite('Delta Airline');
        setRedirectURL('/delta-airline');
      } else if(window.location.pathname === '/jetBlue-airline') {
        setRedirectSite('JetBlue Airline');
        setRedirectURL('/jetBlue-airline');
      } else if(window.location.pathname === '/qatar') {
        setRedirectSite('Qatar Airways');
        setRedirectURL('/qatar');
      } else if(window.location.pathname === '/aeromexico-airline') {
        setRedirectSite('Aeromexico Airline');
        setRedirectURL('/aeromexico-airline');
      } else if(window.location.pathname === '/emirates-airline') {
        setRedirectSite('Emirates Airline');
        setRedirectURL('/emirates-airline');
      } else if(window.location.pathname === '/frontiar-airline') {
        setRedirectSite('Frontier Airline');
        setRedirectURL('/frontiar-airline');
      } else if(window.location.pathname === '/southwest-airline') {
        setRedirectSite('SouthWest Airline');
        setRedirectURL('/southwest-airline');
      } else if(window.location.pathname === '/westjet-airline') {
        setRedirectSite('Westjet Airline');
        setRedirectURL('/westjet-airline');
      } else if(window.location.pathname === '/air-france') {
        setRedirectSite('Air France');
        setRedirectURL('/air-france');
      } else if(window.location.pathname === '/westjet-airline') {
        setRedirectSite('Westjet Airline');
        setRedirectURL('/westjet-airline');
      } else if(window.location.pathname === '/etihad-airline') {
        setRedirectSite('Etihad Airline');
        setRedirectURL('/etihad-airline');
      } else if(window.location.pathname === '/united-airline') {
        setRedirectSite('United Airline');
        setRedirectURL('/united-airline');
      } else if(window.location.pathname === '/american-airline') {
        setRedirectSite('American Airline');
        setRedirectURL('/american-airline');
      } else if(window.location.pathname === '/hawaiian-airline') {
        setRedirectSite('Hawaiian Airline');
        setRedirectURL('/hawaiian-airline');
      } else if(window.location.pathname === '/spirit-airline') {
        setRedirectSite('Spirit Airline');
        setRedirectURL('/spirit-airline');
      } else if(window.location.pathname === '/lufthansa-airline') {
        setRedirectSite('Lufthansa Airline');
        setRedirectURL('/lufthansa-airline');
      } else if(window.location.pathname === '/british-airline') {
        setRedirectSite('British Airways');
        setRedirectURL('/british-airline');
      } else if(window.location.pathname === '/turkish-airline') {
        setRedirectSite('Turkish Airline');
        setRedirectURL('/turkish-airline');
      } else if(window.location.pathname === '/klm-royal-dutch-airline') {
        setRedirectSite('KLM Dutch Airline');
        setRedirectURL('/klm-royal-dutch-airline');
      } else if(window.location.pathname === '/lot-polish-airline') {
        setRedirectSite('LOT Polish Airline');
        setRedirectURL('/lot-polish-airline');
      } else if(window.location.pathname === '/klm-royal-dutch-airline') {
        setRedirectSite('KLM Dutch Airline');
        setRedirectURL('/klm-royal-dutch-airline');
      } else if(window.location.pathname === '/cathay-pacific-airline') {
        setRedirectSite('Cathay Pacific');
        setRedirectURL('/cathay-pacific-airline');
      } else if(window.location.pathname === '/phillipine-airline') {
        setRedirectSite('Philippine Airline');
        setRedirectURL('/phillipine-airline');
      } else if(window.location.pathname === '/singapore-airline') {
        setRedirectSite('Singapore Airline');
        setRedirectURL('/singapore-airline');
      } else if(window.location.pathname === '/eva-airline') {
        setRedirectSite('Eva Air');
        setRedirectURL('/eva-airline');
      } else if(window.location.pathname === '/brussels-airline') {
        setRedirectSite('Brussels Airline');
        setRedirectURL('/brussels-airline');
      } else if(window.location.pathname === '/allegient-airline') {
        setRedirectSite('Allegiant Airline');
        setRedirectURL('/allegient-airline');
      } else if(window.location.pathname === '/ethiopian-airline') {
        setRedirectSite('Ethiopian Airline');
        setRedirectURL('/ethiopian-airline');
      } else if(window.location.pathname === '/lynx-airline') {
        setRedirectSite('Lynx Airline');
        setRedirectURL('/lynx-airline');
      }
    }, [window.location.pathname]);

    function goToTop(){
      window.scrollTo(0,0)
    }

  return (
    <div>
        <ol className="d-flex ms-0 ps-0">
            <li>
                <Link onClick={goToTop} to="/">Home <i className="icofont-double-right fs-6 mt-2 ms-3"></i></Link>
            </li>
            <li>
              <Link onClick={goToTop} to={redirectURL}>{redirectSite}</Link>
            </li>
          </ol>
    </div>
  )
}

export default BreadCrumbs