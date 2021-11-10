import React, {useEffect, useState} from 'react';
import styled from "@emotion/styled";
import CountUp from 'react-countup';
import Zoom from 'react-reveal/Zoom';


const StatsContainer = styled.section`
    padding: 2.5vh 0;
    .h2 {
      font-size: calc(1.5rem + 2vw);
      margin-bottom: 0;
      line-height: 1;
    }
    h4 { font-size: calc(1rem + 0.5vw); }
    .col-6 { margin-bottom: 1rem; }
`;

const LandingStatsBar = () => {

    const [stats, setStats] = useState();

    const fetchStats = () => {
        try {
            fetch('https://app.traboda.com/api/contest/stats/69').then(async (response) => {
                if(response.ok && response.status == 200)
                    return await response.json();
                else
                    return null;
            }).then((data) => {
                setStats(data);
            }).catch((e) => {

            })
        } catch (e) {

        }
    };

    useEffect(fetchStats, []);

    const statsPreviewer = () => [
        { value: stats?.registrations || 0, title: "Total Participants" },
        { value: stats?.regToday || 0, title: "Registrations Today" },
        { value: stats?.totalInstitutions || 0, title: "Colleges Participating" },
    ]

    return <StatsContainer className="container mx-auto flex flex-wrap text-center">
        {statsPreviewer().map((s) =>
            <div className="w-1/2 md:w-1/3 p-4">
                <Zoom mountOnEnter effect="fadeInUp">
                    <div className="text-blue-600 h2 mb-2 font-bold">
                        <CountUp delay={0.5} duration={4.5} end={s.value} />{s.suffix}
                    </div>
                    <div className="h5 mb-0">{s.title}</div>
                </Zoom>
            </div>
        )}
    </StatsContainer>

};

export default LandingStatsBar;