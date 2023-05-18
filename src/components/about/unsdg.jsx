import React from 'react';
import styled from '@emotion/styled';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/about.json`);

const UNSection = styled('section')`
    padding: 7.5vh 2vw;
    background: #B6114D;
`;

const UNSDGSection = () => (
  <UNSection>
    <div className="py-3 text-center px-2">
      <h3 className="text-lg lg:text-2xl text-white mb-2">{data.CoverImage3.header}</h3>
      <img
        alt="United Nations Sustainable Development Goals"
        src={`${eventID}/${data.CoverImage3.headerImage}`}
        draggable="false"
        style={{ maxHeight: '150px' }}
        className="inline"
      />
    </div>
    <div className="flex justify-center text-center items-center">
      <div style={{ maxWidth: '900px', width: '100%' }}>
        <div className="flex flex-wrap justify-center items-center">
          {data.CoverImage3.subImages.map((img, i) => (
            <div className="w-1/2 md:w-1/4 p-2" key={i}>
              <img
                alt={img.alt}
                src={`/${eventID}/${img}`}
                draggable="false"
                className="inline shadow-md rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </UNSection>
);

export default UNSDGSection;