import React from 'react';
import TopBar from "../src/components/shared/TopBar";
import Footer from "../src/components/shared/Footer";
import Base from "../src/components/shared/Base";
import SponsorsSection from "../src/components/landing/SponsorsSection";

const SponsorsPage = () => {
    return (
        <Base meta={{ title: "Sponsors InCTF Jr." }}>
            <TopBar />
            <div className="mx-auto px-4 py-16" style={{ maxWidth: 700 }}>
                <SponsorsSection />
            </div>
            <Footer />
        </Base>
    )
}

export default SponsorsPage;