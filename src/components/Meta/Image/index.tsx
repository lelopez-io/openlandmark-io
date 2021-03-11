import React from 'react'
import Helmet from 'react-helmet'
import config from 'utils/site-config'

interface ImageMetaProps {
    image: string
}

export const ImageMeta: React.FC<ImageMetaProps> = ({ image }) => {
    if (!image) {
        return null
    }

    return (
        <Helmet>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={image} />
            <meta property="og:image" content={image} />
            <meta
                property="og:image:width"
                content={config.shareImageWidth.toString()}
            />
            <meta
                property="og:image:height"
                content={config.shareImageHeight.toString()}
            />
        </Helmet>
    )
}
