import React from 'react';
import Link from 'next/link';
import Slide from "react-reveal/Slide";
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

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
  background: linear-gradient(45deg, rgba(0,0,0,0.4) 0%, rgba(46,0,37,0.8) 37%, rgba(254,0,100,0.4) 51%, rgba(0,0,0,0.9) 100%),linear-gradient(51deg, rgba(82,55,15,1) 0%, rgba(71,83,0,1) 40%, rgba(0,50,124,1) 100%);
  color: white;
  box-shadow: -10px 0 8px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  max-width: 400px;
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
    justify-content: center;

    a, button {
        text-decoration: none!important;
        font-size: 30px;
        color: #EEE;
        font-weight: 600;
        padding: 0;
        display: flex;
        align-items: center;
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

// const OnBoardingCard = styled.div`
//     padding: 0.5rem;
//     margin: 0.5rem;
//     border-radius: 0.35rem;
//     background: rgba(32,32,32,0.45);
//     box-shadow: 1px 2px 3px rgba(0,0,0,0.55);
//     text-align: center;
//     p {
//        margin-bottom: 0.1rem;
//        font-size: 12px;
//     }
//     a {
//         background: #E65100;
//         color: white!important;
//         font-weight: 600;
//         border-radius: 5px;
//         margin-top: 0.25rem;
//         padding: 0.5rem 1rem;
//         width: 50%;
//     }
// `;

// const RegisterFooterButton = styled.a`
//     display: inline-flex;
//     align-items: center;
//     font-size: 16px;
//     padding: 6px 10px;
//     border-radius: 6px;
//     color: black!important;
//     background: #FFD600;
//     &:hover{
//       background: #FFAB00;
//     }
//     img {
//         width: 20px;
//         margin-left: 6px;
//     }
// `;

const SocialMediaLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    a {
       display: block;
       margin-right: 16px;
       i {
          font-size: 30px;
          color: #AAA;
          &:hover {
            color: #fd7e14;
          }
       }
    }
`;

const SideBar = ({ onClose, onLogOut, isLoggedIn, darkenOnSidebar }) => {

    const sidebarLinks = !isLoggedIn ? [
        { "icon": require('../../assets/images/icons/home.png'), "title": "Home", "href": "/" },
        { "icon": require('../../assets/images/icons/star_glowing.png'), "title": "About", "href": "/about" },
        { "icon": require('../../assets/images/icons/trophy.png'), "title": "Stats & Rankings", "href": "/stats" },
        { "icon": require('../../assets/images/icons/faq.png'), "title": "FAQ", "href": "/faq" },
        { "icon": require('../../assets/images/icons/faq.png'), "title": "Resources", "href": "/resources"}
    ] : [
        { "icon": require('../../assets/images/icons/sword.png'), "title": "CTF Arena", "href": "/ctf" },
        { "icon": require('../../assets/images/icons/dashboard.png'), "title": "Dashboard", "href": "/dashboard" },
        { "icon": require('../../assets/images/icons/shooting_star.png'), "title": "Stats & Rankings", "href": "/stats" },
        { "icon": require('../../assets/images/icons/blog.png'), "title": "Blog", "href": "/blog" },
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
                    <div className="text-center pt-5">
                        <img alt="InCTFj" style={{ maxHeight: '20vh', maxWidth: '100%' }} className="p-6" src={require('../../assets/images/logos/inctf_light.png')} />
                    </div>
                    {/*{!isLoggedIn && <OnBoardingCard>*/}
                    {/*    <p>Let's get started, right away!</p>*/}
                    {/*    <div className="flex w-full items-center justify-center">*/}
                    {/*        /!*<a className="plain-link mr-1" href="/register">Register</a>*!/*/}
                    {/*        <a className="plain-link" style={{ background: '#4A148C' }} href="/login">Login</a>*/}
                    {/*    </div>*/}
                    {/*</OnBoardingCard>}*/}
                    <ol className="pl-0 mt-3">{sidebarLinks.map((l, index) =>
                        <Fade delay={index*250}>
                            <li>
                                {l.href ? <Link href={l.href} passHref>
                                    <a className="w-full">
                                        <img alt={l.text} draggable="false" src={l.icon} /> {l.title}
                                    </a>
                                </Link> : <button onClick={l.onClick} className="w-full">
                                    <img alt={l.text} draggable="false" src={l.icon} /> {l.title}
                                </button>}
                            </li>
                        </Fade>
                    )}</ol>
                    {/*<div className="my-3 mx-2">*/}
                    {/*    {!isLoggedIn && <RegisterFooterButton className="plain-link" href="/register">*/}
                    {/*        Register Now*/}
                    {/*        <img alt="Register now" src={require('../../assets/images/icons/chevron_right.png')}/>*/}
                    {/*    </RegisterFooterButton>}*/}
                    {/*</div>*/}
                    <div style={{ color: '#999' }} className="text-center pt-4">
                        follow us on
                    </div>
                    <SocialMediaLinks className="social-bar flex items-center justify-center px-2">
                        <Fade delay={50}>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/juniorinctf/">
                                <i className="fab fa-instagram" />
                            </a>
                        </Fade>
                        <Fade delay={250}>
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/InCTFj">
                                <i className="fab fa-twitter" />
                            </a>
                        </Fade>
                        <Fade delay={500}>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/InCTFj/">
                                <i className="fab fa-facebook" />
                            </a>
                        </Fade>
                        <Fade delay={750}>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/InCTFj">
                                <i className="fab fa-youtube" />
                            </a>
                        </Fade>
                    </SocialMediaLinks>
                </div>
            </SideBarMenu>
        </Slide>
    </TopbarWrap>;

};

export default SideBar;