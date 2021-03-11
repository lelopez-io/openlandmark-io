import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import { GhostLayout as Layout } from 'components/Layout'
import { MetaData } from 'components/Meta'

import { Post as PageContent } from 'components/Post'

interface PageProps {
    data: any
    location: any
}
/**
 * Single page (/:slug)
 *
 * This file renders a single page and loads all the content.
 *
 */
const Page: React.FC<PageProps> = ({ data, location }) => {
    const page = data.ghostPage

    return (
        <>
            <MetaData data={data} location={location} type="Website" />
            <Helmet>
                <style type="text/css">{`${page.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>
                <PageContent
                    feature_image={page.feature_image}
                    title={page.title}
                    html={page.html}
                />
            </Layout>
        </>
    )
}

export default Page

export const pageQuery = graphql`
    query($slug: String!) {
        ghostPage(slug: { eq: $slug }) {
            ...GhostPageFields
        }
    }
`
