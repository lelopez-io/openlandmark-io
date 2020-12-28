import React, { useState } from "react";
import { Link } from "gatsby";

import { loadStripe } from "@stripe/stripe-js";
import styled from 'styled-components'

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUB_KEY);
const price = process.env.GATSBY_LEVEL_ONE_WEB_SUPPORT_PRICE;

const L1WebSupport = (data) => {
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
        <form className="purchase-card card-box-shadow">
            <div className="purchase-card-content">
                <h1>Level 1: Web Support</h1>
                <p>
                    A recurring payment for web support of an E-Commerce website
                </p>
                <Link className="" to="/sign-up/level-one-web-support">
                    <img src="/images/code.png" />
                </Link>

                <p className="pricing">
                    $167.37 monthly
                </p>
                <p>
                    <span
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                        className="pricing-info"
                    >
                        &#9432; <br />
                        {isShown && (
                            <span className="pricing-breakdown">
                                $149.99 <span>service</span>
                                <br />
                                +$12.37 <span>taxes</span>
                                <br />
                                +$5.01 <span>fees</span>
                            </span>
                        )}
                    </span>
                </p>
                <div>
                    <StyledCheckbox type="checkbox" id="tos_email_service" required /> by subscribing you agree to the
                     <Styledlink htmlFor="tos_email_service"> terms of service</Styledlink>
                </div>
            </div>

            <button type="submit" role="Link">
                Subscribe
            </button>
        </form>
    );
};

export default L1WebSupport;

const StyledCheckbox = styled.input`
margin-right: 15px;
margin-top: 30px;
`;

const Styledlink = styled.label`
color: #006A8F;
`;