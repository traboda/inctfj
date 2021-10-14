import React, {useState} from 'react';
import styled from "@emotion/styled";

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";
import PastINCTFSpeakers from "../src/components/about/PastSpeakers";
import INCTFJStats from "../src/components/about/Stats";
import InctfIntro from "../src/components/about/Intro";
import Footer from "../src/components/shared/Footer";
import AboutAchievements from "../src/components/about/Achievements";
import StateWiseRegistrationMap from "../src/components/about/stats/map";

const AboutPageCoverSection = styled.div`
    background-image: ${() => `url(${require('../src/assets/images/covers/inctfj_mountains.jpg')})`};
    background-size: cover;
    background-position: center;
    min-height: 60vmin;
`;

const AboutPage = () => {

    const [stats, setStats] = useState();

    const fetchStats = () => {
        try {
            fetch('https://app.traboda.com/api/contest/stats/66').then(async (response) => {
                if(response.ok && response.status == 200)
                    return await response.json();
                else
                    return null;
            }).then((data) => {
                setStats(data);
            }).catch((e) => {

            })
        } catch (e) {

        }
    };

    return <Base meta={{ title: "About InCTF Jr." }}>
        <TopBar includeSpace={false} />
        <AboutPageCoverSection />
        <InctfIntro />
        <INCTFJStats stats={stats} />
        <StateWiseRegistrationMap data={stats} />
        <AboutAchievements />
        <PastINCTFSpeakers />
        <Footer />
    </Base>

};

export default AboutPage;