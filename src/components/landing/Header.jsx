import React, {useState} from 'react';
import styled from "@emotion/styled";

import Pulse from "react-reveal/Pulse";
import Fade from 'react-reveal/Fade';


const HeaderContainer = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .header-container {
        padding: 3.5vh 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        color: black;
    }
    #landing-header-cover-image {
        bottom: 0;
        left: 0;
        position: absolute;
        max-height: 80vh;
    }
    h1 {
      font-weight: 700;
      line-height: 1.25;
      font-size: calc(1.75rem + 1.25vw);
      margin-bottom: 1rem;
      max-width: 900px;
    }
    p {
      max-width: 700px;
      font-size: 18px;
      line-height: 1.5;
      span {
        display: inline-block;
        font-size: 108%;
        color: #F13F17;
      }
      margin-bottom: 1.25rem;
    }
    #header-register-button {
       display: inline-block;
       width: 100%;
       text-align: center;
       max-width: 300px;
       background: #F13F17;
       color: white;
       font-weight: 600;
       padding: 0.75rem 1rem;
       text-decoration: none!important;
       border-radius: 8px;
       box-shadow: 2px 6px 12px rgba(0,0,0,0.3);
       &:hover {
          background: white;
          color: #F13F17;
       }
    }
    .limited-slots-warning {
        color: #FF9100;
        font-size: 13px;
    }
`;

const PoweredByTraboda = styled('div')`
    font-size: 13px;
    div {
        opacity: 0.8;
        margin-bottom: 0.5rem;
    }
    img {
        position: inherit;
        display: block;
        max-height: 45px;
    }
`;

const IFrameContainer = styled('div')`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100%;
  max-height: 80vh;
  overflow: auto;
`;

const Iframe = styled('iframe')`
  height: 200px;
  width: 450px;
  max-width: 100%;
  border: none;
  max-height: 100%;
`;

const HowToRegister = styled.a`
    position: relative;
    cursor: pointer;
    display: block;
    overflow: hidden;
    font-size: 1.35rem;
    font-family: 'Inter', sans-serif;
    border-radius: 1.35rem;
    width: 100%;
    img {
      position: unset!important;
      overflow: hidden;
      border-radius: 8px;
      max-width: 100%;
    }
    .how_to_register_cover {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: rgba(0,0,0,0.65);
        border-radius: 1.35rem;
        img {
            max-height: 72px;
            box-shadow: none;
        }
        div {
          color: white;
          line-height: 1;
        }
    }
    &:hover {
        .how_to_register_cover {
          background: rgba(50,150,50,0.75);
          border-radius: 1.35rem;
        }
    }
`;

const LandingHeader = ({ UTMSource = null }) => {

    const [iframeError, setIframeError] = useState(false);

    return (
        <React.Fragment>
            <HeaderContainer>
                <div className="container header-container">
                    <div className="w-full">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-2/3 px-4">
                                <Pulse>
                                    <h1>
                                        <span style={{ color: '#FF6F00'}}>Young Hackers Are Born Here,</span><br/>
                                        Become the Next Cyber Security Warrior.
                                    </h1>
                                </Pulse>
                                <Fade up>
                                    <p>
                                        InCTF Junior is India's First & Premier Hacking & Cyber Security Contest for High School Students,
                                        organized by team bi0s, India's No.1 ranked CTF Team.
                                        <span className="mt-6">
                                            Every year the brightest young hackers from all across India participate in this the learn & hack CTF contest,
                                            win exciting prizes & kick-start their cyber-security career.
                                        </span>
                                    </p>
                                </Fade>
                                <div className="mt-4 md:px-2">
                                    <div className="text-3xl mb-2 font-semibold text-primary">
                                        InCTF Jr Qualifiers 2021
                                    </div>
                                    <div className="text-3xl font-semibold">6PM, 28th Dec to 6PM, 30th Dec (48 Hrs.)</div>
                                    <a
                                        href="https://app.traboda.com/contest/inctf-jr-21-quals/"
                                        className="text-2xl px-5 py-4 inline-block font-semibold rounded-lg bg-primary text-white hover:bg-blue-800 shadow hover:shadow-xl my-3"
                                    >
                                        Play Qualifiers <i className="fa fa-chevron-right"/>
                                    </a>
                                    <div style={{ width: '450px', maxWidth: '100%' }} className="text-sm">
                                        No separate registration required  those already registered for learning round.
                                        New participants can register. Registrations close shortly.
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/3 my-4 md:my-0 px-3">
                                <img
                                    alt="InCTF Jr"
                                    id="landing-header-cover-image"
                                    src={require('../../assets/images/covers/landing-cover-image.png')}
                                    style={{ position: 'unset', maxHeight: '500px', maxWidth: '100%' }}
                                    draggable="false"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </HeaderContainer>
        </React.Fragment>
    );


};

export default LandingHeader;