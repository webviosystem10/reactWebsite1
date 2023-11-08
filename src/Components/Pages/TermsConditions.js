import React from 'react'
import { termsDesc, termsTitle, websiteName } from '../GlobalData/GlobalMetaData'
import BreadCrumbs from './MiscAndCommon/BreadCrumbs'
import { Helmet } from 'react-helmet'

const TermsConditions = () => {
  return (
    <div>
         <Helmet>
            <title>{termsTitle}</title>
            <meta name="description" content={termsDesc} />
        </Helmet>
        <section className="sitemap section-padding mt-10 mb-3">
            <div className="container">
                <div className="row">
                <div className="col-md-12 col-12 col-lg-12" >
                    <div className="section-title why_title border-bottom">
                        <h1>Terms and Conditions</h1>
                        <BreadCrumbs/>
                    </div>
                    <p className='mt-3'>
                    Please do read the following statements before booking your tickets
                    with { websiteName }{" "}
                    </p>
                </div>
                <div className="col-md-12 col-12 col-lg-12 mt-3">
                    <p>
                    <b>General Terms:</b>
                    </p>
                    <ul className='ul_padding_remove'>
                    <li>
                        By accessing and using the JustAssit website, you agree to comply
                        with these terms and conditions. JustAssit reserves the right to
                        modify or update these terms at any time without prior notice.
                    </li>
                    {/* <li>
                                reserves the right to modify or update these terms at any time without prior
                                notice.
                            </li>
                            <li>
                                Users are responsible for regularly reviewing the terms to stay informed of any changes.
                            </li> */}
                    </ul>
                </div>
                <div className="col-md-12 col-12 col-lg-12 mt-2">
                    <p>
                    <b>User Responsibilities:</b>
                    </p>
                    <ul className='ul_padding_remove'>
                    <li>
                        Users do comply to provide the authentic information needed to
                        initiate the booking, respetively.
                    </li>
                    <li>
                        Users are responsible for all activities and transactions conducted
                        through their account.
                    </li>
                    </ul>
                </div>
                <div className="col-md-12 col-12 col-lg-12 mt-2">
                    <p>
                    <b>Booking and Payment:</b>
                    </p>
                    <ul className='ul_padding_remove'>
                    <li>
                        JustAssit offers a platform for users to search, book, and pay for
                        travel services.
                    </li>
                    <li>
                        Users must provide accurate travel information during the booking
                        process.
                    </li>
                    <li>
                        Payment for bookings can be made through the provided payment
                        methods on the website.
                    </li>
                    <li>
                        Users agree to abide by the cancellation and refund policies
                        specified by the service providers.
                    </li>
                    </ul>
                </div>
                <div className="col-md-12 col-12 col-lg-12 mt-2">
                    <p>
                    <b>Travel Services:</b>
                    </p>
                    <ul className='ul_padding_remove'>
                    <li>
                        JustAssit acts as an intermediary between users and travel service
                        providers.
                    </li>
                    <li>
                        The website provides information about flights, accommodations, car
                        rentals, and other travel-related services.
                    </li>
                    <li>
                        JustAssit strives to provide accurate and up-to-date information,
                        but does not guarantee the availability, accuracy, or quality of the
                        services.
                    </li>
                    </ul>
                </div>
                <div className="col-md-12 col-12 col-lg-12 mt-2">
                    <p>
                    <b>Intellectual Property:</b>
                    </p>
                    <ul className='ul_padding_remove'>
                    <li>
                        The content on the JustAssit website, including text, images, logos,
                        and trademarks, are protected by intellectual property laws.
                    </li>
                    <li>
                        Users are prohibited from copying, reproducing, modifying, or
                        distributing the content without prior written permission from
                        JustAssit.
                    </li>
                    </ul>
                </div>
                <div className="col-md-12 col-12 col-lg-12 mt-2">
                    <p>
                    <b>Limitation of Liability:</b>
                    </p>
                    <ul className='ul_padding_remove'>
                    <li>
                        JustAssit is not liable for any direct, indirect, incidental, or
                        consequential damages arising from the use of the website or the
                        services provided.
                    </li>
                    <li>
                        JustAssit is not responsible for any disruptions, errors, or
                        inaccuracies in the content or functionality of the website.
                    </li>
                    </ul>
                </div>
                <div className="col-md-12 col-12 col-lg-12 mt-2">
                    <p>
                    <b>Privacy Policy:</b>
                    </p>
                    <ul className='ul_padding_remove'>
                    <li>
                        JustAssit collects and processes personal data in accordance with
                        its privacy policy, which can be found on the website.
                    </li>
                    <li>
                        Users are encouraged to review the privacy policy to understand how
                        their personal information is handled.
                    </li>
                    </ul>
                </div>
                <div className="col-md-12 col-12 col-lg-12 mt-2">
                    <p>
                    <b>Termination:</b>
                    </p>
                    <ul className='ul_padding_remove'>
                    <li>
                        JustAssit reserves the right to terminate or suspend user accounts
                        without prior notice, if users violate these terms and conditions or
                        engage in fraudulent or illegal activities.
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </section>

    </div>
  )
}

export default TermsConditions