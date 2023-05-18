import React from "react";
import TopBar from "../src/components/shared/TopBar";

import Footer from "../src/components/shared/Footer";
import ProfileSummaryCard from "../src/components/ProfileSummaryCard";
import ProfileMicroCard from "../src/components/ProfileMicroCard";
import PageHeader from "../src/components/PageHeader";
import PageFooterExplorer from "../src/components/PageFooterExplorer";
import SiteView from "../src/components/SiteView";


const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const eventOrganizers = require(`../src/data/${eventID}/organizers`).default;

const OrganizersPage = () => {

    const getAvatar = (path) => {
        if(eventID && path)
            return `/inctfj/assets/organizers/${path}`;
        return null;
    }

    return (
        <SiteView meta={{ title: "Organizers" }}>
            <TopBar darkenOnSidebar />
            <PageHeader
                title="Organizers"
                breadcrumb={[
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
            {eventOrganizers?.length > 0 && (
                <div className="py-6 px-2" style={{ background: '#FAFAFA' }}>
                    {eventOrganizers?.filter((f) => f.type === "profile").map((p) => (
                        <div className="py-5">
                            <h2 className="text-3xl mb-4 text-center">{p.label}</h2>
                            <div className="flex flex-wrap">
                                {p?.members.map((a) => (
                                    <div className="w-full md:w-1/3 p-3">
                                        <ProfileSummaryCard
                                            {...a}
                                            avatar={getAvatar(a.avatar)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    {eventOrganizers?.filter((f) => f.type === "badge").map((p) => (
                        <div className="py-5">
                            <h2 className="text-3xl mb-4 text-center">{p.label}</h2>
                            <div className="flex flex-wrap">
                                {p?.members.map((a) => (
                                    <div className="w-full md:w-1/3 p-3">
                                        <ProfileMicroCard
                                            {...a}
                                            avatar={getAvatar(a.avatar)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <PageFooterExplorer
                items={[
                    {
                        "title": "Our Reach & Impact",
                        "text": "See our reach & impact",
                        "link": "/about#our-reach"
                    },
                    {
                        "title": "Advisory Board",
                        "text": "View our elite panel of advisors",
                        "link": "/advisory-board"
                    },
                    {
                        "title": "Sponsors",
                        "text": "View our Sponsors",
                        "link": "/sponsors"
                    }
                ]}
            />
            <Footer />
        </SiteView>
    )
};

export default OrganizersPage;