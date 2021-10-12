import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';


const ContactsBarSection = styled.section`
    padding: 5vh 3vw;
    background: #222640;
    color: white;
    img {
      max-height: 64px;
      margin-right: 8px;
    }
    a {
      font-size: 16px;
      &:hover {
         color: #fd7e14!important;
      }
    }
    .social-bar {
        a {
          font-size: 32px;
          color: #AAA;
          margin-right: 12px;
          &:hover {
            color: #fd7e14;
          }
        };
    }
`;

const FooterLinksBar = styled.nav`
    a {
       font-size: 14px;
       color: #AAA;
       margin: 8px 5px;
       &:hover {
         color: #fd7e14;
         text-decoration: none;
       }
    }
`;

const PoweredByTraboda = styled('div')`
    font-size: 16px;
    div {
        opacity: 0.8;
        margin-bottom: 0.5rem;
    }
    img {
        position: inherit;
        display: block;
        max-height: 64px;
    }
`;

const LandingContactsBar = () => {

    return <ContactsBarSection>
        <div className="flex flex-wrap">
            <div className="w-full flex justify-center flex-wrap">
                <Fade left>
                    <div className="md:w-1/4 p-2 mb-4 flex items-center justify-center text-center">
                        <PoweredByTraboda>
                            <div>In Association with the CBSE</div>
                            <a href="https://cbseacademic.nic.in/web_material/Circulars/2021/93_Circular_2021.pdf">
                                <img
                                    src={require('../../assets/images/logos/cbse_logo.png')}
                                    alt="CBSE" draggable="false"
                                />
                            </a>
                        </PoweredByTraboda>
                    </div>
                </Fade>
                <Fade right>
                    <div className="md:w-1/4 p-2 mb-4 flex items-center justify-center text-center">
                        <PoweredByTraboda>
                            <div>Powered By Traboda</div>
                            <a href="https://app.traboda.com">
                                <img
                                    src={require('../../assets/images/logos/traboda_light.png')}
                                    alt="Traboda" draggable="false"
                                />
                            </a>
                        </PoweredByTraboda>
                    </div>
                </Fade>
            </div>
            <div className="md:w-2/3 w-full text-center md:text-left h-full flex items-center pt-4 px-2">
                <div className="w-full">
                    <div>&copy; Amrita InCTF 2016-2021. All Rights Reserved.</div>
                    <FooterLinksBar className="mt-4 md:mt-0">
                        <a href="/branding">Brand Kit</a>
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/rules">Rules</a>
                    </FooterLinksBar>
                </div>
            </div>
            <div className="social-bar md:w-1/3 w-full flex items-center md:justify-end justify-center pt-4 px-2">
                <a target="_blank" rel="noopener noreferrer" href="mailto:inctfj@am.amrita.edu">
                    <i className="fas fa-envelope" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/juniorinctf/">
                    <i className="fab fa-instagram" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/InCTFj">
                    <i className="fab fa-twitter" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/InCTFj/">
                    <i className="fab fa-facebook" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/InCTFj">
                    <i className="fab fa-youtube" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/QVXewGh7sP">
                    <i className="fab fa-discord" />
                </a>
            </div>
        </div>
    </ContactsBarSection>

};

export default LandingContactsBar;
