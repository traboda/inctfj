import React from 'react';
import shortid from "shortid";
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

const LeaderRow = styled.div`
    background: white;
`;

const SchoolLeaderboard = ({ schools }) => {

    return schools?.length > 0 ?
    <div className="p-3">
        <div className="p-2">
            <h3 style={{ color: '#fd7e14' }}  className="mb-1">Top 10 Schools</h3>
            <p style={{ opacity: 0.8 }} className="mb-3">Schools with most points</p>
        </div>
        <div style={{ maxWidth: '720px' }} className="px-0">
            <LeaderRow
                className="flex flex-wrap  font-bold p-2 mb-2 mx-0"
                style={{ color: '#fd7e14' }}
            >
                <div className="w-2/4 px-2">
                    School
                </div>
                <div className="w-1/4 text-right px-2">
                    # of Scorers
                </div>
                <div className="w-1/4 text-right px-2">
                    Total Points
                </div>
            </LeaderRow>
            {schools.map((s, index) =>
                <Fade up>
                    <LeaderRow key={shortid.generate()} className="flex flex-wrap  p-2 mb-2 mx-0">
                        <div style={{ fontSize: 'calc(12px + 0.35vw)' }} className="w-2/4 pr-4 pl-4 px-2">
                            <b>{index+1}.</b> {s.name}
                        </div>
                        <div className="w-1/4 text-center px-2">
                            {s.participants}
                        </div>
                        <div className="w-1/4 text-right px-2">
                            {s.points}
                        </div>
                    </LeaderRow>
                </Fade>
            )}
        </div>
        <div style={{ opacity: 0.8, fontSize: '11px' }} className="py-3 p-2">
            <li>InCTF Jr. is an individual event, and the points for schools are calculated by adding up scores of all students from the school</li>
            <li>Only Schools with minimum of 2 scoring participants are taken in consideration</li>
            <li>Students who incorrectly gave information of the school, or whose profile is not verified are not accounted for.</li>
        </div>
    </div> : <div />;

};

export default SchoolLeaderboard;