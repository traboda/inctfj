import React from 'react';
import styled from "@emotion/styled";
import Zoom from "react-reveal/Zoom";
import CountUp from "react-countup";
import StateWiseRegistrationMap from "./map";
import AboutGender from "./gender";
import DailyGraph from "./daily";
import StatsCounter from "../../../components/landing/StatsCounter.jsx"

const StatsSection = styled.div`
  background: white;
  padding: 7.5vh 2vw;
  user-select: none;

  img {
    max-width: 100%;
  }
`;

const StatsContainer = styled.section`
  h2 {
    font-size: calc(1.5rem + 2.5vw);
    margin-bottom: 0;
    line-height: 1.2;
  }

  h4 {
    font-size: calc(1rem + 0.5vw);
  }

  .col-6 {
    margin-bottom: 1rem;
  }
`;

 
const INCTFStats = ({stats}) => {

    

    return (
        <StatsSection id="our-reach">
            <h2 className="text-center mb-8 text-3xl md:text-4xl lg:text-5xl">
                InCTF 21 is one of the world's largest CTF
            </h2>
            <StatsCounter/>
            {/* <div className="flex flex-wrap items-center">
                <div className="md:w-1/3 order-2 md:order-1 w-full">
                    <AboutGender data={stats}/>
                </div>
                <div className="md:w-1/3 w-full order-1 md:order-2 md:mt-0 mt-6">
                    <StateWiseRegistrationMap data={stats}/>
                </div>
            </div> */}
        </StatsSection>
    );

};

export default INCTFStats;