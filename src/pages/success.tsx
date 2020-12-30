import React from 'react'

import { Layout } from 'components/common/ghost'
import { Link } from 'gatsby'

const PaymentsPage = (data) => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <section className="content-body">
                    <h1>Your purchase went through successfully</h1>
                    <h2 className="custom-page-h2">
                        Return <Link to="/">home</Link>.
                    </h2>
                </section>
            </article>
        </div>
    </Layout>
)

export default PaymentsPage
