import React from 'react'

import { HeaderWrapper, HeaderContainer } from './styled'

interface LayoutProps {
    children: React.ReactNode
}

export const Main: React.FC<LayoutProps> = ({ children }) => {
    return (
        <HeaderWrapper>
            <HeaderContainer>{children}</HeaderContainer>
        </HeaderWrapper>
    )
}
