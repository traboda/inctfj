import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Modal from 'react-modal';
import { clearAllBodyScrollLocks } from 'body-scroll-lock';

import Logo from '../Logo';

import MobileMenu from './MobileMenu';
import TopBarSearch from './search';
import TopBarItem from './item';


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
  display: flex;
  justify-content: center;
  align-items: center;

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

  &.top {
    margin-top: 53px;
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
`;


const TopbarInfoCard = styled.div`
  color: #222;
  line-height: 1.3;
  display: flex;
  justify-content: flex-end;
  width: 100%;
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

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;


const TopBar = ({ darkenOnSidebar = false, UTMSource = null }) => {

  const [showMenu, setShowMenu] = useState(false);
  const [showRegCard, setShowRegCard] = useState(false);
  const [scrollDir, setScrollDir] = useState('up');
  const [isAtTop, setIsAtTop] = useState(true);

  const topbarRef = useRef(null);
  const scrollPrevStateRef = useRef(0);

  const onOpen = () => setShowMenu(!showMenu);

  const onClose = () => setShowMenu(false);

  const onScroll = () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    st = st <= 0 ? 0 : st;

    setScrollDir(st > 83 && st > scrollPrevStateRef.current ? 'down' : 'up');
    setIsAtTop(st <= 83);
    scrollPrevStateRef.current = st;
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll, false);
    return () => {
      document.removeEventListener('scroll', onScroll, false);
    };
  }, []);

  const isVisible = () => scrollDir === 'up' || isAtTop;

  useEffect(() => {
    setShowMenu(false);
  }, [scrollDir]);

  const topbarConfig = require(`../../../data/${eventID}/topbar.json`);

  return (<div>
    {topbarConfig?.topbarCTA && (
    <div style={{ fontSize: '14px' }} className="hidden md:block p-2 bg-blue-800 text-white">
      <div className="flex items-center justify-between">
        <div className="px-3">
          {topbarConfig?.topbarCTA?.text}
        </div>
        <div className="flex items-center md:my-0 px-2 md:px-0 justify-end">
          <Link legacyBehavior href={topbarConfig?.topbarCTA?.link} passHref>
            <a className="bg-white text-blue-800 mb-0 hover:text-primary rounded-lg px-3 py-2 whitespace-nowrap">
              {topbarConfig?.topbarCTA?.buttonText} 
              {' '}
              <i className="fa fa-chevron-right ml-1" />
            </a>
          </Link>
        </div>
      </div>
    </div>
    )}
    <TopbarContainer ref={topbarRef} className={scrollDir + ` ${isAtTop ? 'top' : 'floating'}`}>
      <div className="flex flex-wrap justify-center items-center container">
        <div
          className="w-1/4 md:w-1/3 xl:w-1/4 md:text-center flex flex-wrap items-center md:justify-start justify-center px-2"
        >
          <a className="w-full md:w-1/3" href="/">
            <Logo isDark />
          </a>
          {topbarConfig?.associate && (
          <a
            target="_blank"
            href={topbarConfig?.associate?.link}
            className="w-2/3 pl-2 md:flex hidden flex-col items-start"
            title="In association with CBSE"
          >
            <span
              className="uppercase tracking-widest opacity-80"
              style={{ fontSize: 8 }}
            >
              In association with
            </span>
            <img
              alt="cbse"
              src={`/${eventID}/assets/${topbarConfig?.associate?.logo?.light}`}
              style={{ position: 'unset', maxHeight: 45, maxWidth: '100%' }}
              draggable="false"
              className="inline"
            />
          </a>
          )}
        </div>
        <div className="md:w-2/3 xl:w-3/4 px-1 hidden md:flex items-center">
          <div className="flex w-full">
            <div className="w-full pl-4 flex justify-end text-left px-1">
              <TopbarInfoCard className="items-center flex">
                {topbarConfig?.menu?.length > 0 && (
                <nav className="flex items-center mr-4">
                  {topbarConfig?.menu?.map((i) => (
                    <TopBarItem
                      key={`topbar_menu_link_${i?.link}`}
                      item={i}
                      isVisible={isVisible()}
                    />
                  ))}
                  <TopBarSearch />
                </nav>
                )}
                {topbarConfig?.CTA && (
                <React.Fragment>
                  {topbarConfig?.CTA?.type === 'info' && (
                  <div className="text-right px-2">
                    <div className="text-lg font-semibold text-primary">
                      {topbarConfig?.CTA?.title}
                    </div>
                    <div className="font-semibold">{topbarConfig?.CTA?.subTitle}</div>
                  </div>
                  )}
                  {topbarConfig?.CTA.type === 'link' && (
                  <Link legacyBehavior href={topbarConfig?.CTA?.link} passHref>
                    <a className="px-8 py-4 rounded-lg font-semibold bg-primary hover:bg-blue-800 shadow hover:shadow-xl text-white ml-3">
                      {topbarConfig?.CTA?.buttonText} 
                      {' '}
                      <i className="fa fa-chevron-right" />
                    </a>
                  </Link>
                  )}
                </React.Fragment>
                )}
              </TopbarInfoCard>
            </div>
          </div>
        </div>
        <div className="w-3/4 flex md:hidden items-center justify-end px-1">
          <div className="text-right px-2">
            <div className="font-semibold text-primary">
              InCTF Jr 2022
            </div>
            <div>August - November, 2022</div>
          </div>
          {/*<TopbarInfoCard className="mr-3">*/}
          {/*    <button*/}
          {/*        onClick={() => setShowRegCard(true)}*/}
          {/*        className="w-full px-5 py-4 font-semibold rounded-lg bg-primary text-white hover:bg-blue-800 shadow hover:shadow-xl ml-3"*/}
          {/*    >*/}
          {/*        Register <i className="fa fa-chevron-right"/>*/}
          {/*    </button>*/}
          {/*</TopbarInfoCard>*/}
          <button onClick={onOpen} className="transition" style={{ width: 46, height: 46 }}>
            <i className={`${showMenu ? 'fa fa-times' : 'fa fa-bars'} text-2xl transition`} />
          </button>
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
          border: 'none', background: 'none', width: '500px', maxWidth: '100vw',
        },
      }}
    >
      <CloseButton
        className="px-4 border-0 rounded"
        onClick={() => {
          clearAllBodyScrollLocks();
          setShowRegCard(false);
        }}
      >
        <img alt="close" src="/assets/images/icons/close.png" />
      </CloseButton>
      {showRegCard &&
      <div
        className="flex bg-white px-3 md:p-4 py-6 items-end rounded-t-2xl md:rounded-r-none md:rounded-bl-2xl justify-center"
      >
        <iframe
          className="border-0"
          style={{ width: '500px', maxWidth: '100vw', height: '190px', overflow: 'auto' }}
          src={`https://app.traboda.com/contest/inctfj-21-lr/reg-frame?color=000&primary=F13F17&primary_text=fff${UTMSource ? `&utm_source=${UTMSource}` : ''}`}
        />
      </div>}
    </Modal>
    {isVisible() && showMenu &&
    <MobileMenu
      darkenOnSidebar={darkenOnSidebar}
      onClose={onClose}
    />}
    <div style={{ height: topbarRef.current?.offsetHeight ?? 90 }} className="hidden md:block" />
    <div className="block md:hidden text-center pt-6 px-2 pb-4">
      <Link legacyBehavior passHref href="/">
        <a>
          <img
            alt="InCTF Jr"
            style={{ height: '72px' }}
            className="inline"
            src="/assets/images/conference/inctf_logo.png"
          />
        </a>
      </Link>
    </div>
  </div>);
};

export default TopBar;