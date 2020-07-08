import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Layout, PostCard } from "../../components/common/ghost";

/**
 * Main index page (home page)
 *
 * Loads all posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */
const Index = () => {
    const data = useStaticQuery(graphql`
        query {
            allGhostPost {
                edges {
                    node {
                        ...GhostPostFields
                    }
                }
            }
        }
    `);

    const posts = data.allGhostPost.edges;

    return (
        <>
            <Layout isHome={true}>
                <div className="container">
                    <section className="post-feed">
                        {posts.map(({ node }) => (
                            // The tag below includes the markup for each post - components/common/PostCard.js
                            <PostCard key={node.id} post={node} />
                        ))}
                    </section>
                    {/* <Pagination pageContext={pageContext} /> */}
                </div>
            </Layout>
        </>
    );
};

export default Index;
