import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import config from "../../../utils/site-config";

import { Section, Container } from "../../global";

import Navigation from "../navigation/navigation";
import Header from "../../sections/header";
import Footer from "../../sections/footer";

import styled, { ThemeProvider } from "styled-components";

import theme from "../../../styles/theme";
import GlobalStyles from "../../../styles/global-styles";

// Styles - for Ghost pages
import "../../../assets/css/app.css";

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node;

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <>
                <Helmet>
                    <html lang={site.lang} />
                    <style type="text/css">{`${site.codeinjection_styles}`}</style>
                    <body className={bodyClass} />
                </Helmet>
                <Navigation />
                {isHome ? <Header /> : null}

                <StyledSection>
                    <Container>{children}</Container>
                </StyledSection>
                <Footer />
            </>
        </ThemeProvider>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
};

const DefaultLayoutSettingsQuery = (props) => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: { eq: "ghost-icon.png" }) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={(data) => <DefaultLayout data={data} {...props} />}
    />
);

export default DefaultLayoutSettingsQuery;

const StyledSection = styled(Section)`
    padding-top: 160px;
`;
