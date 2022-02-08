import React from 'react';

import TopBar from "../src/components/shared/TopBar";
import Footer from "../src/components/shared/Footer";
import PageHeader from "../src/components/PageHeader";
import YoutubeVideos from "../src/components/resources/YoutubeVideos";
import SiteView from "../src/components/SiteView";

const ResourcesPage = () => {
    return (
        <SiteView meta={{ title: "Resources" }}>
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
        </SiteView>
    );
};

export default ResourcesPage;