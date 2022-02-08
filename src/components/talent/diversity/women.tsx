import React from "react";

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../../data/${eventID}/talentIncubation.json`);

const WomenInCyberSecuritySection = () => (
    <div>
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/3">
                <img src={require(`../../../data/${eventID}/${data.subhead4.image}`)}
                     alt="Talent incubation" className="w-full rounded-lg" draggable={false}/>
            </div>
            <div className="w-full md:w-2/3 md:pl-10 mt-4 md:mt-0">
                <h1 className="font-semibold text-primary">{data.subhead4.header}</h1>
                <ul className="leading-loose font-medium">
                    {data.subhead4.texts.map((text, index) => (
                        <li>
                            <br />
                            {text}
                            <br />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="mt-32 md:flex items-center">
            <div className="mr-12">
                <h1 className="font-semibold text-primary">{data.subhead5.header}</h1>
                <ul className="mt-6 leading-loose font-medium">
                {data.subhead5.texts.map((text, index) => (
                    <li>
                        <br />
                        {text}
                        <br />
                    </li>
                ))}
                </ul>
            </div>
            <div className="w-full md:w-1/3">
                <img src={require(`../../../data/${eventID}/${data.subhead5.image}`)}
                     alt="Top women hackers" className="w-full rounded-lg" draggable={false}/>
                {/*<img src={require('../../../assets/images/talent-incubation/shakticon.jpg')}*/}
                {/*     alt="Shakticon" className="w-full" draggable={false}/>*/}
            </div>
        </div>
    </div>
);

export default WomenInCyberSecuritySection;