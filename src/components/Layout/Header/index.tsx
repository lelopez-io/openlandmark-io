import { Link } from 'gatsby'
import React, { useState } from 'react'

import { HamburgerMenu } from 'components/HamburgerMenu'
import { Modal } from 'components/Modal'

import {
    HeaderWrapper,
    HeaderContainer,
    HeaderLogo,
    HeaderNavLinks,
} from './styled'

import site from 'utils/site-config'

interface HeaderProps {
    siteTitle: string
}

export const Header: React.FC<HeaderProps> = ({ siteTitle = '' }) => {
    const [active, setActive] = useState(false)
    const toggleActive = () => {
        setActive(!active)
    }

    const links = site.nav.headerLinks.map((navItem, index) => {
        const listItem = (
            <li onClick={toggleActive}>
                <h3>{navItem.name}</h3>
            </li>
        )

        return navItem.link.charAt(0) == '/' ? (
            <Link key={index} to={navItem.link}>
                {listItem}
            </Link>
        ) : (
            <a key={index} href={navItem.link}>
                {listItem}
            </a>
        )
    })

    return (
        <>
            <HeaderWrapper>
                <HeaderContainer className="flex-cc">
                    <HeaderLogo>
                        <Link className="flex-cc" to="/">
                            <img
                                src="/images/logo_white_h.png"
                                alt={siteTitle}
                            />
                        </Link>
                    </HeaderLogo>

                    <HamburgerMenu
                        active={active}
                        toggleActive={toggleActive}
                    />
                </HeaderContainer>
            </HeaderWrapper>
            <Modal active={active}>
                <HeaderNavLinks className="flex-cc flex-column">
                    {links}
                </HeaderNavLinks>
            </Modal>
        </>
    )
}
