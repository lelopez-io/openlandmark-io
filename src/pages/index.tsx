import React from 'react'

import Layout from 'components/common/layout/layout'
import Navigation from 'components/common/navigation/navigation'
import Footer from 'sections/footer'

import Header from 'sections/header'
import Objectives from 'sections/objectives'
import ClientCatalog from 'sections/client-catalog'
import GetStarted from 'sections/get-started'

const IndexPage = () => (
    <Layout>
        {/* <SEO title="Home" /> */}
        <Navigation />
        <Header />
        <Objectives />
        <ClientCatalog />
        <GetStarted />
        <Footer />
    </Layout>
)

export default IndexPage
