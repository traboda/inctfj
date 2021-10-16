import React from "react";

const IndianCyberLeague = () => (
    <div id="indian-cyber-league" className="container mx-auto py-12 px-4 md:flex justify-between">
        <div>
            <h1 className="font-semibold text-primary">
                Keeping Interests High
                <div>through Indian Cyber League</div>
            </h1>
            <ul className="pl-6 mt-6 list-disc leading-loose font-medium">
                <li>
                    To make even more students attracted and to keep their interests high even after a InCTF, we are
                    planning to host more CTFs for school students collaborating with schools & other institutions –
                    Indian Cyber League, that shall build a CTF ecosystem in Indian schools.
                </li>
                <li>
                    As a first, we hosted the first Amrita Techie Challenge, an inter-school CTF for Amrita Vidyalayams
                    in May, and are exploring other school franchises for such an opportunity.
                </li>
                <li>
                    By having rewarding CTFs more regularly and making students participating in it with one's school
                    mates in teams mentored by senior students, we hope to emulate the success of team bi0s which too
                    had started, and still runs like this.
                </li>
            </ul>
        </div>

        <div className="w-full md:w-1/4">
            <img src={require('../../../assets/images/talent-incubation/keeping_interests.png')} alt="Keeping interests high"/>
        </div>
    </div>
);

export default IndianCyberLeague;