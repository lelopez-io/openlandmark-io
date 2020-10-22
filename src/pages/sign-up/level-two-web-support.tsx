import React from "react";
import styled from "styled-components";

import { Section, Container } from "../../components/global";

import Layout from "../../components/common/layout/layout";
import Navigation from "../../components/common/navigation/navigation";
import Footer from "../../components/sections/footer";

import L2WebSupport from "../../components/shop/l2-web-support";

const ShopIndexPage = () => (
    <Layout>
        {/* <SEO title="Home" /> */}
        <Navigation />

        <StyledSection>
            <Container>
                <ShopWrapper>
                    <L2WebSupport />
                </ShopWrapper>
            </Container>
        </StyledSection>
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
