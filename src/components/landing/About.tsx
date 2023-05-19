import React from 'react';
import Link from 'next/link';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

const LandingAboutInCTF = () => (
  <section className="container mx-auto py-20 px-4">
    <div>
      <div className="md:hidden flex justify-center mb-6">
        <div className="rounded-lg p-2 bg-blue-100">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/5">
              Have you got stuck? Need Help? 
              {' '}
              <span className="inline-block">
                Join our discord server, ask your doubts & get support from our experts.
              </span>
            </div>
            <div className="md:w-1/5 flex items-center md:my-0 my-3 md:px-0 justify-end">
              <Link href="/discord" className="bg-primary px-4 rounded-lg text-white mb-0 py-3">
                Join Discord Now 
                {' '}
                <i className="fa fa-chevron-right ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        <div className="w-full md:col-span-2">
          <h2 className="mb-6 text-4xl">
            {data.LandingAboutInCTF[0]}
            <div className="text-primary">{data.LandingAboutInCTF[1]}</div>
            {data.LandingAboutInCTF[2]}
          </h2>
          {data.LandingDescINCTF.map((item, index) => (
            <p className="mb-2 md:mb-4 text-base md:text-lg max-w-full" key={index}>
              {item}
            </p>
          ))}
        </div>
        <div className="flex justify-start items-center p-2">
          <ul className="flex flex-col text-lg font-semibold gap-3">
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