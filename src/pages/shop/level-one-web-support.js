import React from "react";

import { Layout } from "../../components/common";

import L1WebSupport from "../../components/shop/L1WebSupport";

const PaymentsPage = (data) => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <section className="content-body">
                    <div className="shop-wrapper">
                        <L1WebSupport />
                    </div>
                </section>
            </article>
        </div>
    </Layout>
);

export default PaymentsPage;
