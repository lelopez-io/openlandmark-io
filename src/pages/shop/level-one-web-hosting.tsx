import React from "react";

import { Layout } from "../../components/common";

import L1WebHosting from "../../components/shop/l1-web-hosting";

const L1WebHostingPage = (data) => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <section className="content-body">
                    <div className="shop-wrapper">
                        <L1WebHosting />
                    </div>
                </section>
            </article>
        </div>
    </Layout>
);

export default L1WebHostingPage;
