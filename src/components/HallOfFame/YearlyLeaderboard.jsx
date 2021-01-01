import React, { useState } from 'react';
import Select from "react-select";
import styled from "@emotion/styled";

import IndianStates from "../../data/indian-states";
import FameCard from "./FameCard";

const SearchBar = styled.div`
    background: rgba(75, 20, 150, 0.25)!important;
    color: white;
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
`

const YearlyLeaderboard = ({ year, leaderboard, schools }) => {

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
    {schools?.length > 0 &&
    <div className="py-3">
        <div className="p-2">
            <h3 className="mb-1">Top 10 Schools</h3>
            <p style={{ color: '#AAA' }} className="mb-3">Schools with most points for InCTF Jr. {year}</p>
        </div>
        <div style={{ maxWidth: '720px' }} className="px-0">
            <div className="row font-weight-bold p-2 mb-2 mx-0" style={{ color: '#fd7e14', background: 'rgba(0,0,30,0.5)' }}>
                <div className="col-6 col-lg-8 px-2">
                    School
                </div>
                <div className="col-3 col-lg-2 text-right px-2">
                   # of Scorers
                </div>
                <div className="col-3 col-lg-2 text-right px-2">
                    Total Points
                </div>
            </div>
            {schools.map((s, index) =>
                <div className="row p-2 mb-2 mx-0" style={{ background: 'rgba(0,0,30,0.5)' }}>
                    <div style={{ fontSize: 'calc(12px + 0.5vw)' }} className="col-6 col-lg-8 px-2">
                        <b>{index+1}.</b> {s.name}
                    </div>
                    <div className="col-3 col-lg-2 text-center px-2">
                        {s.participants}
                    </div>
                    <div className="col-3 col-lg-2 text-right px-2">
                        {s.points}
                    </div>
                </div>
            )}
        </div>
        <div style={{ color: '#999', fontSize: '11px' }} className="py-3 p-2">
            <li>InCTF Jr. is an individual event, and the points for schools are calculated by adding up scores of all students from the school</li>
            <li>Only Schools with minimum of 2 scoring participants are taken in consideration</li>
            <li>Students who incorrectly gave information of the school, or whose profile is not verified are not accounted for.</li>
        </div>
    </div>}
    <div className="py-3">
        <div className="p-2">
            <h3 className="mb-1">Leaderboards</h3>
            <p style={{ color: '#AAA' }} className="mb-3">
                InCTF Jr. {year} participants who earned most points by capturing the most number of flags in the lowest time ranked.
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
                    ).map((l,index) =>
                        <div className="col-md-6 p-1">
                            <FameCard {...l} />
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