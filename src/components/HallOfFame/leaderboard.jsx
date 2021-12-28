import React, { useState } from 'react';
import Select from "react-select";
import styled from "@emotion/styled";
import shortid from "shortid";

import IndianStates from "../../data/indian-states";

import Fade from "react-reveal/Fade";
import FameCard from "./FameCard";

const SearchBar = styled.div`
    background: white;
    border-radius: 0.5rem;
    z-index: 6000;
    input {
        display: flex;
        background: white;
        border: 2px solid rgb(74, 20, 140);
        padding: 0.5rem 0.75rem;
        border-radius: 0.35rem;
        color: #111;
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
            background: white;
            border: 2px solid rgb(74, 20, 140);
            border-radius: 0.35rem;
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

const GridHeight = styled.div`
& > div > div.react-reveal {
  height: 100% !important;
}
`;

const defaultLabels = {
    title: 'Leaderboard',
    description: 'Top participants'
}


const Leaderboard = ({ leaderboard, enableStateFilter = true, enableQuotaFilter = true, labels = defaultLabels }) => {

    const [state, setState] = useState(null);
    const [keyword, setKeyword] = useState(null);
    const [quota, setQuota] = useState(null);

    const applicableStates = () => {
        let flags = [], output = [], l = leaderboard.length, i;
        for( i=0; i<l; i++) {
            if( flags[leaderboard[i].state]) continue;
            flags[leaderboard[i].state] = true;
            output.push(leaderboard[i].state);
        }
        return IndianStates.filter((s) => output.includes(s.value))
    };

    const getStateObj = () => {
        let s = IndianStates.find((s) => s.value === state)
        if(s) {
            return s;
        } else {
            return null;
        }
    };

    return <div>
    {leaderboard?.length > 0 && (
    <div className="py-3">
        <div className="py-2">
            <h3 style={{ color: '#fd7e14' }} className="mb-1">{labels.title}</h3>
            <p style={{ opacity: 0.8 }} className="mb-3">
                {labels.description}
            </p>
        </div>
        {leaderboard?.length > 0 ?
            <div className="flex flex-wrap">
                <div className="md:w-full mb-2">
                    <SearchBar className="flex flex-wrap bg-white p-2 mx-0 border">
                        <div className="md:w-1/3 w-full p-1 flex items-center">
                            <input
                                value={keyword}
                                onChange={(e) => setKeyword(e.currentTarget.value)}
                                placeholder="Search for names"
                            />
                        </div>
                        {enableStateFilter &&
                        <div className="md:w-1/3 w-1/2 p-1 flex items-center">
                            <div className="w-full">
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
                        </div>}
                        {enableQuotaFilter &&
                        <div className="md:w-1/3 w-1/2 p-1 flex items-center">
                            <div className="w-full">
                                <Select
                                    aria-label="user-quota-selector"
                                    name="quota"
                                    className="state-filter-select"
                                    classNamePrefix="state-filter"
                                    options={[
                                        { value: null, label: "All Quota"},
                                        { value: 'top30', label: "National Top 30"},
                                        { value: 'state', label: "State Top 5"},
                                        { value: 'self', label: "Top 25 Self Study Teams"},
                                        { value: 'women', label: "Top 25 Women-Only Teams"},
                                    ]}
                                    menuPlacement="auto"
                                    placeholder="Filter by Qualification Type"
                                    noOptionsMessage={() => <div>No such quota could be found</div>}
                                    onChange={setQuota}
                                    value={quota}
                                />
                            </div>
                        </div>}
                    </SearchBar>
                </div>
                <GridHeight className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-3 w-full">
                    {leaderboard.filter((s) =>
                        (keyword ? s.username.startsWith(keyword) : true) &&
                        (state ? s.state === state : true) &&
                        (quota?.['value'] ? s.quota === quota['value'] : true)
                    ).map((l) =>
                        <div>
                            <Fade>
                                <FameCard {...l} key={shortid.generate()} />
                            </Fade>
                        </div>
                    )}
                </GridHeight>
                <div style={{ color: '#999', fontSize: '11px' }} className="py-3 p-2">
                    <li>The leaderboard only includes participants who have earned at-least 1 point in the qualifiers.</li>
                    <li>Participants with incomplete profile information, and who failed to verify their identity as a student have been excluded from the listing.</li>
                </div>
            </div> :
            <div className="flex items-center justify-center">
                <div className="my-5 text-center">
                    <h4 className="font-bold text-red-600">No Records Currently Available</h4>
                    <p style={{ fontSize: '13px' }}>We will shortly update the entries here, check back later</p>
                </div>
            </div>}
        </div>)}
    </div>;
};

export default Leaderboard;