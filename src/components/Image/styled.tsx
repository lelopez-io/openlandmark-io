import styled, { css } from 'styled-components'

export interface ImageWrapperProps {
    maxWidth?: string
    maxHeight?: string
    marginBottom?: string
    marginLeft?: string

    paddingLeft?: string
    paddingRight?: string

    opacity?: string
}

export const ImageWrapper = styled.div<ImageWrapperProps>`
    width: 100%;
    margin-bottom: 1.45rem;

    img {
        margin: 0;
        object-fit: contain !important;
    }

    ${({ maxWidth }) =>
        maxWidth
            ? css`
                  max-width: ${maxWidth};
              `
            : null}

    ${({ maxHeight }) =>
        maxHeight
            ? css`
                  max-height: ${maxHeight};
              `
            : null}
            
    ${({ marginBottom }) =>
        marginBottom
            ? css`
                  margin-bottom: ${marginBottom};
              `
            : null}
            
    ${({ marginLeft }) =>
        marginLeft
            ? css`
                  margin-left: ${marginLeft};
              `
            : null}
            
    ${({ paddingLeft }) =>
        paddingLeft
            ? css`
                  padding-left: ${paddingLeft};
              `
            : null}
            
    ${({ paddingRight }) =>
        paddingRight
            ? css`
                  padding-right: ${paddingRight};
              `
            : null}
            
    ${({ opacity }) =>
        opacity
            ? css`
                  opacity: ${opacity};
              `
            : null}
`
