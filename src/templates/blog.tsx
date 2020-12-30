import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, PostCard, Pagination } from 'components/common/ghost'
import { MetaData } from 'components/common/meta'

/**
 * Main index page (home page)
 *
 * Loads all posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */
const Index = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges

    return (
        <>
            <MetaData location={location} />
            <Layout>
                <Subtitle>Become Global</Subtitle>
                <SectionTitle className="title is-primary is-1">
                    Build with Trusted Infrastructure
                </SectionTitle>
                <ContentWrapper className="post-feed">
                    {posts.map(({ node }) => (
                        // The tag below includes the markup for each post - components/common/PostCard.js
                        <PostCard key={node.id} post={node} />
                    ))}
                </ContentWrapper>
                <Pagination pageContext={pageContext} />
            </Layout>
        </>
    )
}

Index.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Index

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

const SectionTitle = styled.h1`
    display: flex;
    justify-content: center;
    text-align: center;
`

const Subtitle = styled.h5`
    font-size: 16px;
    color: ${(props) => props.theme.color.accent};
    letter-spacing: 0px;
    margin-bottom: 12px;
    text-align: center;
`

const ContentWrapper = styled.section`
    margin-top: 6rem;
`
