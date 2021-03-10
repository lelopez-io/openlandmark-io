const path = require(`path`)

const site = require(`./src/utils/site-config`)
const theme = require(`./src/utils/theme-config`)

module.exports = {
    siteMetadata: {
        title: site.metadata.title,
        description: site.metadata.description,
        author: site.metadata.author,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
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
        `gatsby-plugin-gatsby-cloud`,
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
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
