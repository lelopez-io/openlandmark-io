import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { ImageWrapper, ImageWrapperProps } from './styled'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes.
 */

interface ImageProps extends ImageWrapperProps {
    filename: string
    alt: string
}

export const Image: React.FC<ImageProps> = ({
    filename,
    alt,
    maxHeight,
    maxWidth,
    marginBottom,
    marginLeft,
    paddingLeft,
    paddingRight,
    opacity,
}) => {
    const { images } = useStaticQuery(staticQuery)
    const image = images.edges.find((n: any) => {
        return n.node.relativePath.includes(filename)
    })

    return image ? (
        <ImageWrapper
            maxHeight={maxHeight}
            maxWidth={maxWidth}
            marginBottom={marginBottom}
            marginLeft={marginLeft}
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
            opacity={opacity}
        >
            <Img
                alt={alt}
                fluid={image.node.childImageSharp.fluid}
                style={{
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                }}
            />
        </ImageWrapper>
    ) : null
}

// query returns all images since we are unable to use variables
const staticQuery = graphql`
    query {
        images: allFile {
            edges {
                node {
                    relativePath
                    name
                    childImageSharp {
                        fluid(maxWidth: 600) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`
