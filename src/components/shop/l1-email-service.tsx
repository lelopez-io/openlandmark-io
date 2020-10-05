import React, { useState } from "react";
import { Link } from "gatsby";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUB_KEY);
const l1EmailService = process.env.GATSBY_LEVEL_ONE_EMAIL_SERVICE_PRICE;

const L1EmailService = (data) => {
    const handleClick = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [
                // Replace with the ID of your price
                { price: l1EmailService, quantity: 1 },
            ],
            mode: `subscription`,
            successUrl: `https://openlandmark.io/success`,
            cancelUrl: `https://openlandmark.io/cancel`,
        });
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `error.message`.
    };

    const [isShown, setIsShown] = useState(false);

    return (
        <div className="purchase-card card-box-shadow">
            <div className="purchase-card-content">
                <h1>Level 1: Email Service</h1>
                <p>A recurring payment for a simple automated email service</p>
                <Link className="" to="/sign-up/level-one-email-service">
                    <img src="/images/email.png" />
                </Link>

                <p className="pricing">
                    $16.23 <span>(incl. tax)</span>
                </p>
                <p>
                    per month
                    <br />
                    <span
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                        className="pricing-info"
                    >
                        &#9432; <br />
                        {isShown && (
                            <span className="pricing-breakdown">
                                $14.99 <span>service </span>
                                <br />
                                +$1.24 <span>taxes </span>
                                <br />
                            </span>
                        )}
                    </span>
                </p>
            </div>

            <button role="link" onClick={handleClick}>
                Subscribe
            </button>
        </div>
    );
};

export default L1EmailService;
