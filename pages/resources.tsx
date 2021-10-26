import React from 'react';

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";
import Footer from "../src/components/shared/Footer";
import PageHeader from "../src/components/PageHeader";
import YoutubeVideos from "../src/components/resources/YoutubeVideos";

const ResourcesPage = () => {
    return (
        <Base meta={{ title: "Resources InCTF Jr." }}>
            <TopBar />
            <PageHeader
                breadcrumb={[
                    {
                        title: 'Resources',
                        link: '/resources',
                        isActive: true
                    }
                ]}
                title="Resources"
            />
            <div className="container mx-auto px-4 py-12">
                <YoutubeVideos />
            </div>
            <Footer />
        </Base>
    );
};

export default ResourcesPage;