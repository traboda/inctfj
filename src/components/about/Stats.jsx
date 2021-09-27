import React from 'react';
import styled from "@emotion/styled";
import Zoom from "react-reveal/Zoom";
import CountUp from "react-countup";


const StatsSecion = styled.div`
    user-select: none;
    img {
        max-width: 100%;
    }
`;

const StatsContainer = styled.section`
    h2 {
      font-size: calc(1.5rem + 2vw);
      margin-bottom: 0;
      line-height: 1;
    }
    h4 { font-size: calc(1rem + 0.5vw); }
    .col-6 { margin-bottom: 1rem; }
`;


const INCTFJStats = () => {

    const stats = [
        { value: 5, title: "Successful Editions" },
        { value: 1568, suffix:"+", title: "Participants in 2020" },
        { value: 5810, suffix:"+", title: "Total Participants" },
        { value: 323, suffix:"+", title: "Schools Participated" },
    ]

    return <StatsSecion>
         <StatsContainer className="flex flex-wrap  py-5 text-center mx-0">
            {stats.map((s) =>
                <div className="w-1/2 md:w-1/4 pr-4 pl-4">
                    <Zoom mountOnEnter effect="fadeInUp">
                        <h2 className="text-blue-600 mb-0 font-bold">
                            <CountUp delay={0.5} duration={4.5} end={s.value} />{s.suffix}
                        </h2>
                        <h4 className="mb-0">{s.title}</h4>
                    </Zoom>
                </div>
            )}
        </StatsContainer>
        <div className="text-center">
            <img src={require('../../assets/images/photos/standing_as_inctf.jpg')} />
        </div>
    </StatsSecion>;

};

export default INCTFJStats;