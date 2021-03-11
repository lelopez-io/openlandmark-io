import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import url from 'url'

import { ArticleMeta } from 'components/Meta/Article'
import { WebsiteMeta } from 'components/Meta/Website'
import { AuthorMeta } from 'components/Meta/Author'

import site from 'utils/site-config'

interface MetaDataProps {
    data?: {
        ghostPost?: any
        ghostTag?: any
        ghostAuthor?: any
        ghostPage?: any
    }

    location: {
        pathname: string
    }
    title?: string
    description?: string
    image?: string
    type: string
}

/**
 * MetaData will generate all relevant meta data information incl.
 * JSON-LD (schema.org), Open Graph (Facebook) and Twitter properties.
 *
 */
export const MetaData: React.FC<MetaDataProps> = ({
    data = {},
    title,
    description,
    image,
    location,
    type,
}) => {
    const canonical = url.resolve(site.url, location.pathname)
    const { ghostPost, ghostTag, ghostAuthor, ghostPage } = data
    const { allGhostSettings } = useStaticQuery(staticQuery)
    const ghost = allGhostSettings.edges[0].node

    if (ghostPost) {
        return (
            <ArticleMeta
                data={ghostPost}
                canonical={canonical}
                type="Article"
            />
        )
    } else if (ghostTag) {
        return (
            <WebsiteMeta data={ghostTag} canonical={canonical} type="Series" />
        )
    } else if (ghostAuthor) {
        return (
            <AuthorMeta
                data={ghostAuthor}
                canonical={canonical}
                type="Person"
            />
        )
    } else if (ghostPage) {
        return (
            <WebsiteMeta
                data={ghostPage}
                canonical={canonical}
                type="Website"
            />
        )
    } else {
        title = title || site.metadata.title || ghost.title
        description =
            description || site.metadata.description || ghost.description
        image = image || ghost.cover_image || null

        image = image ? url.resolve(site.url, image) : undefined

        return (
            <WebsiteMeta
                data={{}}
                canonical={canonical}
                title={title}
                description={description}
                image={image}
                type={type}
            />
        )
    }
}

const staticQuery = graphql`
    query GhostSettingsMetaData {
        allGhostSettings {
            edges {
                node {
                    title
                    description
                }
            }
        }
    }
`
