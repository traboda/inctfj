import React from 'react';
import TopBar from "../src/components/shared/TopBar";
import Footer from "../src/components/shared/Footer";
import Base from "../src/components/shared/Base";
import SponsorsSection from "../src/components/landing/SponsorsSection";
import Breadcrumb from "../src/components/shared/Breadcrumb";
import PageHeader from "../src/components/PageHeader";
import PageFooterExplorer from "../src/components/PageFooterExplorer";
import SponsorNote from './posts/women';

const SponsorsPage = () => {
    return (
        <Base meta={{ title: "Sponsors InCTF" }}>
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
            <div className="mx-auto text-center px-4 pb-8" style={{ maxWidth: 1250 }}>
                <SponsorsSection />
                <SponsorNote/>
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
        </Base>
    )
}

export default SponsorsPage;