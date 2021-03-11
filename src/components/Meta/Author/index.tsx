import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import _ from 'lodash'

import { ImageMeta } from 'components/Meta/Image'
import { getAuthorProperties } from 'components/Meta/Author/get-author-properties'

import site from 'utils/site-config'

interface AuthorMetaProps {
    data: {
        name: string
        bio?: string
        profile_image?: string
        website?: string
        twitter?: string
        facebook?: string
    }
    canonical: string
    type: string
}

export const AuthorMeta: React.FC<AuthorMetaProps> = ({
    data,
    canonical,
    type,
}) => {
    const { allGhostSettings } = useStaticQuery(staticQuery)
    const ghost = allGhostSettings.edges[0].node

    const author = getAuthorProperties(data)
    const shareImage = author.image || _.get(ghost, `cover_image`, null)
    const title = `${data.name} - ${ghost.title}`
    const description =
        data.bio || site.metadata.description || ghost.description

    const jsonLd = {
        '@context': `https://schema.org/`,
        '@type': type,
        name: data.name,
        sameAs: author.sameAsArray ? author.sameAsArray : undefined,
        url: canonical,
        image: shareImage
            ? {
                  '@type': `ImageObject`,
                  url: shareImage,
                  width: site.shareImageWidth,
                  height: site.shareImageHeight,
              }
            : undefined,
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
                <meta property="og:type" content="profile" />
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
    query GhostSettingsAuthorMeta {
        allGhostSettings {
            edges {
                node {
                    ...GhostSettingsFields
                }
            }
        }
    }
`
