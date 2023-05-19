import React from 'react';
import styled from '@emotion/styled';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/about.json`);
const IntroSectionWrap = styled.div`
    user-select: none;
    p {
      width: 100%;
      max-width: 800px;
      margin-bottom: 1rem;
    }
`;

const InctfIntro = () => {
    
  return (<IntroSectionWrap>
    <div className="container min-w-lg mx-auto sm:px-4 py-12 px-1">
      <div className="flex flex-wrap">
        <div className="md:w-2/3 pr-4 pl-4 flex items-center p-6">
          <div>
            <div><h1 className="font-bold mb-6">{data.header}</h1></div>
            <div>
              <p>
                {data.description.map((item, index) => {
                  return (<span key={index}>
                    {item}
                    <br />
                    <br></br>
                  </span>);
                })}

              </p>
            </div>
                        
          </div>
        </div>
        <div className="md:w-1/3 pr-4 pl-4 p-2">
          <div className="flex grid grid-cols-2 flex-wrap  mx-0">
            {data.participants.map((i, index) =>
              (<div key={index}>
                <div className="p-1">
                  <img
                    draggable="false"
                    style={{ maxWidth: '100%' }}
                    src={`/${eventID}/${i}`}
                    alt="INCTF participant"
                  />
                </div>
              </div>),
            )}
          </div>
        </div>
      </div>
    </div>
  </IntroSectionWrap>);

};

export default InctfIntro;