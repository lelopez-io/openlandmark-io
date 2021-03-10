import { Link } from 'gatsby'
import React from 'react'

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
    const links = site.nav.headerLinks.map((navItem, index) => {
        return navItem.link.charAt(0) == '/' ? (
            <Link to={navItem.link}>
                <li>{navItem.name}</li>
            </Link>
        ) : (
            <a href={navItem.link}>
                <li>{navItem.name}</li>
            </a>
        )
    })

    return (
        <HeaderWrapper>
            <HeaderContainer className="flex-cc">
                <HeaderLogo>
                    <Link to="/">{siteTitle}</Link>
                </HeaderLogo>
                <HeaderNavLinks className="flex-cc">{links}</HeaderNavLinks>
            </HeaderContainer>
        </HeaderWrapper>
    )
}
