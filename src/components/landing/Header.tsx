import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

import animations from '../../animation';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

const HeaderContainer = styled.section`
  #landing-header-cover-image {
    bottom: 0;
    left: 0;
    position: absolute;
    max-height: 80vh;
  }
  #header-register-button {
    display: inline-block;
    width: 100%;
    text-align: center;
    max-width: 300px;
    background: #f13f17;
    color: white;
    font-weight: 600;
    padding: 0.75rem 1rem;
    text-decoration: none !important;
    border-radius: 8px;
    box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.3);
    &:hover {
      background: white;
      color: #f13f17;
    }
  }
  .limited-slots-warning {
    color: #ff9100;
    font-size: 13px;
  }
`;

const LandingHeader = () => (
  <HeaderContainer>
    <div className="container mx-auto px-2 pt-20 pb-5">
      <div className="flex flex-wrap">
        <motion.div
          variants={animations}
          initial="slideInBottomLeft"
          whileInView="animated"
          className="w-full md:w-2/3 px-4 flex flex-col justify-center"
        >
          <div className="max-w-full w-[640px]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6">
              {data.Landingheader}
            </h1>
            {eventID === 'inctf' && (
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-8">
                {data.date}
              </h2>
            )}
            {eventID === 'inctfj' && (
              <div className="my-5">
                <div className="text-3xl font-bold flex gap-2 items-center">
                  <Image
                    alt="InCTF Junior"
                    src="/inctf/assets/logo_dark.png"
                    height="200"
                    width="130"
                  />
                  <div className="text-primary text-5xl">Junior 2025</div>
                </div>
                {/* <div className="bg-primary w-min">
                      <div className="animate-pulse duration-300 text-white p-2 w-max font-extrabold text-4xl">Registrations Open!</div>
                    </div> */}
              </div>
            )}
            <div>
              {eventID === 'inctf' ? (
                <>
                <p className="text-primary text-xl mb-3">{data.Desc}</p>
                <p  className="font-bold mb-4 text-xl block">{data.subDesc}</p>
                </>
              ) : (
                <>
                  <p className="text-primary font-semibold text-xl mb-3">
                    {data.Desc}
                  </p>
                  <p>
                    <div className="font-semibold text-xl">
                      <span className="font-bold mb-4 text-xl block">
                        Registration Opening Soon
                      </span>
                      {/* <span className="block">
                        Date: 
                        {' '}
                        <strong>January 10 - 11</strong>
                      </span>
                      <span className="block">
                        Venue:
                        {' '}
                        <strong>
                          Amrita Vishwa Vidyapeetham, Amritapuri Campus
                        </strong>
                      </span>
                      <span className="block">
                        Prize Pool: 
                        {' '}
                        <strong>1 Lakh Rupees</strong>
                      </span> */}
                    </div>
                  </p>
                </>
              )}
            </div>
            <div className="mt-8">
              {eventID === 'inctfj' ? (
                <>
                  <Link
                    href="https://www.youtube.com/@InCTFj/live"
                    target="_blank"
                  >
                    <button
                      id="header-register-button"
                      rel="noopener noreferrer"
                      className="!px-8 !py-4 !w-fit rounded-lg font-semibold bg-primary hover:!bg-blue-800 shadow hover:shadow-xl text-white hover:!text-white"
                    >
                      Live Trainings
                    </button>
                  </Link>
                  <Link
                    href="https://www.amrita.edu/campus/amritapuri/reach-us"
                    target="_blank"
                    className="ml-2"
                  >
                    <button
                      id="header-register-button"
                      rel="noopener noreferrer"
                      className="!px-8 !py-4 !w-fit rounded-lg font-semibold bg-primary hover:!bg-blue-800 shadow hover:shadow-xl text-white hover:!text-white"
                    >
                      Reach Campus
                    </button>
                    {/* <iframe*/}
                    {/*id="traboda-arena-reg-iframe"*/}
                    {/*className="w-full md:h-[200px] h-[250px]"*/}
                    {/*src="https://play.inctf.in/reg-frame?background=%23fafafa&showLogin=true"*/}
                    {/*sandbox="allow-scripts allow-same-origin allow-top-navigation allow-forms allow-popups allow-pointer-lock allow-popups-to-escape-sandbox"*/}
                    {/*/> */}
                  </Link>
                </>
              ) : (
                <button
                  id="header-register-button"
                  rel="noopener noreferrer"
                  className="!px-8 !py-4 !w-fit rounded-lg font-semibold bg-primary hover:!bg-blue-800 shadow hover:shadow-xl text-white hover:!text-white"
                >
                  Coming Soon
                </button>
              )}
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={animations}
          initial="slideInBottomRight"
          whileInView="animated"
          className="md:w-1/3 my-4 md:my-0 px-3"
        >
          <img
            alt="InCTF Jr"
            id="landing-header-cover-image"
            src={`/${eventID}/${data.LandingCoverImage}`}
            style={{ position: 'unset', maxHeight: '500px', maxWidth: '100%' }}
            draggable="false"
          />
        </motion.div>
      </div>
    </div>
  </HeaderContainer>
);

export default LandingHeader;
