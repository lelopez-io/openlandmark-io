import React from 'react'
import { Link } from 'gatsby'

import { Layout } from 'components/Layout'
import { Image } from 'components/Image'
import { SEO } from 'components/SEO'

import site from 'utils/site-config'

const IndexPage = () => (
    <Layout>
        <SEO title={site.title} />
        <div className="flex-cc flex-column">
            <h1>Hello Team</h1>
            <p>Welcome to a new Openlandmark Project built on Gatsby.</p>

            <Image
                alt="Gatsby in Space"
                filename="openlandmark-icon.png"
                maxWidth="300px"
            />
        </div>
    </Layout>
)

export default IndexPage
