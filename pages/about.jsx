import React, { useEffect, useRef, useState } from 'react';
import styled from "@emotion/styled";

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";
import INCTFJStats from "../src/components/about/stats";
import InctfIntro from "../src/components/about/Intro";
import Footer from "../src/components/shared/Footer";
import AboutAchievements from "../src/components/about/Achievements";
import UNSDGSection from "../src/components/about/unsdg";
import { data } from '../src/components/about/stats/66';

const AboutPageCoverSection = styled.div`
    background-image: ${() => `url(${require('../src/assets/images/covers/inctfj_mountains.jpg')})`};
    background-size: cover;
    background-position: 50% 50%;
    min-height: 60vmin;
`;

const AboutPage = () => {

    const [stats, setStats] = useState();
    const cover = useRef(null);

    const parallaxScroll = (element) => {
        if (window.innerWidth >= 640) {
            const diff = window.scrollY - element.offsetTop / 2;
            element.style.backgroundPosition = `50% calc(50% + ${diff / 2}px)`;
        } else element.style.backgroundPosition = `50% 50%`;
    }

    useEffect(() => {
        const scroll = () => parallaxScroll(cover.current);
        document.addEventListener('scroll', scroll, false);
        return () => {
            document.removeEventListener('scroll', scroll);
        }
    }, []);

    const fetchStats = () => {
        try {
            fetch('https://app.traboda.com/api/contest/stats/66')
                .then(response => response.ok && response.status === 200 ? response.json() : null)
                .then((data) => setStats(data))
                .catch((e) => setStats(data))
        } catch (e) {}
    };

    useEffect(fetchStats, [])

    return <Base meta={{ title: "About InCTF Jr." }}>
        <TopBar includeSpace={false} />
        <div style={{ background: '#FAFAFA' }}>
            <AboutPageCoverSection ref={cover} />
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