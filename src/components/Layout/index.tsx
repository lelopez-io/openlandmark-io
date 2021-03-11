/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles, GlobalGhostStyles } from './styled'

import { Header } from 'components/Layout/Header'
import { Footer } from 'components/Layout/Footer'
import { Main } from 'components/Layout/Main'

import site from 'utils/site-config'
import theme from 'utils/theme-config'

import 'assets/styles/main.scss'

interface LayoutProps {
    children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />

            <Header siteTitle={site.title} />
            <Main>{children}</Main>
            <Footer siteTitle={site.title} />
        </ThemeProvider>
    )
}

interface GhostLayoutProps {
    children: React.ReactNode
    bodyClass?: string
}

const staticQuery = graphql`
    query GhostSettings {
        allGhostSettings {
            edges {
                node {
                    ...GhostSettingsFields
                }
            }
        }
    }
`

export const GhostLayout: React.FC<GhostLayoutProps> = ({
    children,
    bodyClass,
}) => {
    const { allGhostSettings } = useStaticQuery(staticQuery)
    const ghost = allGhostSettings.edges[0].node

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <GlobalGhostStyles />

            <Helmet>
                <html lang={ghost.lang} />
                <style type="text/css">{`${ghost.codeinjection_styles}`}</style>
                <body className={bodyClass} />
            </Helmet>

            <Header siteTitle={site.title} />
            <Main>{children}</Main>
            <Footer siteTitle={site.title} />
        </ThemeProvider>
    )
}
