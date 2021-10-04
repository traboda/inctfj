import React from 'react';

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";
import Footer from "../src/components/shared/Footer";
import ResourcesComponent from "../src/components/resources";

const ResourcesPage = () => {
    return (
        <Base meta={{ title: "Resources InCTF Jr." }}>
            <TopBar />
            <ResourcesComponent />
            <Footer />
        </Base>
    );
};

export default ResourcesPage;