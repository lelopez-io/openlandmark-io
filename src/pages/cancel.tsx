import React from "react";

import { Layout } from "../components/common";
import { Link } from "gatsby";

const PaymentsPage = (data) => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <section className="content-body">
                    <h1>Looks like you canceled your purchase.</h1>
                    <h2 className="custom-page-h2">
                        To try again click <Link to="/shop">here</Link>.
                    </h2>
                </section>
            </article>
        </div>
    </Layout>
);

export default PaymentsPage;
