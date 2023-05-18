import React from "react";
import styled from "@emotion/styled";
import ReactPlayer from "react-player";


const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

const LandingPromoVideoSection = styled('section')`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3.5vh 1rem;
    .promo-video-container {
        background: white;
        border-radius: 1rem;
        width: 96vmin;
        height: 64vmin;
        max-width: 100%;
        box-shadow: 1px 2px 1px rgba(0,0,0,0.2);
        iframe {
            border-radius: 1rem;
        }
    }
`;

const LandingPromoVideo = () => (
    <LandingPromoVideoSection className="container mx-auto">
        <div className="promo-video-container p-0 md:p-4">
            <ReactPlayer url={data.LandingpromoVideo} width="100%" height="100%" />
        </div>
    </LandingPromoVideoSection>
);

export default LandingPromoVideo;