import React from 'react';
import Image from 'next/image';


const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/sponsors`).default;

const SponsorsSection = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      {data.map((sponsor, index) => (
        <div className="flex flex-wrap" key={index}>
          <div className="inctfj-sponsors text-primary font-semibold w-full p-0 mt-3 mb-3 opacity-80 text-xl text-center">{sponsor.label}</div>
          <div className="w-full flex justify-center">
            <p className="text-center opacity-8 mb-3">
              {sponsor.desc}
            </p>
          </div> 
          <div className="flex flex-wrap mx-0">
            {sponsor.sponsors.map((sponsor, index) => (
              <div className="w-1/3 items-center flex justify-center p-1 md:p-3" key={index}>
                <a href={sponsor.link} target="_blank" rel="noopener noreferrer" style={{ display:'block' }}>
                  <Image
                    src={`/inctf/${sponsor.path}`}
                    draggable="false"
                    alt="Sponsor Logo"
                    className="h-16 md:h-28 max-w-full object-contain"
                    height={200}
                    width={300}
                  />
                  {sponsor?.desg && (<div className="text-sm mt-3 font-light">{sponsor.desg}</div>)}
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default SponsorsSection;