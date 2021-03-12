import styled, { css } from 'styled-components'

export interface WrapperProps {
    rowHeight?: string
}

export const Wrapper = styled.div<WrapperProps>`
    display: flex;
    flex-wrap: wrap;

    ${({ rowHeight }) =>
        rowHeight
            ? css`
                  & > * {
                      height: ${rowHeight};
                  }
              `
            : null}
`

export const ContentContainer = styled.div`
    text-align: center;

    // UpTo Large devices (desktops, 991.98px and down)
    @media (max-width: 991.98px) {
        min-width: 33%;

        &:nth-child(5n + 4),
        &:nth-child(5n + 5) {
            min-width: 50%;
        }
    }

    // Large devices (desktops, 992px and up)
    min-width: 25%;

    &:nth-child(7n + 5),
    &:nth-child(7n + 6),
    &:nth-child(7n + 7) {
        min-width: 33%;
    }
`
