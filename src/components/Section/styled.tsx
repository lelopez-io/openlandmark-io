import styled, { css } from 'styled-components'

interface SectionTitleProps {
    center?: boolean
}

export const SectionTitle = styled.h1<SectionTitleProps>`
    text-transform: uppercase;

    ${({ center }) =>
        center
            ? css`
                  text-align: center;
              `
            : null}
`

export const SectionWrapper = styled.div`
    min-height: 250px;
    padding-top: 80px;
`
