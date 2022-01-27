import React, { useState } from 'react';
import styled from "@emotion/styled";
import shortid from "shortid";

import Fade from "react-reveal/Fade";
import Leaderboard from './leaderboard';

const ChampionCard = styled.div`
   border-radius: 0.75rem;
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
      color: #55575a;
      line-height: 1.2;
      margin-bottom: 3px;
   }
   .members-name{
    color: #fd7e14;
    line-height: 1.2;
    margin-bottom: 3px;
   }
   font-size: 13px;
`

const GridHeight = styled.div`
& > div > div.react-reveal {
  height: 100% !important;
}
`;

const YearlyLeaderboard = ({ year, leaderboard, proLeaderboard, schools, champions, womenHackers,experienced, professionals }) => {

    return <div>
    {champions?.length > 0 &&
    <div className="py-3">
        <div className="py-2">
            <h3 style={{ color: '#fd7e14' }} className="mb-1 font-semibold">Top Beginner level Champions</h3>
            <p style={{ opacity: 0.8 }} className="mb-3">
               The InCTF Beginner level {year} champions
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{champions.map((c, index) =>
            <div className="p-4 bg-white rounded-lg border" key={shortid.generate()}>
                <Fade up delay={index*250}>
                    <ChampionCard>
                        <div className="flex flex-wrap h-full w-full">
                            <div
                                style={{
                                    borderRadius: '0.75rem',
                                    background: `url(${c.avatar})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                                className="w-1/3 lg:w-1/4 pr-4 pl-4 px-2 md:px-0"
                            />
                            <div className="w-2/3 lg:w-3/4 pr-4 pl-4 flex items-center p-2 md:p-4">
                                <div>
                                    <div className="h6 uppercase mb-1">{c.title}</div>
                                    <h5 className="font-bold">{c.name}</h5>
                                    <div className="school-name">{c.school}</div>
                                    <div className="members-name">{c.members}</div>
                                    <div>{c.place}</div>
                                </div>
                            </div>
                        </div>
                    </ChampionCard>
                </Fade>
            </div>
        )}</div>
    </div>}
    {experienced?.length > 0 &&
    <div className="py-3">
        <div className="py-2">
            <h3 style={{ color: '#fd7e14' }} className="mb-1 font-semibold">Top Experienced Hacker</h3>
            <p style={{ opacity: 0.8 }} className="mb-3">
                The top Experienced Hacker of InCTF {year}
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">{experienced.map((c, index) =>
            <div className="p-4 bg-white rounded-lg border" key={shortid.generate()}>
                <Fade up delay={index*250}>
                <ChampionCard>
                        <div className="flex flex-wrap h-full w-full">
                            <div
                                style={{
                                    borderRadius: '0.75rem',
                                    background: `url(${c.avatar})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                                className="w-1/3 lg:w-1/4 pr-4 pl-4 px-2 md:px-0"
                            />
                            <div className="w-2/3 lg:w-3/4 pr-4 pl-4 flex items-center p-2 md:p-4">
                                <div>
                                    <div className="h6 uppercase mb-1">{c.title}</div>
                                    <h5 className="font-bold">{c.name}</h5>
                                    <div className="school-name">{c.school}</div>
                                    <div className="members-name">{c.members}</div>
                                    <div>{c.place}</div>
                                </div>
                            </div>
                        </div>
                    </ChampionCard>
                </Fade>
            </div>
        )}</div>
    </div>}
    {womenHackers?.length > 0 &&
    <div className="py-3">
        <div className="py-2">
            <h3 style={{ color: '#fd7e14' }} className="mb-1 font-semibold">Top Women Hacker</h3>
            <p style={{ opacity: 0.8 }} className="mb-3">
                The top Women Hacker of InCTF {year}
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">{womenHackers.map((c, index) =>
            <div className="p-4 bg-white rounded-lg border" key={shortid.generate()}>
                <Fade up delay={index*250}>
                <ChampionCard>
                        <div className="flex flex-wrap h-full w-full">
                            <div
                                style={{
                                    borderRadius: '0.75rem',
                                    background: `url(${c.avatar})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                                className="w-1/3 lg:w-1/4 pr-4 pl-4 px-2 md:px-0"
                            />
                            <div className="w-2/3 lg:w-3/4 pr-4 pl-4 flex items-center p-2 md:p-4">
                                <div>
                                    <div className="h6 uppercase mb-1">{c.title}</div>
                                    <h5 className="font-bold">{c.name}</h5>
                                    <div className="school-name">{c.school}</div>
                                    <div className="members-name">{c.members}</div>
                                    <div>{c.place}</div>
                                </div>
                            </div>
                        </div>
                    </ChampionCard>
                </Fade>
            </div>
        )}</div>
    </div>}
    {/*  */}
    {professionals?.length > 0 &&
    <div className="py-3">
        <div className="py-2">
            <h3 style={{ color: '#fd7e14' }} className="mb-1 font-semibold">Top Professional Hacker</h3>
            <p style={{ opacity: 0.8 }} className="mb-3">
                The top Professional Hacker of InCTF {year}
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">{professionals.map((c, index) =>
            <div className="p-4 bg-white rounded-lg border" key={shortid.generate()}>
                <Fade up delay={index*250}>
                <ChampionCard>
                        <div className="flex flex-wrap h-full w-full">
                            <div
                                style={{
                                    borderRadius: '0.75rem',
                                    background: `url(${c.avatar})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                                className="w-1/3 lg:w-1/4 pr-4 pl-4 px-2 md:px-0"
                            />
                            <div className="w-2/3 lg:w-3/4 pr-4 pl-4 flex items-center p-2 md:p-4">
                                <div>
                                    <div className="h6 uppercase mb-1">{c.title}</div>
                                    <h5 className="font-bold">{c.name}</h5>
                                    <div className="school-name">{c.school}</div>
                                    <div className="members-name">{c.members}</div>
                                    <div>{c.place}</div>
                                </div>
                            </div>
                        </div>
                    </ChampionCard>
                </Fade>
            </div>
        )}</div>
    </div>}
    {/*  */}
    
    {/*<SchoolLeaderboard schools={schools} />*/}
    <Leaderboard
        leaderboard={proLeaderboard}
        enableQuotaFilter={false}
        enableStateFilter={false}
        labels={{
            title: 'Teams Qualified for InCTF Professionals Finals',
            description: 'Top participants from the qualifiers round who are selected for the Finals of InCTF Professionals.'
        }}
    />
    <Leaderboard
        leaderboard={leaderboard}
        labels={{
            title: 'Teams Qualified for InCTF Nationals Finals',
            description: 'Top participants from the qualifiers round who are selected for the National Finals of InCTF.'
        }}
    />
    </div>;
};

export default YearlyLeaderboard;