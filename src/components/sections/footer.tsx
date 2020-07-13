import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery, Link } from "gatsby";

import { Container } from "../global";

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            allGhostSettings {
                edges {
                    node {
                        ...GhostSettingsFields
                    }
                }
            }
        }
    `);
    const site = data.allGhostSettings.edges[0].node;

    return (
        <FooterWrapper id="footer">
            <FooterColumnContainer>
                <FooterColumn>
                    <span>Navigation</span>
                    <ul>
                        <li>
                            <Link className="is-link" to="/">
                                Home
                            </Link>
                        </li>
                    </ul>
                </FooterColumn>
                <FooterColumn>
                    <span>Products</span>
                    <ul>
                        <li>
                            <Link className="is-link" to="/sign-up">
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </FooterColumn>
                <FooterColumn>
                    <span>Resources</span>
                    <ul>
                        <li>
                            <Link className="is-link" to="/blog">
                                Blog
                            </Link>
                        </li>
                    </ul>
                </FooterColumn>
            </FooterColumnContainer>
            <BrandContainer>
                <Link className="is-link" to="/">
                    {site.title}
                </Link>
                {` `}
                &nbsp;© 2020
            </BrandContainer>
        </FooterWrapper>
    );
};

const FooterWrapper = styled.footer`
    background-color: white;
    margin: 80px 0 0;
    padding: 0 0 80px;
`;

const Logo = styled.div`
    font-family: ${(props) => props.theme.font.extrabold};
    ${(props) => props.theme.font_size.regular};
    color: ${(props) => props.theme.color.black.regular};
    text-decoration: none;
    letter-spacing: 1px;
    margin: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 9;
    text-decoration: none;
    outline: 0px;
`;

const BrandContainer = styled(Container)`
    position: relative;
    padding-top: 48px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${(props) => props.theme.screen.sm}) {
    }
`;
const FooterColumnContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 16px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 32px;
    justify-content: center;

    @media (max-width: ${(props) => props.theme.screen.sm}) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 32px;
    }

    @media (min-width: ${(props) => props.theme.screen.xs}) {
        max-width: 540px;
    }

    @media (min-width: ${(props) => props.theme.screen.sm}) {
        max-width: 720px;
    }
`;
const FooterColumn = styled.div`
    text-align: center;
    span {
        font-size: 16px;
        font-family: ${(props) => props.theme.font.bold};
        color: ${(props) => props.theme.color.primary};
    }
    ul {
        list-style: none;
        margin: 16px 0;
        padding: 0;
        color: ${(props) => props.theme.color.black.regular};
        li {
            margin-bottom: 12px;
            margin-left: -0.03rem;
            font-family: ${(props) => props.theme.font.normal};
            font-size: 15px;
        }
    }
`;

export default Footer;
