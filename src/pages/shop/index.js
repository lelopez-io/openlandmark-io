import React from "react";

import { Layout } from "../../components/common";
import { loadStripe } from "@stripe/stripe-js";

import L1WebHosting from "../../components/shop/L1WebHosting";
import L1WebSupport from "../../components/shop/L1WebSupport";
import CustomProject from "../../components/shop/CustomProject";

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUB_KEY);
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
                        <h1>Services for growing businesses.</h1>
                        <h2 className="custom-page-h2">
                            Trusted infrastructure extended to meet your needs.
                        </h2>
                        <div className="shop-wrapper">
                            <L1WebHosting />
                            <L1WebSupport />
                            <CustomProject />
                        </div>
                    </section>
                </article>
            </div>
        </Layout>
    );
};

export default PaymentsPage;
