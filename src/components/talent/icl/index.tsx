import React from 'react';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../../data/${eventID}/talentIncubation.json`);

const IndianCyberLeague = () => (
  <div id="indian-cyber-league" className="container mx-auto pb-12 pt-8 px-4">
    <div className="w-full flex flex-col items-center my-8 text-center">
      <img src="/assets/images/icons/trophy.jpeg" alt="Trophy" width={100} />
      <h1 className="font-semibold text-primary mt-4">{data.subhead0.header}</h1>
      <h3>{data.subhead0.subHeader}</h3>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-8 w-full">
        {data.subhead0.CTFs.map((ctf, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-lg p-4 flex justify-center items-center text-center font-semibold"
          >
            {ctf}
          </div>
        ))}
      </div>
    </div>

    <ul className="leading-loose font-medium">
      {data.subhead0.texts.map((text, i) => (
        <li key={i}>
          {text}
        </li>
      ))}
    </ul>
  </div>
);

export default IndianCyberLeague;