import styled, { css } from 'styled-components'

export interface WrapperProps {
    reverseVerticalOrder?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 20px;

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    ${({ reverseVerticalOrder }) =>
        reverseVerticalOrder
            ? css`
                  // Small devices (landscape phones, less than 768px)
                  @media (max-width: 767.98px) {
                      & > :last-child {
                          grid-row: 1;
                      }
                  }
              `
            : null}
`

export const ContentContainer = styled.div``
