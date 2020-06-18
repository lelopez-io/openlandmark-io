import React from "react";

import { Layout } from "../components/common";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.STRIPE_PUB_KEY);
const simpleHostingPrice = process.env.GATSBY_SIMPLE_HOSTING_PRICE;

const PaymentsPage = (data) => {
    const handleClick = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [
                // Replace with the ID of your price
                { price: simpleHostingPrice, quantity: 1 },
            ],
            mode: `subscription`,
            successUrl: `https://openlandmark.io/success`,
            cancelUrl: `https://openlandmark.io/cancel`,
        });
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `error.message`.
    };

    return (
        <Layout>
            <div className="container">
                <article className="content" style={{ textAlign: `center` }}>
                    <section className="content-body">
                        <h1>Services for growing businessess.</h1>
                        <h2 className="custom-page-h2">
                            Trusted infrastructure extended to meet your needs.
                        </h2>
                        <div className="purchase-wrapper">
                            <div className="purcase-card card-box-shadow">
                                <div className="purcase-card-content">
                                    <h1>Simple Web Hosting</h1>
                                    <p>
                                        A recurring payment for simple web
                                        hosting of a site.
                                    </p>
                                    <img src="images/cloud.png" />
                                    <p className="pricing">
                                        $14.99 <span>+ tax</span>
                                    </p>
                                    <p>per month</p>
                                </div>

                                <button role="link" onClick={handleClick}>
                                    Subscribe
                                </button>
                            </div>
                            <div className="purcase-card card-dark">
                                <div className="purcase-card-content">
                                    <h1>Custom</h1>
                                    <p>
                                        Feel free to contact us if you project
                                        requires custom work.
                                    </p>
                                </div>

                                <button role="link">Email</button>
                            </div>
                        </div>
                    </section>
                </article>
            </div>
        </Layout>
    );
};

export default PaymentsPage;
