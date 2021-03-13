import styled, { css } from 'styled-components'

export interface MenuWrapperProps {
    active: boolean
}

export const MenuWrapper = styled.div<MenuWrapperProps>`
    cursor: pointer;

    position: relative;
    z-index: 10;

    margin: 1em;
    width: 40px;
    &:after,
    &:before,
    div {
        background-color: #14171a;
        border-radius: 3px;
        content: '';
        display: block;
        height: 5px;
        margin: 7px 0;
        transition: all 0.2s ease-in-out;
    }

    ${({ active }) =>
        active
            ? css`
                  &:before {
                      transform: translateY(12px) rotate(135deg);
                  }
                  &:after {
                      transform: translateY(-12px) rotate(-135deg);
                  }
                  & div {
                      transform: scale(0);
                  }
              `
            : null}
`

export const MenuIcon = styled.div``
