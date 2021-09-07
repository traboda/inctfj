import React, {useState} from 'react';
import styled from "@emotion/styled";
// import dynamic from 'next/dynamic'

import Pulse from "react-reveal/Pulse";
import Fade from 'react-reveal/Fade';
// import {clearAllBodyScrollLocks} from "body-scroll-lock";
// import Modal from "react-modal";

// const ReactPlayer = dynamic(() => import('react-player/youtube'));


const HeaderContainer = styled.section`
    position: relative;
    background: #101219;
    .header-container {
        min-height: 80vh;
        width: 100%;
        background: rgba(0,0,0,0.5);
        color: white;
        display: flex;
        align-items: center;
    }
    img {
        bottom: 0;
        left: 0;
        position: absolute;
        max-height: 80vh;
    }
    h1 {
      font-weight: 700;
      line-height: 1.1;
      font-size: calc(1.8rem + 1.5vw);
      text-shadow: 2px 3px 6px rgba(0, 0, 0, 0.3);
      margin-bottom: 1rem;
    }
    p {
      max-width: 700px;
      font-size: 15px;
      line-height: 1.35;
      span {
        display: inline-block;
        font-size: 108%;
        color: #FFD600;
        margin-top: 5px;
      }
      margin-bottom: 1.5rem;
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
        max-height: 50px;
    }
`;

// const CloseButton = styled.button`
//    background: none!important; top: 1rem; right: 1rem; position: absolute; padding: 0!important;
//    img { width: 32px; }
// `;

// const HowToRegister = styled.a`
//     position: relative;
//     cursor: pointer;
//     display: block;
//     border: 3px solid rgba(100,250,100,0.6);
//     border-radius: 8px;
//     img {
//       position: unset!important;
//       height: 90px;
//       overflow: hidden;
//       border-radius: 8px;
//     }
//     .how_to_register_cover {
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         position: absolute;
//         left: 0;
//         right: 0;
//         width: 100%;
//         height: 90px;
//         overflow: hidden;
//         background: rgba(0,0,0,0.65);
//         img {
//             max-height: 30px;
//             box-shadow: none;
//         }
//         div {
//           color: white;
//           line-height: 1;
//         }
//     }
//     &:hover {
//         .how_to_register_cover {
//           background: rgba(50,150,50,0.75);
//         }
//     }
// `;

const IFrameContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 25vh;
  height: 100%;
  max-height: 80vh;
  overflow: auto;
  width: 100%;
`;

const Iframe = styled('iframe')`
  min-height: 600px;
  width: 450px;
  max-width: 100%;
  border: none;
  max-height: 100%;
  html {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
  }
`;

const LandingBetaHeader = ({ UTMSource = null }) => {

    // const [showPlayer, setShowPlayer] = useState(false);

    const [iframeError, setIframeError] = useState(false);

    return <HeaderContainer>
        <div className="header-container">
            <div style={{ width: '100%' }}>
                <div className="row mx-0">
                    <div className="col-md-8 col-lg-7 d-flex align-items-center justify-content-center pl-4 py-5 mt-3 mt-md-0 p-md-5">
                        <div>
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
                                    <span>
                                    Every year the brightest young hackers from all across India participate in this the learn & hack CTF contest,
                                    win exciting prizes & kick-start their cyber-security career.
                                </span>
                                </p>
                            </Fade>
                            <div className="d-none d-md-block">
                                <div className="d-flex mt-3 align-items-center">
                                    {/*<div className="mr-4">*/}
                                    {/*    <HowToRegister onClick={() => setShowPlayer(true)}>*/}
                                    {/*        <div className="how_to_register_cover">*/}
                                    {/*            <div className="text-center">*/}
                                    {/*                <div>How to Register?</div>*/}
                                    {/*                <img*/}
                                    {/*                    alt="Play Video"*/}
                                    {/*                    draggable="false"*/}
                                    {/*                    src={require('../../assets/images/icons/play_button.png')}*/}
                                    {/*                />*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*        <img*/}
                                    {/*            alt="how to Register"*/}
                                    {/*            draggable="false"*/}
                                    {/*            src={require('../../assets/images/covers/how_to_register.JPG')}*/}
                                    {/*        />*/}
                                    {/*    </HowToRegister>*/}
                                    {/*</div>*/}
                                    <PoweredByTraboda>
                                        <div>Powered by</div>
                                        <a href="https://app.traboda.com">
                                            <img src={require('../../assets/images/logos/traboda_light.png')} alt="traboda" draggable="false" />
                                        </a>
                                    </PoweredByTraboda>
                                </div>
                            </div>
                        </div>

                        {/*<Modal*/}
                        {/*    isOpen={showPlayer}*/}
                        {/*    onRequestClose={() => { clearAllBodyScrollLocks(); setShowPlayer(false); }}*/}
                        {/*    style={{*/}
                        {/*        overlay: {*/}
                        {/*            zIndex: 9000, background: 'rgba(0,0,0,0.8)',*/}
                        {/*            height: '100vh',*/}
                        {/*            display: 'flex', alignItems: 'center', justifyContent: 'center',*/}
                        {/*        },*/}
                        {/*        content: {*/}
                        {/*            position: 'unset', top: 0, left: 0, right: 0, padding: '15px',*/}
                        {/*            border: 'none', background: 'none',  width: '100%', maxWidth: '800px'*/}
                        {/*        }*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    <CloseButton*/}
                        {/*        className="px-4 border-0 rounded"*/}
                        {/*        onClick={() => { clearAllBodyScrollLocks(); setShowPlayer(false)}}*/}
                        {/*    >*/}
                        {/*        <img alt="close" src={require('../../assets/images/icons/close.png')} />*/}
                        {/*    </CloseButton>*/}
                        {/*    {showPlayer && <ReactPlayer url="https://youtu.be/4gw5uDIH0rM" autoplay width="100%" height="80vmin" />}*/}
                        {/*</Modal>*/}

                    </div>
                    <div className="col-md-4 col-lg-5 p-1 d-flex align-items-center justify-content-center p-md-3">
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
                                src={`https://app.traboda.com/contest/inctfj-21-lr/reg-frame${UTMSource ? `?utm_source=${UTMSource}` : ''}`}
                            />
                        </IFrameContainer>}
                    </div>
                </div>
                <div className="d-block d-md-none">
                    <div className="d-flex p-3 my-3 align-items-center">
                        {/*<div className="mr-4">*/}
                        {/*    <HowToRegister onClick={() => setShowPlayer(true)}>*/}
                        {/*        <div className="how_to_register_cover">*/}
                        {/*            <div className="text-center">*/}
                        {/*                <div>How to Register?</div>*/}
                        {/*                <img*/}
                        {/*                    alt="Play Video"*/}
                        {/*                    draggable="false"*/}
                        {/*                    src={require('../../assets/images/icons/play_button.png')}*/}
                        {/*                />*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <img*/}
                        {/*            alt="how to Register"*/}
                        {/*            draggable="false"*/}
                        {/*            src={require('../../assets/images/covers/how_to_register.JPG')}*/}
                        {/*        />*/}
                        {/*    </HowToRegister>*/}
                        {/*</div>*/}
                        <PoweredByTraboda>
                            <div>Powered by</div>
                            <a href="https://app.traboda.com">
                                <img src={require('../../assets/images/logos/traboda_light.png')} alt="traboda" draggable="false" />
                            </a>
                        </PoweredByTraboda>
                    </div>
                </div>
            </div>
        </div>
    </HeaderContainer>;


};

export default LandingBetaHeader;