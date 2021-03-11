import React from 'react'

import { MenuWrapper, MenuWrapperProps, MenuIcon } from './styled'

export interface HamburgerMenuProps extends MenuWrapperProps {
    toggleActive: () => void
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
    active,
    toggleActive,
}) => {
    return (
        <MenuWrapper active={active} onClick={toggleActive}>
            <MenuIcon></MenuIcon>
        </MenuWrapper>
    )
}
