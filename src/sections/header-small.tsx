import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

import { Container } from 'components/global'

const Header = ({ data }) => {
    const site = data.allGhostSettings.edges[0].node

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <HeaderWrapper
            id="top"
            style={{
                ...(site.cover_image && {
                    backgroundImage: `url(${site.cover_image})`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center `,
                }),
            }}
        >
            <Container>
                <Flex></Flex>
            </Container>
        </HeaderWrapper>
    )
}

Header.propTypes = {
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const HeaderSettingsQuery = (props) => (
    <StaticQuery
        query={graphql`
            query {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: { eq: "ghost-icon.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
        `}
        render={(data) => <Header data={data} {...props} />}
    />
)

export default HeaderSettingsQuery

const HeaderWrapper = styled.header`
    background-color: #f8f8f8;
    padding: 160px 0 80px 0;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
    @media (max-width: ${(props) => props.theme.screen.md}) {
    }

    // add a white overlay to background image
    &:after {
        position: absolute;
        content: '';
        display: block;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.5);
    }
`
const Subtitle = styled.h5`
    font-size: 16px;
    color: ${(props) => props.theme.color.accent};
    letter-spacing: 0px;
    margin-bottom: 16px;
`

const HeaderTextGroup = styled.div`
    margin: 0;
    padding: 2rem;

    > div {
        width: 120%;
        margin-bottom: -4.5%;

        @media (max-width: ${(props) => props.theme.screen.md}) {
            margin: 0 16px;
        }
    }

    h1 {
        margin: 0 0 24px;
    }

    h2 {
        margin-bottom: 24px;
        ${(props) => props.theme.font_size.regular}
    }

    p {
        margin-bottom: 48px;
    }
`

const Flex = styled.div`
    position: relative;
    z-index: 100;
    display: grid;
    justify-content: space-between;
    align-content: center;
    grid-template-columns: 1fr 1fr;
    @media (max-width: ${(props) => props.theme.screen.md}) {
        grid-template-columns: 1fr;
        grid-gap: 64px;
    }
`

const ImageWrapper = styled.div`
    justify-self: end;
    align-self: center;
    width: 300px;
    @media (max-width: ${(props) => props.theme.screen.md}) {
        justify-self: center;
        width: 200px;
    }
    @media (max-width: ${(props) => props.theme.screen.sm}) {
        width: 150px;
    }
`

const StyledImage = styled(Img)`
    width: 400px;
    @media (max-width: ${(props) => props.theme.screen.md}) {
        width: 300px;
    }
    @media (max-width: ${(props) => props.theme.screen.sm}) {
        width: 200px;
        display: none;
    }
`
