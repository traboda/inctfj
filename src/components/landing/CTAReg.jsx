import React from 'react';
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

const RegCTASection = styled.section`
   @media (min-width: 768px){
     padding: 3vh 5vw;
   }
   h3 {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 0;
   }
   a {
       display: inline-block;
       width: 100%;
       text-align: center;
       max-width: 400px;
       margin-bottom: 0.5rem;
       background: #E65100;
       color: white;
       font-weight: 600;
       padding: 0.8rem 1.2rem;
       text-decoration: none!important;
       border-radius: 8px;
       box-shadow: 2px 6px 12px rgba(0,0,0,0.3);
   }
`

const CTAReg = ({ UTMSource = null }) => (
    <RegCTASection className="container mx-auto">
        {/* <div className="flex flex-wrap  mx-0">
            <Fade left>
                <div className="md:w-2/3 pr-4 pl-4 flex items-center p-2">
                    <img alt="star" className="hidden md:block mr-2" src={require('../../assets/images/icons/shooting_star.png')} />
                    <h3>
                        InCTF is your perfect entry to CyberSec & Hacking.
                    </h3>
                </div>
            </Fade>
            <Fade right>
                <div className="md:w-1/3 px-0 md:px-2 flex items-center justify-center w-full">
                    <iframe
                        className="border-0"
                        style={{ width: '400px', maxWidth: '100vw', height: '190px', overflow: 'auto' }}
                        src={`https://app.traboda.com/contest/inctf-21-lr/reg-frame?primary=F13F17&amp;primary_text=fff${UTMSource ? `&utm_source=${UTMSource}` : ''}`}
                    />
                </div>
            </Fade>
        </div> */}
    </RegCTASection>
);

export default CTAReg;