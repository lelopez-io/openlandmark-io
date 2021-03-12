import styled, { css } from 'styled-components'

export interface WrapperProps {
    rowHeight?: string
}

export const Wrapper = styled.div<WrapperProps>`
    display: grid;

    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        //grid-template-columns: repeat(3, 1fr);
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        grid-template-columns: repeat(4, 1fr);
    }

    ${({ rowHeight }) =>
        rowHeight
            ? css`
                  grid-template-rows: ${rowHeight};
              `
            : null}
`

export const ContentContainer = styled.div`
    text-align: center;
`
