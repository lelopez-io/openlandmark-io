import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import _ from 'lodash'
import url from 'url'

import { ImageMeta } from 'components/Meta/Image'

import site from 'utils/site-config'

interface WebsiteMetaProps {
    data: {
        title?: string
        meta_title?: string
        meta_description?: string
        name?: string
        feature_image?: string
        description?: string
        bio?: string
        profile_image?: string
    }

    canonical: string
    title?: string
    description?: string
    image?: string
    type: string
}

export const WebsiteMeta: React.FC<WebsiteMetaProps> = ({
    data,
    canonical,
    title,
    description,
    image,
    type,
}) => {
    const { allGhostSettings } = useStaticQuery(staticQuery)
    const ghost = allGhostSettings.edges[0].node

    const publisherLogo = url.resolve(site.url, ghost.logo || site.icon)
    let shareImage =
        image || data.feature_image || _.get(ghost, `cover_image`, null)

    shareImage = shareImage ? url.resolve(site.url, shareImage) : null

    description =
        description ||
        data.meta_description ||
        data.description ||
        site.metadata.description ||
        ghost.description
    title = `${title || data.meta_title || data.name || data.title}`

    const jsonLd = {
        '@context': `https://schema.org/`,
        '@type': type,
        url: canonical,
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
        mainEntityOfPage: {
            '@type': `WebPage`,
            '@id': site.url,
        },
        description,
    }

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={canonical} />
                <meta property="og:site_name" content={ghost.title} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={canonical} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:url" content={canonical} />
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
    query GhostSettingsWebsiteMeta {
        allGhostSettings {
            edges {
                node {
                    ...GhostSettingsFields
                }
            }
        }
    }
`
