import React, {useState} from 'react';
import styled from "@emotion/styled";

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";

import leaderboard19 from '../src/data/hall-of-fame/2019';
import leaderboard20 from '../src/data/hall-of-fame/2020';
import schoolRank20 from '../src/data/school-rankings/20'


import YearlyLeaderboard from "../src/components/HallOfFame/YearlyLeaderboard";

const Header = styled.section`
    min-height: 50vh;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    h1 {
       color: white;
    }
    p {
      color: #AAA;
    }
`;

const PageWrap = styled.div`
    background: rgb(25, 25, 40);
    min-height: 50vh;
    color: #eee;
`;

const TabButton = styled.button`
      padding: 0.5rem 1rem;
      font-size: 24px;
      background: none;
      border: none;
      font-weight: 600;
      color: ${({isActive}) => isActive ? `#fd7e14` : '#eee'};
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
                    "title": "Champion Hacker"
                },
                {
                    "name": "Megha N Iyer",
                    "school": "Yashasvi International School",
                    "place": "Bengaluru, Karnataka",
                    "title": "Women Hacker",
                    "avatar": require('../src/assets/images/champions/megha.png')
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
                    "title": "Second Runner-Up"
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
                }
            ],
            leaderboard: leaderboard19
        },
        // { "year": 2018, leaderboard: [] },
        // { "year": 2017, leaderboard: [] },
        // { "year": 2016, leaderboard: [] }
    ]

    return <Base meta={{ title: "Statistics & Rankings" }}>
        <TopBar darkenOnSidebar includeSpace={false} />
        <Header>
            <div className="mt-5">
                <h1>InCTF Jr. Stats & Rankings</h1>
                <p>Honouring past participants & schools of InCTF Junior</p>
            </div>
        </Header>
        <PageWrap>
            <div style={{ background: `rgba(0,0,30,0.5)` }} className="d-flex align-items-center">
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
        </PageWrap>
    </Base>;

};

export default Stats;