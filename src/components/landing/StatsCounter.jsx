import React from 'react';
import styled from "@emotion/styled";
import CountUp from 'react-countup';
import Zoom from 'react-reveal/Zoom';


const StatsContainer = styled.section`
    .h2 {
      font-size: calc(1.5rem + 2vw);
      margin-bottom: 0;
      line-height: 1;
    }
    h4 { font-size: calc(1rem + 0.5vw); }
    .col-6 { margin-bottom: 1rem; }
`;

const LandingStatsBar = () => {

    const stats = [
        { value: 5, title: "Successful Editions" },
        { value: 1568, suffix:"+", title: "Participants in 2020" },
        { value: 8532, suffix:"+", title: "Total Participants" },
        { value: 323, suffix:"+", title: "Schools Participated" },
    ]

    return <StatsContainer className="flex flex-wrap py-8 text-center mx-0">
        {stats.map((s) =>
            <div className="w-1/2 md:w-1/4 pr-4 pl-4">
                <Zoom mountOnEnter effect="fadeInUp">
                    <div className="text-blue-600 h2 font-bold">
                        <CountUp delay={0.5} duration={4.5} end={s.value} />{s.suffix}
                    </div>
                    <div className="h5 mb-0">{s.title}</div>
                </Zoom>
            </div>
        )}
    </StatsContainer>

};

export default LandingStatsBar;