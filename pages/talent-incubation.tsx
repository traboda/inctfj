import React from "react";
import TopBar from "../src/components/shared/TopBar";
import Footer from "../src/components/shared/Footer";
import Base from "../src/components/shared/Base";

import LandingHeader from "../src/components/landing/Header";
import LandingQuickInfo from "../src/components/landing/QuickInfo";
import DiversityInitiatives from "../src/components/talent/diversity";
import IndianCyberLeague from "../src/components/talent/icl";
import CyberClubsInSchools from "../src/components/talent/clubs";
import CTFPedagogy from "../src/components/talent/HowCTFWorks";

const TalentIncubation = () => {

    return (
        <Base meta={{ title: "CyberSecurity Talent Incubation" }}>
            <TopBar />
            <LandingHeader />
            <LandingQuickInfo />
            <CTFPedagogy />
            <CyberClubsInSchools />
            <IndianCyberLeague />
            <DiversityInitiatives />
            <Footer />
        </Base>
    );

};

export default TalentIncubation;