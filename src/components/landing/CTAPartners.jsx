import React from 'react';
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

const RegCTASection = styled.section`
   padding: 5vh 5vw;
   background: #A5F5FF;
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

const CTAPartners = () => {

    return <RegCTASection>
        <div className="row mx-0">
            <Fade left>
                <div className="col-md-9 d-flex align-items-center p-2">
                    {/*<img alt="star" className="d-none d-md-block mr-2" src={require('../../assets/images/icons/shooting_star.png')} />*/}
                    <h3 style={{ maxWidth: '800px' }}>
                        InCTF Jr is looking for school partners for our National Level Cyber Security Talent Hunt and
                        International Conference.
                    </h3>
                </div>
            </Fade>
            <Fade right>
                <div className="col-md-3 d-flex align-items-center justify-content-center p-2">
                    <a rel="nofollow noref" href="https://forms.gle/PvCLzE35ZFKEQ96D6">Register as School Partner</a>
                </div>
            </Fade>
        </div>
    </RegCTASection>;

};

export default CTAPartners;