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

import GetStarted from "../../components/sections/get-started";

const ShopIndexPage = () => (
    <Layout>
        {/* <SEO title="Home" /> */}
        <Navigation />
        {/* <Header /> */}
        <StyledSection>
            <Container>
                <Subtitle>Become Global</Subtitle>
                <SectionTitle className="title is-primary is-1">
                    Build with Trusted Infrastructure
                </SectionTitle>

                <ShopWrapper>
                    <L1WebHosting />
                    <L1WebSupport />
                </ShopWrapper>
            </Container>
        </StyledSection>
        <GetStarted />
        <Footer />
    </Layout>
);

export default ShopIndexPage;

const StyledSection = styled(Section)`
    padding-top: 160px;
`;

const ShopWrapper = styled.div`
    margin-top: 6rem;
`;

const SectionTitle = styled.h1`
    display: flex;
    justify-content: center;
    text-align: center;
`;

const Subtitle = styled.h5`
    font-size: 16px;
    color: ${(props) => props.theme.color.accent};
    letter-spacing: 0px;
    margin-bottom: 12px;
    text-align: center;
`;
