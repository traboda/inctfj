import React, { useState } from 'react';
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { useRouter } from 'next/router'

import '../../styles/cyberpunk.css';
import SimplePost from "../../utils/SimplePost";
import Pulse from "react-reveal/Pulse";
import {setUserInfo} from "../../states";

const typeEffect = keyframes`
   from{width: 0;}
   to{width: 24em;}
`;

const blinkTextCursor = keyframes`
    from{border-right-color: rgba(255,255,255,.75);}
    to{border-right-color: transparent;}
`;

const AuthCardWindow = styled.div`
     background-color: black;
     background-image: ${() => `url(${require('../../assets/images/backgrounds/cyber_window.png')})`};
     background-position: center;
     background-size: cover;
     display: inline-flex;
     color: white;
     border-radius: 5px;
     box-shadow: 2px 3px 8px rgba(0,0,0,0.85);
     user-select: none;
     .auth-card-container {
        min-height: 75vh;
        min-width: 350px;
        padding: 1.5rem;
        background: rgba(0,0,0,0.45);
        width: 100%;
        max-width: 400px;
        display: flex;
        justify-content: center;
     }
     h3 {
        font-weight: 900;
        font-size: 45px;
        text-transform: uppercase;
        color: #00C853;
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 1.25rem;
        line-height: 0.75;
     }
     input {
        background: rgba(255,255,255,0.25);
        padding: 5px 12px;
        font-size: 26px;
        box-shadow: 3px 5px 8px rgba(0,0,0,0.85);
        border: 2px solid #00BFA5!important;
        color: #00C853;
        width: 100%;
        &:focus, &:hover {
          outline: none!important;
        }
     }
     img {
        max-width: 100%;
     }
     .try-again-button {
          border: 2px solid #FFD600!important;
          background: none!important;
          color: #FFD600;
          font-size: 20px;
          width: 100%;
          padding: 0.5rem 1rem;
     }
     .anim-typewriter {
          animation: ${typeEffect} 4s steps(44) 1s 1 normal both,
                     ${blinkTextCursor} 500ms steps(44) infinite normal;
     }
     form {
        p {
           font-size: 18px;
            margin-bottom: 2px;
        }
        button {
             width: 100%;
             margin-top: 1.35rem;
             padding: 0.2rem 1.5rem;
             font-size: 26px;
             color: #00C853;
             background: none!important;
             border: 2px solid #00C853;
             &:hover {
                border-color: #1B5E20;
                background: #1B5E20!important;
                color: white;
             }
             @media (max-width: 768px) {
                width: 100%;
             }
         }
     }
`;


const LoginCard = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isLoggingIn, setLoggingIn] = useState(false)
    const [hasError, setError] = useState(false);

    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        setLoggingIn(true);
        SimplePost({
            data: {user: username, pass: password},
            endpoint: "/api/login"
        }).then((resp) => {
            // credits to the backend team
            if(Object.prototype.hasOwnProperty.call(resp, 'Error')){
                setLoggingIn(false);
                if(resp['Error'] === 'ok'){
                    setUserInfo({ loggedIn: true });
                    router.push('/dashboard');
                    console.log(resp);
                } else {
                    setError(resp['Error']);
                }
            }
        })
    };

    const tryAgain = () => {
        setUsername('');
        setPassword('');
        setError(false);
    };

    return <AuthCardWindow>
        <div className="auth-card-container font-punk">
            {hasError ?
            <div className="d-flex align-items-center">
                <div>
                    <div className="text-center">
                        <img style={{ width: '100%', maxWidth: '100%' }} src={require('../../assets/images/gif/not_allowed.webp')} />
                    </div>
                    <Pulse forever><h3>That did not work</h3></Pulse>
                    <div className="text-center">{hasError}</div>
                    <button onClick={tryAgain} className="try-again-button mt-2">Try Again</button>
                </div>
            </div> :
            isLoggingIn ?
            <div className="d-flex align-items-center">
                <div>
                    <div className="text-center">
                        <img style={{ maxWidth: '100%' }} src={require('../../assets/images/gif/logging_in.webp')} />
                    </div>
                    <Pulse forever><h3>Logging You In</h3></Pulse>
                </div>
            </div> :
            <div className="d-flex align-items-center">
                <div>
                    <h3>Login</h3>
                    <form onSubmit={handleLogin}>
                        <div className="my-3">
                            {username.length > 0 && <p>> Your email:</p>}
                            <input
                                autoFocus
                                placeholder="Enter Your Email/Username" aria-label="email or username of the student"
                                value={username} onChange={(e) => { setUsername(e.currentTarget.value)}}
                            />
                        </div>
                        <div className="my-3">
                            {password.length > 0 && <p>> Your password: </p>}
                            <input
                                type="password" placeholder="Enter Password" autoFocus
                                value={password} onChange={(e) => { setPassword(e.currentTarget.value)}}
                            />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                    <div className="my-3 text-center">
                        <div className="mb-3">Not Registered Yet?</div>
                        <a className="plain-link border rounded-0 px-3 py-2 h4" href="/register">Register Now</a>
                    </div>
                </div>
            </div>}
        </div>
    </AuthCardWindow>;

};

export default LoginCard;