import React, { useState } from 'react';
import styled from '@emotion/styled';
import Pulse from 'react-awesome-reveal';
import Fade from 'react-awesome-reveal';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const eventAbout = require(`../../data/${eventID}/about`).default;
const data = require(`../../data/${eventID}/index.json`);

const HeaderContainer = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .header-container {
        padding: 3.5vh 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        color: black;
    }
    #landing-header-cover-image {
        bottom: 0;
        left: 0;
        position: absolute;
        max-height: 80vh;
    }
    h1 {
      font-weight: 700;
      line-height: 1.25;
      font-size: calc(1.75rem + 1.25vw);
      margin-bottom: 1rem;
      max-width: 800px;
    }
    p {
      max-width: 700px;
      font-size: 18px;
      line-height: 1.5;
      span {
        display: inline-block;
        font-size: 108%;
        color: #F13F17;
        margin-bottom: 1.25rem;
      }
      margin-bottom: 1.25rem;
    }
    #header-register-button {
       display: inline-block;
       width: 100%;
       text-align: center;
       max-width: 300px;
       background: #F13F17;
       color: white;
       font-weight: 600;
       padding: 0.75rem 1rem;
       text-decoration: none!important;
       border-radius: 8px;
       box-shadow: 2px 6px 12px rgba(0,0,0,0.3);
       &:hover {
          background: white;
          color: #F13F17;
       }
    }
    .limited-slots-warning {
        color: #FF9100;
        font-size: 13px;
    }
`;

const PoweredByTraboda = styled('div')`
    font-size: 13px;
    div {
        opacity: 0.8;
        margin-bottom: 0.5rem;
    }
    img {
        position: inherit;
        display: block;
        max-height: 45px;
    }
`;

const IFrameContainer = styled('div')`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100%;
  max-height: 80vh;
  overflow: auto;
`;

const Iframe = styled('iframe')`
  height: 200px;
  width: 450px;
  max-width: 100%;
  border: none;
  max-height: 100%;
`;

const HowToRegister = styled.a`
    position: relative;
    cursor: pointer;
    display: block;
    overflow: hidden;
    font-size: 1.35rem;
    font-family: 'Inter', sans-serif;
    border-radius: 1.35rem;
    width: 100%;
    img {
      position: unset!important;
      overflow: hidden;
      border-radius: 8px;
      max-width: 100%;
    }
    .how_to_register_cover {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: rgba(0,0,0,0.65);
        border-radius: 1.35rem;
        img {
            max-height: 72px;
            box-shadow: none;
        }
        div {
          color: white;
          line-height: 1;
        }
    }
    &:hover {
        .how_to_register_cover {
          background: rgba(50,150,50,0.75);
          border-radius: 1.35rem;
        }
    }
`;

const LandingHeader = ({ UTMSource = null }) => {

  const [iframeError, setIframeError] = useState(false);

  return (
    <HeaderContainer>
      <div className="container header-container">
        <div className="w-full">
          <div className="flex flex-wrap">
            <div className="w-full md:w-2/3 px-4">
              <Pulse>
                <h1>
                  <span style={{ color: '#FF6F00' }}>{data.Landingheader}</span>
                  <br />
                  {data.date}
                </h1>
              </Pulse>
              <Fade up>
                <p>
                  <span className="mt-6">
                    {data.Desc}
                  </span>
                  {data.subDesc}
                </p>
              </Fade>
              <div className="mt-4 md:px-2">
                {data.button.map((button, index) => (


                  <a
                    href={button.link}
                    className="text-2xl px-5 py-4 inline-block font-semibold ml-3 rounded-lg bg-primary text-white hover:bg-blue-800 shadow hover:shadow-xl my-3"
                  >
                    Coming Soon 
                    {' '}
                    <i className="fa fa-chevron-right" />
                  </a>
                ))}
                                    
              </div>
            </div>
            <div className="md:w-1/3 my-4 md:my-0 px-3">
              <img
                alt="InCTF Jr"
                id="landing-header-cover-image"
                src={`/${eventID}/${data.LandingCoverImage}`}
                style={{ position: 'unset', maxHeight: '500px', maxWidth: '100%' }}
                draggable="false"
              />
            </div>
          </div>

        </div>
      </div>
    </HeaderContainer>
  );


};

export default LandingHeader;