import React from 'react';
import styled from '@emotion/styled';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);


const ReasonsSection = styled.section`
  padding: 8vh 2vw;
  color: black;
  h2 {
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
    font-size: calc(1.5rem + 0.5vw);
  }
  video {
    max-width: 100%;
    max-height: 300px;
    border-radius: 1rem;
    box-shadow: 3px 5px 8px rgba(0,0,0,0.5);
    outline: none!important;
    transition: 1s all ease;
  }
`;

const LandingReasonsToParticipate = () => {
  return (
    <ReasonsSection className="container mx-auto px-4">
      <h2 className="text-center">
        <div className="flex justify-center">
          <img className="mr-2" style={{ width: '64px' }} alt="Why Participate?" src="/assets/images/icons/heart.png" />
        </div>
        Why Participate?
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2">
        {data.whyPacrticipate.map((r, i) => (
          <div className="w-full text-center mb-6 md:mb-0 p-2" key={i}>
            <video
              autoPlay
              loop
              muted
              src={`/${eventID}/${r.video}`}
              className="mb-4"
            />
            {r.text.map((text, index) => <div className="text-base" key={index}>{text}</div>)}
          </div>
        ))}
      </div>
    </ReasonsSection>
  );
};

export default LandingReasonsToParticipate;