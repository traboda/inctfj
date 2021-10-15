import React from 'react';
import Link from 'next/link';
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

const SideBarMenu = styled.div`
  position: fixed;
  bottom: 12vh;
  right: 0.5rem;
  z-index: 9000;
  background: white;
  color: black;
  box-shadow: -10px 0 8px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  max-width: 400px;
  border-radius: 10px;
  padding: 0.5rem;
  animation: fade-in 250ms;
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(80px); }
    to { opacity: 1; transform: none; }
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
        font-size: 25px;
        color: black;
        padding: 0;
        display: flex;
        align-items: center;
        img {
          margin-right: 8px;
          max-height: 40px;
        }
    }
    &:hover {
      border-radius: 1rem;
      background: rgba(100,100,100,0.15);
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
       margin-right: 1.2rem;
       i {
          font-size: 30px;
          color: #222;
          &:hover {
            color: #fd7e14;
          }
       }
    }
    a:last-of-type {
      margin-right: 0;
    }
`;

const SideBar = ({ onClose }) => {

    const sidebarLinks = [
        { "icon": require('../../assets/images/icons/home.png'), "title": "Home", "href": "/" },
        { "icon": require('../../assets/images/icons/star_glowing.png'), "title": "About", "href": "/about" },
        { "icon": require('../../assets/images/icons/learn.png'), "title": "Resources", "href": "/resources"},
        { "icon": require('../../assets/images/icons/learn.png'), "title": "Trainings", "href": "/trainings" },
        { "icon": require('../../assets/images/icons/trophy.png'), "title": "Past Stats", "href": "/stats" },
        { "icon": require('../../assets/images/icons/faq.png'), "title": "FAQ", "href": "/faq" },
        { "icon": require('../../assets/images/icons/faq.png'), "title": "Get Help", "href": "/discord" },
    ];

    return <div onClick={onClose}>
        <SideBarMenu onClick={(e) => { e.stopPropagation() }}>
            <div style={{ position: 'absolute', right: '0.25rem', top: '0.25rem' }}>
                <button onClick={onClose}>
                    <i className="fa fa-times" />
                </button>
            </div>
            {/*<div className="text-center pt-5">*/}
            {/*    <img alt="InCTFj" style={{ maxHeight: '20vh', maxWidth: '100%' }} className="p-6" src={require('../../assets/images/logos/inctf_light.png')} />*/}
            {/*</div>*/}
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
                        {l.href ?
                        <Link href={l.href} passHref>
                            <a className="w-full">
                                {l.title}
                            </a>
                        </Link> :
                        <button onClick={l.onClick} className="w-full">
                            {l.title}
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
            <div style={{ opacity: 0.8 }} className="text-center pt-4">
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
                <Fade delay={750}>
                    <a target="_blank" rel="noopener noreferrer" href="/discord">
                        <i className="fab fa-discord" />
                    </a>
                </Fade>
            </SocialMediaLinks>
        </SideBarMenu>
    </div>;

};

export default SideBar;