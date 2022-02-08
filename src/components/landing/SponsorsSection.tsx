import React from 'react';
import Fade from "react-reveal/Fade";
import styled from "@emotion/styled";


const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/sponsors`).default;

const Wrapper = styled.div`
  .past-sponsors {
    img {
      height: 64px!important;
      filter: saturate(0) contrast(50%);
      &:hover {
        filter: none!important;
      }
    }
  }
  .inctfj-sponsors {
    img {
      height: 90px!important;
    }
  }
  img {
    display: inline;
    max-height: 90px;
    width: auto;
    max-width: 100%;
  }
`;




const SponsorsSection = () => {
    return (
        <Wrapper>
            {data.map((sponsor, index) => {
                return (
                    <div className="flex flex-wrap">
                <div className="inctfj-sponsors text-red-500 w-full p-0 mt-3 mb-3 opacity-80 text-lg text-center">{sponsor.label}</div>
                <div className="w-full flex justify-center">
                    <p className="text-center opacity-8 mb-3" style={{ maxWidth: '100%', fontSize: '95%', lineHeight: 1.4, width: '450px' }}>
                        {sponsor.desc}
                    </p>
                </div> 
                {sponsor.sponsors.map((sponsor, index) => {
                    return (
                        <div className="flex flex-wrap">
                            <div className="w-full flex justify-center">
                                <Fade bottom>
                                    <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                                        <img src={require(`../../data/inctf/${sponsor.path}`)} draggable="false" alt="Sponsor Logo"  />
                                        {sponsor?.desg && (<div className="text-sm mt-3 font-light">{sponsor.desg}</div>)}
                                    </a>
                                </Fade>
                            </div>
                        </div>
                    )
                })}
            </div>
                )
            })}  
        </Wrapper>
    );
};
export default SponsorsSection;