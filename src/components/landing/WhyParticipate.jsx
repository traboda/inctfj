import React from 'react';
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Zoom from "react-reveal/Zoom";

const VideoRotationAnimation = keyframes`
  0%{ transform: rotateZ(1deg); }
  25%{ transform: rotateZ(2deg); }
  50%{ transform: rotateZ(3deg); }
  75%{ transform: rotateZ(4deg); }
  100%{ transform: rotateZ(6deg); }
`

const ReasonsSection = styled.section`
  padding: 8vh 2vw;
  color: black;
  h2 {
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
    font-size: calc(1.5rem + 0.5vw);
  }
  video {
    max-width: 100%;
    max-height: 300px;
    border-radius: 1rem;
    box-shadow: 3px 5px 8px rgba(0,0,0,0.5);
    margin-bottom: 1.5rem;
    transform: rotateZ(4deg);
    animation: 4s ${VideoRotationAnimation} infinite alternate-reverse;
    outline: none!important;
    transition: 1s all ease;
    &:hover {
      transform: rotateZ(0);
      transition: 1s all ease;
    }
  }
`;

const LandingReasonsToParticipate = () => {

    const reasons = [
        {
            "video": require('../../assets/videos/hands_on_learning.mp4'),
            "title": <>Learn Hands-On, <br /> & Get a Head Start to CyberSec.</>
        },
        {
            "video":  require('../../assets/videos/excitement.mp4'),
            "title": <>Win Exciting Prizes <br /> for Learning Cool New Things</>
        },
        {
            "video": require('../../assets/videos/new_friends.mp4'),
            "title": <>Make new friends,<br /> become part of our community</>
        },
        {
            "video": require('../../assets/videos/meet_the_experts.mp4'),
            "title": <>Get to Meet & Interact with Top Engineers from the Industry</>
        },
    ];

    return <ReasonsSection>
        <h2 className="text-center">
            <div className="flex justify-center">
                <img className="mr-2" style={{ width: '64px'}} alt="Why Participate?" src={require('../../assets/images/icons/heart.png')} />
            </div>
            Why Participate?
        </h2>
        <div className="flex flex-wrap  mx-0">
        {reasons.map((r, index) =>
            <Zoom up={index%2} left={!index%2}>
                <div className="w-full md:w-1/2 lg:w-1/4 text-center mb-6 md:mb-0 p-2">
                    <video autoPlay loop muted src={r.video} />
                    <div>{r.title}</div>
                </div>
            </Zoom>
        )}
        </div>
    </ReasonsSection>

};

export default LandingReasonsToParticipate;