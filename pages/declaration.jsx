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

const DeclarationPage = () => {

    return <Base meta={{ title: 'Self Declaration' }}>
        <TopBar darkenOnSidebar includeSpace />
        <PageHeader
            title="Self Declaration for Winners"
            breadcrumb={[
                {
                    title: 'Championship',
                    link: '/championship'
                },
                {
                    title: 'Self Declaration',
                    link: '/declaration',
                    isActive: true
                }
            ]}
        />
        <div className="flex justify-center p-4">
            <RulesContainer className="container">
                <div className="flex justify-center">
                    <div style={{ width: '100%', maxWidth: '600px' }}>
                        <div>
                            <p>
                                Please send us a signed copy the following self-declaration form filling
                                the bank account details any one of the team member. (agreed by all the team members)
                            </p>
                        </div>
                        <div className="bg-yellow-50 shadow p-4 md:p-6 xl:p-8 rounded-xl">

                            <h2>SELF DECLARATION</h2>
                            <p style={{ lineHeight: 1.75 }}>
                                I <span className="border-1 p-1 rounded bg-blue-100">YOUR NAME</span>,
                                team member of <span className="border-1 p-1 rounded bg-blue-100">TEAM NAME</span>,
                                student/employee of <span className="border-1 p-1 rounded bg-blue-100">COLLEGE/ORGANIZATION NAME</span>
                                do hereby declare that the cash prize my team received from  Amrita InCTF cyber security
                                competition can be transferred to one of my team member's bank account whose information
                                is provided below.
                            </p>
                            <ul>
                                <li>Account Number:</li>
                                <li>Bank Name:</li>
                                <li>IFSC Code:</li>
                            </ul>
                            <p>
                                I acknowledge that once the Amount is transferred to the above-mentioned account,
                                the organizers of Amrita InCTF, including Amrita Vishwa Vidyapeetham are not
                                responsible for any further actions which happen inside the team.
                            </p>
                            <p>
                                I hereby declare that the information given above is true to the best of my knowledge.
                            </p>
                        </div>
                    </div>
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

export default DeclarationPage;