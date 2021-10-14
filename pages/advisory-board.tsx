import React from "react";
import TopBar from "../src/components/shared/TopBar";
import Base from "../src/components/shared/Base";

import { AdvisoryBoard, AdvisoryBoardAlumni } from "../src/data/organizers";
import ProfileCard from "../src/components/ProfileCard";
import Footer from "../src/components/shared/Footer";
import Breadcrumb from "../src/components/shared/Breadcrumbs";

const AdvisoryBoardPage = () => {

    return (
        <Base meta={{ title: "Advisory Board" }}>
            <TopBar darkenOnSidebar />
            <div className="px-4 py-8 flex items-end justify-center">
                <div style={{ width: '1000px', maxWidth: '100%'  }}>
                    <div className="flex items-center py-5" style={{ minHeight: '50vh' }}>
                        <div>
                            <div className="w-full text-left mb-2">
                                <Breadcrumb
                                    items={[
                                        {
                                            link: '/about',
                                            title: 'About'
                                        },
                                        {
                                            link: '/advisory-board',
                                            isActive: true,
                                            title: 'Advisory Board'
                                        }
                                    ]}
                                />
                            </div>
                            <h1 className="text-primary text-5xl lg:text-6xl py-4">InCTF Adivisory Board</h1>
                            <p className="opacity-75 text-sm md:text-base" style={{ maxWidth: '100%', width: '700px' }}>
                                The InCTF Advisory Board is a high-level expert panel consisting of eminent personalities
                                from academia and industry who review and provide valuable help and advice on all aspects
                                of our end-to-end CyberSecurity programme. Our advisory board plays a pivotal role in transforming
                                InCTF to a global pioneer in CyberSecurity education, that sets a platform that inspires & enables
                                CyberSecurity education among the students, and thereby helping nurture next generation of
                                CyberSecurity workforce for tomorrow.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full py-6 px-2" style={{ background: '#FAFAFA' }}>
                {AdvisoryBoard?.length > 0 && (
                    <div className="py-5">
                        <h2 className="text-3xl text-primary mb-4 text-center">Industry Experts</h2>
                        <div className="flex flex-wrap">
                            {AdvisoryBoard.map((a) => (
                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-3 sm:p-3">
                                    <ProfileCard {...a} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {AdvisoryBoardAlumni?.length > 0 && (
                    <div className="py-5">
                        <h2 className="text-3xl mb-5 text-primary text-center">Amrita Alumni & Industry Experts</h2>
                        <div className="flex flex-wrap">
                            {AdvisoryBoardAlumni.map((a) => (
                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-3 sm:p-3">
                                    <ProfileCard {...a} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </Base>
    )
};

export default AdvisoryBoardPage;