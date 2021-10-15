import React from 'react';
import styled from "@emotion/styled";

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";
import Footer from "../src/components/shared/Footer";

import postsIndex from '../src/data/writeups/index.json';
import WriteUpCard from "../src/components/writeup/WriteUpCard";
import PageHeader from "../src/components/PageHeader";

export const BlogPage = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const WriteupListingPage = () => {

    const fetchedPosts = (() => {
        const posts = []
        Object.keys(postsIndex).forEach((key) => {
            const { query } = postsIndex[key];
            try{
                const post = require(`../src/data/writeups/${query.id}.yaml`)
                posts.push(post);
            } catch (e) {
            }
        })
        return posts;
    })();

    return <Base meta={{ title: "Challenge Solution WriteUps" }}>
        <TopBar darkenOnSidebar />
        <PageHeader
            title="Challenge Solutions"
            breadcrumb={[
                {
                    link: '/resources',
                    title: 'Resources'
                },
                {
                    link: '/writeups',
                    isActive: true,
                    title: 'WriteUps'
                }
            ]}
            description="
                 Read the solution write-ups for InCTF Jr challenges, and solve them following
                 the write-up and get yourself started!
            "
        />
        <BlogPage>
            <div className="container px-4 py-6 mx-auto">
                {fetchedPosts.length > 0 ?
                <div className="flex flex-wrap">
                    {fetchedPosts.map((w) =>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                            <WriteUpCard {...w} />
                        </div>
                    )}
                </div> :
                <div>No WriteUps</div>}
            </div>
        </BlogPage>
        <Footer />
    </Base>

};

export default WriteupListingPage;