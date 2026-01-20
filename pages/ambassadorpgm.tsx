import React from 'react';

import TopBar from '../src/components/shared/TopBar';
import Footer from '../src/components/shared/Footer';
import Schedule from '../src/components/landing/Schedule';
import PageHeader from '../src/components/PageHeader';
import SiteView from '../src/components/SiteView';
import AmbassadorProgram from '@/src/components/AmbassadorProgram/ambassador-program';

const AmbassadorProgramPage = () => {
  return (
    <SiteView meta={{ title: 'Ambassador Program' }}>
      <TopBar />
      <PageHeader
        title="Ambassador Program"
        description={"Join us in empowering the next generation of cybersecurity leaders across India."}
   
        breadcrumb={[
          {
            title: 'Get Started',
            link: '/start',
          },
          {
            title: 'Ambassador Program',
            link: '/ambassadorpgm',
            isActive: true,
          },
        ]}
      />
      <div className="py-4" style={{ minHeight: '100vh' }}>
        <AmbassadorProgram />
      </div>
      <Footer />
    </SiteView>
  );
};

export default AmbassadorProgramPage;