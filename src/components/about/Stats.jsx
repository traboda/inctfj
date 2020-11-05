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
        { value: 4, title: "Successful Editions" },
        { value: 1000, suffix:"+", title: "Successful Editions" },
        { value: 8000, suffix:"+", title: "Participants" },
        { value: 100, suffix:"+", title: "Workshops Organized" },
    ]

    return <StatsSecion>
         <StatsContainer className="row py-5 text-center mx-0">
            {stats.map((s) =>
                <div className="col-6 col-md-3">
                    <Zoom mountOnEnter effect="fadeInUp">
                        <h2 className="text-primary mb-0 font-weight-bold">
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