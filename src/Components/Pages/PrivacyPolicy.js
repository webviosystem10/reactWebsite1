import React from 'react'
import BreadCrumbs from './MiscAndCommon/BreadCrumbs'
import {privacyDesc,privacyTitle} from '../GlobalData/GlobalMetaData'
import { Helmet } from 'react-helmet'

const PrivacyPolicy = () => {
  return (
    <div>
        <Helmet>
            <title>{privacyTitle}</title>
            <meta name="description" content={privacyDesc} />
        </Helmet>
        <section className="sitemap section-padding mt-10 mb-3">
            <div className="container">
                <div className="row">
                <div className="col-md-12 col-12 col-lg-12" >
                    <div className="section-title why_title border-bottom">
                        <h1>Privacy Policy</h1>
                        <BreadCrumbs/>
                    </div>
                    <p className='mt-3'>
                    At JustAssit, we are committed to protecting the privacy and security
                    of our users' personal information. This Privacy Policy outlines how
                    we collect, use, disclose, and safeguard the information you provide
                    when using our travel website, JustAssit.com.
                    </p>
                </div>
                <div className="col-md-12 col-12 col-lg-12 mt-3">
                    <p>
                    <b>Information We Collect from You</b>
                    </p>
                    <p>
                    When you use JustAssit, we may collect various types of information to
                    enhance your experience and provide you with the best possible
                    service. The information we collect includes:
                    </p>
                    <ul className='mt-3 ul_padding_remove'>
                    <li>
                        <b>Personal Information:</b> When you create an account or make a
                        booking on JustAssit, we may collect personal information such as
                        your name, email address, phone number, billing address, and payment
                        details. This information is necessary to process your bookings and
                        communicate with you effectively.
                    </li>
                    <li>
                        <b>Travel Preferences:</b> We may collect information about your
                        travel preferences, including your destination choices, travel
                        dates, accommodation preferences, and other details that help us
                        tailor our recommendations and offers to your needs.
                    </li>
                    <li>
                        <b>Cookies and Tracking Technologies:</b> We use cookies, web
                        beacons, and similar tracking technologies to collect information
                        about your browsing behavior on JustAssit.
                    </li>
                    </ul>
                </div>
                <div className="col-md-12 col-12 col-lg-12 mt-4">
                    <p>
                    <b>How We Use Your Information?</b>
                    </p>
                    <p>Your information is used for the following purposes, like:</p>
                    <ul className='mt-3 ul_padding_remove'>
                    <li>
                        <b>Booking and Reservation:</b> We use your personal information to
                        process your travel bookings and reservations, including contacting
                        you regarding your booking details, sending confirmations, and
                        providing updates or changes to your itinerary.
                    </li>
                    <li>
                        <b>Personalization:</b> We use the information you provide to
                        personalize your experience on JustAssit, including recommending
                        travel options, destinations, and promotions that match your
                        preferences.
                    </li>
                    <li>
                        <b>Communication:</b> We may use your contact information to
                        communicate with you about your bookings, respond to your inquiries,
                        and provide customer support. We may also send you promotional
                        emails or newsletters if you have opted-in to receive them.
                    </li>
                    <li>
                        <b>Analytics and Improvements:</b> We analyze user behavior and
                        preferences to improve our website, enhance user experience, and
                        develop new features and services. This includes using aggregated
                        and anonymized data for research and statistical purposes.
                    </li>
                    </ul>
                </div>
                <div className="mt-2">
                    <p>
                    <b>
                        [NOTE: Please be assured that we prioritize the security of your
                        personal data and maintain strict confidentiality. We do not share
                        any of your details with any third parties]
                    </b>
                    </p>
                </div>
                </div>
            </div>
            </section>

    </div>
  )
}

export default React.memo(PrivacyPolicy)