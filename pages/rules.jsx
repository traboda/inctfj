import React from 'react';
import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";
import Footer from "../src/components/shared/Footer";

const RulePage = () => {

    return <Base meta={{ title: 'Rules' }}>
        <TopBar darkenOnSidebar includeSpace />
        <div className="container p-4">
            <div
                className="flex items-center justify-center text-center flex-col"
                style={{ minHeight: '40vh' }}
            >
                <h1 className="text-primary text-3xl lg:text-6xl py-4">Rules</h1>
            </div>
            <div style={{ minHeight: '80vh' }} className="my-4">
                <h3 className="text-center">Will be announced soon</h3>
            </div>
        </div>
        <Footer />
    </Base>
}

export default RulePage;