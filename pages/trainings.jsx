import React from "react";

import TopBar from "../src/components/shared/TopBar";
import Footer from "../src/components/shared/Footer";
import Schedule from "../src/components/landing/Schedule";
import PageHeader from "../src/components/PageHeader";
import SiteView from "../src/components/SiteView";

const TrainingSchedulePage = () => {
    return (
        <SiteView meta={{ title: "Training Schedule" }}>
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
        </SiteView>
    );
};

export default TrainingSchedulePage;