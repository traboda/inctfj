import React, {useState} from 'react';
import styled from "@emotion/styled";

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";

import leaderboard19 from '../src/data/hall-of-fame/2019';
import leaderboard20 from '../src/data/hall-of-fame/2020';

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
   height: 100%;
   box-shadow: 2px 3px 8px rgba(0,0,0,0.15);
   font-size: 13px;
   background: #111;
   color: white;
   border-radius: 3px;
   img {
      max-width: 100%;
      margin: 0;
      padding: 0;
   }
   h4 { 
      font-size: 16px;
      margin-bottom: 0;
      color: white;
      img {
         height: 32px;
         margin-left: 5px;
      }
   }
   span {
      font-size: 13px;
   }
   div {
      line-height: 1.25;
      color: #AAA;
   }
   b {
      color: white;
   }
   .rank {
      font-size: 36px;
      line-height: 1;
      color: white;
   }
`;


const FameCard = ({
    rank, username, name, state, age, points, school, city, isQueen
}) => {

    return <FameCardWrap>
        <div className="row mx-0 p-2">
            <div className="col-2 text-right justify-content-center align-items-center d-flex p-2">
                {
                    rank === 1 ? <img src={require('../src/assets/images/icons/crown.png')} /> :
                        rank === 2 ? <img src={require('../src/assets/images/icons/viking.png')} /> :
                            rank === 3 ? <img src={require('../src/assets/images/icons/samurai.png')} /> :
                                isQueen ? <img src={require('../src/assets/images/icons/queen.png')} />
                                    : <div className="rank">{rank}. </div>
                }
            </div>
            <div className="col-10 col-md-5 p-1">
                <h4 className="font-weight-bold d-flex align-items-center mb-1">
                    {name}

                </h4>
                <div className="mb-2">@{username}</div>
                {(age || points) &&
                <div>
                    <span className="pr-2"><b>{points}</b> pts</span>
                    {age && <span><b>{age}</b> Yrs</span>}
                </div>}
            </div>
            <div className="col-md-5 d-flex align-items-center p-1">
                <div>
                    {school && <div style={{ fontSize: '15px' }} className="line-height-1 mb-1 text-warning">{school}</div>}
                    {(city||state) && <div>{city}, {state}</div>}
                </div>
            </div>
        </div>
    </FameCardWrap>;

};

const YearlyLeaderboard = ({ data }) => {

    return data.length > 0 ?
    <div className="row mx-0">
        {data.map((l) =>
            <div className="col-md-6 p-1">
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
        { "year": 2020, data: leaderboard20 },
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
            <div className="container-lg px-1 py-5">
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