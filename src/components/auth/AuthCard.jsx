import React, { useState } from 'react';
import styled from "@emotion/styled";
import '../../styles/cyberpunk.css';
import Pulse from "react-reveal/Pulse";
import SimplePost from "../../utils/SimplePost";

const AuthCardWindow = styled.div`
     background-color: black;
     background-image: ${() => `url(${require('../../assets/images/backgrounds/cyber_window.png')})`};
     background-position: center;
     background-size: cover;
     display: inline-flex;
     color: white;
     border-radius: 5px;
     box-shadow: 2px 3px 8px rgba(0,0,0,0.85);
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
        margin-bottom: 0.8rem;
        line-height: 0.75;
     }
     p {
        font-size: 25px;
        color: #69F0AE;
        margin: 0;
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
     .terminal-output {
        font-size: 22px;
        line-height: 1;
        margin-bottom: 0.5rem;
        color: #00C853;
        button {
           background: none!important;
           border: none!important;
           color: #E65100;
           font-size: 85%;
        }
     }
     img {
        max-width: 100%;
     }
     form {
        p {
            font-size: 18px;
            margin-bottom: 2px;
        }
        button {
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
     .lucky-button {
          border: 2px solid #FFD600!important;
          background: none!important;
          color: #FFD600;
          font-size: 20px;
          width: 100%;
          padding: 0.5rem 1rem;
     }
`;

const SocialAuthButton = styled.button`
    padding: 0.2rem 1.5rem;
    font-size: 26px;
    background: none!important;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: #448AFF!important;
    color: #448AFF!important;
    margin-top: 8px!important;
    &:hover {
        border-color: #01579B!important;
        background: #01579B!important;
        color: white!important;
    }
    img {
        max-height: 32px;
        margin-right: 10px;
    }
`;

const AuthCard = ({ }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pwd2, setPwd2] = useState('');

    const [isNameSet, isNamed] = useState(false);
    const [isEmailSet, isEmailed] = useState(false);
    const [isPasswordSet, isPassworded] = useState(false);
    const [isPasswordConfirmed, isConfirmed] = useState(false);

    const [isRegistering, setRegistering] = useState(false)
    const [isRegistered, setRegistered] = useState(false);

    const handleRegister = () => {
        setRegistering(true);
        SimplePost({
            data: {
                email: email, fullname: name, uname: email.split("@")[0],
                pword1: password, pword2: password
            },
            endpoint: "https://play.inctf.in/junior/api/register"
        }).then((resp) => {
            console.log(resp);
            setTimeout(() => {
                setRegistering(false);
                setRegistered(true);
            }, 3000);
        })
    }

    const handleProceed = (e) => {
        e.preventDefault();
        if(!isNameSet) isNamed(true);
        else if(!isEmailSet) isEmailed(true);
        else if(!isPasswordSet) isPassworded(true);
        else if(!isPasswordConfirmed) {
            isConfirmed(true);
            handleRegister();
        }
    };

    return <AuthCardWindow>
        <div className="auth-card-container font-punk">{
            isRegistered ? <div className="d-flex justify-content-center">
                <div>
                    <div className="text-center">
                        <img style={{ maxWidth: '65%' }} src={require('../../assets/images/gif/thanks.webp')} />
                    </div>
                    <Pulse forever><h3>You are Registered</h3></Pulse>
                    <div className="terminal-output"> > You will shortly receive an email confirming this at {email}.</div>
                    <div className="terminal-output"> > You now have access to InCTFj dashboard, where you shall find everything else.</div>
                    <div className="terminal-output text-warning"> > Please note you need to fill in other details in your dashboard, to confirm your registration.</div>
                    {/*<button className="lucky-button mt-2">I am feeling lucky!</button>*/}
                </div>
            </div> :
            isRegistering ? <div className="d-flex justify-content-center">
                <div>
                    <div className="text-center">
                        <img src={require('../../assets/images/gif/loading.webp')} />
                    </div>
                    <Pulse forever><h3>Registering</h3></Pulse>
                    <p className="terminal-output">> Registration initialized.</p>
                    {isNameSet && <div className="terminal-output">> Hi {name}!</div>}
                    {isEmailSet && <div className="terminal-output">> We will send you updates at {email}</div>}
                    {isPasswordSet && <div className="terminal-output">> Password set. Requesting confirmation... </div>}
                    <div className="terminal-output">> Submitting your registration. Please wait a moment...</div>
                </div>
            </div>
            : <div>
                {!isNameSet ? <>
                    <h3>Register Now</h3>
                    <div className="text-center">
                        <p>for InCTF Jr 5.0, 2020</p>
                    </div>
                </> : <>
                    <h3>Collecting Data</h3>
                    <p className="terminal-output">> Registration initialized.</p>
                    {isNameSet && <div className="terminal-output">
                        > Hi {name}!
                        <button onClick={() => isNamed(false)}>[edit]</button>
                    </div>}
                    {isEmailSet && <div className="terminal-output">
                        > We will send you updates at {email}
                        <button onClick={() => isEmailed(false)}>[edit]</button>
                    </div>}
                    {isPasswordSet && <div className="terminal-output">> Password set. Requesting confirmation... </div>}
                </>}
                <div className="mt-3">
                    <form onSubmit={handleProceed}>
                        {!isNameSet && <div>
                            {name.length > 0 && <p>> Your Name:</p>}
                            <input
                                placeholder="Enter Your Name" aria-label="name of the student" type="name"
                                value={name} onChange={(e) => { setName(e.currentTarget.value)}}
                            />
                        </div>}
                        {(isNameSet && !isEmailSet) &&<div>
                            {email.length > 0 && <p>> Your email:</p>}
                            <input
                                autoFocus
                                placeholder="Enter Your Email" aria-label="email of the student" type="email"
                                value={email} onChange={(e) => { setEmail(e.currentTarget.value)}}
                            />
                        </div>}
                        {(isEmailSet && !isPasswordSet) && <div>
                            {password.length > 0 && <p>> Your password: </p>}
                            <input
                                type="password" placeholder="Enter Password" autoFocus
                                value={password} onChange={(e) => { setPassword(e.currentTarget.value)}}
                            />
                        </div>}
                        {(isPasswordSet && !isPasswordConfirmed) && <div>
                            {pwd2.length > 0 && <p>> Reenter your password: </p>}
                            <input
                                type="password" placeholder="Reenter your Password" autoFocus
                                value={pwd2} onChange={(e) => { setPwd2(e.currentTarget.value)}}
                            />
                        </div>}
                        <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                            {(isPasswordSet && !isPasswordConfirmed && pwd2 !== password) ?
                                <div className="mt-2 text-warning">Passwords are not matching.</div> :
                                <button type="submit">Proceed</button>
                            }
                        </div>
                    </form>
                    {/*<div className="my-2">*/}
                    {/*    <div className="text-center">*/}
                    {/*        <p style={{ fontSize: `16px!important` }}>like shortcuts?</p>*/}
                    {/*    </div>*/}
                    {/*    <SocialAuthButton>*/}
                    {/*        <img src={require('../../assets/images/icons/google_gradient_logo.png')} />*/}
                    {/*        Login with Google*/}
                    {/*    </SocialAuthButton>*/}
                    {/*    <SocialAuthButton>*/}
                    {/*        <img src={require('../../assets/images/icons/github_gradient_logo.png')} />*/}
                    {/*        Login with GitHub*/}
                    {/*    </SocialAuthButton>*/}
                    {/*</div>*/}
                </div>
            </div>}
        </div>
    </AuthCardWindow>
};

export default AuthCard;