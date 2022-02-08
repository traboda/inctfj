import React from "react";
import Graph from "./diversity/graph";

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/talentIncubation.json`);


const CTFPedagogy = () => (
    <div id="ctf-pedagogy" className="container mx-auto py-12 px-4">
        <div className="w-full flex justify-center items-center flex-col pt-16">
            <h1>{data.header[0]}</h1>
            <h4 className="mt-3 text-center">
                {data.header[1]}
                <div className="text-primary">{data.header[2]}</div>
                {data.header[3]}
            </h4>
        </div>

        <div className="mt-24 mb-32 flex">
            <Graph />

            <ul className="w-full md:w-2/3 leading-loose font-medium md:ml-4">
                {data.subHeader.map((subHeader, index) => (
                    <li>
                        <div>
                            {subHeader}
                        </div>
                    </li>
                ))}
            </ul>
        </div>

        <div className="mt-32 mb-12 md:flex w-full">
            <div className="mr-12 w-full md:w-1/2">
                <h1 className="font-semibold text-primary">
                    {data.subhead1.header}
                </h1>
                <ul className="leading-loose font-medium">
                    {data.subhead1.texts.map((text, index) => (
                        <li>
                            {text}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <img src={require(`../../data/${eventID}/${data.subhead1.image}`)}
                     alt="How it works" className="w-full rounded-lg" draggable={false}/>
            </div>
        </div>
    </div>
);

export default CTFPedagogy;