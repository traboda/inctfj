import React from 'react';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/talentIncubation.json`);

const CyberClubsInSchools = () => (
  <div id="cyber-clubs" className="container mx-auto py-12 px-4 flex flex-wrap">
    <div className="w-full md:w-1/2">
      <h1 className="font-semibold text-primary">
        {data.subhead2.header}
      </h1>
      <ul className="leading-loose font-medium mt-6 md:mr-10">
        {data.subhead2.texts.map((text, index) => (
          <li>
            {text}
          </li>
        ))}
      </ul>
    </div>
    <div className="w-full md:w-1/2">
      <h3 className="font-semibold text-primary">{data.subhead3.header}</h3>
      <ul className="mt-4 leading-loose font-medium">
        {data.subhead3.texts.map((text, index) => (
          <li>
            {text}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default CyberClubsInSchools;