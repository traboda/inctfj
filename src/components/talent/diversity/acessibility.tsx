import React from "react";

const EducationAccessibility = () => (
    <div>
        <div className="mt-16 grid grid-cols-2 gap-6 items-center justify-center">
            <h1 className="font-semibold mt-4 text-primary">Making Learning Cyber Security Accessible Everywhere</h1>
            <img src={require('../../../assets/images/graphs/demographics.png')} alt="Demographics"
                 className="mx-auto"/>

            <ul className="col-span-2 w-full md:w-2/3 pl-6 list-disc leading-loose font-medium">
                <li>
                    A reason why we started InCTF is to make learning CyberSecurity accessible in the unprivileged
                    sections of society.
                </li>
                <li>
                    From our own experience running the bi0s community, we have found that high-quality cyber-security
                    training and resources don't come cheap and thus are out of reach for many.
                </li>
                <li>
                    With InCTF Junior & our initiatives, we are constantly striving to bridge this gap and provide this
                    platform of equal opportunities for everyone.
                </li>
            </ul>
        </div>
        <div className="mt-16 flex flex-wrap justify-center items-center">
            <div className="w-full md:w-1/4">
                <img src={require('../../../assets/images/talent-incubation/bridge_the_gap.png')} alt="Bridge the gap"
                     className="w-full"/>
            </div>
            <div className="w-full md:w-1/2 pl-12">
                <h1 className="font-semibold mt-4 text-primary">Our Initiatives to Bridge the Gap.</h1>
                <ul className="col-span-2 w-full md:w-2/3 pl-6 list-disc leading-loose font-medium">
                    <li>
                        We have been focusing to further penetrate this opportunity to the government-run schools and
                        those in the tier-3 cities & rural regions of India and have managed to bring participants from
                        several new schools every year.
                    </li>
                    <li>
                        For this, we conduct free workshops & training specially for these schools, often actively
                        involving their teachers and parents, and try to set up a cyber-security club/community there.
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default EducationAccessibility;