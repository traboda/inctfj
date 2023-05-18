import React from 'react';
import styled from "@emotion/styled";
import { Zoom } from 'react-awesome-reveal';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

const AboutInCTFSection = styled.section`
    img {
      max-width: 100%;
      padding: 0.5rem;
      border-radius: 8px;
      box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.3);
    }
    h2 {
        font-weight: 700;
        line-height: 1.2;
        font-size: calc(1.25rem + 1.2vw);
        margin-bottom: 1.75rem;
        span {
          color: #E65100;
        }
    }
    p {
        font-size: calc(1.1rem + 0.2vw);
        margin-bottom: 1.5rem;
        max-width: 90%;
    }
    a {
       display: inline-block;
       text-align: center;
       margin-bottom: 0.5rem;
       margin-right: 0.5rem;
       background: #E65100;
       color: white;
       font-weight: 600;
       padding: 0.5rem 1.2rem;
       text-decoration: none!important;
       border-radius: 8px;
       box-shadow: 2px 6px 8px rgba(0,0,0,0.3);
    }
   .features-list {
      img {
         max-height: 180px;
         width: 90px;
         max-width: 100%;
         box-shadow: none!important;
         padding: 0;
        margin-bottom: 0.5rem;
      }
   }
`;

const HighlightFeature = styled('div')`
    margin-bottom: -5.5rem;
    line-height: 1.3;
    font-size: calc(1.2rem + 0.15vw);
    span {
        display: inline-block;
    }
`;

const LandingAboutInCTF = () => (
    <AboutInCTFSection className="container mx-auto py-16 px-4">
        <Zoom direction="up">
            <div className="md:hidden flex justify-center mb-6">
                <div className="rounded-lg p-2 bg-blue-100">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full md:w-4/5">
                            Have you got stuck? Need Help? <wbr />
                            <span className="inline-block">
                                Join our discord server, ask your doubts & get support from our experts.
                            </span>
                        </div>
                        <div className="md:w-1/5 flex items-center md:my-0 my-3 md:px-0 justify-end">
                            <a href="/discord" className="bg-blue-800 mb-0 py-3">
                                Join Discord Now <i className="fa fa-chevron-right ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mx-0">
                <div className="md:w-2/3">
                    <h2 className="mt-2">
                        {data.LandingAboutInCTF[0]}& <wbr />
                        <span>{data.LandingAboutInCTF[1]}</span> <wbr />
                        {data.LandingAboutInCTF[2]}
                    </h2>
                    <p>
                        {data.LandingDescINCTF.map((item, index) => (
                            <span key={index}>
                                {item}
                                <br />
                                <br />
                            </span>
                        ))}
                    </p>
                </div>
                <div className="md:w-1/3 flex justify-end items-center">
                    <div>
                        <HighlightFeature>
                            {data.LandingHighlights.map((item, index) => (
                                <span key={index}>
                                    {item}
                                    <br />
                                    <br />
                                </span>
                            ))}
                        </HighlightFeature>
                    </div>
                </div>
            </div>
        </Zoom>
    </AboutInCTFSection>
);

export default LandingAboutInCTF;