import React from 'react';
import TopBar from "../src/components/shared/TopBar";
import Footer from "../src/components/shared/Footer";
import Base from "../src/components/shared/Base";
import SponsorsSection from "../src/components/landing/SponsorsSection";
import Breadcrumb from "../src/components/shared/Breadcrumbs";
import PageHeader from "../src/components/PageHeader";

const SponsorsPage = () => {
    return (
        <Base meta={{ title: "Sponsors InCTF Jr." }}>
            <TopBar />
            <PageHeader
                title="Our Sponsors"
                breadcrumb={[
                    {
                        link: '/about',
                        title: 'About'
                    },
                    {
                        link: '/sponsors',
                        isActive: true,
                        title: 'Sponsors'
                    }
                ]}
            />
            <div className="mx-auto text-center px-4 pb-8" style={{ maxWidth: 700 }}>
                <SponsorsSection />
            </div>
            <Footer />
        </Base>
    )
}

export default SponsorsPage;