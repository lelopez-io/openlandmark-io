import React from 'react'

import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

import {
    PostCardAvatar,
    PostCardAvatarAuthor,
    PostCardAvatarDefault,
    PostCardExcerpt,
    PostCardFooter,
    PostCardFooterLeft,
    PostCardFooterRight,
    PostCardImage,
    PostCardLink,
    PostCardTags,
    PostCardTitle,
} from './styled'

interface PostCardProps {
    post: {
        slug: string
        title: string
        feature_image?: string
        featured?: boolean
        tags?: Array<{
            name: string
        }>
        excerpt: string
        primary_author: {
            name: string
            profile_image: string
        }
    }
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
    if (post.slug === `data-schema`) {
        return null
    }
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)

    return (
        <PostCardLink to={url}>
            <header className="post-card-header">
                {post.feature_image && (
                    <PostCardImage imageUrl={post.feature_image} />
                )}
                {post.tags && (
                    <PostCardTags>
                        {` `}
                        <Tags
                            post={post}
                            visibility="public"
                            autolink={false}
                        />
                    </PostCardTags>
                )}
                {post.featured && <span>Featured</span>}
                <PostCardTitle>{post.title}</PostCardTitle>
            </header>
            <PostCardExcerpt>{post.excerpt}</PostCardExcerpt>
            <PostCardFooter>
                <PostCardFooterLeft>
                    <PostCardAvatar>
                        {post.primary_author.profile_image ? (
                            <PostCardAvatarAuthor
                                src={post.primary_author.profile_image}
                                alt={post.primary_author.name}
                            />
                        ) : (
                            <PostCardAvatarDefault
                                src="/images/icons/avatar.svg"
                                alt={post.primary_author.name}
                            />
                        )}
                    </PostCardAvatar>
                    <span>{post.primary_author.name}</span>
                </PostCardFooterLeft>
                <PostCardFooterRight>
                    <div>{readingTime}</div>
                </PostCardFooterRight>
            </PostCardFooter>
        </PostCardLink>
    )
}
