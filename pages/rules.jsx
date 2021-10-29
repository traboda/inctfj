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
                    
                    <h2>Eligibility for Participation</h2>
                    <p>
                        1.All participating students should be permanent residents and citizens of the Republic of India.     
                    </p>
                    <p>
                        2.All participants should be a student who has not completed a bachelor's degree.     
                    </p>
                    <h2>Team Formation Rules</h2>
                    <ul>
                        <li>A team should consist of 2-5 members.</li>
                        <li>An individual student can only participate in the contest representing one team.</li>
                        <li>A team should be affiliated to an Indian university/college/educational institution.</li>
                        <li>All members of the team should be active students pursuing a bachelors/Masters/PhD programme in the team’s affiliated institution.</li>
                        <li>All team members shall need to provide ID cards showing their active enrollment in the institution for verification upon qualification to the finals.</li>
                        <li>The state of the team considered for the regional qualification shall be the state of the affiliated institution.</li>
                        <li>There is no restriction on the number of teams that can register from a single institution.</li>
                    </ul>
                    <h2>Rules for Self-Study Students</h2>
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
                    </ul>
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
                    "text": "Promote InCTF Junior",
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