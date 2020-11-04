import React from 'react';
import styled from "@emotion/styled";

import TopBar from "../src/components/shared/TopBar";
import Base from "../src/components/shared/Base";
import AuthCard from "../src/components/auth/AuthCard";

const bgImage = require('../src/assets/images/backgrounds/cyberpunk_2.jpg');

const RegistrationPageWrapper = styled.section`    
    background-color: black;
    background-image: ${() => `url(${bgImage})`};
    background-size: cover;
    background-position: center;
    .content-container {
        padding-top: 64px;
        width: 100%;
        min-height: 100vh;
        background-color: rgba(0,0,0,0.5);
    }
`;

export default () => {

    return <Base meta={{ title: "Register for InCTF Jr. 2020" }}>
        <TopBar includeSpace={false} />
        <RegistrationPageWrapper>
            <div className="content-container">
                <div className="row mx-0">
                    <div className="col-md-6 h-100 d-flex pt-md-5 align-items-center justify-content-center px-2">
                        <AuthCard />
                    </div>
                    <div className="col-md-6 px-2">

                    </div>
                </div>
            </div>
        </RegistrationPageWrapper>
    </Base>

};