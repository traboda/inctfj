import React from "react";
import "chartjs-plugin-datalabels";
import { Bar } from 'react-chartjs-2';

const EducationAccessibility = () => (
    <div>
        <div className="md:flex mt-32">
            <div className="w-full md:w-3/5 md:mr-6">
                <h1 className="font-semibold mt-4 text-primary">Making Learning Cyber Security Accessible
                    Everywhere</h1>

                <div className="mt-6">
                    <ul className="leading-loose font-medium md:mr-4">
                        <li>
                            A reason why we started InCTF is to make learning CyberSecurity accessible in the
                            unprivileged
                            sections of society.
                        </li>
                        <li className="mt-2">
                            From our own experience running the bi0s community, we have found that high-quality
                            cyber-security
                            training and resources don't come cheap and thus are out of reach for many.
                        </li>
                        <li className="mt-2">
                            With InCTF Junior & our initiatives, we are constantly striving to bridge this gap and
                            provide
                            this
                            platform of equal opportunities for everyone.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-full md:w-2/5">
                <Bar
                    data={{
                        labels: [2015, 2016, 2017, 2018, 2019],
                        datasets: [
                            {
                                label: 'Rural',
                                data: [87, 247, 370, 800, 1276],
                                backgroundColor: '#4472c4'
                            },
                            {
                                label: 'Urban',
                                data: [603, 626, 789, 1919, 1869],
                                backgroundColor: '#ed7d31'
                            }
                        ]
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
                <img src={require('../../../assets/images/talent-incubation/bridge_the_gap.png')} alt="Bridge the gap"
                     className="w-full"/>
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
                <h1 className="font-semibold text-primary">Our Initiatives to Bridge the Gap.</h1>
                <ul className="col-span-2 leading-loose font-medium mt-4">
                    <li>
                        We have been focusing to further penetrate this opportunity to the government-run schools and
                        those in the tier-3 cities & rural regions of India and have managed to bring participants from
                        several new schools every year.
                    </li>
                    <li className="mt-2">
                        For this, we conduct free workshops & training specially for these schools, often actively
                        involving their teachers and parents, and try to set up a cyber-security club/community there.
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default EducationAccessibility;