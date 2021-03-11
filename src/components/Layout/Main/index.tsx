import React from 'react'

import { MainWrapper, MainContainer } from './styled'

interface LayoutProps {
    children: React.ReactNode
}

export const Main: React.FC<LayoutProps> = ({ children }) => {
    return (
        <MainWrapper>
            <MainContainer>{children}</MainContainer>
        </MainWrapper>
    )
}
