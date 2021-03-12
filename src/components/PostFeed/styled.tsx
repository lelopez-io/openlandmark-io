import styled from 'styled-components'

export const PostFeedSection = styled.section`
    display: grid;
    justify-content: space-between;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 980px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 680px) {
        grid-template-columns: 1fr;
    }
`
export const PostFeedDescription = styled.p`
    margin: 0 0 80px;
    color: ${(props) => props.theme.color.secondary};

    line-height: 1.3em;

    // maybe add a bottom border to reduce black space
    /* border-bottom: ${(props) => props.theme.color.background.black} 1px
                solid; */
`
