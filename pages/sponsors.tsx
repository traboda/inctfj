import React from 'react';
import TopBar from "../src/components/shared/TopBar";
import Footer from "../src/components/shared/Footer";
import SponsorsSection from "../src/components/landing/SponsorsSection";
import PageHeader from "../src/components/PageHeader";
import PageFooterExplorer from "../src/components/PageFooterExplorer";
import SiteView from "../src/components/SiteView";

const SponsorsPage = () => {
    return (
        <SiteView meta={{ title: "Sponsors " }}>
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
            <PageFooterExplorer
                items={[
                    {
                        "title": "Advisory Board",
                        "text": "View our elite panel of advisors",
                        "link": "/advisory-board"
                    },
                    {
                        "title": "Organizers",
                        "text": "View our team of organizers",
                        "link": "/organizers"
                    },
                    {
                        "title": "Our Reach & Impact",
                        "text": "See our reach & impact",
                        "link": "/about#our-reach"
                    },
                ]}
            />
            <Footer />
        </SiteView>
    )
}

export default SponsorsPage;