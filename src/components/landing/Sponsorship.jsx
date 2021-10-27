import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';
import SponsorsSection from "./SponsorsSection";

const SponsorshipArea = styled.section`
    justify-content: center;
    padding: 5vh 0;
    h2 {
      font-weight: 700;
      font-size: 32px;
      margin-bottom: 1rem;
      div {
        font-size: 90%;
      }
    }
    p {
        max-width: 650px;
        div {
          font-size: 16px;
          font-weight: 500;
        }
    }
    a {
       display: inline-block;
       color: white;
       font-weight: 600;
       padding: 0.5rem 1rem;
       text-decoration: none!important;
       border-radius: 8px;
       box-shadow: 2px 6px 12px rgba(0,0,0,0.3);
       margin: 0.5rem 0;
    }
    .sponsorship-brochure-button {
       background: #E65100;
    }
    .contact-us-button {
        background: #1A237E;
    }
`;

const LogoWall = styled.div`
    max-width: 100%;
    width: 900px;
    a {
      box-shadow: none!important;
      color: black;
      text-align: center;
    }
    .h5 {
      color: #555;
      font-size: 18px;
    }
    .past-sponsors {
        img {
            height: auto;
            width:200px;
            
          }
      }
    }
    .inctfj-sponsors {
      img {
        height: 90px!important;
      }
    }
    img {
       display: inline;
       max-height: 90px;
       width: auto;
       max-width: 100%;
    }
`

const LandingSponsorship = () => {

    return <SponsorshipArea className="flex flex-wrap mx-auto container">
        <Fade right>
            <div className="w-full md:px-4 lg:w-1/2">
                <LogoWall>
                    <div className="bg-white rounded-xl shadow-md px-2 py-8 md:p-4">
                        <SponsorsSection />
                    </div>
                </LogoWall>
            </div>
        </Fade>
    </SponsorshipArea>

};

export default LandingSponsorship;