import React from "react";

const CyberClubsInSchools = () => (
    <div id="cyber-clubs" className="container mx-auto py-12 px-4 flex flex-wrap">
        <div className="w-full md:w-1/2">
            <h1 className="font-semibold text-primary">
                Building Self-Sustaining
                <div>Cyber Clubs in Schools</div>
            </h1>
            <ul className="leading-loose font-medium mt-6 md:mr-10">
                <li>
                    Due to the absence of an ecosystem or peer group, the students often get stuck and don't
                    continue learning cyber-security after the InCTF as often they have no idea or motivation to
                    continue until the next InCTF.
                </li>
                <li className="mt-2">
                    To address this, since the last few years, we have been working closely with Amrita Vidyalayams
                    across the country helping to set up cyber-security clubs at their school for forming peer groups
                    of these enthusiasts with the help of their teachers.
                </li>
                <li className="mt-2">
                    We have seen that schools with such peer-group or clubs send students every year,
                    who often come out as winners.
                </li>
            </ul>
        </div>
        <div className="w-full md:w-1/2">
            <h3 className="font-semibold text-primary">Features of Cyber Clubs</h3>
            <ul className="mt-4 leading-loose font-medium">
                <li>
                    The club members will play CTFs together. Therefore, they will also learn & prepare for it
                    together creating ecosystem for shared learning, collaboration, team-work, accountability & leadership.
                </li>
                <li className="mt-2">
                    Senior member students will mentor juniors for growing their cyber-skills, by passing
                    down their knowledge.
                </li>
                <li className="mt-2">
                    The club members will also promote cyber-awareness, cyber-safety etc. at their schools,
                    through events & sessions.
                </li>
                <li className="mt-2">
                    Club members will have access to learning platform & resources. They also attend workshops,
                    talks etc. as part of the Indian Cyber League ecosystem.
                </li>
                <li className="mt-2">
                    A dedicated school faculty, and mentors from bi0s/partners will mentor & guide students.
                </li>
            </ul>
        </div>
    </div>
);

export default CyberClubsInSchools;