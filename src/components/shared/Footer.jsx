import React from 'react';
import styled from "@emotion/styled";

const FooterContainer = styled.footer`
    background: #222;
    color: #AAA;
    padding: 1rem;
    font-size: 14px;
    img {
      max-height: 64px;
      max-width: 100%;
    }
    .social-bar {
        a {
           padding: 0 8px;
        }
        i {
          font-size: 36px;
          color: #AAA;
          &:hover {
            color: #fd7e14;
          }
        }
    }
`;

const FooterLinksBar = styled.nav`
    a {
       font-size: 13px;
       color: #999;
       margin-right: 8px;
       margin-bottom: 5px;
       &:hover {
         color: #fd7e14;
         text-decoration: none;
       }
    }
`;

const Footer = () => {

    return <FooterContainer>
        <div className="container min-w-lg mx-auto sm:px-4 px-1 pt-3">
            <div className="flex flex-wrap  mx-0">
                <div className="md:w-2/3 order-2 md:order-1 text-center md:text-left px-1">
                    <div className="md:flex items-center block">
                        <img draggable="false" className="inline mb-3" alt="Amrita InCTF Junior" src={require('../../assets/images/branding/light_version.png')} />
                        <div className="md:ml-6 py-3">
                            <div className="line-height-1 my-2 md:mb-1 md:mt-0">&copy; Amrita InCTF Jr. 2016-2021. <span className="inline-block">All Rights Reserved.</span></div>
                            <FooterLinksBar>
                                <a href="/branding">Brand Kit</a>
                                <a href="/privacy">Privacy Policy</a>
                                <a href="/rules">Rules</a>
                            </FooterLinksBar>
                        </div>
                    </div>
                </div>
                <div className="social-bar md:w-1/3 py-4 md:py-0 w-full order-1 md:order-2 flex items-center md:justify-end justify-center px-1">
                    <div className="flex items-center md:justify-end justify-center md:mb-0 mb-2 p-2">
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
            </div>
        </div>
    </FooterContainer>

};

export default Footer;