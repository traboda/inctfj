import React from 'react';

import TopBar from '../src/components/shared/TopBar';
import { AdvisoryBoard, AdvisoryBoardAlumni } from '../src/data/organizers';
import ProfileCard from '../src/components/ProfileCard';
import Footer from '../src/components/shared/Footer';
import PageHeader from '../src/components/PageHeader';
import PageFooterExplorer from '../src/components/PageFooterExplorer';
import SiteView from '../src/components/SiteView';

const AdvisoryBoardPage = () => {

  return (
    <SiteView meta={{ title: 'Advisory Board' }}>
      <TopBar />
      <PageHeader
        breadcrumb={[
          {
            link: '/about',
            title: 'About',
          },
          {
            link: '/advisory-board',
            isActive: true,
            title: 'Advisory Board',
          },
        ]}
        title="Advisory Board"
        description="
                    The InCTF Advisory Board is a high-level expert panel consisting of eminent personalities
                    from academia and industry who review and provide valuable help and advice on all aspects
                    of our end-to-end CyberSecurity programme. Our advisory board plays a pivotal role in transforming
                    InCTF to a global pioneer in CyberSecurity education, that sets a platform that inspires & enables
                    CyberSecurity education among the students, and thereby helping nurture next generation of
                    CyberSecurity workforce for tomorrow.
                "
      />
      <div className="w-full py-6 px-2" style={{ background: '#FAFAFA' }}>
        {AdvisoryBoard?.length > 0 && (
        <div className="py-5">
          <h2 className="text-3xl text-primary mb-4 text-center">Industry Experts</h2>
          <div className="flex flex-wrap">
            {AdvisoryBoard.map((a, i) => (
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-3 sm:p-3" key={i}>
                <ProfileCard {...a} />
              </div>
            ))}
          </div>
        </div>
        )}
        {AdvisoryBoardAlumni?.length > 0 && (
          <div className="py-5">
            <h2 className="text-3xl mb-5 text-primary text-center">Amrita Alumni & Industry Experts</h2>
            <div className="flex flex-wrap">
              {AdvisoryBoardAlumni.map((a, i) => (
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-3 sm:p-3" key={i}>
                  <ProfileCard {...a} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <PageFooterExplorer
        items={[
          {
            'title': 'Our Reach & Impact',
            'text': 'See our reach & impact',
            'link': '/about#our-reach',
          },
          {
            'title': 'Organizers',
            'text': 'View our team of organizers',
            'link': '/organizers',
          },
          {
            'title': 'Sponsors',
            'text': 'View our Sponsors',
            'link': '/sponsors',
          },
        ]}
      />
      <Footer />
    </SiteView>
  );
};

export default AdvisoryBoardPage;