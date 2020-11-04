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
  background: ${({darken}) => !darken ? `rgba(0,0,0,0.25)` : `rgba(0,0,0,0.55)` };
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
     background: rgba(255, 255, 255, 0.9);
     box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.35);
     padding: 0.25rem;
     width: 100%;
  }
`;

const SideBarMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 9000;
  max-width: 320px;
  background-color: rgba(0,0,0,0.75);
  background-image: ${() => `url(${require('../../assets/images/backgrounds/cyberpunk_vertical.jpg')})`};
  color: white;
  box-shadow: -10px 0px 8px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  .sidebar-container {
     height: 100vh;
     width: 100%;
     background-color: rgba(0,0,0,0.75);
  }
  img {
    max-height: 28px;
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
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(255,255,255,0.25);
    a {
        text-decoration: none!important;
        font-size: 18px;
        color: white;
        img {
          margin-right: 8px;
          max-height: 40px;
        }
    }
    &:hover {
      background: #4A148C;
      a{ color: white!important; }
    }   
  }
`;

const OnBoardingCard = styled.div`
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 0.35rem;
    background: rgba(32,32,32,0.45);
    box-shadow: 1px 2px 3px rgba(0,0,0,0.55);
    text-align: center;
    p {
       margin-bottom: 0.1rem;
       font-size: 12px;
    }
    a {
        background: #E65100;
        color: white!important;
        font-weight: 600;
        border-radius: 5px;
        margin-top: 0.25rem;
        padding: 0.5rem 1rem;
        width: 50%;
    }
`;

const RegisterFooterButton = styled.a`
    display: inline-flex;
    align-items: center;
    font-size: 16px;
    padding: 6px 10px;
    border-radius: 6px;
    color: black!important;
    background: #FFD600;
    &:hover{
      background: #FFAB00;
    }
    img {
        width: 20px;
        margin-left: 6px;
    }
`;

const SocialMediaLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    a {
       display: block;
       margin-right: 8px;
       img {
          max-height: 36px;
       }
    }
`

const TopBar = ({ includeSpace = true, darkenOnSidebar = false }) => {

    const [showMenu, setShowMenu] = useState(false);

    const onOpen = () => {
        const targetElement = document.querySelector(".app");
        disableBodyScroll(targetElement);
        setShowMenu(true);
    };

    const onClose = () => {
        setShowMenu(false);
        clearAllBodyScrollLocks();
    };


    const sidebarLinks = [
        { "icon": require('../../assets/images/icons/home.png'), "title": "Home", "href": "/" },
        { "icon": require('../../assets/images/icons/star_glowing.png'), "title": "About", "href": "#" },
        { "icon": require('../../assets/images/icons/books.png'), "title": "Learn", "href": "#" },
        { "icon": require('../../assets/images/icons/test.png'), "title": "Practice", "href": "#" },
        { "icon": require('../../assets/images/icons/faq.png'), "title": "FAQ", "href": "/faq" },
    ]

    return <div>
        <TopbarContainer>
            <div className="row mx-0">
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
            <TopbarWrap darken={darkenOnSidebar} onClick={onClose}>
                <Slide right duration={300}>
                    <SideBarMenu onClick={(e) => { e.stopPropagation() }}>
                        <div className="sidebar-container">
                            <div style={{ position: 'absolute', right: '0.25rem', top: '0.25rem' }}>
                                <button onClick={onClose}>
                                    <img alt="menu" src={require('../../assets/images/icons/close.png')} />
                                </button>
                            </div>
                            <div className="text-center pt-2">
                                <img alt="InCTFj" style={{ maxHeight: '15vh', maxWidth: '100%' }} className="p-3" src={require('../../assets/images/logos/inctf_light.png')} />
                            </div>
                            <OnBoardingCard>
                                <p>Let's get started, right away!</p>
                                <div className="d-flex w-100 align-items-center justify-content-center">
                                    <a className="plain-link mr-1" href="/register">Register</a>
                                    <a className="plain-link" style={{ background: '#4A148C' }} href="/login">Login</a>
                                </div>
                            </OnBoardingCard>
                            <div className="mt-3">
                                { sidebarLinks.map((l) =>
                                    <li>
                                        <a href={l.href}>
                                            <img alt={l.text} draggable="false" src={l.icon} /> {l.title}
                                        </a>
                                    </li>
                                )}
                            </div>
                            <div className="my-3 mx-2">
                                <RegisterFooterButton className="plain-link" href="/register">
                                    Register Now
                                    <img alt="Register now" src={require('../../assets/images/icons/chevron_right.png')}/>
                                </RegisterFooterButton>
                            </div>
                            <SocialMediaLinks>
                                <a target="_blank" href="https://www.instagram.com/juniorinctf/"><img src={require('../../assets/images/icons/instagram.png')} /></a>
                                <a target="_blank" href="https://twitter.com/InCTFj"><img src={require('../../assets/images/icons/facebook.png')} /></a>
                                <a target="_blank" href="https://www.facebook.com/InCTFj/"><img src={require('../../assets/images/icons/twitter.png')} /></a>
                                <a target="_blank" href="https://www.youtube.com/channel/UC2upioDqOCMYnGvgJw7iOMA"><img src={require('../../assets/images/icons/play_button.png')} /></a>
                            </SocialMediaLinks>
                        </div>
                    </SideBarMenu>
                </Slide>
            </TopbarWrap>
        }
        {includeSpace && <div style={{ height: '60px'}} />}
    </div>

};

export default TopBar;