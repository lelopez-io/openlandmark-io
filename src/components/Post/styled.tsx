import styled from 'styled-components'

export const PostContainer = styled.article`
    line-height: 1.7em;

    p {
        code {
            color: #f14668;
        }
    }
`

export const PostTitle = styled.h1`
    margin: 0 0 0.8em;

    @media (max-width: 500px) {
        margin: 0.8em 0;
    }
`

export const PostContent = styled.section`
    max-width: 720px;
    margin: 0 auto;
`

export const PostBody = styled.section`
    display: flex;
    flex-direction: column;

    & figure {
        margin: 0.4em 0 1.6em;

        font-weight: 700;
    }

    & pre {
        margin: 0.4em 0 1.8em;

        line-height: 1.4em;
        white-space: pre-wrap;
        padding: 20px;
        background: ${(props) => props.theme.color.black.light};
        color: #fff;
        border-radius: 12px;
    }

    & img {
        margin-bottom: 0;
    }
`
