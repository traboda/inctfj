import React from 'react';
import { keyframes } from "@emotion/core";
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
  padding: 5vh 2vw;
  background: #E8EAF6;
  color: black;
  h2 {
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
    text-transform: uppercase;
    font-size: 28px;
  }
  video {
    max-width: 100%;
    max-height: 300px;
    border-radius: 2vw;
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
  h3 {
      font-size: calc(13px + 0.35vw);
      line-height: 1.2;
      font-weight: 500;
      text-align: center;
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
            <div className="d-flex d-md-inline justify-content-center">
                <img className="mr-2" style={{ width: '45px'}} alt="Why Participate?" src={require('../../assets/images/icons/heart.png')} />
            </div>
            More reasons to not miss out
        </h2>
        <div className="row mx-0">
        {reasons.map((r, index) =>
            <Zoom up={index%2} left={!index%2}>
                <div className="col-6 col-md-4 col-lg-3 text-center p-2">
                    <video autoPlay loop muted src={r.video} />
                    <h3>{r.title}</h3>
                </div>
            </Zoom>
        )}
        </div>
    </ReasonsSection>

};

export default LandingReasonsToParticipate;