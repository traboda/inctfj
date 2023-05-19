import React from 'react';
import styled from '@emotion/styled';


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

const LandingHeader = () => (
    <HeaderContainer>
      <div className="container mx-auto px-2 py-12">
          <div className="flex flex-wrap">
            <div className="w-full md:w-2/3 px-4">
              <div className="max-w-full w-[640px]">
                <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6">
                  {data.Landingheader}
                </h1>
                <div className="text-justify">
                  <p className="text-primary font-semibold text-xl mb-3">
                    {data.Desc}
                  </p>
                  <p>
                    {data.subDesc}
                  </p>
                </div>
              </div>
              <div className="mt-4 md:px-2">
                {data.button.map((button) => (
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
    </HeaderContainer>
);

export default LandingHeader;