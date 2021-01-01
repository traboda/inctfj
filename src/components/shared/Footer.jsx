import React from 'react';
import styled from "@emotion/styled";

const FooterContainer = styled.footer`
    background: #222;
    color: #AAA;
    padding: 1rem;
    font-size: 12px;
    img {
      max-height: 64px;
      max-width: 100%;
    }
    .social-bar {
        a {
           padding-right: 8px;
        }
        img {
          max-height: 45px;
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
        <div className="container-lg px-1">
            <div className="row mx-0">
                <div className="col-md-6 order-2 order-md-1 text-center text-md-left px-1">
                    <img draggable="false" alt="Amrita InCTF Junior" src={require('../../assets/images/branding/light_version.png')} />
                    <div className="line-height-1 mt-2 mb-1">&copy; Amrita InCTF Jr. 2016-2021. <span className="d-inline-block">All Rights Reserved.</span></div>
                    <FooterLinksBar>
                        <a href="/branding">Brand Kit</a>
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/rules">Rules</a>
                    </FooterLinksBar>
                </div>
                <div className="col-md-6 order-1 order-md-2 px-1">
                    <div className="social-bar d-flex align-items-center justify-content-md-end justify-content-center mb-2 p-2">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/juniorinctf/"><img alt="instagram" src={require('../../assets/images/icons/instagram.png')} /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/InCTFj"><img alt="facebook" src={require('../../assets/images/icons/facebook.png')} /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/InCTFj/"><img alt="twitter" src={require('../../assets/images/icons/twitter.png')} /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/InCTFj"><img alt="youtube" src={require('../../assets/images/icons/play_button.png')} /></a>
                    </div>
                </div>
            </div>
        </div>
    </FooterContainer>

};

export default Footer;