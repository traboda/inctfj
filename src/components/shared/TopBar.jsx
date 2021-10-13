import React, { useState, useEffect, useRef } from 'react';
import styled from "@emotion/styled";
import { clearAllBodyScrollLocks } from 'body-scroll-lock';
import Modal from "react-modal";
import Link from "next/link";

import SideBar from "./SideBar";
import { setUserInfo, useAuthState } from "../../states";
import TopBarItem from "./TopBarItem";


const TopbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 6000;
  background: transparent;
  border-bottom: 2px solid transparent;
  box-shadow: none;
  transition: all 300ms ease-in-out;
  transform: translateY(-100%);
  opacity: 0;
  pointer-events: none;
  padding: 1rem 0.35rem;
  
  &.floating {
    background: white;
    box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.35);
    border-bottom: 2px solid #FF6F00;
  }
  
  &.up, &.top {
    pointer-events: auto;
    transform: none;
    opacity: 1;
  }
  
  @media screen and (max-width: 768px) {
    border-top: 2px solid #FF6F00;
    border-bottom: none !important;
    background: white;
    top: initial;
    bottom: 0;
    transform: translateY(100%);
  }

  nav {
    a {
      font-size: 17px;
      color: #222;
      padding: 8px 12px;
      text-decoration: none !important;
      transition: color 250ms ease;

      &:hover {
        color: #fd7e14;
      }
    }
  }

  .logo {
    max-height: 56px;
  }

  img {
    max-height: 32px;
    max-width: 100%;
  }

  button {
    border: none;
    padding: 0.5rem;
    border-radius: 10px;
    background: none;
    color: #F13F17;
    &:hover {
      color: white;
      background: #F13F17 !important;
      outline: none !important;
    }
  }
`;


const TopbarInfoCard = styled.div`
  color: #222;
  line-height: 1.3;
  display: flex;
  justify-content: flex-end;
  width: 100%;

  button {
    margin-left: 8px;
    display: block;
    background: #F13F17;
    text-decoration: none !important;
    color: white !important;
    padding: 1rem;
    font-weight: 600;
    border-radius: 10px;
    min-width: 180px;
    max-width: 100%;
  }
`;

const CloseButton = styled.button`
  background: none !important;
  top: 1rem;
  right: 1rem;
  position: absolute;
  padding: 0 !important;

  img {
    width: 32px;
  }
`;

const TopBar = ({ darkenOnSidebar = false, UTMSource = null }) => {

    const [showMenu, setShowMenu] = useState(false);
    const [showRegCard, setShowRegCard] = useState(false);
    const [hasLoaded, setLoaded] = useState(false);
    const [isLoggedIn] = useAuthState('isLoggedIn');
    const [scrollDir, setScrollDir] = useState('up');
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        setLoaded(true);
    }, []);

    const topbarRef = useRef()
    const scrollPrevStateRef = useRef(0);

    const onLogOut = () => {
        setUserInfo(null);
    };

    const onOpen = () => {
        setShowMenu(!showMenu);
    };

    const onClose = () => {
        setShowMenu(false);
    };

    const onScroll = () => {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        st = st <= 0 ? 0 : st;

        setScrollDir(st > 83 && st > scrollPrevStateRef.current ? 'down' : 'up');
        setIsAtTop(st <= 83);
        scrollPrevStateRef.current = st;
    }

    useEffect(() => {
        document.addEventListener('scroll', onScroll, false);
        return () => {
            document.removeEventListener('scroll', onScroll, false);
        }
    }, []);

    const TopbarItems = [
        {
            "label": "About",
            "link": "/about",
            items: [
                {
                    "label": "What's India CTF Jr?",
                    "link": "/about#what"
                },
                {
                    "label": "Why InCTF Jr?",
                    "link": "/about#why"
                },
                {
                    "label": "Our Impact",
                    "link": "/about#impact"
                },
                {
                    "label": "Advisory Board",
                    "link": "/advisory-board"
                },
                // {
                //     "label": "Organizers",
                //     "link": "/about#organizers"
                // },
                // {
                //     "label": "Sponsors",
                //     "link": "/sponsors"
                // }
            ]
        },
        {
            "label": "Learn",
            "link": "/resources",
            items: [
                {
                    "label": "Cyber Workshops",
                    "badge": "free",
                    "link": "/trainings"
                },
                {
                    "label": "Videos & Guides",
                    "link": "/resources"
                },
                {
                    "label": "Practice Challenges",
                    "link": "https://app.traboda.com/"
                },
                {
                    "label": "bi0s Wiki",
                    "link": "https://wiki.bi0s.in/"
                },
                {
                    "label": "Join Discord Community",
                    "link": "/discord"
                }
            ]
        },
        // {
        //     "label": "Championship",
        //     "link": "/championship",
        //     "items": [
        //         {
        //             "label": "How to Play a CTF?",
        //             "link": "championship/#how-to",
        //         },
        //         {
        //             "label": "Guidelines & Rules",
        //             "link": "/rules",
        //         },
        //         {
        //             "label": "Prizes",
        //             "link": "championship/#prizes",
        //         },
        //         {
        //             "label": "Past Statistics",
        //             "link": "/stats",
        //         }
        //     ]
        // },
        {
            "label": "Resources",
            "link": "/resources",
            "items": [
                {
                    "label": "FAQ",
                    "link": "/faq",
                },
                {
                    "label": "Promote InCTF",
                    "link": "/promote"
                },
                // {
                //     "label": "Get Help",
                //     "link": "/support"
                // }
            ]
        }
    ]

    const isVisible = () => scrollDir === 'up' || isAtTop;

    useEffect(() => {
        setShowMenu(false);
    }, [scrollDir]);

    return <div>
        <TopbarContainer ref={topbarRef} className={scrollDir + ` ${isAtTop ? 'top' : 'floating'}`}>
            <div className="topbar-container">
                <div className="mx-0 w-full px-0">
                    <div className="flex flex-wrap w-full mx-0">
                        <div
                            className="w-1/4 md:w-1/6 md:text-center flex items-center md:justify-end justify-center px-2"
                        >
                            <a href="/">
                                <img
                                    className="logo"
                                    src={require('../../assets/images/logos/inctf.png')}
                                    alt="InCTF Jr"
                                />
                            </a>
                        </div>
                        <div className="pr-4 pl-4 md:w-5/6 pr-4 pl-4 px-1 hidden md:flex items-center">
                            <div className="flex flex-wrap  mx-0 w-full">
                                <div className="md:w-3/4 xl:w-1/2 pr-4 pl-4 flex items-center px-1">
                                    <nav className="flex">
                                        {TopbarItems?.map((i) => (
                                            <TopBarItem item={i} isVisible={isVisible()} />
                                        ))}
                                    </nav>
                                </div>
                                <div className="md:w-1/4 xl:w-1/2 pr-4 pl-4 flex justify-end text-right px-1">
                                    <TopbarInfoCard className="items-center">
                                        <div className="hidden xl:inline-block mr-2">
                                            <div>India's First & Only CTF Hacking Contest</div>
                                            <h5 style={{ color: '#F13F17' }}>Exclusively for School Students</h5>
                                        </div>
                                        <button onClick={() => setShowRegCard(true)}>Register</button>
                                    </TopbarInfoCard>
                                </div>
                            </div>
                        </div>
                        <div className="w-3/4 flex md:hidden items-center justify-end px-1">
                            <TopbarInfoCard className="mr-3">
                                <button
                                    onClick={() => setShowRegCard(true)}
                                    className="w-full"
                                >
                                    Register
                                </button>
                            </TopbarInfoCard>
                            <button onClick={onOpen} className="transition" style={{ width: 46, height: 46 }}>
                                <i className={`${showMenu ? 'fa fa-times' : 'fa fa-bars'} text-2xl transition`} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </TopbarContainer>
        <Modal
            isOpen={showRegCard}
            onRequestClose={() => {
                clearAllBodyScrollLocks();
                setShowRegCard(false);
            }}
            style={{
                overlay: {
                    zIndex: 9000, background: 'rgba(0,0,0,0.5)',
                    height: '100vh', width: '100%',
                    display: 'flex', alignItems: 'flex-end', justifyContent: 'right',
                },
                content: {
                    position: 'unset', top: 0, left: 0, right: 0, padding: 0,
                    border: 'none', background: 'none', width: '500px', maxWidth: '100vw'
                }
            }}
        >
            <CloseButton
                className="px-4 border-0 rounded"
                onClick={() => {
                    clearAllBodyScrollLocks();
                    setShowRegCard(false)
                }}
            >
                <img alt="close" src={require('../../assets/images/icons/close.png')}/>
            </CloseButton>
            {showRegCard &&
            <div className="flex bg-white px-3 md:p-4 py-6 items-end rounded-t-2xl md:rounded-r-none md:rounded-bl-2xl justify-center">
                <iframe
                    className="border-0"
                    style={{ width: '500px', maxWidth: '100vw', height: '190px', overflow: 'auto' }}
                    src={`https://app.traboda.com/contest/inctfj-21-lr/reg-frame?color=000&primary=F13F17&primary_text=fff${UTMSource ? `&utm_source=${UTMSource}` : ''}`}
                />
            </div>}
        </Modal>
        {isVisible() && showMenu &&
        <SideBar
            darkenOnSidebar={darkenOnSidebar}
            onClose={onClose}
            isLoggedIn={hasLoaded && isLoggedIn}
            onLogOut={onLogOut}
        />}
        <div style={{ height: topbarRef ? topbarRef?.current?.clientHeight : '72px' }} className="hidden md:block"/>
        <div className="block md:hidden text-center pt-6 px-2 pb-4">
            <Link passHref href="/">
                <a>
                    <img
                        alt="InCTF Jr"
                        style={{ height: '72px' }}
                        className="inline"
                        src={require('../../assets/images/branding/colorful.png')}
                    />
                </a>
            </Link>
        </div>
    </div>

};

export default TopBar;