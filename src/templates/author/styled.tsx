import styled, { css } from 'styled-components'

export const AuthorInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 4vw;

    h1 {
        margin: 0 0 1rem 0;
    }

    p {
        margin: 0;
        line-height: 1.3em;
    }

    @media (max-width: 500px) {
        border-bottom: ${(props) => props.theme.color.background.black} 1px
            solid;
        padding-bottom: 4vw;
    }
`

export const AuthorImage = styled.div`
    flex: 0 0 auto;
    margin: 0 0 0 4vw;
    height: 120px;
    width: 120px;
    border-radius: 100%;
    overflow: hidden;

    @media (max-width: 500px) {
        height: 80px;
        width: 80px;
    }
`

export const AuthorLink = styled.a`
    display: block;
    padding: 2px 10px;

    & :first-child {
        padding-left: 0;
    }
`

export const AuthorMeta = styled.div`
    display: flex;
    margin: 1rem 0 0 0;
`
