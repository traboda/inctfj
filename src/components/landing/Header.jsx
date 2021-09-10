import React, {useState} from 'react';
import styled from "@emotion/styled";

import Pulse from "react-reveal/Pulse";
import Fade from 'react-reveal/Fade';


const HeaderContainer = styled.section`
    position: relative;
    background-position: center;
    background-size: cover;
    background-image: ${() => `url(${require('../../assets/images/backgrounds/ctf_player_1.jpg')})`};
    .header-container {
        padding: 1.5rem;
        padding-top: 15vh;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        background: rgba(0,0,0,0.5);
        color: white;
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
      max-width: 900px;
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

const IFrameContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-height: 80vh;
  overflow: auto;
`;

const Iframe = styled('iframe')`
  height: 180px;
  width: 450px;
  max-width: 100%;
  border: none;
  max-height: 100%;
`;


const LandingHeader = ({ UTMSource = null }) => {

    const [iframeError, setIframeError] = useState(false);

    return <HeaderContainer>
        <div className="header-container">
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
                <div className="d-flex align-items-center">
                    <div>
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
                                src={`https://app.traboda.com/contest/inctfj-21-lr/reg-frame?color=fff&primary=F13F17&primary_text=fff${UTMSource ? `&utm_source=${UTMSource}` : ''}`}
                            />
                        </IFrameContainer>}
                        <PoweredByTraboda>
                            <div>Powered by</div>
                            <a href="https://app.traboda.com" target="_blank">
                                <img src={require('../../assets/images/logos/traboda_light.png')} alt="traboda" draggable="false" />
                            </a>
                        </PoweredByTraboda>
                    </div>
                </div>
            </div>
        </div>
    </HeaderContainer>;


};

export default LandingHeader;