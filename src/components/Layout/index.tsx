/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import { ThemeProvider } from 'styled-components'

import 'assets/styles/main.scss'
import { GlobalStyles } from './styled'

import { Main } from 'components/Layout/Main'

import theme from 'utils/theme-config'

interface LayoutProps {
    children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Main>{children}</Main>
        </ThemeProvider>
    )
}
