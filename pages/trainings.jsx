import React from "react";

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";
import Footer from "../src/components/shared/Footer";
import Schedule from "../src/components/landing/Schedule";

const TrainingSchedulePage = () => {
    return (
        <Base meta={{ title: "Training Schedule for InCTF Jr." }}>
            <TopBar />
            <div style={{ minHeight: '100vh' }}>
                <Schedule />
            </div>
            <Footer />
        </Base>
    );
};

export default TrainingSchedulePage;