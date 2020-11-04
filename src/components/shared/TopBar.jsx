import React, { useState } from 'react';
import styled from "@emotion/styled";
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Slide from "react-reveal/Slide";

const TopbarWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 6000;
  background: rgba(0,0,0,0.5);
`;


const TopbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 6000;
  display: flex;
  justify-content: center;
  .logo{
    max-height: 56px;
  }
  img {
    max-height: 32px;
    max-width: 100%;
  }
  @media (min-width: 768px){
      top: 1rem;
      .row {
        max-width: 1200px;
        border-radius: 0.5rem;
      }
  }
  button {
      border: none;
      padding: 0.5rem;
      border-radius: 5px;
      background: none;
      &:hover, &:focus {
        background: #eee!important;
        outline: none!important;
      }
  }
  .row {
     background: white;
     box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.35);
     padding: 0.25rem;
     width: 100%;
  }
`;

const SideBarMenu = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  right: 0;
  width: 100%;
  max-width: 320px;
  z-index: 9000;
  background: #222640;
  color: white;
  box-shadow: -10px 3px 8px rgba(0, 0, 0, 0.3);
  img {
    max-height: 32px;
  }
  button {
      border: none;
      padding: 0.5rem;
      border-radius: 5px;
      background: none!important;
      &:hover, &:focus {
        outline: none!important;
      }
  }
  li {
    list-style-type: none;
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;
    a {
        text-decoration: none!important;
        font-size: 20px;
        color: white;
        img {
          margin-right: 8px;
          max-height: 42px;
        }
    }
    &:hover {
      background: #FFD600;
      a{ color: #333!important; }
    }   
  }
`;

const TopBar = ({ includeSpace = true }) => {

    const [showMenu, setShowMenu] = useState(false);

    const onOpen = () => {
        const targetElement = document.querySelector(".app");
        disableBodyScroll(targetElement);
        setShowMenu(true);
    };

    const onClose = () => {
        setShowMenu(false);
        clearAllBodyScrollLocks();
    }

    return <div>
        <TopbarContainer>
            <div className="row mx-0"  >
                <div className="col-4 col-md-3 col-lg-2 text-md-center border-right px-2">
                    <a href="/">
                        <img className="logo" src={require('../../assets/images/logos/inctf.png')} alt="InCTFj" />
                    </a>
                </div>
                <div className="col-6 col-md-8 col-lg-9 px-0 border-right">

                </div>
                <div className="col-2 col-md-1 d-flex align-items-center justify-content-center px-1">
                    <button onClick={onOpen}>
                        <img alt="menu" src={require('../../assets/images/icons/hamburger.png')} />
                    </button>
                </div>
            </div>
        </TopbarContainer>
        {showMenu &&
            <TopbarWrap onClick={onClose}>
                <Slide right duration={300}>
                    <SideBarMenu onClick={(e) => { e.stopPropagation() }}>
                        <div className="d-flex justify-content-end">
                            <button onClick={onClose}>
                                <img alt="menu" src={require('../../assets/images/icons/close.png')} />
                            </button>
                        </div>
                        <div className="text-center">
                            <img alt="InCTFj" style={{ maxHeight: '130px', maxWidth: '100%' }} className="p-3" src={require('../../assets/images/logos/inctf_light.png')} />
                        </div>
                        <div className="mt-3">
                            <li>
                                <a href="/">
                                    <img src={require('../../assets/images/icons/home.png')} />
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/faq">
                                    <img src={require('../../assets/images/icons/faq.png')} />
                                    FAQ
                                </a>
                            </li>
                        </div>
                    </SideBarMenu>
                </Slide>
            </TopbarWrap>
        }
        {includeSpace && <div style={{ height: '60px'}} />}
    </div>

};

export default TopBar;