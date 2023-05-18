import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';

import TopBar from '../src/components/shared/TopBar';
import Footer from '../src/components/shared/Footer';
import LandingHeader from '../src/components/landing/Header';
import LandingQuickInfo from '../src/components/landing/QuickInfo';
import DiversityInitiatives from '../src/components/talent/diversity';
import IndianCyberLeague from '../src/components/talent/icl';
import CyberClubsInSchools from '../src/components/talent/clubs';
import CTFPedagogy from '../src/components/talent/HowCTFWorks';
import SiteView from '../src/components/SiteView';


const TalentIncubation = () => {

  ChartJS.register(...registerables);

  return (
    <SiteView meta={{ title: 'CyberSecurity Talent Incubation' }}>
      <TopBar />
      <LandingHeader />
      <LandingQuickInfo />
      <CTFPedagogy />
      <CyberClubsInSchools />
      <IndianCyberLeague />
      <DiversityInitiatives />
      <Footer />
    </SiteView>
  );

};

export default TalentIncubation;