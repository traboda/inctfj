import React from 'react';
import styled from "@emotion/styled";

import Pulse from "react-reveal/Pulse";
import Fade from 'react-reveal/Fade';

const HeaderContainer = styled.section`
    padding: 1.5rem;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      font-weight: 700;
      line-height: 1.1;
    }
    p {
      max-width: 700px;
      font-size: 15px;
      line-height: 1.35;
      span {
        display: inline-block;
        font-size: 108%;
        color: #4A148C;
        margin-top: 5px;
      }
      margin-bottom: 1.5rem;
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
    .limited-slots-warning {
        color: #C51162;
        font-size: 13px;
    }
`;

const LandingHeader = () => {

    return <HeaderContainer>
        <div>
            <Pulse>
                <h1>
                    <span style={{ color: '#E65100'}}>Young Hackers Are Born Here,</span><br/>
                    Become the Next Cyber Security Warrior.
                </h1>
            </Pulse>
            <Fade up>
                <p>
                    Participate in the 5th edition of India's First & Premier Hacking & Cyber Security Contest for High School Students,
                    organized by team bi0s, India's No.1 ranked CTF Team.
                    <span>
                        Join the brightest young hackers in the learn & hack CTF contest,
                        win exciting prizes & kick-start your cyber-security career.
                    </span>
                </p>
            </Fade>
            <div>
                <a href="/register">REGISTER FOR InCTF Jr</a>
                <div className="limited-slots-warning">* limited slots left.</div>
            </div>
        </div>
    </HeaderContainer>;


};

export default LandingHeader;