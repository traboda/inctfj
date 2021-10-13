import React from "react";
import TopBar from "../src/components/shared/TopBar";
import Base from "../src/components/shared/Base";

import {AdvisoryBoard} from "../src/data/organizers";
import ProfileCard from "../src/components/ProfileCard";
import Footer from "../src/components/shared/Footer";

const OurTeam = () => {

    return (
        <Base meta={{ title: "Advisory Board" }}>
            <TopBar darkenOnSidebar />
            <div
                className="flex items-center justify-center text-center flex-col"
                style={{ minHeight: '40vh' }}
            >
                <h1 className="text-red-700 mb-3">InCTF Adivisory Board</h1>
                <div className="flex justify-center">
                    <p className="opacity-75 px-2" style={{ maxWidth: '100%', width: '700px' }}>
                        InCTF Advisory committee consists of eminent personalities from academia and industry who reviews
                        and provides valuable help and advice on all aspects of our programme with the aim of making the
                        same an International gold standard when it comes to CyberSecurity training.
                    </p>
                </div>
            </div>
            <div className="container p-2" style={{ background: '#FAFAFA' }}>
                {AdvisoryBoard?.length > 0 && (
                    <div className="flex flex-wrap">
                        {AdvisoryBoard.map((a) => (
                            <div className="w-1/2 md:w-1/3 lg:w-1/4 p-3">
                                <ProfileCard {...a} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </Base>
    )
};

export default OurTeam;