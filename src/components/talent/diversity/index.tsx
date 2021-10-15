import React from "react";
import WomenInCyberSecuritySection from "./women";
import EducationAccessibility from "./acessibility";

const DiversityInitiatives = () => (
    <div className="container mx-auto py-12 px-4" id="diversity">
        <WomenInCyberSecuritySection />
        <EducationAccessibility />

        <div className="w-full flex flex-wrap mt-8 items-center">
            <img src={require('../../../assets/images/graphs/participants.png')} alt="Participants" className="flex-1" draggable={false}/>
            <img src={require('../../../assets/images/graphs/india.jpg')} alt="India" className="ml-2" draggable={false}/>
        </div>
    </div>
);

export default DiversityInitiatives;