import React from 'react';
import styled from '@emotion/styled';


import SponsorsSection from './SponsorsSection';

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
    .sponsorship-brochure-button {
       background: #E65100;
    }
    .contact-us-button {
        background: #1A237E;
    }
`;

const LandingSponsorship = () => {

  return (
    <SponsorshipArea className="grid lg:grid-cols-2 mx-auto container px-4 py-10 gap-8">
      <div>
        <div>
          {data.forNewSponsors && (
            <div>
              <h2>{data.forNewSponsors.title}</h2>
              <p className="mt-4">
                {data.forNewSponsors.description[0]}
                <div className="text-lg mt-3">{data.forNewSponsors.description[1]}</div>
              </p>
              <div className="mt-2 mb-8">
                {/*<a className="sponsorship-brochure-button" href="/sponsor">Sponsorship Brochure</a>*/}
                <a 
                  className="contact-us-button px-3 py-2 rounded-lg text-white bg-primary"
                  href={data.forNewSponsors.url}
                >
                  {data.forNewSponsors.button}
                </a>
              </div>
            </div>
          )}
          <div>
            {data.officialPartners && data.officialPartners.length > 0 && (
            <div className="bg-white rounded-xl shadow-md my-6">
              <div className="flex flex-wrap">
                <div className="inctfj-sponsors text-red-500 w-full p-0 mt-3 mb-3 opacity-80 text-lg text-center">
                  InCTF Jr 2021 - Official Partners
                </div>
                {data.officialPartners.map((s) =>
                  (<div className="md:w-1/2 w-full flex items-center" style={{ display:'flex', flex:'1 1 30%', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between' }}>
                    <div>
                      <a href={s.link} target="_blank" style={{ display:'block' }}>
                        <img draggable="false" alt="Sponsor Logo" src={`/${eventID}/${s.logo}`} style={{ maxHeight:'80px', minHeight:'79px', width:'150px', objectFit:'contain' }} />
                      </a>
                    </div>
                  </div>),
                )}
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
      <SponsorsSection />
    </SponsorshipArea>
  );
};

export default LandingSponsorship;