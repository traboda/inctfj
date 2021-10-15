import React, {useState} from 'react';
import styled from "@emotion/styled";

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";

import leaderboard19 from '../src/data/hall-of-fame/2019';
import leaderboard20 from '../src/data/hall-of-fame/2020';
import schoolRank20 from '../src/data/school-rankings/20'


import YearlyLeaderboard from "../src/components/HallOfFame/YearlyLeaderboard";
import Footer from "../src/components/shared/Footer";
import PageHeader from "../src/components/PageHeader";

const PageWrap = styled.div`
    min-height: 50vh;
    background: #FAFAFA;
    display: flex;
    justify-content: center;
`;

const TabButton = styled.button`
      padding: 0.5rem 1rem;
      font-size: 24px;
      background: none;
      border: none;
      font-weight: 600;
      color: ${({isActive}) => isActive ? `#fd7e14` : '#333'};
      &:hover, &:focus {
        outline: none!important;
      }
`;

const Stats = () => {

    const [year, setYear] = useState(2020);

    const editions = [
        {
            year: 2020,
            stats: {
                totalRegistrations: 1587,
                totalStates: 16,
                totalFinalists: 190,
            },
            champions: [
                {
                    "name": "Rajvardhan Agarwal",
                    "school": "Kiit International School",
                    "place": "Bhubaneshwar, Odisha",
                    "title": "Champion Hacker",
                    "avatar": require('../src/assets/images/champions/rajvardhan.jpeg')
                },
                {
                    "name": "Shwetha S",
                    "school": "Sri Shankara Senior Secondary Schoor, Adayar",
                    "place": "Chennai, Tamil Nadu",
                    "title": "Women Hacker",
                    "avatar": require('../src/assets/images/champions/swetha.JPG')
                },
                {
                    "name": "Nilabha Saha",
                    "school": "Oxford Independent PU College",
                    "place": "Bengaluru, Karnataka",
                    "title": "Runner-Up",
                    "avatar": require('../src/assets/images/champions/nilabha.png')
                },
                {
                    "name": "Jones Martin",
                    "school": "Good Shepherd English School",
                    "place": "Karaikal, Puducherry",
                    "title": "Second Runner-Up",
                    "avatar": require('../src/assets/images/champions/jones.jpg')
                }
            ],
            womenHackers: [
                {
                    "name": "Shwetha S",
                    "school": "Sri Shankara Senior Secondary Schoor, Adayar",
                    "place": "Chennai, Tamil Nadu",
                    "points": 3250,
                    "avatar": require('../src/assets/images/champions/swetha.JPG')
                },
                {
                    "name": "Megha N Iyer",
                    "school": "Yashasvi International School",
                    "place": "Bengaluru, Karnataka",
                    "points": 2475,
                    "avatar": require('../src/assets/images/champions/megha.png')
                }
            ],
            leaderboard: leaderboard20,
            schools: schoolRank20
        },
        {
            year: 2019,
            champions: [
                {
                    "name": "Pranav Krishna",
                    "school": "CS Academy",
                    "place": "Coimbatore, Tamil Nadu",
                    "title": "Champion Hacker",
                    "avatar": require('../src/assets/images/champions/pranavkrishna.jpg')
                },
                {
                    "name": "Nilabha Saha",
                    "school": "Oxford Independent PU College",
                    "place": "Bengaluru, Karnataka",
                    "title": "Runner-Up",
                    "avatar": require('../src/assets/images/champions/nilabha.png')
                },
            ],
            leaderboard: leaderboard19
        },
        // { "year": 2018, leaderboard: [] },
        // { "year": 2017, leaderboard: [] },
        // { "year": 2016, leaderboard: [] }
    ]

    return <Base meta={{ title: "Statistics & Rankings" }}>
        <TopBar darkenOnSidebar includeSpace={false} />
        <PageHeader
            title="Past Statistics & Rankings"
            breadcrumb={[
                {
                    link: '/championship',
                    title: 'Championship'
                },
                {
                    link: '/organizers',
                    isActive: true,
                    title: 'Organizers'
                }
            ]}
        />
        <PageWrap>
            <div style={{ maxWidth: '1100px', width: '100%' }}>
                <div className="d-flex align-items-center">
                    <div className="container-lg p-2">
                        {editions.map((y) =>
                            <TabButton isActive={y.year===year} onClick={() => setYear(y.year)}>{y.year}</TabButton>
                        )}
                    </div>
                </div>
                <div className="container-lg px-1 py-5">
                    {editions.filter((y) => y.year === year).map((y) =>
                        <YearlyLeaderboard {...y} />
                    )}
                </div>
            </div>
        </PageWrap>
        <Footer />
    </Base>;

};

export default Stats;