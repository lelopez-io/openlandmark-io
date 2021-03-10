import { Link } from 'gatsby'
import React from 'react'

import {
    FooterWrapper,
    FooterContainer,
    FooterCopyright,
    FooterCredit,
} from './styled'

interface FooterProps {
    siteTitle?: string
}

export const Footer: React.FC<FooterProps> = ({ siteTitle = '' }) => (
    <FooterWrapper>
        <FooterContainer>
            <FooterCopyright className="flex-cc">
                <span>
                    <Link to="/">{siteTitle}</Link> © {new Date().getFullYear()}
                </span>
            </FooterCopyright>
            <FooterCredit className="flex-cc">
                <a href="https://openlandmark.io" target="_blank">
                    Become Global
                </a>
            </FooterCredit>
        </FooterContainer>
    </FooterWrapper>
)
