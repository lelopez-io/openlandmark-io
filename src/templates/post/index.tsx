import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import { GhostLayout as Layout } from 'components/Layout'
import { MetaData } from 'components/Meta'

import { Post as PostContent } from 'components/Post'

interface PostProps {
    data: any
    location: any
}

/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
const Post: React.FC<PostProps> = ({ data, location }) => {
    const post = data.ghostPost

    return (
        <>
            <MetaData data={data} location={location} type="article" />
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>
                <PostContent
                    feature_image={post.feature_image}
                    title={post.title}
                    html={post.html}
                />
            </Layout>
        </>
    )
}

export default Post

export const pageQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`
