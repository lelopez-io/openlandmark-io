import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html {
        ${`` /* change this if implementing light/dark mode functionality */}
        color: ${(props) => props.theme.color.white.lessdark};
        background-color: ${(props) => props.theme.color.background.black};
    }

    body {
        font-family: ${(props) => props.theme.font.primary};
    }

    main {
        max-width: ${(props) => props.theme.screen.maxWidth};
        margin: 0 auto;
    }

    header {
        h1 {
            ${(props) => props.theme.font_size.large};
            font-family: ${(props) => props.theme.font.logo};
            letter-spacing: 0.05em;
            text-transform: uppercase;

            a {
                text-decoration: none;
                color: ${(props) => props.theme.color.white.lessdark};

                &:hover {
                    color: ${(props) => props.theme.color.white.darker};
                }
            }
        }
    }

    footer a,
    header a {
        text-decoration: none;
        color: ${(props) => props.theme.color.white.lessdark};

        &:hover {
            color: ${(props) => props.theme.color.white.darker};
        }
    }

    a {
        text-decoration: none;
        color:  ${(props) => props.theme.color.secondary};
        transition:  ${(props) => props.theme.transition.link};

        &:hover {
            color: ${(props) => props.theme.color.accent};
        }
    }

    h1 {
        ${(props) => props.theme.font_size.xlarge};
        font-family: ${(props) => props.theme.font.bold};
        letter-spacing: 0.05em;
    }

    h2 {
        ${(props) => props.theme.font_size.larger};
        font-family: ${(props) => props.theme.font.bold};
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

const GhostKoenigStyles = css`
    .kg-bookmark-card {
        width: 100%;
        margin-top: 0;
    }

    .kg-bookmark-container {
        display: flex;
        min-height: 148px;
        /* color: var(--color-base);
        font-family: var(--font-sans-serif); */
        text-decoration: none;
        border-radius: 3px;
        box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.15),
            0 0 1px rgba(0, 0, 0, 0.09);

        &:hover {
            text-decoration: none;
            box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.15),
                0 0 1px rgba(0, 0, 0, 0.09);
        }
    }

    .kg-bookmark-content {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 20px;
    }

    .kg-bookmark-title {
        color: color(${(props) => props.theme.color.secondary} l(-30%));

        line-height: 1.5em;
        font-weight: 600;
        transition: ${(props) => props.theme.transition.link};
    }

    .kg-bookmark-container:hover .kg-bookmark-title {
        color: ${(props) => props.theme.color.accent};
    }

    .kg-bookmark-description {
        display: -webkit-box;
        overflow-y: hidden;
        margin-top: 12px;
        max-height: 48px;
        color: color(${(props) => props.theme.color.secondary} l(-10%));

        line-height: 1.5em;
        font-weight: 400;

        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .kg-bookmark-thumbnail {
        position: relative;
        min-width: 33%;
        max-height: 100%;

        & img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 0 3px 3px 0;

            object-fit: cover;
        }
    }

    .kg-bookmark-metadata {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 14px;
        color: color(${(props) => props.theme.color.secondary} l(-10%));

        font-weight: 400;
    }

    .kg-bookmark-icon {
        margin-right: 8px;
        width: 22px;
        height: 22px;
    }

    .kg-bookmark-author {
        line-height: 1.5em;

        &:after {
            content: '•';
            margin: 0 6px;
        }
    }

    .kg-bookmark-publisher {
        overflow: hidden;
        max-width: 240px;
        line-height: 1.5em;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`

const GhostKoenigGalleryStyles = css`
    .kg-gallery-container {
        display: flex;
        flex-direction: column;
        max-width: 1040px;
        width: 100%;
    }

    .kg-gallery-row {
        display: flex;
        flex-direction: row;
        justify-content: center;

        &:not(:first-of-type) {
            margin: 0.75em 0 0 0;
        }
    }

    .kg-gallery-image {
        &:not(:first-of-type) {
            margin: 0 0 0 0.75em;
        }

        img {
            display: block;
            margin: 0;
            width: 100%;
            height: 100%;
        }
    }

    .kg-gallery-card + .kg-image-card.kg-width-wide,
    .kg-gallery-card + .kg-gallery-card,
    .kg-image-card.kg-width-wide + .kg-gallery-card,
    .kg-image-card.kg-width-wide + .kg-image-card.kg-width-wide {
        margin: -2.25em 0 3em;
    }
`

const GhostKoenigEmbedStyles = css`
    .kg-embed-card {
        padding-top: 66%;
        position: relative;

        iframe {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
        }
    }
`

export const GlobalGhostStyles = createGlobalStyle`
    ${GhostKoenigStyles}
    ${GhostKoenigGalleryStyles}
    ${GhostKoenigEmbedStyles}
`
