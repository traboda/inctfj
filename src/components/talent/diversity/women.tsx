import React from "react";

const WomenInCyberSecuritySection = () => (
    <div>
        <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/3">
                <img src={require('../../../assets/images/talent-incubation/women_in_cyberrsecurity.jpg')}
                     alt="Talent incubation" className="w-full" draggable={false}/>
                <h1 className="font-semibold mt-4 text-primary">Women in CyberSecurity</h1>
            </div>
            <ul className="w-full md:w-2/3 pl-12 list-disc leading-loose font-medium">
                <li>
                    There is a disproportionate representation of women pursuing careers in Computing, and especially in
                    Cyber-Security industry.
                </li>
                <li>
                    Women comprise only about <span
                    className="text-primary">20% of cyber-security workforce today.</span>
                </li>
                <li>
                    “Women often don’t see cybersecurity as viable career paths because they’re often considered
                    masculine professions.” - Jessica Ortega, SiteLock
                </li>
                <li>
                    We are impassioned & committed to promoting aspiring girls in Cyber-Security.
                </li>
                <li>
                    <span className="text-primary">By presenting to them the broad & exciting possibilities in cyber-security when young, we hope to
                        create a lasting impact on them right from school.</span>
                </li>
            </ul>
        </div>
        <div className="mt-16 md:flex items-center">
            <div className="mr-12">
                <h1 className="font-semibold text-primary">Our Initiatives for</h1>
                <h3 className="font-semibold text-primary">Women In CyberSecurity</h3>
                <ul className="pl-6 mt-6 list-disc leading-loose font-medium">
                    <li>
                        Earlier this year, we hosted the first-ever <span className="text-primary">ShaktiCon</span> - cyber-security conference & training
                        programme <span className="text-primary">exclusively for Women</span>, bringing in over 50
                        distinguished speakers & trainers for the 3-day conference.
                    </li>
                    <li>
                        We have been <span className="text-primary">recognizing & giving special prizes to the top-ranked women hackers</span> and <span className="text-primary">special
                        scholarships</span> & training programmes for promising
                        girl talents through team Shakti.
                    </li>
                    <li>
                        We have seen the proportion of women participants grow from 10% to above 20% over the years and
                        are
                        working
                        towards our target of achieving 50% women participants by 2025.
                    </li>
                </ul>
            </div>
            <div className="w-full md:w-1/5">
                <img src={require('../../../assets/images/talent-incubation/top_women_hackers.png')}
                     alt="Top women hackers" className="w-full" draggable={false}/>
                <img src={require('../../../assets/images/talent-incubation/shakticon.jpg')}
                     alt="Shakticon" className="w-full" draggable={false}/>
            </div>
        </div>
    </div>
);

export default WomenInCyberSecuritySection;