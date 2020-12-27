import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import {APIFetch} from "../../utils/APIFetch";
import {queryMe} from "../../graphql/profile";
import ProfileEditor from "./ProfileEditor";
import '../../styles/cyberpunk.css';
import LandingJoinDiscussion from "../landing/JoinDiscussions";
import ShareCard from "./ShareCard";
import PromoLinks from "./promo";


const DashboardContainer = styled.div`
    background: #222;
    min-height: 100vh;
`;

const HeaderArea = styled.section`
     background-color: black;
     background-size: cover;
     background-position: center;
     background-image: ${() => `url(${require('../../assets/images/backgrounds/ctf_lab.jpg')})`};
     color: white;
     .dash-wrapper {
          padding: 5vh 1rem;
          background: rgba(0,0,0,0.8);
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-end;
          min-height: 50vh;
     }
     .container {
      padding-top: 15vh;
     }
     h1 {
        font-size: calc(1.8rem + 2vw);
        margin-bottom: 0.25rem;
     }
`;

const UserDashboard = () => {

    const [isLoading, setLoading] = useState(false);
    const [me, setMe] = useState(null);

    const getUserProfile = () => {
        APIFetch({ query: queryMe }).then(({ success, data, errors }) => {
            setLoading(false);
            if(success) {
                setMe(data.me);
            }
        })
    };

    useEffect(getUserProfile, []);

    return (!isLoading && me) ?
    <DashboardContainer className="font-punk">
        <HeaderArea>
            <div className="dash-wrapper">
                <div className="container">
                    <Fade down><h1>Hi @{me?.username}!</h1></Fade>
                    <Fade up><h4>InCTF Jr. 2020 will be live 09AM 28th Dec!</h4></Fade>
                </div>
            </div>
        </HeaderArea>
        <div className="container py-4 px-0">
            {/*<Slide left><ShareCard /></Slide>*/}
            <PromoLinks />
            {me && <Fade up><ProfileEditor me={me} /></Fade>}
            {/*<LandingJoinDiscussion />*/}
            <div style={{ fontSize: '20px', color: "#bbb" }} className="py-3 m-4 text-center">
                <div>Hint: inspect for passcode</div>
                <div>For any support, questions, or complaints, please write to us at inctfj@am.amrita.edu</div>
            </div>
        </div>
    </DashboardContainer> :
    <DashboardContainer>

    </DashboardContainer>

};

export default UserDashboard;