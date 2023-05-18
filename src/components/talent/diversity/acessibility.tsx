import React from "react";
import "chartjs-plugin-datalabels";
import { Bar } from 'react-chartjs-2';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../../data/${eventID}/talentIncubation.json`);


const EducationAccessibility = () => (
    <div>
        <div className="md:flex mt-32">
            <div className="w-full md:w-3/5 md:mr-6">
                <h1 className="font-semibold mt-4 text-primary">{data.subhead6.header}</h1>
                <div className="mt-6">
                    <ul className="leading-loose font-medium md:mr-4">
                        {data.subhead6.texts.map((text, index) => (
                            <li>
                                <br />
                                {text}
                                <br />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="w-full md:w-2/5">
                <Bar
                    data={{
                        labels: data.subhead6.labels,
                        datasets: data.subhead6.datasets
                    }}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: 'InCTF Jr Participant Demographics',
                                font: { size: 22 }
                            },
                            datalabels: {
                                display: true,
                                color: "black",
                                align: "end",
                                anchor: "end",
                                formatter: Math.round,
                                font: { size: 14 }
                            }
                        }
                    }}
                />
            </div>
        </div>

        <div className="mt-32 mb-12 flex flex-wrap">
            <div className="w-full md:w-1/4">
                <img src={`/${eventID}/${data.subhead7.image}`} alt="Bridge the gap"
                     className="w-full"/>
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
                <h1 className="font-semibold text-primary">{data.subhead7.header}</h1>
                <ul className="col-span-2 leading-loose font-medium mt-4">
                    {data.subhead7.texts.map((text, index) => (
                        <li>
                            <br />
                            {text}
                            <br />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

export default EducationAccessibility;