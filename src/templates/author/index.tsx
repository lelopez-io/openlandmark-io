import React from 'react'
import { graphql } from 'gatsby'

import { GhostLayout as Layout } from 'components/Layout'
import { PostFeed } from 'components/PostFeed'
import { Pagination } from 'components/Pagination'

import { MetaData } from 'components/Meta'

import { Section } from 'components/Section'

import { AuthorInfo, AuthorImage, AuthorLink, AuthorMeta } from './styled'

interface AuthorProps {
    data: any
    location: {
        pathname: string
    }
    pageContext: any
}
/**
 * Author page (/author/:slug)
 *
 * Loads all posts for the requested author incl. pagination.
 *
 */
const Author: React.FC<AuthorProps> = ({ data, location, pageContext }) => {
    const author = data.ghostAuthor
    const posts = data.allGhostPost.edges
    const twitterUrl = author.twitter
        ? `https://twitter.com/${author.twitter.replace(/^@/, ``)}`
        : null
    const facebookUrl = author.facebook
        ? `https://www.facebook.com/${author.facebook.replace(/^\//, ``)}`
        : null

    return (
        <>
            <MetaData data={data} location={location} type="Person" />
            <Layout>
                <Section>
                    <AuthorInfo>
                        <div className="author-header-content">
                            <h1>{author.name}</h1>
                            {author.bio && <p>{author.bio}</p>}
                            <AuthorMeta>
                                {author.website && (
                                    <AuthorLink
                                        href={author.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Website
                                    </AuthorLink>
                                )}
                                {twitterUrl && (
                                    <AuthorLink
                                        href={twitterUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Twitter
                                    </AuthorLink>
                                )}
                                {facebookUrl && (
                                    <a
                                        href={facebookUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Facebook
                                    </a>
                                )}
                            </AuthorMeta>
                        </div>
                        <AuthorImage>
                            {author.profile_image && (
                                <img
                                    src={author.profile_image}
                                    alt={author.name}
                                />
                            )}
                        </AuthorImage>
                    </AuthorInfo>
                </Section>

                <Section>
                    <PostFeed posts={posts} />
                    <Pagination pageContext={pageContext} />
                </Section>
            </Layout>
        </>
    )
}

export default Author

export const pageQuery = graphql`
    query GhostAuthorQuery($slug: String!, $limit: Int!, $skip: Int!) {
        ghostAuthor(slug: { eq: $slug }) {
            ...GhostAuthorFields
        }
        allGhostPost(
            sort: { order: DESC, fields: [published_at] }
            filter: { authors: { elemMatch: { slug: { eq: $slug } } } }
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
