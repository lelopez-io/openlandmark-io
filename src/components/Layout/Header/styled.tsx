import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    position: fixed;
    width: 100vw;
    background-color: ${(props) => props.theme.color.background.black};

    z-index: 6;
`

export const HeaderContainer = styled.div`
    max-width: ${(props) => props.theme.screen.maxWidth};
    margin: 0 auto;

    padding: 0 1.0875rem;

    & > :first-child {
        margin-right: auto;
    }

    & > :last-child {
        margin-left: auto;
    }
`

export const HeaderLogo = styled.h1`
    margin: 0;

    position: relative;
    z-index: 10;

    img {
        max-height: 50px;
        margin: 0;
    }
`

export const HeaderNavLinks = styled.ul`
    margin: 0;
    list-style: none;

    a {
        margin: 1rem;
        text-decoration: none;
        color: white;
        &:visited,
        &:hover {
            color: white;
        }

        li {
            margin: 0;

            & > * {
                text-transform: uppercase;
                letter-spacing: 1px;
            }

            h3 {
                &:after {
                    display: block;
                    content: '';
                    border-bottom: solid 3px white;
                    transform: scaleX(0);
                    transition: transform 250ms ease-in-out;
                }

                &:hover:after {
                    transform: scaleX(1);
                }
            }
        }
    }
`
