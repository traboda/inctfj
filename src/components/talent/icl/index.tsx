import React from "react";

const IndianCyberLeague = () => (
    <div id="indian-cyber-league" className="container mx-auto pb-12 pt-8 px-4">
        <div className="w-full flex flex-col items-center my-8 text-center">
            <img src={require('../../../assets/images/icons/trophy.jpeg')} alt="Trophy" width={100}/>
            <h1 className="font-semibold text-primary mt-4">Indian Cyber League</h1>
            <h3>Keeping Interests High</h3>

            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-8 w-full">
                <div className="bg-gray-100 rounded-lg p-4 flex justify-center items-center text-center font-semibold">
                    India CTF (InCTF) Nationals
                </div>
                <div className="bg-gray-100 rounded-lg p-4 flex justify-center items-center text-center font-semibold">
                    India CTF (InCTF) Regional & State-Levels
                </div>
                <div className="bg-gray-100 rounded-lg p-4 flex justify-center items-center text-center font-semibold">
                    School Franchise CTFs
                </div>
                <div className="bg-gray-100 rounded-lg p-4 flex justify-center items-center text-center font-semibold">
                    School-Level CTFs
                </div>
            </div>
        </div>

        <ul className="leading-loose font-medium">
            <li>
                To make even more students attracted and to keep their interests high even after a InCTF, we are
                planning to host more CTFs for school students collaborating with schools & other institutions –
                Indian Cyber League, that shall build a CTF ecosystem in Indian schools.
            </li>
            <li className="mt-3">
                As a first, we hosted the first Amrita Techie Challenge, an inter-school CTF for Amrita Vidyalayams
                in May, and are exploring other school franchises for such an opportunity.
            </li>
            <li className="mt-3">
                By having rewarding CTFs more regularly and making students participating in it with one's school
                mates in teams mentored by senior students, we hope to emulate the success of team bi0s which too
                had started, and still runs like this.
            </li>
        </ul>
    </div>
);

export default IndianCyberLeague;