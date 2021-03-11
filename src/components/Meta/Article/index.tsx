import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import _ from 'lodash'
import url from 'url'
import { tags as tagsHelper } from '@tryghost/helpers'

import { getAuthorProperties } from 'components/Meta/Author/get-author-properties'
import { ImageMeta } from 'components/Meta/Image'

import site from 'utils/site-config'

interface ArticleMetaGhostProps {
    data: {
        title: string
        published_at: string
        updated_at: string
        meta_title?: string
        meta_description?: string
        primary_author: any
        feature_image?: string
        tags?: Array<{
            name?: string
            slug?: string
            visibility?: string
        }>

        primaryTag?: {
            name?: string
        }
        og_title?: string
        og_description?: string
        twitter_title?: string
        twitter_description?: string
        excerpt: string
    }
    canonical: string
    type: string
}

export const ArticleMeta: React.FC<ArticleMetaGhostProps> = ({
    data,
    canonical,
    type,
}) => {
    const ghostPost = data
    const { allGhostSettings } = useStaticQuery(staticQuery)
    const ghost = allGhostSettings.edges[0].node

    const author = getAuthorProperties(ghostPost.primary_author)
    const publicTags = _.map(
        tagsHelper(ghostPost, { visibility: `public`, fn: (tag: any) => tag }),
        `name`
    )
    const primaryTag = publicTags[0] || ``
    const shareImage = ghostPost.feature_image
        ? ghostPost.feature_image
        : _.get(ghost, `cover_image`, null)
    const publisherLogo =
        ghost.logo || site.icon
            ? url.resolve(site.url, ghost.logo || site.icon)
            : null

    const jsonLd = {
        '@context': `https://schema.org/`,
        '@type': type,
        author: {
            '@type': `Person`,
            name: author.name,
            image: author.image ? author.image : undefined,
            sameAs: author.sameAsArray ? author.sameAsArray : undefined,
        },
        keywords: publicTags.length ? publicTags.join(`, `) : undefined,
        headline: ghostPost.meta_title || ghostPost.title,
        url: canonical,
        datePublished: ghostPost.published_at,
        dateModified: ghostPost.updated_at,
        image: shareImage
            ? {
                  '@type': `ImageObject`,
                  url: shareImage,
                  width: site.shareImageWidth,
                  height: site.shareImageHeight,
              }
            : undefined,
        publisher: {
            '@type': `Organization`,
            name: ghost.title,
            logo: {
                '@type': `ImageObject`,
                url: publisherLogo,
                width: 60,
                height: 60,
            },
        },
        description: ghostPost.meta_description || ghostPost.excerpt,
        mainEntityOfPage: {
            '@type': `WebPage`,
            '@id': site.url,
        },
    }

    return (
        <>
            <Helmet>
                <title>{ghostPost.meta_title || ghostPost.title}</title>
                <meta
                    name="description"
                    content={ghostPost.meta_description || ghostPost.excerpt}
                />
                <link rel="canonical" href={canonical} />

                <meta property="og:site_name" content={site.title} />
                <meta property="og:type" content="article" />
                <meta
                    property="og:title"
                    content={
                        ghostPost.og_title ||
                        ghostPost.meta_title ||
                        ghostPost.title
                    }
                />
                <meta
                    property="og:description"
                    content={
                        ghostPost.og_description ||
                        ghostPost.excerpt ||
                        ghostPost.meta_description
                    }
                />
                <meta property="og:url" content={canonical} />
                <meta
                    property="article:published_time"
                    content={ghostPost.published_at}
                />
                <meta
                    property="article:modified_time"
                    content={ghostPost.updated_at}
                />
                {publicTags.map((keyword, i) => (
                    <meta property="article:tag" content={keyword} key={i} />
                ))}
                {author.facebookUrl && (
                    <meta
                        property="article:author"
                        content={author.facebookUrl}
                    />
                )}

                <meta
                    name="twitter:title"
                    content={
                        ghostPost.twitter_title ||
                        ghostPost.meta_title ||
                        ghostPost.title
                    }
                />
                <meta
                    name="twitter:description"
                    content={
                        ghostPost.twitter_description ||
                        ghostPost.excerpt ||
                        ghostPost.meta_description
                    }
                />
                <meta name="twitter:url" content={canonical} />
                <meta name="twitter:label1" content="Written by" />
                <meta name="twitter:data1" content={author.name} />
                {primaryTag && (
                    <meta name="twitter:label2" content="Filed under" />
                )}
                {primaryTag && (
                    <meta name="twitter:data2" content={primaryTag} />
                )}

                {ghost.twitter && (
                    <meta
                        name="twitter:site"
                        content={`https://twitter.com/${ghost.twitter.replace(
                            /^@/,
                            ``
                        )}/`}
                    />
                )}
                {ghost.twitter && (
                    <meta name="twitter:creator" content={ghost.twitter} />
                )}
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd, undefined, 4)}
                </script>
            </Helmet>
            <ImageMeta image={shareImage} />
        </>
    )
}

const staticQuery = graphql`
    query GhostSettingsArticleMeta {
        allGhostSettings {
            edges {
                node {
                    ...GhostSettingsFields
                }
            }
        }
    }
`
