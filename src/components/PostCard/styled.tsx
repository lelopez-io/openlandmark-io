import styled, { css } from 'styled-components'

import { Link } from 'gatsby'
import { url } from 'utils/site-config'

export const PostCardLink = styled(Link)`
    color: inherit;
    text-decoration: none;

    display: flex;
    flex-direction: column;

    &:hover {
        text-decoration: none;
    }
`

export const PostCardTags = styled.div`
    margin: 0 0 5px 0;

    line-height: 1.15em;
    color: ${(props) => props.theme.color.secondary};
`

export const PostCardTitle = styled.h2`
    margin: 0 0 10px 0;
    padding: 0;
`

export const PostCardExcerpt = styled.section`
    line-height: 1.55em;
    margin-bottom: 10px;
`

interface PostCardImageProps {
    imageUrl?: string
}

export const PostCardImage = styled.div<PostCardImageProps>`
    margin: 0 0 10px 0;
    width: auto;
    height: 200px;
    background: ${(props) => props.theme.color.secondary} no-repeat center
        center;
    background-size: cover;

    ${({ imageUrl }) =>
        imageUrl
            ? css`
                  background-image: ${`url(${imageUrl})`};
              `
            : null}
`

export const PostCardFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto 0 0 0;
    color: ${(props) => props.theme.color.accent};
`

export const PostCardFooterLeft = styled.div`
    display: flex;
    align-items: center;
`

export const PostCardFooterRight = styled.div`
    display: flex;
    flex-direction: column;
`

export const PostCardAvatar = styled.div`
    width: 30px;
    height: 30px;
    margin: 0 7px 0 0;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PostCardAvatarDefault = styled.img`
    width: 26px;
`

export const PostCardAvatarAuthor = styled.img`
    display: block;
    width: 100%;
    background: ${(props) => props.theme.color.secondary};
    border-radius: 100%;
    object-fit: cover;
    margin: 0;
`
