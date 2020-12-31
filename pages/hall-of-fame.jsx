import React, {useState} from 'react';
import styled from "@emotion/styled";

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";

import leaderboard19 from '../src/data/hall-of-fame/2019';


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
    background: #eee;
    min-height: 50vh;
`;

const TabButton = styled.button`
      padding: 0.5rem 1rem;
      font-size: 24px;
      background: none;
      border: none;
      font-weight: 600;
      color: ${({isActive}) => isActive ? `#005cbf` : 'black'};
      &:hover, &:focus {
        outline: none!important;
      }
`;

const FameCardWrap = styled.div`
   background: white;
   height: 100%;
   box-shadow: 2px 3px 8px rgba(0,0,0,0.15);
   position: relative;
   img {
      max-width: 100%;
      margin: 0;
      padding: 0;
   }
   h3 {
      font-size: 18px;
      margin-bottom: 0;
      font-weight: 600;
      color: #005cbf;
   }
   h4 { 
      font-size: 16px;
      margin-bottom: 0;
   }
   span {
      padding-right: 8px;
      font-size: 13px;
   }
   .rank {
      position: absolute;
      bottom: 0;
      left: 0;
      background: #E65100;
      color: white;
      padding: 5px 12px;
      display: flex;
      font-weight: 600;
      align-items: center;
      justify-content: center;
      z-index: 600;
   }
`;


const FameCard = ({
    rank, username, name, state, age, points, avatar
}) => {

    return <FameCardWrap>
        <div className="row mx-0">
            <div className="rank">#{rank}</div>
            <div className="col-4 px-0">
                <img alt={username} src={avatar ? avatar : require('../src/data/hall-of-fame/photos/placeholder.png')} />
            </div>
            <div className="col-8 p-2">
                <h3>@{username}</h3>
                <h4>{name}</h4>
                {(age || state || points) &&
                <div>
                    <span>{points} pts</span>
                    {age && <span>{age} Yrs</span>}
                    {state && <span>{state}</span>}
                </div>}
            </div>
        </div>

    </FameCardWrap>;

};

const YearlyLeaderboard = ({ data }) => {

    return data.length > 0 ?
    <div className="row mx-0">
        {data.map((l) =>
            <div className="col-md-6 col-lg-4 p-2">
                <FameCard {...l} />
            </div>
        )}
    </div> :
    <div className="d-flex align-items-center justify-content-center">
        <div className="my-5 text-center">
            <h4 className="font-weight-bold text-danger">No Records Currently Available</h4>
            <p style={{ fontSize: '13px' }}>We will shortly update the entries here, check back later</p>
        </div>
    </div>;
}

const HallOfFame = () => {

    const [year, setYear] = useState(2020);

    const editions = [
        { "year": 2020, data: [] },
        { "year": 2019, data: leaderboard19 },
        { "year": 2018, data: [] },
        { "year": 2017, data: [] },
        { "year": 2016, data: [] }
    ]

    return <Base meta={{ title: "Hall of Fame" }}>
        <TopBar darkenOnSidebar includeSpace={false} />
        <Header>
            <div className="mt-5">
                <h1>Hall of Fame</h1>
                <p>Past champions of InCTF Junior</p>
            </div>
        </Header>
        <PageWrap>
            <div className="container px-1 py-5">
                <div className="d-flex align-items-center">
                    {editions.map((y) =>
                        <TabButton isActive={y.year===year} onClick={() => setYear(y.year)}>{y.year}</TabButton>
                    )}
                </div>
                {editions.filter((y) => y.year === year).map((y) => <YearlyLeaderboard data={y.data} />)}
            </div>
        </PageWrap>
    </Base>;

};

export default HallOfFame;