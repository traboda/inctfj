import React from "react";
import TopBar from "../src/components/shared/TopBar";
import Base from "../src/components/shared/Base";

import {OrganizingTeamChiefs, OrganizingTeamTier2, OrganizingTeamTier3} from "../src/data/organizers";
import Footer from "../src/components/shared/Footer";
import ProfileSummaryCard from "../src/components/ProfileSummaryCard";
import ProfileMicroCard from "../src/components/ProfileMicroCard";
import Breadcrumb from "../src/components/shared/Breadcrumbs";


const OrganizersPage = () => {

    return (
        <Base meta={{ title: "Organizers" }}>
            <TopBar darkenOnSidebar />
            <div className="px-4 py-8 flex items-end justify-center">
                <div style={{ width: '1000px', maxWidth: '100%'  }}>
                    <div className="flex items-center py-5" style={{ minHeight: '30vh' }}>
                        <div>
                            <div className="w-full text-left mb-2">
                                <Breadcrumb
                                    items={[
                                        {
                                            link: '/about',
                                            title: 'About'
                                        },
                                        {
                                            link: '/organizers',
                                            isActive: true,
                                            title: 'Organizers'
                                        }
                                    ]}
                                />
                            </div>
                            <h1 className="text-primary text-5xl lg:text-6xl py-4">Organizers</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 px-2" style={{ background: '#FAFAFA' }}>
                {OrganizingTeamChiefs?.length > 0 && (
                    <div className="py-5">
                        <h2 className="text-3xl mb-4 text-center">Programme Chiefs</h2>
                        <div className="flex flex-wrap">
                            {OrganizingTeamChiefs.map((a) => (
                                <div className="w-full md:w-1/3 p-3">
                                    <ProfileSummaryCard {...a} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {OrganizingTeamTier2?.length > 0 && (
                    <div className="py-5">
                        <h2 className="text-3xl mb-5 text-center">Programme Executives</h2>
                        <div className="flex flex-wrap">
                            {OrganizingTeamTier2.map((a) => (
                                <div className="w-full md:w-1/3 py-3 sm:p-3">
                                    <ProfileSummaryCard {...a} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {OrganizingTeamTier3?.length > 0 && (
                    <div className="py-5">
                        <h2 className="text-3xl mb-5 text-center">Team Heads</h2>
                        <div className="flex flex-wrap">
                            {OrganizingTeamTier3.map((a) => (
                                <div className="w-full md:w-1/3 lg:w-1/4 py-3 sm:p-3">
                                    <ProfileMicroCard {...a} />
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

export default OrganizersPage;