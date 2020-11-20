import React from 'react';
import Slide from "react-reveal/Slide";
import styled from "@emotion/styled";

const TopbarWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 6000;
  background: ${({darken}) => !darken ? `rgba(0,0,0,0.25)` : `rgba(0,0,0,0.55)` };
`;


const SideBarMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 9000;
  max-width: 320px;
  background-color: rgb(0,0,0);
  background-image: ${() => `url(${require('../../assets/images/backgrounds/cyberpunk_vertical.jpg')})`};
  color: white;
  box-shadow: -10px 0 8px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  .sidebar-container {
     height: 100vh;
     width: 100%;
     background-color: rgba(0,0,0,0.65);
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
    a, button {
        text-decoration: none!important;
        font-size: 18px;
        color: white;
        padding: 0;
        img {
          margin-right: 8px;
          max-height: 40px;
        }
    }
    &:hover {
      background: rgba(74,20,140,0.8);
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
`;

const SideBar = ({ onClose, onLogOut, isLoggedIn, darkenOnSidebar }) => {

    const sidebarLinks = !isLoggedIn ? [
        { "icon": require('../../assets/images/icons/home.png'), "title": "Home", "href": "/" },
        { "icon": require('../../assets/images/icons/star_glowing.png'), "title": "About", "href": "/about" },
        { "icon": require('../../assets/images/icons/books.png'), "title": "Learn", "href": "https://wiki.bi0s.in/" },
        { "icon": require('../../assets/images/icons/test.png'), "title": "Practice", "href": "https://archive.bi0s.in/" },
        { "icon": require('../../assets/images/icons/faq.png'), "title": "FAQ", "href": "/faq" },
        { "icon": require('../../assets/images/icons/share.png'), "title": "Promote", "href": "/promote" },
    ] : [
        { "icon": require('../../assets/images/icons/dashboard.png'), "title": "Dashboard", "href": "/dashboard" },
        { "icon": require('../../assets/images/icons/books.png'), "title": "Learn", "href": "https://wiki.bi0s.in/" },
        { "icon": require('../../assets/images/icons/test.png'), "title": "Practice", "href": "https://archive.bi0s.in/" },
        { "icon": require('../../assets/images/icons/share.png'), "title": "Promote", "href": "/promote" },
        { "icon": require('../../assets/images/icons/logout.png'), "title": "Logout", "onClick": onLogOut }
    ];

    return <TopbarWrap darken={darkenOnSidebar} onClick={onClose}>
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
                    {!isLoggedIn && <OnBoardingCard>
                        <p>Let's get started, right away!</p>
                        <div className="d-flex w-100 align-items-center justify-content-center">
                            <a className="plain-link mr-1" href="/register">Register</a>
                            <a className="plain-link" style={{ background: '#4A148C' }} href="/login">Login</a>
                        </div>
                    </OnBoardingCard>}
                    <div className="mt-3">{sidebarLinks.map((l) =>
                        <li>
                            {l.href ? <a href={l.href}>
                                <img alt={l.text} draggable="false" src={l.icon} /> {l.title}
                            </a> : <button onClick={l.onClick}>
                                <img alt={l.text} draggable="false" src={l.icon} /> {l.title}
                            </button>}
                        </li>
                    )}</div>
                    <div className="my-3 mx-2">
                        {!isLoggedIn && <RegisterFooterButton className="plain-link" href="/register">
                            Register Now
                            <img alt="Register now" src={require('../../assets/images/icons/chevron_right.png')}/>
                        </RegisterFooterButton>}
                    </div>
                    <SocialMediaLinks>
                        <a target="_blank" href="https://www.instagram.com/juniorinctf/"><img src={require('../../assets/images/icons/instagram.png')} /></a>
                        <a target="_blank" href="https://twitter.com/InCTFj"><img src={require('../../assets/images/icons/twitter.png')} /></a>
                        <a target="_blank" href="https://www.facebook.com/InCTFj/"><img src={require('../../assets/images/icons/facebook.png')} /></a>
                        <a target="_blank" href="https://www.youtube.com/c/InCTFj"><img src={require('../../assets/images/icons/play_button.png')} /></a>
                    </SocialMediaLinks>
                </div>
            </SideBarMenu>
        </Slide>
    </TopbarWrap>;

};

export default SideBar;