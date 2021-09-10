import React from 'react';
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

const RegCTASection = styled.section`
   padding: 3vh 5vw;
   background: #FFF59D;
   h3 {
      font-size: 24px;
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
    <RegCTASection>
        <div className="row mx-0">
            <Fade left>
                <div className="col-md-8 d-flex align-items-center p-2">
                    <img alt="star" className="d-none d-md-block mr-2" src={require('../../assets/images/icons/shooting_star.png')} />
                    <h3>
                        InCTF Jr is your perfect entry to CyberSec & Hacking before college.
                    </h3>
                </div>
            </Fade>
            <Fade right>
                <div className="col-md-4 d-flex p-0 align-items-center justify-content-center">
                    <iframe
                        className="border-0"
                        style={{ width: '400px', maxWidth: '100vw', height: '170px', overflow: 'auto' }}
                        src={`https://app.traboda.com/contest/inctfj-21-lr/reg-frame?color=000&primary=F13F17&primary_text=fff${UTMSource ? `&utm_source=${UTMSource}` : ''}`}
                    />
                </div>
            </Fade>
        </div>
    </RegCTASection>
);

export default CTAReg;