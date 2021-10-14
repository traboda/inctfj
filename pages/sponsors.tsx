import React from 'react';
import TopBar from "../src/components/shared/TopBar";
import Footer from "../src/components/shared/Footer";
import Base from "../src/components/shared/Base";
import SponsorsSection from "../src/components/landing/SponsorsSection";
import Breadcrumb from "../src/components/shared/Breadcrumbs";

const SponsorsPage = () => {
    return (
        <Base meta={{ title: "Sponsors InCTF Jr." }}>
            <TopBar />
            <div className="px-4 py-8 flex items-end justify-center">
                <div style={{ width: '1000px', maxWidth: '100%'  }}>
                    <div className="flex items-center py-5" style={{ minHeight: '20vh' }}>
                        <div>
                            <div className="w-full text-left mb-2">
                                <Breadcrumb
                                    items={[
                                        {
                                            link: '/about',
                                            title: 'About'
                                        },
                                        {
                                            link: '/sponsors',
                                            isActive: true,
                                            title: 'Sponsors'
                                        }
                                    ]}
                                />
                            </div>
                            <h1 className="text-primary text-5xl lg:text-6xl py-4">Sponsors</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto text-center px-4 pb-8" style={{ maxWidth: 700 }}>
                <SponsorsSection />
            </div>
            <Footer />
        </Base>
    )
}

export default SponsorsPage;