import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    margin-bottom: 1.45rem;
`

export const HeaderContainer = styled.div`
    max-width: ${(props) => props.theme.screen.maxWidth};
    margin: 0 auto;

    padding: 1.45rem 1.0875rem;

    & > :first-child {
        margin-right: auto;
    }

    & > :last-child {
        margin-left: auto;
    }
`

export const HeaderLogo = styled.h1`
    margin: 0;

    a {
        color: ${(props) => props.theme.color.blue.regular};
        text-decoration: none;

        &:hover {
            color: ${(props) => props.theme.color.blue.hover};
        }
    }
`

export const HeaderNavLinks = styled.ul`
    margin: 0;
    list-style: none;

    a {
        text-decoration: none;
        color: ${(props) => props.theme.color.blue.light};
        margin-left: 1rem;

        &:hover {
            color: ${(props) => props.theme.color.blue.darker};
        }
    }

    li {
        margin: 0;
    }
`
