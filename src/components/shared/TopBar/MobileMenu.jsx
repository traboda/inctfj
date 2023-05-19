import React from 'react';
import styled from '@emotion/styled';
import Fade from 'react-reveal';

import SocialMediaLinks from '../SocialMediaLinks';

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

const MobileMenu = ({ onClose }) => {

  const sidebarLinks = [
    { 'icon': '/assets/images/icons/home.png', 'title': 'Home', 'href': '/' },
    { 'icon': '/assets/images/icons/star_glowing.png', 'title': 'About', 'href': '/about' },
    { 'icon': '/assets/images/icons/learn.png', 'title': 'Resources', 'href': '/resources' },
    { 'icon': '/assets/images/icons/learn.png', 'title': 'Trainings', 'href': '/trainings' },
    { 'icon': '/assets/images/icons/trophy.png', 'title': 'Past Stats', 'href': '/stats' },
    { 'icon': '/assets/images/icons/faq.png', 'title': 'FAQ', 'href': '/faq' },
    { 'icon': '/assets/images/icons/faq.png', 'title': 'Get Help', 'href': '/discord' },
  ];

  return (<div onClick={onClose}>
    <SideBarMenu onClick={(e) => { e.stopPropagation(); }}>
      <div style={{ position: 'absolute', right: '0.25rem', top: '0.25rem' }}>
        <button onClick={onClose}>
          <i className="fa fa-times" />
        </button>
      </div>
      <ol className="pl-0 mt-3">
        {sidebarLinks.map((l, index) =>
          (<Fade delay={index * 250}>
            <li>
              {l.href ?
                <a href={l.href} className="w-full">
                  {l.title}
                </a> :
                <button onClick={l.onClick} className="w-full">
                  {l.title}
                </button>}
            </li>
          </Fade>),
        )}
      </ol>
      <div style={{ opacity: 0.8 }} className="text-center pt-4">
        follow us on
      </div>
      <SocialMediaLinks />
    </SideBarMenu>
  </div>);

};

export default MobileMenu;