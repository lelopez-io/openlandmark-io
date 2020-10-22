import React, { useState } from "react";
import { Link } from "gatsby";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUB_KEY);
const price = process.env.GATSBY_LEVEL_TWO_WEB_SUPPORT_PRICE;

const L2WebSupport = (data) => {
    const handleClick = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [
                // Replace with the ID of your price
                { price: price, quantity: 1 },
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
                <h1>Level 2: Web Support</h1>
                <p>
                    A recurring payment for web support of an E-Commerce website
                </p>
                <Link className="" to="/sign-up/level-two-web-support">
                    <img src="/images/code.png" />
                </Link>

                <p className="pricing">
                    $278.76 <span>(incl. tax)</span>
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
                                $250.00 <span>service</span>
                                <br />
                                +$20.63 <span>taxes</span>
                                <br />
                                +$8.13 <span>fees</span>
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

export default L2WebSupport;