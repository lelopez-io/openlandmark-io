import React from "react";
import styled from "styled-components";

import { Section, Container } from "../../components/global";

import Layout from "../../components/common/layout/layout";
import Navigation from "../../components/common/navigation/navigation";
import Footer from "../../components/sections/footer";
import Header from "../../components/sections/header-small";

import L1WebHosting from "../../components/shop/l1-web-hosting";
import L1WebSupport from "../../components/shop/l1-web-support";
import CustomProject from "../../components/shop/custom-project";

const ShopIndexPage = () => (
    <Layout>
        {/* <SEO title="Home" /> */}
        <Navigation />
        <Header />
        <Section>
            <Container>
                <Subtitle>Service Selection</Subtitle>
                <SectionTitle>Services for growing businesses</SectionTitle>

                <h2 className="title is-primary is-1">
                    Trusted infrastructure extended to meet your needs.
                </h2>
                <div className="shop-wrapper">
                    <L1WebHosting />
                    <L1WebSupport />
                    <CustomProject />
                </div>
            </Container>
        </Section>
        <Footer />
    </Layout>
);

export default ShopIndexPage;

const SectionTitle = styled.h3`
    color: ${(props) => props.theme.color.primary};
    display: flex;
    justify-content: center;
    margin: 0 auto 40px;
    text-align: center;
`;

const Subtitle = styled.h5`
    font-size: 16px;
    color: ${(props) => props.theme.color.accent};
    letter-spacing: 0px;
    margin-bottom: 12px;
    text-align: center;
`;
