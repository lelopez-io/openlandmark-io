import React from 'react'

import { PostHero } from 'components/PostHero'

import { PostContainer, PostTitle, PostContent, PostBody } from './styled'

interface PostProps {
    feature_image?: string
    title: string
    html: string
}

export const Post: React.FC<PostProps> = ({ feature_image, title, html }) => {
    return (
        <PostContainer>
            <PostHero imageUrl={feature_image} alt={title} />
            <PostContent>
                <PostTitle>{title}</PostTitle>

                {/* The main post content */}
                <PostBody
                    className="load-external-scripts"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </PostContent>
        </PostContainer>
    )
}
