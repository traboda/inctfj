import React from 'react';
import styled from '@emotion/styled';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/championship.json`);

const QuickInfoSection = styled.section`
      padding: 2vh 2vw;
      user-select: none;
      background: white;
      .col-md-4 {
          display: flex;
          align-items: center;
          justify-content: center;
      }
      img {
          max-height: 90px;
          max-width: 100%;
      } 
      .qs {
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          line-height: 1.2;
          margin-bottom: 0.25rem;
      }
      .ans {
        font-size: 18px;
        line-height: 1.5;
        font-weight: 300;
      }
`;

const LandingQuickInfo = () => {

  const landingInfo = [
    {
      image: '/assets/images/icons/trophy.png', left: true,
      question: 'What?', answer: data.what,
    },
    {
      image: 'assets/images/icons/calendar.png', up: true,
      question: 'When?', answer: <> 
        {' '}
        {data.when}
      </>,
    },
            
    {
      image: '/assets/images/icons/backpack.png', right: true,
      question: 'For Whom?', answer: <> 
        {' '}
        {data.forWhom}
      </>,
                
    },
  ];

  return (
    <QuickInfoSection>
      <div className="flex flex-wrap container mx-auto px-4">
        {landingInfo.map((l, i) => (
          <div className="md:w-1/3 w-full py-2" key={i}>
            <div left={l.left} right={l.right} up={l.up}>
              <div className="flex flex-wrap w-full mx-0">
                <div className="flex items-center justify-center w-1/4">
                  <img draggable="false" alt={l.question} src={l.image} />
                </div>
                <div className="w-3/4 flex items-center">
                  <div>
                    <div className="qs">{l.question}</div>
                    <div className="ans">{l.answer}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </QuickInfoSection>
  );
};

export default LandingQuickInfo;