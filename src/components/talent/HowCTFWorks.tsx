import React from "react";
import Graph from "./diversity/graph";

const CTFPedagogy = () => (
    <div id="ctf-pedagogy" className="container mx-auto py-12 px-4">
        <div className="w-full flex justify-center items-center flex-col pt-16">
            <h1>CTFs are not just a contest.</h1>
            <h4 className="mt-3 text-center">
                It’s probably among
                <div className="text-primary">the best pedagogy for learning,</div>
                especially for beginner students to learn complex concepts.
            </h4>
        </div>

        <div className="mt-24 mb-32 flex">
            <Graph />

            <ul className="w-full md:w-2/3 leading-loose font-medium md:ml-4">
                <li>
                    It is a <span>well-established & proven pedagogy</span> to teach students, especially beginners,
                    to learn cyber-security,  which is usually challenging to teach due to its interdisciplinary nature.
                </li>
                <li className="mt-2">
                    <div>There are over 24k active CTF teams globally today.</div>
                    Winning the most popular CTF – DEFCON, is as hard as winning an Olympics Gold. Our team bi0s
                    currently ranked 14th globally.
                </li>
            </ul>
        </div>

        <div className="mt-32 mb-12 md:flex w-full">
            <div className="mr-12 w-full md:w-1/2">
                <h1 className="font-semibold text-primary">
                    How CTF Works?
                </h1>
                <ul className="leading-loose font-medium">
                    <li>
                        In Capture-The-Flag (CTF) game format, the players are tasked to do some activity, upon
                        completion
                        they receive a flag which they submit as proof of work.
                    </li>
                    <li className="mt-2">
                        In our CTFs, these challenges usually involve learning some cybersecurity topics, tools &
                        exploiting
                        some vulnerabilities, hands-on using their critical thinking & problem-solving skills.
                    </li>
                    <li className="mt-2">
                        Challenges present scenarios that make students learn fundamental concepts in secure
                        programming,
                        cryptography, reverse engineering, forensics, and web security.
                    </li>
                    <li className="mt-2">
                        Players need to analyze problems, devise strategies, tinker with tools & browse resources, use
                        creative & critical thinking to find out solutions, often working together with a team.
                    </li>
                </ul>
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <img src={require('../../assets/images/talent-incubation/works.png')}
                     alt="How it works" className="w-full rounded-lg" draggable={false}/>
            </div>
        </div>
    </div>
);

export default CTFPedagogy;