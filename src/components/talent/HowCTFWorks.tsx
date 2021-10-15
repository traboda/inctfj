import React from "react";

const CTFPedagogy = () => (
    <div id="ctf-pedagogy" className="container mx-auto py-12 px-4">
        <div className="w-full flex justify-center items-center flex-col py-24">
            <h1>CTFs are not just a contest.</h1>
            <h3 className="mt-3 text-center">
                It’s probably among
                <div className="text-primary">the best pedagogy for learning,</div>
                especially for beginner students to learn complex concepts.
            </h3>
        </div>
        <div className="mt-16">
            <h1 className="font-semibold mt-4 text-primary">CTFs are very popular world-wide</h1>
            <ul className="w-full md:w-2/3 pl-6 list-disc leading-loose font-medium">
                <li>
                    It is a <span>well-established & proven pedagogy</span> to teach students, especially beginners,
                    to learn cyber-security,  which is usually challenging to teach due to its interdisciplinary nature.
                </li>
                <li>
                    <div>There are over 24k active CTF teams globally today.</div>
                    Winning the most popular CTF – DEFCON, is as hard as winning an Olympics Gold. Our team bi0s
                    currently ranked 14th globally.
                </li>
            </ul>
        </div>
        <div className="mt-16 md:flex items-center justify-center w-full">
            <div className="mr-12">
                <h1 className="font-semibold mt-4 text-primary">
                    How CTF Works?
                </h1>
                <ul className="w-full md:w-2/3 pl-6 list-disc leading-loose font-medium">
                    <li>
                        In Capture-The-Flag (CTF) game format, the players are tasked to do some activity, upon
                        completion
                        they receive a flag which they submit as proof of work.
                    </li>
                    <li>
                        In our CTFs, these challenges usually involve learning some cybersecurity topics, tools &
                        exploiting
                        some vulnerabilities, hands-on using their critical thinking & problem-solving skills.
                    </li>
                    <li>
                        Challenges present scenarios that make students learn fundamental concepts in secure
                        programming,
                        cryptography, reverse engineering, forensics, and web security.
                    </li>
                    <li>
                        Players need to analyze problems, devise strategies, tinker with tools & browse resources, use
                        creative & critical thinking to find out solutions, often working together with a team.
                    </li>
                </ul>
            </div>
            <div className="w-full md:w-1/4">
                <img src={require('../../assets/images/talent-incubation/works1.png')}
                     alt="How it works" className="w-full" draggable={false}/>
                <img src={require('../../assets/images/talent-incubation/works2.png')}
                     alt="How it works" className="w-full" draggable={false}/>
            </div>
        </div>
    </div>
);

export default CTFPedagogy;