import React, {useEffect, useState} from 'react';
import styled from "@emotion/styled";

import TopBar from "../src/components/shared/TopBar";
import Base from "../src/components/shared/Base";
import RegisterCard from "../src/components/auth/RegisterCard";
import {useAuthState} from "../src/states";

const bgImage = require('../src/assets/images/backgrounds/cyberpunk_2.jpg');

const RegistrationPageWrapper = styled.section`    
    background-color: black;
    background-image: ${() => `url(${bgImage})`};
    background-size: cover;
    background-position: center;
    .content-container {
        padding-top: 90px;
        width: 100%;
        min-height: 100vh;
        background-color: rgba(0,0,0,0.5);
    }
`;

export default () => {
    const [hasLoaded, setLoaded] = useState(false);
    const [isLoggedIn] = useAuthState('isLoggedIn');

    useEffect(() => { setLoaded(true); }, []);

    return (hasLoaded && isLoggedIn) ?
        <Base meta={{ title: "Already Logged-In." }}>
            <TopBar includeSpace={false} />
            <RegistrationPageWrapper>
                <div className="content-container p-0 d-flex justify-content-center align-items-center">
                    <div>
                        <img style={{ width: '90vw', maxWidth: '600px'}} draggable="false" src={require('../src/assets/images/gif/move_on.webp')} />
                    </div>
                </div>
            </RegistrationPageWrapper>
        </Base> :
        <Base meta={{ title: "Register for InCTF Jr. 2020" }}>
        <TopBar includeSpace={false} />
        <RegistrationPageWrapper>
            <div className="content-container">
                <div className="row mx-0">
                    <div className="col-md-6 px-2">

                    </div>
                    <div className="col-md-6 h-100 d-flex pt-md-5 align-items-center justify-content-center px-2">
                        <RegisterCard />
                    </div>
                </div>
            </div>
        </RegistrationPageWrapper>
    </Base>

};