import React from "react";

import Layout from "../components/common/layout/layout";
import Navigation from "../components/common/navigation/navigation";
import Footer from "../components/sections/footer";

import Header from "../components/sections/header";
import Objectives from "../components/sections/objectives";
import GetStarted from "../components/sections/get-started";

const IndexPage = () => (
    <Layout>
        {/* <SEO title="Home" /> */}
        <Navigation />
        <Header />
        <Objectives />
        <GetStarted />
        <Footer />
    </Layout>
);

export default IndexPage;
