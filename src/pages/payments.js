import React from "react";

import { Layout } from "../components/common";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.STRIPE_PUB_KEY);

const PaymentsPage = (data) => {
    const handleClick = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [
                // Replace with the ID of your price
                { price: `price_1GunH6GTuqmOm7iCSPCok7ph`, quantity: 1 },
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
                    <h1 className="content-title">subscript</h1>
                    <section className="content-body">
                        <button role="link" onClick={handleClick}>
                            Subscribe
                        </button>
                    </section>
                </article>
            </div>
        </Layout>
    );
};

export default PaymentsPage;
