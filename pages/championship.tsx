import React from "react";
import TopBar from "../src/components/shared/TopBar";
import Footer from "../src/components/shared/Footer";
import Base from "../src/components/shared/Base";

import LandingHeader from "../src/components/landing/Header";
import LandingQuickInfo from "../src/components/landing/QuickInfo";

const ChampionshipPage = () => {

    return (
        <Base meta={{ title: "CTF CyberSecurity Championship" }}>
            <TopBar />
            <LandingHeader />
            <LandingQuickInfo />
            <Footer />
        </Base>
    );

};

export default ChampionshipPage;