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
                    <p>
                        The India Capture The Flag Junior (“InCTF Jr”, “InCTFj”, “Contest”) is annual cyber-security
                        championship organized for school students in India by Amrita Vishwa Vidyapeetham in association
                        with team bi0s & Traboda CyberLabs Private Limited (“Organizers”). By participating in the Contest,
                        all Participants agree to the following rules -
                    </p>
                    <h2>Eligibility for Participation</h2>
                    <p>
                        Each individual who participates in the competition (“Participant”) in order to be eligible for the finals / prizes must be:
                    </p>
                    <ul>
                        <li>not more than nineteen (19) years of age upon your date of registration for the Contest on the Contest website.</li>
                        <li>a citizen of the Republic of India</li>
                        <li>must not have completed 12th or equivalent grade of school.</li>
                    </ul>
                    <p>
                        A Participant is expected to be enrolled for any pre-university (high school or secondary school)
                        programme when they register. However, in case the Participant is undergoing home/private schooling,
                        distant education or other non-traditional programmes of schooling, they are required to inform the
                        organizers about the same through emailing inctfj@am.amrita.edu. Such a claim shall be manually
                        verified by the Organizers, and unless approved, the Participant shall not be considered eligible.
                    </p>
                    <p>
                        If the Participant is under the age of eighteen (18) years, they must obtain the consent of their
                        parent or legal guardian to participate.
                    </p>
                    <p>
                        The Organizers reserve the right to verify a Participant’s eligibility and to adjudicate on any
                        dispute that may arise at any time. Participants agree to provide the Organizers with the following
                        proof of eligibility upon request by the Organizers -
                    </p>
                    <ul>
                        <li>Aadhar Card (UIDAI) / Indian Passport</li>
                        <li>School ID Card</li>
                    </ul>
                    <p>
                        The Organizers may request for the proofs upon a Participant’s qualification to the finals,
                        and these shall be thoroughly verified if you win any prizes. Any refusal or failure to timely
                        provide such proof may result in disqualification of the Participant from the Contest.
                    </p>
                    <p>
                        An individual not meeting the eligibility criteria is welcomed to participate in the contest for
                        learning and practice, however, they shall not be eligible for qualification to the finals
                        or for any prizes.
                    </p>
                    <h2>Qualification to National Finals</h2>
                    <p>An eligible participant may qualify for the national-level finals of the InCTF Junior, through following means - </p>
                    <h3>(1) Automatic Qualification</h3>
                    <p>
                        An eligible participant shall automatically qualify for the national-level finals of InCTF Junior,
                        if she/he completes ANY ONE of the following -
                    </p>
                    <ul>
                        <li><b>Finishes in Top 50</b> - Finishes in the Top 50 of the scoreboard for the qualifiers.</li>
                        <li><b>100% Completion</b> - Completes (and successfully submits flags for) all challenges in the qualifiers</li>
                    </ul>
                    <h3>(2) State/Regional Quota for Qualifications</h3>
                    <p>
                        In order to promote diversity and provide equitable opportunities for participants from various regions,
                        in addition to the participants who qualified through (1), the following
                        state/regional quota shall be available for eligible participants from each state/regions for
                        qualifying for the national-level finals -
                    </p>
                    <ul>
                        <li><b>Top 10 in Resident State</b> - Top 10 participants from each state in the
                            qualifiers with a minimum of 3500 points in addition to those qualified already through (1)
                        </li>
                        <li>
                            <b>Top 10 in Resident Country (for NRI Students)</b> -
                            In case of eligible participants (Citizens of India) residing & studying outside India, Top 10 participants from
                            each country in the qualifiers with a minimum of 3500 points in addition to those qualified already through (1)
                        </li>
                    </ul>
                    <h3>(3) Shakti25 - Women in CyberSecurity Quota for Qualifications</h3>
                    <p>
                        InCTF Junior is committed to inspiring, upskilling, and nurturing young women talents in
                        cyber-security, and providing them an empowering platform to showcase their talents. To promote
                        and provide equitable opportunities for women participants,  the following special quota is
                        available for eligible women participants for qualifying for the national-level finals -
                    </p>
                    <ul>
                        <li>
                            <b>Shakti25 (Top 25 Women Participants)</b> - Top 25 Women Participants in qualifiers
                            round in addition to those qualified from (1) & (2)
                        </li>
                    </ul>
                    <h4>(4) Qualification for Home-Schooling & Self-Study Students</h4>
                    <p>
                        InCTF Junior is open and inclusive programme, and we encourage all young students to participate in it,
                        regardless of whether they are enrolled in a traditional schooling system. However, such participants
                        need to inform the organizers and need to complete verification for being eligible. Once eligible,
                        these participants will have the following special quota for qualifying for the national-level finals -
                    </p>
                    <ul>
                        <li>
                            <b>Top 10 Home-Schooling Students</b> - Top 10 home-schooling/private-tutored participants
                            in the qualifiers with a minimum of 3500 points in addition to (1), (2) & (3)
                        </li>
                    </ul>
                    <h2>Cheating</h2>
                    <ul>
                        <li>
                            InCTF Jr is an Individual competition. Participants are strictly forbidden to help or obtain
                            help from anyone through any medium, directly or indirectly, during the Contest.
                        </li>
                        <li>
                            If found to be cheating, the Participant shall be disqualified from the Contest, with immediate effect.
                        </li>
                    </ul>
                    <h3>Sharing of Flag/Solution to Others</h3>
                    <ul>
                        <li>
                            Answers, solutions, write ups or overly-revealing hints to any challenges should not be
                            publicly posted or otherwise shared with anyone until the Contest is over.
                        </li>
                        <li>
                            Sharing the flags, or providing overly-revealing hints with anyone through any medium
                            during the period of the Contest shall be considered as cheating.
                        </li>
                    </ul>
                    <h3>Accepting Flag/Solution From Others</h3>
                    <ul>
                        <li>
                            Accepting direct assistance, receiving a flag or solution to a challenge from anyone is
                            considered cheating, and is strictly prohibited during the Contest.
                        </li>
                        <li>
                            While using tools, references and snippets publicly available on the Internet is allowed,
                            a participant shall not ask people, forums etc. on the internet for help for solving a challenge.
                        </li>
                    </ul>
                    <h2>Certificates</h2>
                    <p>A Participant may be eligible for the following types of certificates -</p>
                    <ul>
                        <li>
                            <b>Participation Certificate</b> - shall be issued to all eligible Participants who have
                            at least solved 1 challenge in the Contest qualifiers round. This shall be a digital
                            certificate, and shall be emailed at the end of the Contest.
                        </li>
                        <li>
                            <b>Certificate of Appreciation</b> -  shall be issued to all eligible Participants who have
                            at least completed solving 35% of challenges released during the Contest qualifiers round.
                            This shall be a digital certificate, and shall be emailed at the end of the Contest.
                        </li>
                        <li>
                            <b>Certificate of Excellence</b> - shall be issued to all eligible Participants who have
                            qualified for the national level finals of the Contest. This shall be a physical certificate,
                            and shall be mailed to the address provided by the Participant.
                        </li>
                        <li>
                            <b>Certificate of Achievement</b> - shall be issued to eligible Participants who are winners
                            of some prize/award at the national level finals of the Contest. This shall be a physical
                            certificate, and shall be mailed to the address provided by the Participant.
                        </li>
                    </ul>
                    <p>
                        The certificates will be generated/printed based on the profile information provided by the
                        Participant during their registration. It is the sole responsibility of the Participant to ensure
                        that this information is correct, and the Organizers shall not be liable for any mistakes
                        after the certificates have been generated/printed.
                    </p>
                    <p>
                        A Participant is requested to ensure that the information provided by them during the registration
                        is correct, and they shall get the opportunity to edit it until the Contest starts. Once the
                        Contest has started, the profile information of the user shall be locked. In case any changes
                        are required, the Participant must inform the Organizers via inctfj@am.amrita.edu so that they
                        can be corrected. Requests for correction in profile information shall be entertained for
                        a maximum of 7 days after the end of the Contest, and any such corrections shall be
                        accepted/made at the sole discretion of the Organizers.
                    </p>
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