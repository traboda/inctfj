import React from 'react';
import styled from "@emotion/styled";

const StatsContainer = styled.section`
    h2 {
      font-size: calc(1.5rem + 2vw);
      margin-bottom: 0;
      line-height: 1;
    }
    h4 {
      font-size: calc(1rem + 0.5vw);
    }
    .col-6 {
      margin-bottom: 1rem;
    }
`;

const LandingStatsBar = () => {

    return <StatsContainer className="row py-5 text-center mx-0">
        <div className="col-6 col-md-3">
            <h2 className="text-primary font-weight-bold">4</h2>
            <h4>Successful Editions</h4>
        </div>
        <div className="col-6 col-md-3">
            <h2 className="text-primary font-weight-bold">1000+</h2>
            <h4>Schools Participated</h4>
        </div>
        <div className="col-6 col-md-3">
            <h2 className="text-primary font-weight-bold">8000+</h2>
            <h4>Participants</h4>
        </div>
        <div className="col-6 col-md-3">
            <h2 className="text-primary font-weight-bold">100+</h2>
            <h4>Workshops Organized</h4>
        </div>
    </StatsContainer>

};

export default LandingStatsBar;