import React from "react";

const SponsorNote = () => (
    <div>
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/3">
                <img src={require('../../src/assets/images/sponsors/salesforce.png')}
                     alt="Talent incubation" className="w-full rounded-lg" draggable={false}/>
            </div>
            <div className="w-full md:w-2/3 md:pl-10 mt-4 md:mt-0">
                <h1 className="font-semibold text-primary text-left">Salesforce</h1>
                <ul className="leading-loose font-medium text-left">
                    <li>
                    <span className="text-primary">Salesforce Company Overview</span>
                    </li>
                    <li className="mt-2">
                    Salesforce, the Customer Success Platform and world’s #1 CRM, empowers companies to connect with their customers in a whole new way. The company was founded on three disruptive ideas: a new technology model in cloud computing, a pay-as-you-go business model, and a new integrated corporate philanthropy model. These founding principles have taken our company to great heights, including being named one of Forbes’s “World’s Most Innovative Company” five years in a row and one of Fortune’s “100 Best Companies to Work For” eight years in a row. We are the fastest growing of the top 10 enterprise software companies, and this level of growth equals incredible opportunities to grow a career at Salesforce.
                    </li>
                    <li>
                    <span className="text-primary">Salesforce Company Overview</span>
                    </li>
                    <li className="mt-2">
                    Salesforce, the Customer Success Platform and world’s #1 CRM, empowers companies to connect with their customers in a whole new way. The company was founded on three disruptive ideas: a new technology model in cloud computing, a pay-as-you-go business model, and a new integrated corporate philanthropy model. These founding principles have taken our company to great heights, including being named one of Forbes’s “World’s Most Innovative Company” five years in a row and one of Fortune’s “100 Best Companies to Work For” eight years in a row. We are the fastest growing of the top 10 enterprise software companies, and this level of growth equals incredible opportunities to grow a career at Salesforce.
                    </li>
                </ul>
            </div>
        </div> <br/><br/>
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/3">
                <img src={require('../../src/assets/images/sponsors/salesforce.png')}
                     alt="Talent incubation" className="w-full rounded-lg" draggable={false}/>
            </div>
            <div className="w-full md:w-2/3 md:pl-10 mt-4 md:mt-0">
                <h1 className="font-semibold text-primary">Women in CyberSecurity</h1>
                <ul className="leading-loose font-medium">
                    <li>
                        There is a disproportionate representation of women pursuing careers in Computing, and especially in
                        Cyber-Security industry.
                    </li>
                    <li className="mt-2">
                        Women comprise only about <span
                        className="text-primary">20% of cyber-security workforce today.</span>
                    </li>
                    <li className="mt-2">
                        “Women often don’t see cybersecurity as viable career paths because they’re often considered
                        masculine professions.” - Jessica Ortega, SiteLock
                    </li>
                    <li className="mt-2">
                        We are impassioned & committed to promoting aspiring girls in Cyber-Security.
                    </li>
                    <li>
                        <span className="text-primary">By presenting to them the broad & exciting possibilities in cyber-security when young, we hope to
                            create a lasting impact on them right from school.</span>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
);

export default SponsorNote;