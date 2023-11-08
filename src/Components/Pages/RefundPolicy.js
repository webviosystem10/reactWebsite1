import React from 'react'
import BreadCrumbs from './MiscAndCommon/BreadCrumbs'
import { Helmet } from 'react-helmet'
import { refundDesc, refundTitle } from '../GlobalData/GlobalMetaData'

const RefundPolicy = () => {
  return (
    <div>
        <Helmet>
            <title>{refundTitle}</title>
            <meta name="description" content={refundDesc} />
        </Helmet>
        <section className="sitemap section-padding mt-10 mb-3">
            <div className="container">
                <div className="row">
                <div className="col-md-12 col-12 col-lg-12" >
                    <div className="section-title why_title border-bottom">
                        <h1>Refund Policy</h1>
                        <BreadCrumbs/>
                    </div>
                    <p className='mt-3'>Know more of the Refund Policy of JustAssit.</p>
                    <p>
                    JustAssit has a comprehensive refund policy designed to provide
                    flexibility and convenience to its customers.
                    </p>
                </div>
                <div className="col-md-12 col-12 col-lg-12 mt-3">
                    <p>The key points of the refund policy are as follows:</p>
                    <p>
                    <br/>
                    <b>Cancellation by the Customer:</b>
                    </p>
                    <ul className='ul_padding_remove'>
                    <li>
                        If you need to cancel your flight booking, the refund amount will
                        depend on the fare rules associated with your ticket.
                    </li>
                    <li>
                        Most fares are non-refundable, but some may allow for refunds with
                        certain conditions and charges.
                    </li>
                    <li>
                        It is recommended to review the fare rules and cancellation policy
                        at the time of booking to understand the refund eligibility.
                    </li>
                    </ul>
                </div>
                <div className="col-md-12 col-12 col-lg-12 mt-2">
                    <p>
                    <b>Flight Changes and Refunds:</b>
                    </p>
                    <ul className='ul_padding_remove'>
                    <li>
                        In case of flight changes or cancellations made by the airline,
                        JustAssit will make every effort to notify customers promptly.
                    </li>
                    <li>
                        If your flight is canceled or rescheduled by the airline, you may be
                        eligible for a refund or an alternative flight as per the airline's
                        policy.
                    </li>
                    <li>
                        JustAssit will assist you in rebooking or obtaining a refund from
                        the airline, subject to their terms and conditions.
                    </li>
                    </ul>
                </div>
                <div className="col-md-12 col-12 col-lg-12 mt-2">
                    <p>
                    <b>Refund Processing:</b>
                    </p>
                    <ul className='ul_padding_remove'>
                    <li>
                        Once you cancel your flight and become eligible for a refund,
                        JustAssit will initiate the refund process promptly.
                    </li>
                    <li>
                        The timeline for receiving the refund may vary depending on the
                        airline, payment method, and other factors.
                    </li>
                    <li>
                        JustAssit will provide updates and assist you throughout the refund
                        process.
                    </li>
                    </ul>
                </div>
                <div className="mt-2">
                    <p>
                    <b>
                        [Note: JustAssit may charge service fees for flight cancellations,
                        changes, or refunds. These fees vary based on the fare rules and the
                        complexity of the request. To know more, please contact our customer
                        support team]
                    </b>
                    </p>
                </div>
                </div>
            </div>
            </section>

    </div>
  )
}

export default RefundPolicy