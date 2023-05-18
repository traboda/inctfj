import React from 'react';

import LandingHeader from "../src/components/landing/Header";
import LandingSponsorship from "../src/components/landing/Sponsorship";
import LandingTestimonials from "../src/components/landing/Testimonials";
import LandingOrganizers from "../src/components/landing/Organizers";
import LandingReasonsToParticipate from "../src/components/landing/WhyParticipate";
import CTAReg from "../src/components/landing/CTAReg";
import LandingQuickInfo from "../src/components/landing/QuickInfo";
import LandingAboutInCTF from "../src/components/landing/About";
// import LandingStatsBar from "../src/components/landing/StatsCounter";
import LandingHowItWorks from "../src/components/landing/HowItWorks";
import LandingContactsBar from "../src/components/landing/ContactsBar";
import TopBar from "../src/components/shared/TopBar";
import CTAPartners from "../src/components/landing/CTAPartners";
import LandingPromoVideo from "../src/components/landing/PromoVideo";
import LandingSearch from "../src/components/landing/search";
import Footer from "../src/components/shared/Footer";
import SiteView from "../src/components/SiteView";
import LandingPrizeDetails from "../src/components/landing/Prizes";

const LandingPage = () => {

    return (
        <SiteView>
            <div style={{ overflowX: 'hidden', background: '#FAFAFA' }} id="landing-page">
                <TopBar darkenOnSidebar includeSpace={false} />
                <LandingHeader />
                <LandingQuickInfo />
                <LandingAboutInCTF />
                {/*<LandingStatsBar />*/}
                <LandingPromoVideo />
                <LandingPrizeDetails />
                <LandingReasonsToParticipate />
                <CTAReg />
                <LandingHowItWorks />
                <LandingTestimonials />
                <LandingSponsorship />
                <CTAPartners />
                <LandingOrganizers />
                <LandingSearch />
                <LandingContactsBar />
            </div>
            <Footer />
        </SiteView>
    );

};

export default LandingPage;