import React from 'react';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

const LandingAboutInCTF = () => (
  <section className="container mx-auto py-16 px-4">
    <div>
      <div className="md:hidden flex justify-center mb-6">
        <div className="rounded-lg p-2 bg-blue-100">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/5">
              Have you got stuck? Need Help? 
              {' '}
              <wbr />
              <span className="inline-block">
                Join our discord server, ask your doubts & get support from our experts.
              </span>
            </div>
            <div className="md:w-1/5 flex items-center md:my-0 my-3 md:px-0 justify-end">
              <a href="/discord" className="bg-blue-800 mb-0 py-3">
                Join Discord Now 
                {' '}
                <i className="fa fa-chevron-right ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mx-0">
        <div className="md:w-2/3 p-2">
          <h2 className="mb-6 text-4xl">
            {data.LandingAboutInCTF[0]}
            <div className="text-primary">{data.LandingAboutInCTF[1]}</div>
            {data.LandingAboutInCTF[2]}
          </h2>
          {data.LandingDescINCTF.map((item, index) => (
            <p className="mb-2 text-justify text-lg w-[720px] max-w-full" key={index}>
              {item}
            </p>
          ))}
        </div>
        <div className="md:w-1/3 flex justify-start items-center">
          <ul className="flex flex-col text-lg lg:text-xl gap-3">
              {data.LandingHighlights.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default LandingAboutInCTF;