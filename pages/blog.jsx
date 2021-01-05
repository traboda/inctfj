import React from 'react';
import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";
import Footer from "../src/components/shared/Footer";

const BlogListingPage = () => {

    return  <Base meta={{ title: "Blog" }}>
        <TopBar darkenOnSidebar />

        <Footer />
    </Base>

};

export default BlogListingPage;