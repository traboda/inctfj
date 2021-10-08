import React from 'react';
import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";
import Footer from "../src/components/shared/Footer";

const RulePage = () => {

    return <Base meta={{ title: 'Rules' }}>
        <TopBar darkenOnSidebar includeSpace />
        <div className="container">
            <h1 className="display-3 mt-5 p-2">Rules</h1>
            <div className="my-4">
                <ol>
                    <li>This is an individual CTF. There will be a limit to the number of students qualifying from a college.</li>
                    <li>Participants should not carry out any attacks on the CTF infrastructure.</li>
                    <li>No DoS, DDoS, automated scans or generating any large amount of traffic by any other means on any challenges and other contest infrastructure. It is not permitted and is never intended in any challenge.</li>
                    <li>Sharing flags or solutions during the CTF is prohibited.</li>
                    <li>If you have any queries regarding any challenge you can contact us on Discord - https://discord.gg/QVXewGh7sP</li>
                    <li>All updates and hints will be posted on the Announcements page and on our Twitter account @InCTF.</li>
                    <li>The format of the flag is {`inctfj{...}`} unless stated otherwise!</li>
                    <li>If you are not sure if something is violating the rules, ask us on Discord.</li>
                    <li>The decision of organisers will be final.</li>
                    <li>By participating in the contest, you agree that you have read the above rules and fully agree to adhere to them. Any participant team violating any of the above rules will be disqualified from the contest.</li>
                    <li>Rules may be modified from time to time.</li>
                    <li>As you guys know InCTFj is a beginner level CTF oriented towards introducing complete beginners to CTFs so if you are already pretty experienced in CTFs then we encourage you to refrain from playing the CTF competitively so that beginners will have a better chance at enjoying the CTF</li>
                </ol>
            </div>
        </div>
        <Footer />
    </Base>
}

export default RulePage;