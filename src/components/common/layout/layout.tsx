import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import { graphql, useStaticQuery } from 'gatsby'

import theme from 'assets/styles/theme'
import GlobalStyles from 'assets/styles/global-styles'

import 'assets/scss/main.scss'

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query {
            allGhostSettings {
                edges {
                    node {
                        ...GhostSettingsFields
                    }
                }
            }
        }
    `)
    const site = data.allGhostSettings.edges[0].node

    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Helmet>
                    <html lang={site.lang} />
                    <style type="text/css">{`${site.codeinjection_styles}`}</style>
                </Helmet>
                {children}
            </>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
