import React from 'react';
import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";
import Footer from "../src/components/shared/Footer";
import PageHeader from "../src/components/PageHeader";

const RulePage = () => {

    return <Base meta={{ title: 'Rules' }}>
        <TopBar darkenOnSidebar includeSpace />
        <PageHeader
            title="Rules"
            breadcrumb={[
                {
                    title: 'Championship',
                    link: '/championship'
                },
                {
                    title: 'Rules',
                    link: '/rules',
                    isActive: true
                }
            ]}
        />
        <div className="container p-4">
            <div style={{ minHeight: '80vh' }} className="my-4">
                <h3 className="text-center">Will be announced soon</h3>
            </div>
        </div>
        <Footer />
    </Base>
}

export default RulePage;