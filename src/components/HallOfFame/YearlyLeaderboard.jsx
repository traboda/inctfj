import React, { useState } from 'react';
import Select from "react-select";
import styled from "@emotion/styled";
import shortid from "shortid";

import IndianStates from "../../data/indian-states";

import FameCard from "./FameCard";
import SchoolLeaderboard from "./SchoolLeaderboard";
import Fade from "react-reveal/Fade";

const SearchBar = styled.div`
    background: rgba(75, 20, 150, 0.25)!important;
    color: white;
    z-index: 6000;
    input {
        display: flex;
        background: rgba(0, 0, 30, 0.8);
        border: 1px solid rgb(74, 20, 140);
        padding: 0.5rem 0.75rem;
        border-radius: 0.25rem;
        color: #EEE;
        width: 100%;
        &:focus {
          outline: none;
          border-color: #fd7e14;
        }
    }
    .state-filter-select {
         &:focus {
              outline: none!important;
              border-color: #fd7e14!important;
         }
         .state-filter__control {
            background: rgba(0, 0, 30, 0.8)!important;
            border: 2px solid rgb(74, 20, 140);
            border-radius: 0.25rem;
            &:focus {
              outline: none;
              border-color: #fd7e14;
            }
        }
        .state-filter__single-value {
            color: #fd7e14!important;
        }
        input {
            border: none!important;
            box-shadow: none!important;          
            color: #fd7e14!important;
            &:focus {
                outline: none;
            }
        }
        .state-filter__menu {
             background: rgb(0,0,0);
             color: #fd7e14;
             outline: none!important;
             .state-filter__option{
                &:hover {
                    background: #fd7e14!important;
                    color: white;
                }
                 &:focus {
              outline: none!important;
              border-color: #fd7e14!important;
         }
             }
        }
    }
`;

const ChampionCard = styled.div`
   background: rgba(80,20,120,0.35);
   height: 100%;
   img {
    width: 100%;
   }
   h5 {
      font-weight: 600;
      font-size: calc(1rem + 0.5vw);
      margin-bottom: 5px;
   }
   .school-name {
      color: #fd7e14;
      line-height: 1.2;
      margin-bottom: 3px;
   }
   font-size: 13px;
`

const YearlyLeaderboard = ({ year, leaderboard, schools, champions }) => {

    const [state, setState] = useState(null);
    const [keyword, setKeyword] = useState(null);

    const applicableStates = () => {
        let flags = [], output = [], l = leaderboard.length, i;
        for( i=0; i<l; i++) {
            if( flags[leaderboard[i].state]) continue;
            flags[leaderboard[i].state] = true;
            output.push(leaderboard[i].state);
        }
        return IndianStates.filter((s) => output.includes(s.value))
    }

    const getStateObj = () => {
        let s = IndianStates.find((s) => s.value === state)
        if(s) {
            return s;
        } else {
            return null;
        }
    };

    return <div>
    {champions?.length > 0 &&
    <div className="py-3">
        <div className="p-2">
            <h3 style={{ color: '#fd7e14' }} className="mb-1">Champions</h3>
            <p style={{ color: '#AAA' }} className="mb-3">
               The InCTF Junior {year} champions
            </p>
        </div>
        <div className="row mx-0">{champions.map((c, index) =>
            <div className="col-md-6 p-1" key={shortid.generate()}>
                <Fade up delay={index*250}>
                    <ChampionCard>
                        <div className="row h-100 w-100 mx-0">
                            <div
                                style={{ background: `url(${c.avatar})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                className="col-4 col-lg-3 px-2 px-md-0"
                            />
                            <div className="col-8 col-lg-9 d-flex align-items-center p-2 p-md-3">
                                <div>
                                    <div className="h6 text-uppercase mb-1">{c.title}</div>
                                    <h5 className="font-weight-bold">{c.name}</h5>
                                    <div className="school-name">{c.school}</div>
                                    <div>{c.place}</div>
                                </div>
                            </div>
                        </div>
                    </ChampionCard>
                </Fade>
            </div>
        )}</div>
    </div>}
    <SchoolLeaderboard schools={schools} />
    <div className="py-3">
        <div className="p-2">
            <h3 style={{ color: '#fd7e14' }} className="mb-1">Leaderboards</h3>
            <p style={{ color: '#AAA' }} className="mb-3">
                Participant leaderboard ranked based on most points earned by capturing the most number of flags in the lowest time.
            </p>
        </div>
        {leaderboard?.length > 0 ?
                <div className="row mx-0">
                    <div className="col-md-12 mb-2 px-0">
                        <SearchBar className="row bg-white p-2 mx-0">
                            <div className="col-md-8 p-1 d-flex align-items-center">
                                <input
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.currentTarget.value)}
                                    placeholder="Search for names"
                                />
                            </div>
                            <div className="col-md-4 p-1 d-flex align-items-center">
                                <div className="w-100">
                                    <Select
                                        aria-label="user-state-selector"
                                        name="state"
                                        className="state-filter-select"
                                        classNamePrefix="state-filter"
                                        options={[{ value: null, label: "All States/UT"}, ...applicableStates()]}
                                        menuPlacement="auto"
                                        placeholder="Filter by State/UT"
                                        noOptionsMessage={() => <div>No States/Provinces/UT could be found</div>}
                                        onChange={(s) => setState(s['value'])}
                                        value={getStateObj()}
                                    />
                                </div>
                            </div>
                        </SearchBar>
                    </div>
                    {leaderboard.filter((s) =>
                        (keyword ? (s.name.startsWith(keyword) || s.username.startsWith(keyword)) : true) &&
                        (state ? s.state === state : true)
                    ).map((l) =>
                        <div className="col-md-6 p-1">
                            <Fade>
                                <FameCard {...l} key={shortid.generate()} />
                            </Fade>
                        </div>
                    )}
                    <div style={{ color: '#999', fontSize: '11px' }} className="py-3 p-2">
                        <li>The leaderboard only includes participants who have earned at-least 1 point in the finale.</li>
                        <li>Participants with incomplete profile information, and who failed to verify their identity as a school student have been excluded from the listing.</li>
                        <li>Data before 4th edition may not be complete, or may have inaccuracies due to limitations of available data.</li>
                    </div>
                </div> :
                <div className="d-flex align-items-center justify-content-center">
                    <div className="my-5 text-center">
                        <h4 className="font-weight-bold text-danger">No Records Currently Available</h4>
                        <p style={{ fontSize: '13px' }}>We will shortly update the entries here, check back later</p>
                    </div>
                </div>}
        </div>
    </div>;
};

export default YearlyLeaderboard;