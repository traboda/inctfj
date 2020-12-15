import React from 'react';
import styled from "@emotion/styled";

const LogoContainer = styled.a`
    position: fixed;
    left: 18px;
    top: 18px;
    text-decoration: none!important;
    display: block;
    img {
        width: 150px;
    }
`;

const SponsorsContainer = styled.div`
    position: fixed;
    left: 200px;
    top: 3px;
    div {
      font-size: 13px;
      text-transform: lowercase;
      color: #AAA;
      margin-bottom: 8px;
    }
    img {
      height: 30px;
      margin-right: 12px;
    }
`

const Footer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    .footer-center-card {
        background: #fc0;
        text-align: center;
        width: 300px;
        height: 25px;
        clip-path: polygon(8px 100%, 8px 45%, 22px 1%, 95% 1%, 100% 10px, 100% 100%)
    }
    .footer-right-card {
        background: #fc0;
        position: fixed;
        right: 0;
        bottom: 0;
        clip-path: polygon(8px 100%, 8px 45%, 22px 1%, 100% 0%, 100% 100%);
        button {
            background: #fc0;
            border: none!important;
            padding: 3px 5px;
        }
    }
`;

const BrandingView = () => {

    return <React.Fragment>
        <LogoContainer href="/">
            <img alt="InCTF" draggable="false" src={require('../../assets/images/logos/inctf_light.png')} />
        </LogoContainer>
        <SponsorsContainer>
            <div>
                <div>Powered By</div>
                <a href="https://bi0s.in/" target="_blank" className="plain-link">
                    <img alt="bi0s" draggable="false" src={require('../../assets/images/logos/bi0s_logo.png')} />
                </a>
                <a href="https://traboda.com/" target="_blank" className="plain-link">
                    <img alt="Traboda" draggable="false" src={require('../../assets/images/logos/traboda_light.png')} />
                </a>
            </div>
        </SponsorsContainer>
        <Footer className="font-punk">
            <div className="row mx-0">
                <div className="col-4 px-0">

                </div>
                <div className="col-4 d-flex justify-content-center align-items-end px-0">
                    <div className="footer-center-card">
                        Best viewed in 1920x1080p on Chrome.
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-end px-0">
                    <div className="footer-right-card">
                        <div className="px-3">
                            <button> // Rules // </button>
                            <button> // Help // </button>
                        </div>
                    </div>
                </div>
            </div>

        </Footer>
    </React.Fragment>
};

export default BrandingView;