import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html {
        ${`` /* change this if implementing light/dark mode functionality */}
        color: ${(props) => props.theme.color.primary};
    }

    body {
        font-family: ${(props) => props.theme.font.primary};
    }

    main {
        max-width: ${(props) => props.theme.screen.maxWidth};
        margin: 0 auto;
    }

    header h1 {
        ${(props) => props.theme.font_size.large};
        font-family: ${(props) => props.theme.font.extrabold};
        letter-spacing: 1px;
    }

    h1 {
        ${(props) => props.theme.font_size.xlarge};
        font-family: ${(props) => props.theme.font.bold};
    }

    h2 {
        ${(props) => props.theme.font_size.larger};
    }

    h3 {
        ${(props) => props.theme.font_size.larger};
        font-family: ${(props) => props.theme.font.bold};
    }

    h4 {
        ${(props) => props.theme.font_size.large};
        font-family: ${(props) => props.theme.font.bold};
    }

    h5 {
        ${(props) => props.theme.font_size.xsmall};
        font-family: ${(props) => props.theme.font.normal};
    }

    p {
        ${(props) => props.theme.font_size.small};
        line-height: 22px;
    }

    input {
        font-family: ${(props) => props.theme.font.normal};
    }

    @media (max-width: ${(props) => props.theme.screen.sm}) {
        h1 {
            ${(props) => props.theme.font_size.larger};
        }

        h2 {
            ${(props) => props.theme.font_size.large};
        }

        h3 {
            ${(props) => props.theme.font_size.regular};
        }

        p {
            ${(props) => props.theme.font_size.small};
        }
    }

    @media (max-width: ${(props) => props.theme.screen.xs}) {
        h1 {
        }

        h2 {
        }

        h3 {
            font-size: 32px;
            line-height: 36px;
        }

        h4 {
            font-size: 22px;
            line-height: 24px;
        }
        p {
        }
    }
`
