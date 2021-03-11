import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { GhostLayout as Layout } from 'components/Layout'
import { PostFeed } from 'components/PostFeed'
import { Pagination } from 'components/Pagination'

import { MetaData } from 'components/Meta'

import { Section } from 'components/Section'
import { Image } from 'components/Image'

interface BlogProps {
    data: any
    location: any
    pageContext?: any
}
/**
 * Main blog page
 *
 * Loads all posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */
const Blog: React.FC<BlogProps> = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges

    console.log('this many posts: ', posts.length)

    return (
        <>
            <MetaData data={{}} location={location} type="Blog" />
            <Layout>
                <Section>
                    {posts.length === 0 ? (
                        <Image
                            alt="content coming soon"
                            filename="coming-soon.jpg"
                            maxWidth="200px"
                            marginLeft="auto"
                            marginRight="auto"
                        />
                    ) : (
                        <PostFeed posts={posts} />
                    )}
                    <Pagination pageContext={pageContext} />
                </Section>
            </Layout>
        </>
    )
}

export default Blog

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
    query GhostPostQuery($limit: Int!, $skip: Int!) {
        allGhostPost(
            sort: { order: DESC, fields: [published_at] }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    ...GhostPostFields
                }
            }
        }
    }
`

const ContentWrapper = styled.section`
    margin-top: 6rem;
`
