import React from "react";
import TopBar from "../src/components/shared/TopBar";
import Base from "../src/components/shared/Base";

const OurTeam = () => {

    return (
        <Base meta={{ title: "Our Team" }}>
            <TopBar darkenOnSidebar />
            <div
                className="flex items-center justify-center text-center flex-col"
                style={{ minHeight: '40vh' }}
            >
                <h1 className="text-red-700">InCTF Jr. Resources</h1>
                <p className="opacity-75">Get started with InCTF Jr. with our learning materials</p>
            </div>
        </Base>
    )
};

export default OurTeam;