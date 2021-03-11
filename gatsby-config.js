const path = require(`path`)
require(`dotenv`).config({
    path: `.env.${process.env.NODE_ENV}`,
})

const site = require(`./src/utils/site-config`)
const theme = require(`./src/utils/theme-config`)

const generateRSSFeed = require(`./src/utils/rss/generate-feed`)

const ghostConfig = {
    production: {
        apiUrl: process.env.GHOST_API_URL,
        contentApiKey: process.env.GHOST_CONTENT_API_KEY,
    },
}
// only using production keys at the moment
const { apiUrl, contentApiKey } = ghostConfig.production
if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
    throw new Error(
        `GHOST_API_URL and GHOST_CONTENT_API_KEY are required to build. Check the README.`
    ) // eslint-disable-line
}

module.exports = {
    siteMetadata: {
        title: site.metadata.title,
        description: site.metadata.description,
        author: site.metadata.author,
        siteUrl: site.url,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: site.metadata.title,
                short_name: site.title,
                start_url: `/`,
                background_color: theme.color.background.primary,
                theme_color: theme.color.primary,
                display: `minimal-ui`,
                icon: `static/${site.icon}`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-force-trailing-slashes`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-styled-components`,
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                assets: path.join(__dirname, 'src/assets'),
                components: path.join(__dirname, 'src/components'),
                pages: path.join(__dirname, 'src/pages'),
                sections: path.join(__dirname, 'src/sections'),
                templates: path.join(__dirname, 'src/templates'),
                utils: path.join(__dirname, 'src/utils'),
                ghost: path.join(__dirname, 'src/ghost'),
            },
        },
        /**
         *  Ghost Plugins
         */
        {
            resolve: `gatsby-source-ghost`,
            options: ghostConfig.production,
        },
        {
            resolve: `gatsby-plugin-ghost-manifest`,
            options: {
                short_name: site.title,
                start_url: `/`,
                background_color: theme.color.background.primary,
                theme_color: theme.color.primary,
                display: `minimal-ui`,
                icon: `static/${site.icon}`,
                legacy: true,
                query: `
                {
                    allGhostSettings {
                        edges {
                            node {
                                title
                                description
                            }
                        }
                    }
                }
              `,
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                {
                    allGhostSettings {
                        edges {
                            node {
                                title
                                description
                            }
                        }
                    }
                }
              `,
                feeds: [generateRSSFeed(site)],
            },
        },
        {
            resolve: `gatsby-plugin-advanced-sitemap`,
            options: {
                query: `
                {
                    allGhostPost {
                        edges {
                            node {
                                id
                                slug
                                updated_at
                                created_at
                                feature_image
                            }
                        }
                    }
                    allGhostPage {
                        edges {
                            node {
                                id
                                slug
                                updated_at
                                created_at
                                feature_image
                            }
                        }
                    }
                    allGhostTag {
                        edges {
                            node {
                                id
                                slug
                                feature_image
                            }
                        }
                    }
                    allGhostAuthor {
                        edges {
                            node {
                                id
                                slug
                                profile_image
                            }
                        }
                    }
                }`,
                mapping: {
                    allGhostPost: {
                        sitemap: `posts`,
                    },
                    allGhostTag: {
                        sitemap: `tags`,
                    },
                    allGhostAuthor: {
                        sitemap: `authors`,
                    },
                    allGhostPage: {
                        sitemap: `pages`,
                    },
                },
                exclude: [
                    `/dev-404-page`,
                    `/404`,
                    `/404.html`,
                    `/offline-plugin-app-shell-fallback`,
                ],
                createLinkInHead: true,
                addUncaughtPages: true,
            },
        },
    ],
}
