import React from 'react';
import styled from "@emotion/styled";

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";
import Footer from "../src/components/shared/Footer";
import PageHeader from "../src/components/PageHeader";
import PageFooterExplorer from "../src/components/PageFooterExplorer";

const RulesContainer = styled('div')`
    padding: 1rem 2vw;
    h2 {
      margin: 1.35rem 0;
      font-size: calc(1.2rem + 0.35vw);
    }
    h3 {
      font-size: calc(1.15rem + 0.25vw);
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 1rem;
    }
    ul {
        padding-left: 1.5rem;
        list-style: square;  
        margin-bottom: 1.5rem;
        li {
          margin-bottom: 0.5rem;
        }
    }
`;

const RulePage = () => {

    return <Base meta={{ title: 'Rules' }}>
        <TopBar darkenOnSidebar includeSpace />
        <PageHeader
            title="Rules"
            breadcrumb={[
                {
                    title: 'Championship',
                    link: '/championship'
                },
                {
                    title: 'Rules',
                    link: '/rules',
                    isActive: true
                }
            ]}
        />
        <div className="flex justify-center p-4">
            <RulesContainer className="container">
                <div style={{ width: '100%', maxWidth: '900px' }}>
                    <h1>Rules for Student Participants</h1>
                    <h2>Eligibility for Participation</h2>
                    <p>
                        1.All participating students should be permanent residents and citizens of the Republic of India.     
                    </p>
                    <p>
                        2.All participants should be a student who has not completed a bachelor's degree.     
                    </p>
                    <h2>Rules for the final contest</h2>
                    <ul>
                            <li><b>Beginners are only eligible for prizes.</b></li>
                            <li><b>Teams with any member having more than 1.5/2 years in CTF is not a beginner Note: this is not applicable for inctf professionals</b></li>
                            <li><b>Prizes will be distributed within 3 month after the CTF</b></li>

                            <li><b>Team should not carry out any attacks on the CTF infrastructure.</b></li> 
                            <li><b>No DoS, DdoS, bruteforcing, automated scans or generating any large amount of traffic by any other means on any challenges and other contest infrastructure. It is not permitted and is never intended in any question.</b></li> 
                            <li><b>No collaboration between different teams and flag sharing is not allowed.</b></li> 
                            <li><b>Participants/Teams are NOT allowed to publish solutions during the course of game (blog, GitHub, YouTube, etc)</b></li> 
                            <li><b>Any participants/Teams found violating the above rules will be disqualified from the contest</b></li> 
                            <li><b>Team InCTF reserves the right to introduce new rules or modify existing rules during or after the contest. Any such rules will be applicable to all the participants in the contest</b></li> 
                            <li><b>The decision of Team InCTF will be final</b></li> 
                            <li> <b>By participating in the contest, you agree that you have read the above rules and fully agree to adhere to them.</b></li> 
                        
                    </ul>
                    {/* <h2>Rules for Self-Study Students</h2>
                    <ul>
                        <li>Students who are doing self-study and are not enrolled in any education institution can participate in InCTF individually or as a team.</li>
                        <li>The student, and in case of team formation, the team shall not be affiliated with any institution or state.</li>
                        <li>All other members of the team shall be students either doing self-study or be enrolled in any educational institution pursuing a bachelors/Masters/PhD program.</li>
                        <li>To register as a self-study student, the student needs to contact at inctf@am.amrita.edu and need to complete verification. </li>
                    </ul>
                    <h2>Qualification Rules to Finals</h2>
                    <ul>
                        <li>Minimum Eligibility Rules: A team should solve at least 5 challenges in-order to qualify for the finals.</li>
                        <li>Scoreboard Toppers - The top 30 teams with minimum eligibility on the scoreboard shall be selected for the finals.</li>
                        <li>Regional Toppers - The top 5 teams with minimum eligibility from each state shall be selected for the finals. This is in-addition to, and does not include teams already qualified as scoreboard toppers.</li>
                        <li>Women in CyberSecurity Initiative - The top 25 women-only teams with minimum eligibility shall be selected for the finals. This is in-addition to, and does not include  women-only teams that qualified as scoreboard toppers and regional toppers from their respective states.</li>
                        <li>Self-Study Students: Top 25 self-study students/student teams with minimum eligibility shall be selected for the finals. This is in-addition, and does not include those already qualified as scoreboard toppers.</li>
                        <li>All team members shall need to submit their ID cards for verification. Teams failing to complete ID card verification of all its members in due time shall be disqualified, and the next eligible team from their quota shall be considered.</li>
                    </ul> */}
                    <h1>Rules for Professionals</h1>
                    <h2>Eligibility for Participation </h2>
                    <p>All participating professionals should be permanent residents and citizens of the Republic of India.</p>
                    <p>All participants should be full-time employees of an incorporated company.</p>
                    {/* <h2>Team Formation Rules</h2>
                    <ul>
                        <li><b> Professionals working in India are eligible for prizes Team can have Max of 5 and Min of 2 members.</b></li>
                        <li><b>Teams can be formed in any manner.</b></li>
                        <li><b>Top 20 teams from from the qualifier round will be selected for the finals.</b></li>
                        <li><b>The teams should score above 500 points to qualify for the final selection.</b></li>
                        <li><b>Professional teams cannot club with the student team.</b></li>
                        <li><b>One participant cannot be the member of more than one team.</b></li>
                        <li><b>Teams selected for the finals will be finalised only after professional ID card verification of all the members.</b></li>
                    </ul> */}

                   
                </div>
            </RulesContainer>
        </div>
        <PageFooterExplorer
            items={[
                {
                    "title": "FAQ",
                    "text": "Answers to common questions",
                    "link": "/faq"
                },
                {
                    "title": "Promote",
                    "text": "Promote InCTF",
                    "link": "/promote"
                },
                {
                    "title": "Our Reach & Impact",
                    "text": "See our reach & impact",
                    "link": "/about#our-reach"
                },
            ]}
        />
        <Footer />
    </Base>
}

export default RulePage;