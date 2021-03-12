import React from 'react'

import { PostCard } from 'components/PostCard'

import { PostFeedSection } from './styled'
export { PostFeedDescription } from './styled'

export const PostFeed: React.FC<any> = ({ posts }) => {
    const postList = posts.map(({ node }: { node: any }) => (
        // The tag below includes the markup for each post - components/common/PostCard.js
        <PostCard key={node.id} post={node} />
    ))

    return <PostFeedSection>{postList}</PostFeedSection>
}
