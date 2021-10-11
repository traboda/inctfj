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
        padding-top: 7.5vh;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        color: black;
    }
    img {
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

    return <HeaderContainer>
        <div className="container header-container" style={{ width: '1200px', maxWidth: '100%' }}>
            <div>
                <div className="flex flex-wrap  mx-0">
                    <div className="md:w-2/3 px-3">
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
                    </div>
                    <div className="md:w-1/3 my-4 md:my-0 px-3">
                        <img
                            src={require('../../assets/images/covers/landing-cover-image.png')}
                            style={{ position: 'unset', maxHeight: '500px', maxWidth: '100%' }}
                            draggable="false"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap  mx-0">
                    <div className="w-full p-2">
                        <div className="mb-6">
                            <div className="md:text-left text-center mb-3 font-semibold">In Association With</div>
                            <a target="_blank" href="https://cbseacademic.nic.in/web_material/Circulars/2021/93_Circular_2021.pdf">
                                <img
                                    alt="cbse"
                                    src={require('../../assets/images/logos/cbse_logo.png')}
                                    style={{ position: 'unset', maxHeight: '90px', maxWidth: '100%' }}
                                    draggable="false"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/3 pr-4 pl-4 w-full py-5 md:py-0 px-2">
                        <HowToRegister onClick={() => window.open('https://youtu.be/twS3pzPjRzA', '_blank')}>
                            <div className="how_to_register_cover">
                                <div className="text-center">
                                    <div>How to Get Started?</div>
                                    <img
                                        alt="Play Video"
                                        draggable="false" className="inline-block"
                                        src={require('../../assets/images/icons/play_button.png')}
                                    />
                                </div>
                            </div>
                            <img
                                alt="how to Register"
                                draggable="false"
                                src={require('../../assets/images/covers/how_to_register.JPG')}
                            />
                        </HowToRegister>
                    </div>
                    <div className="md:w-2/3 w-full md:px-2 px-0 py-4">
                        {iframeError ?
                            <div>
                                <p>
                                    Your browser had some issues loading the registration form. So kindly use the links below.
                                </p>
                                <a id="header-register-button" className="mr-2" href="https://traboda.com/contest/inctfj-21-lr">
                                    Register for Learning Round
                                </a>
                                <a id="header-register-button" href="https://traboda.com/contest/inctfj-21-lr">
                                    Login to Dashboard
                                </a>
                            </div> :
                            <IFrameContainer>
                                <Iframe
                                    onError={() => setIframeError(true)}
                                    src={`https://app.traboda.com/contest/inctfj-21-lr/reg-frame?color=000&primary=F13F17&primary_text=fff${UTMSource ? `&utm_source=${UTMSource}` : ''}`}
                                />
                            </IFrameContainer>}
                    </div>
                </div>
            </div>
        </div>
    </HeaderContainer>;


};

export default LandingHeader;