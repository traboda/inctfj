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
        <div className="container-lg px-1">
            <div className="row mx-0">
                <div className="col-md-8 order-2 order-md-1 text-center text-md-left px-1">
                    <div className="d-md-flex align-items-center d-block">
                        <img draggable="false" alt="Amrita InCTF Junior" src={require('../../assets/images/branding/light_version.png')} />
                        <div className="ml-md-4">
                            <div className="line-height-1 mt-2 mt-md-0 mb-1">&copy; Amrita InCTF Jr. 2016-2021. <span className="d-inline-block">All Rights Reserved.</span></div>
                            <FooterLinksBar>
                                <a href="/branding">Brand Kit</a>
                                <a href="/privacy">Privacy Policy</a>
                                <a href="/rules">Rules</a>
                            </FooterLinksBar>
                        </div>
                    </div>
                </div>
                <div className="social-bar col-md-4 order-1 order-md-2 d-flex align-items-center justify-content-md-end justify-content-center px-1">
                    <div className="d-flex align-items-center justify-content-md-end justify-content-center mb-md-0 mb-2 p-2">
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
                    </div>
                </div>
            </div>
        </div>
    </FooterContainer>

};

export default Footer;