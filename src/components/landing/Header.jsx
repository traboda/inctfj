import React from 'react';
import styled from '@emotion/styled';


const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

const HeaderContainer = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .header-container {
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

const LandingHeader = () => {
 
  return (
    <HeaderContainer>
      <div className="container header-container">
        <div className="w-full">
          <div className="flex flex-wrap">
            <div className="w-full md:w-2/3 px-4">
              <div>
                <h1>
                  <span style={{ color: '#FF6F00' }}>{data.Landingheader}</span>
                </h1>
              </div>
              <div>
                <p>
                  <span className="mt-6">
                    {data.Desc}
                  </span>
                  {data.subDesc}
                </p>
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
      </div>
    </HeaderContainer>
  );


};

export default LandingHeader;