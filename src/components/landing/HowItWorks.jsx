import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';

const HowItWorksSection = styled.section`
  text-align: center;
  img {
     max-height: 90px;
     max-width: 100%;
     box-shadow: none!important;
     padding: 0;
     margin-bottom: 10px;
  }
  h3 {
      text-transform: uppercase;
      font-weight: 900;
      img {
        box-shadow: none!important;
      }
  }
  p {
    font-size: 14px;
  } 
`;


const LandingHowItWorks = () => {

    return <HowItWorksSection className="motto-cards row py-5 mx-0">
        <div className="col-12 d-flex p-0 mb-4">
            <h1 className="px-md-4 px-2 py-2 rounded-right mt-4 mb-2 d-inline-block bg-primary text-light text-uppercase shadow font-weight-bold text-center mb-0">
                <img src={require('../../assets/images/icons/thinking.png')} className="mr-2 my-0 p-0 shadow-none" />
                How it Works?
            </h1>
        </div>
        <Fade left delay={100}>
            <div className="col-md-4 px-3">
                <div className="row mx-0">
                    <div className="col-md-12 d-flex align-items-center justify-content-center col-3 p-1 p-md-0">
                        <img alt="learn" src={require('../../assets/images/icons/learn.png')} />
                    </div>
                    <div className="col-md-12 col-9 text-left text-md-center p-2 p-md-0">
                        <h3>Learn</h3>
                    </div>
                    <div className="col-12 text-left text-md-center">
                        <p>
                            Students can dive into cyber security using the world class resources that
                            team bi0s has made available. Learn new concepts using the bi0s wiki and
                            our YouTube channel and practice them at the challenge archive!
                        </p>
                    </div>
                </div>
            </div>
        </Fade>
        <Fade down delay={500}>
            <div className="col-md-4 px-3">
                <div className="row mx-0">
                    <div className="col-md-12 order-2 order-md-1 d-flex align-items-center justify-content-center col-3 p-1 p-md-0">
                        <img alt="hack" src={require('../../assets/images/icons/hack.png')} />
                    </div>
                    <div className="col-md-12 col-9 order-1 order-md-2 text-right text-md-center p-2 p-md-0">
                        <h3>Hack</h3>
                    </div>
                    <div className="col-12 order-3 text-right text-md-center">
                        <p>
                            Students now participate in the Capture The Flag contest, a gamified approach to learning
                            cyber-security. Start by solving simple challenges that test your knowledge and work up
                            to real world situations where you will need a true hacker's skills to succeed!
                        </p>
                    </div>
                </div>
            </div>
        </Fade>
        <Fade right delay={1000}>
            <div className="col-md-4 px-3">
                <div className="row mx-0">
                    <div className="col-md-12 d-flex align-items-center justify-content-center col-3 p-1 p-md-0">
                        <img alt="win" src={require('../../assets/images/icons/win.png')} />
                    </div>
                    <div className="col-md-12 col-9 text-left text-md-center p-2 p-md-0">
                        <h3>Win</h3>
                    </div>
                    <div className="col-12 text-left text-md-center">
                        <p>
                            Students finishing at top of the CTF leaderboard will be awarded with exciting goodies
                            and prizes, and they will also get access to exclusive online cyber-security training
                            following the contest. All other participants will also receive certificates.
                        </p>
                    </div>
                </div>
            </div>
        </Fade>
    </HowItWorksSection>

};

export default LandingHowItWorks;