import React from 'react';
import styled from "@emotion/styled";

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";
import Footer from "../src/components/shared/Footer";

import postsIndex from '../src/data/writeups/index.json';
import WriteUpCard from "../src/components/writeup/WriteUpCard";
import Breadcrumb from "../src/components/shared/Breadcrumbs";

export const BlogPage = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export const PageTitleArea = styled.div`
    min-height: 20vh;
    display: flex;
    padding: 5vmin 0;
    align-items: center;
    h1 {
        font-size: calc(1.5rem + 2vw);
        font-weight: 600;
    }
    p {
      color: #AAA;
    }
`;

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
        <BlogPage>
            <div className="px-4 py-8 flex items-end justify-center">
                <div style={{ width: '1000px', maxWidth: '100%'  }}>
                    <div className="flex items-center py-5" style={{ minHeight: '35vh' }}>
                        <div>
                            <div className="w-full text-left mb-2">
                                <Breadcrumb
                                    items={[
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
                                />
                            </div>
                            <h1 className="text-primary text-5xl lg:text-6xl py-4">Challenge Solutions</h1>
                            <p className="opacity-75 px-3" style={{ maxWidth: '100%', width: '700px' }}>
                                Read the solution write-ups for InCTF Jr challenges, and solve them following
                                the write-up and get yourself started!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
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