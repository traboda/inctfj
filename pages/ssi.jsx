import React from 'react';

import LandingSponsorship from '../src/components/landing/Sponsorship';
import LandingTestimonials from '../src/components/landing/Testimonials';
import LandingOrganizers from '../src/components/landing/Organizers';
import LandingReasonsToParticipate from '../src/components/landing/WhyParticipate';
import CTAReg from '../src/components/landing/CTAReg';
import LandingQuickInfo from '../src/components/landing/QuickInfo';
import LandingAboutInCTF from '../src/components/landing/About';
import LandingStatsBar from '../src/components/landing/StatsCounter';
import LandingHowItWorks from '../src/components/landing/HowItWorks';
import LandingContactsBar from '../src/components/landing/ContactsBar';
import TopBar from '../src/components/shared/TopBar';
import CTAPartners from '../src/components/landing/CTAPartners';
import LandingHeader from '../src/components/landing/Header';
import LandingPromoVideo from '../src/components/landing/PromoVideo';
import Footer from '../src/components/shared/Footer';
import SiteView from '../src/components/SiteView';

const SSILandingPage = () => {

  return (<SiteView>
    <div style={{ overflowX: 'hidden', background: '#FAFAFA' }} id="landing-page">
      <TopBar darkenOnSidebar includeSpace={false} />
      <LandingHeader UTMSource="ssi" />
      <LandingQuickInfo />
      <LandingAboutInCTF />
      <LandingStatsBar />
      <LandingPromoVideo />
      <LandingReasonsToParticipate />
      <CTAReg UTMSource="ssi" />
      <LandingHowItWorks />
      <LandingTestimonials />
      <LandingSponsorship />
      <CTAPartners />
      <LandingOrganizers />
      <LandingContactsBar />
      <Footer />
    </div>
  </SiteView>);

};

export default SSILandingPage;