import React, { useState, useEffect } from 'react';
import styled from "@emotion/styled";
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import SideBar from "./SideBar";
import {setUserInfo, useAuthState} from "../../states";

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
      .topbar-container, .row {
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
        background: #E65100!important;
        outline: none!important;
      }
  }
  .topbar-container {
     background-image: ${() => `url(${require('../../assets/images/backgrounds/cyberpunk_3.jpg')})`};
     background-size: cover;
     width: 100%;
     box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.35);
  }
  .row {
     background-color: rgba(0,0,0,0.75);
     padding: 0.35rem;
     width: 100%;
  }
`;


const TopbarInfoCard = styled.div`
    color: white;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    h5 {
        font-size: 18px;
        margin: 0;
        color: #FFD600;
    }
    a {
      margin-left: 8px;
      display: block;
      background: #F13F17;
      text-decoration: none!important;
      color: white!important;
      padding: 1rem;
      font-weight: 600;
      text-transform: uppercase;
      border-radius: 10px;
    }
`;


const TopBar = ({ includeSpace = true, darkenOnSidebar = false }) => {

    const [showMenu, setShowMenu] = useState(false);

    const [hasLoaded, setLoaded] = useState(false);
    const [isLoggedIn] = useAuthState('isLoggedIn');

    useEffect(() => { setLoaded(true); }, []);

    const onLogOut = () => {
        setUserInfo(null);
    };


    const onOpen = () => {
        const targetElement = document.querySelector(".app");
        disableBodyScroll(targetElement);
        setShowMenu(true);
    };

    const onClose = () => {
        setShowMenu(false);
        clearAllBodyScrollLocks();
    };

    const [scroll, setScroll] = useState(0)
    const scrollListener = (e) => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = winScroll / height;
        setScroll(scrolled);
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollListener)
    }, [])

    return <div>
        <TopbarContainer>
            <div className="topbar-container" style={{ backgroundPosition: `0 ${scroll*100}%` }}>
                <div className="row mx-0">
                    <div className="col-4 col-md-3 col-lg-2 text-md-center border-right px-2">
                        <a href="/">
                            <img className="logo" src={require('../../assets/images/logos/inctf_light.png')} alt="InCTFj" />
                        </a>
                    </div>
                    <div className="col-6 col-md-8 col-lg-9 px-2 d-flex align-items-center text-right justify-content-end border-right">

                        <div className="d-none d-md-block">
                            <TopbarInfoCard>
                                <div>
                                    <div>InCTF Jr 5.0</div>
                                    <h5>Dec. 28, 2020</h5>
                                </div>
                                {/*{(hasLoaded && !isLoggedIn) && <a href="/register">Register</a>}*/}
                            </TopbarInfoCard>
                        </div>
                    </div>
                    <div className="col-2 col-md-1 d-flex align-items-center justify-content-center px-1">
                        <button onClick={onOpen}>
                            <img alt="menu" src={require('../../assets/images/icons/hamburger.png')} />
                        </button>
                    </div>
                </div>
            </div>

        </TopbarContainer>
        {showMenu && <SideBar darkenOnSidebar={darkenOnSidebar} onClose={onClose} isLoggedIn={hasLoaded && isLoggedIn} onLogOut={onLogOut} />}
        {includeSpace && <div style={{ height: '60px'}} />}
    </div>

};

export default TopBar;