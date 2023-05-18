import React from 'react';
import styled from "@emotion/styled";
import { Fade } from 'react-awesome-reveal';
import SponsorsSection from "./SponsorsSection";

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

const SponsorshipArea = styled.section`
    justify-content: center;
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
  max-width: 900px;
  width: 100%;
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
        height: 64px!important;
        filter: saturate(0) contrast(50%);
        &:hover {
          filter: none!important;
        }
      }
    }
    .inctfj-sponsors {
      img {
        height: 79px;
      }
    }
    img {
        display: inline;
        max-height: 80px !important;
        min-height: 79px !important;
        width: 147px !important;
        object-fit: contain !important;
    }
`

const LandingSponsorship = () => {

    return (
        <SponsorshipArea className="grid lg:grid-cols-2 mx-auto container px-4 py-10 gap-8">
            <div>
                <Fade direction="left">
                    {data.forNewSponsors && (
                        <div>
                            <h2>{data.forNewSponsors.title}</h2>
                            <p>
                                {data.forNewSponsors.description[0]}
                                <div className="text-lg mt-3">{data.forNewSponsors.description[1]}</div>
                            </p>
                            <div className="mt-2 mx-0 mb-8">
                                {/*<a className="sponsorship-brochure-button" href="/sponsor">Sponsorship Brochure</a>*/}
                                <a className="contact-us-button" href={data.forNewSponsors.url}>{data.forNewSponsors.button}</a>
                            </div>
                        </div>
                    )}
                    <LogoWall>
                        {data.officialPartners && data.officialPartners.length > 0 && (
                            <div className="bg-white rounded-xl shadow-md my-6">
                                <div className="flex flex-wrap">
                                    <div className="inctfj-sponsors text-red-500 w-full p-0 mt-3 mb-3 opacity-80 text-lg text-center">
                                        InCTF Jr 2021 - Official Partners
                                    </div>
                                    {data.officialPartners.map((s) =>
                                        <div className="md:w-1/2 w-full flex items-center" style={{display:'flex',flex:'1 1 30%',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between'}}>
                                            <Fade>
                                                <a href={s.link} target="_blank" style={{display:'block'}}>
                                                    <img draggable="false" alt="Sponsor Logo" src={`/${eventID}/${s.logo}`} style={{maxHeight:'80px',minHeight:'79px',width:'150px',objectFit:'contain'}}/>
                                                </a>
                                            </Fade>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </LogoWall>
                </Fade>
            </div>
            <Fade direction="right">
                <LogoWall>
                    <div className="bg-white rounded-xl shadow-md px-2 py-8 md:p-4">
                        <SponsorsSection />
                    </div>
                </LogoWall>
            </Fade>
    </SponsorshipArea>
    );
};

export default LandingSponsorship;