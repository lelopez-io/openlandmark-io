import React from "react";

import Layout from "../components/common/layout/layout";
import Navigation from "../components/common/navigation/navigation";
import Footer from "../components/sections/footer";

import Header from "../components/sections/header";
import Objectives from "../components/sections/objectives";
import ClientCatalog from '../components/sections/client-catalog'
import GetStarted from "../components/sections/get-started";

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
);

export default IndexPage;
