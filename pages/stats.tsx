import React, { useState } from 'react';
import styled from '@emotion/styled';

import TopBar from '../src/components/shared/TopBar';
import SiteView from '../src/components/SiteView';
import YearlyLeaderboard from '../src/components/HallOfFame/YearlyLeaderboard';
import Footer from '../src/components/shared/Footer';
import PageHeader from '../src/components/PageHeader';


const PageWrap = styled.div`
    min-height: 50vh;
    background: #FAFAFA;
    display: flex;
    justify-content: center;
`;

type TabButton = {
  isActive: boolean
};

const TabButton = styled.button<TabButton>`
      padding: 0.5rem 1rem 0.5rem 0;
      font-size: 24px;
      background: none;
      border: none;
      font-weight: 600;
      color: ${({ isActive }) => isActive ? '#fd7e14' : '#333'};
      &:hover, &:focus {
        outline: none!important;
      }
`;

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const eventStats = require(`../src/data/${eventID}/stats/index`).default;

const StatsPage = () => {

  const [year, setYear] = useState(eventStats?.editions[0].year);

  const editions = eventStats?.editions;

  return (<SiteView meta={{ title: 'Results & Statistics' }}>
    <TopBar />
    <PageHeader
      title="Results & Statistics"
      description="The results and statistics of the InCTF Junior editions showcasing the top cyber-security student talents in the country."
      breadcrumb={[
        {
          link: '/championship',
          title: 'Championship',
        },
        {
          link: '/stats',
          isActive: true,
          title: 'Results & Statistics',
        },
      ]}
    />
    <PageWrap>
      <div style={{ maxWidth: '1100px', width: '100%' }}>
        <div className="d-flex align-items-center">
          <div className="container-lg mt-6 px-4">
            {editions.map((y, i) => (
              <TabButton
                key={i}
                isActive={y.year === year}
                onClick={() => setYear(y.year)}
              >
                {y.year}
              </TabButton>
            ))}
          </div>
        </div>
        <div className="container-lg px-4 py-5">
          {editions.filter((y) => y.year === year).map((y, i) =>
            <YearlyLeaderboard data={y} key={i} />,
          )}
        </div>
      </div>
    </PageWrap>
    <Footer />
  </SiteView>);

};

export default StatsPage;