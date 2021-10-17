import React from 'react';
import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";
import Footer from "../src/components/shared/Footer";
import PageHeader from "../src/components/PageHeader";

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
        <div className="container p-4">
            <div style={{ minHeight: '80vh' }} className="my-4">
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
                    <li>at least thirteen (13) years of age and not more than nineteen (19) years of age upon your date of registration for the Contest on the Contest website.</li>
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
            </div>
        </div>
        <Footer />
    </Base>
}

export default RulePage;