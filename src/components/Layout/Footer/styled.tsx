import styled from 'styled-components'

export const FooterWrapper = styled.footer`
    margin-bottom: 1.45rem;
`

export const FooterContainer = styled.div`
    max-width: ${(props) => props.theme.screen.maxWidth};
    margin: 0 auto;

    padding: 1.45rem 1.0875rem;
`

export const FooterCopyright = styled.div`
    margin: 2rem 0 0.5rem;

    a {
        text-decoration: none;
        color: hsla(0, 0%, 0%, 0.8);
    }
`

export const FooterCredit = styled.div`
    a {
        text-decoration: none;
        font-family: 'HK Grotesk Normal';
        color: #cca86e;

        &:hover {
            color: #005070;
        }
    }
`
