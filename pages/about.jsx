import React from 'react';
import styled from "@emotion/styled";

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";
import PastINCTFSpeakers from "../src/components/about/PastSpeakers";
import INCTFJStats from "../src/components/about/Stats";
import InctfIntro from "../src/components/about/Intro";

const AboutPageCoverSection = styled.div`
    background-image: ${() => `url(${require('../src/assets/images/covers/inctfj_mountains.jpg')})`};
    background-size: cover;
    background-position: center;
    min-height: 60vmin;
`

export default () => {

    return <Base meta={{ title: "About InCTF Jr." }}>
        <TopBar includeSpace={false} />
        <AboutPageCoverSection />
        <InctfIntro />
        <INCTFJStats />
        <PastINCTFSpeakers />
    </Base>

};