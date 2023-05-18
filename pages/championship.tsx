import React from 'react';

import TopBar from '../src/components/shared/TopBar';
import Footer from '../src/components/shared/Footer';
import LandingHeader from '../src/components/landing/Header';
import LandingQuickInfo from '../src/components/landing/QuickInfo';
import SiteView from '../src/components/SiteView';

const ChampionshipPage = () => {

  return (
    <SiteView meta={{ title: 'CTF CyberSecurity Championship' }}>
      <TopBar />
      <LandingHeader />
      <LandingQuickInfo />
      <Footer />
    </SiteView>
  );

};

export default ChampionshipPage;