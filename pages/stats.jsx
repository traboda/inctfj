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
      padding: 0.5rem 1rem 0.5rem 0;
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

    const [year, setYear] = useState(2019);

    const editions = [
        {
            year: 2019,
            stats: {
                totalRegistrations: 1587,
                totalStates: 16,
                totalFinalists: 190,
            },
            champions: [
                {
                    "name": "Team Invaders",
                    "school": "Rajiv Gandhi University of Knowledge and Technology",
                    "place": "Nuzividu, Andhra Pradesh",
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
                    "name": "Team Invaders",
                    "school": "Rajiv Gandhi University of Knowledge and Technology",
                    "place": "Nuzividu, Andhra Pradesh",
                    "title": "Champion Hacker",
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
            year: 2018,
            champions: [
                {
                    "name": "Team Invaders",
                    "school": "Rajiv Gandhi University of Knowledge and Technology",
                    "place": " Nuzividu, Andhra Pradesh",
                    "title": "1st prize winners",
                    "avatar": require('../src/assets/images/champions/invaders.jpg')
                },
                {
                    "name": "Team CTF_Probably",
                    "school": "K. J. Somaiya College of Engineering",
                    "place": "Mumbai",
                    "title": "2nd prize winners",
                    "avatar": require('../src/assets/images/champions/ctfprobably.png')
                },
                {
                    "name": "Team Init0",
                    "school": "NIT",
                    "place": "Rourkela, Odisha",
                    "title": "3rd prize winners",
                    "avatar": require('../src/assets/images/champions/inito.png')
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
                    <div className="container-lg mt-6 px-4">
                        {editions.map((y) =>
                            <TabButton isActive={y.year===year} onClick={() => setYear(y.year)}>{y.year}</TabButton>
                        )}
                    </div>
                </div>
                <div className="container-lg px-4 py-5">
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