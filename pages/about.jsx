import React, {useEffect, useState} from 'react';
import styled from "@emotion/styled";

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";
import INCTFJStats from "../src/components/about/stats";
import InctfIntro from "../src/components/about/Intro";
import Footer from "../src/components/shared/Footer";
import AboutAchievements from "../src/components/about/Achievements";
import UNSDGSection from "../src/components/about/unsdg";

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

    useEffect(fetchStats, [])

    return <Base meta={{ title: "About InCTF Jr." }}>
        <TopBar includeSpace={false} />
        <div style={{ background: '#FAFAFA' }}>
            <AboutPageCoverSection />
            <InctfIntro />
            <INCTFJStats stats={stats} />
            <div className="text-center pt-6">
                <img draggable="false" src={require('../src/assets/images/photos/standing_as_inctf.jpg')} />
            </div>
            <AboutAchievements />
            <UNSDGSection />
        </div>
        <Footer />
    </Base>

};

export default AboutPage;