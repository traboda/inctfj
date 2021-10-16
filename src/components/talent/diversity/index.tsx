import React from "react";
import WomenInCyberSecuritySection from "./women";
import EducationAccessibility from "./acessibility";
import Graph from "./graph";

const DiversityInitiatives = () => (
    <div className="container mx-auto py-12 px-4" id="diversity">
        <WomenInCyberSecuritySection />
        <EducationAccessibility />
        <Graph />
    </div>
);

export default DiversityInitiatives;