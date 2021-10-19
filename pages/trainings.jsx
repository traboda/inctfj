import React from "react";

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";
import Footer from "../src/components/shared/Footer";
import Schedule from "../src/components/landing/Schedule";
import PageHeader from "../src/components/PageHeader";

const TrainingSchedulePage = () => {
    return (
        <Base meta={{ title: "Training Schedule for InCTF Jr." }}>
            <TopBar />
            <PageHeader
                title="Training Workshops"
                breadcrumb={[
                    {
                        title: 'Get Started',
                        link: '/start'
                    },
                    {
                        title: 'Training Workshop',
                        link: '/trainings',
                        isActive: true
                    }
                ]}
            />
            <div className="py-4" style={{ minHeight: '100vh' }}>
                <Schedule />
            </div>
            <Footer />
        </Base>
    );
};

export default TrainingSchedulePage;