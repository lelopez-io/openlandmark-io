import React from 'react'
import { graphql } from 'gatsby'

import { GhostLayout as Layout } from 'components/Layout'
import { PostFeed, PostFeedDescription } from 'components/PostFeed'
import { Pagination } from 'components/Pagination'

import { MetaData } from 'components/Meta'

import { Section } from 'components/Section'

interface TagProps {
    data: any
    location: {
        pathname: string
    }
    pageContext?: any
}

/**
 * Tag page (/tag/:slug)
 *
 * Loads all posts for the requested tag incl. pagination.
 *
 */
const Tag: React.FC<TagProps> = ({ data, location, pageContext }) => {
    const tag = data.ghostTag
    const posts = data.allGhostPost.edges

    return (
        <>
            <MetaData data={data} location={location} type="Series" />
            <Layout>
                <Section title={tag.name}>
                    {tag.description ? (
                        <PostFeedDescription>
                            {tag.description}
                        </PostFeedDescription>
                    ) : null}

                    <PostFeed posts={posts} />
                    <Pagination pageContext={pageContext} />
                </Section>
            </Layout>
        </>
    )
}

export default Tag

export const pageQuery = graphql`
    query GhostTagQuery($slug: String!, $limit: Int!, $skip: Int!) {
        ghostTag(slug: { eq: $slug }) {
            ...GhostTagFields
        }
        allGhostPost(
            sort: { order: DESC, fields: [published_at] }
            filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
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
