import React from 'react'

import { PostFeaturedImg } from './styled'

interface PostHeroProps {
    imageUrl?: string
    alt?: string
}

export const PostHero: React.FC<PostHeroProps> = ({ imageUrl, alt }) => {
    return imageUrl ? (
        <PostFeaturedImg>
            <img src={imageUrl} alt={alt} />
        </PostFeaturedImg>
    ) : null
}
