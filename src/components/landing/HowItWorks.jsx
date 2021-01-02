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
  a {
      text-decoration: none!important;
      display: inline-flex;
      align-items: center;
      line-height: 1;
      background: #eee;
      border-radius: 5px;
      padding: 4px 10px;
      img {
        margin-bottom: 0;
        max-height: 28px;
        margin-right: 8px;
      }
  }
`;


const LandingHowItWorks = () => {

    const steps = [
        {
            "title": "Learn", "icon": require('../../assets/images/icons/learn.png'),
            "delay": 100, "left": true,
            "content": <>
                Students can dive into cyber security using the world class resources that team bi0s has made available.
                Learn new concepts using the bi0s wiki and our YouTube channel and practice them at the challenge archive!
            </>,
            "links": [
                {
                    "title": "open bi0s wiki", "url": "https://wiki.bi0s.in/"
                }
            ]

        },
        {
            "title": "Hack", "icon": require('../../assets/images/icons/hack.png'),
            "delay": 500, "top": true,
            "content": <>
                Students now participate in the Capture The Flag contest, a gamified approach to learning
                cyber-security. Start by solving simple challenges that test your knowledge and work up
                to real world situations where you will need a true hacker's skills to succeed!
            </>,
            "links": [
                {
                    "title": "watch how it is played", "url": "https://www.youtube.com/watch?v=9Je6USf7CG0"
                }
            ]
        },
        {
            "title": "Win", "icon": require('../../assets/images/icons/win.png'),
            "delay": 1000, "right": true,
            "content": <>
                Students finishing at top of the CTF leaderboard will be awarded with exciting goodies
                and prizes, and they will also get access to exclusive online cyber-security training
                following the contest. All other participants will also receive certificates.
            </>,
            "links": [
                {
                    "title": "stats & rankings", "url": "/stats"
                }
            ]
        }
    ]

    return <HowItWorksSection className="motto-cards row py-5 mx-0">
        <div className="col-12 d-flex p-0 mb-4">
            <h2 className="px-md-3 px-1 py-2 rounded-right mt-4 mb-2 d-md-flex d-inline-block align-items-center bg-primary text-light text-uppercase shadow font-weight-bold text-center mb-0">
                <img draggable="false" alt="How it Works?" src={require('../../assets/images/icons/thinking.png')} className="mr-2 my-0 p-0 shadow-none" />
                How does it Work?
            </h2>
        </div>
        {steps.map((s) =>
            <Fade left={s.left} right={s.right} top={s.top} delay={s.delay}>
                <div className="col-md-4 px-3">
                    <div className="row mx-0">
                        <div className="col-md-12 d-flex align-items-center justify-content-center col-3 p-1 p-md-0">
                            <img draggable="false" alt={s.title} src={s.icon} />
                        </div>
                        <div className="col-md-12 col-9 text-left text-md-center p-2 p-md-0">
                            <h3>{s.title}</h3>
                        </div>
                        <div className="col-12 text-left text-md-center">
                            <p>{s.content}</p>
                            {(s.links && s.links.length > 0) &&
                            <div className="w-100 mt-1 mb-4">{s.links.map((l) =>
                                <a href={l.url}>
                                    <img src={require('../../assets/images/icons/external_link.png')} alt="open link" />
                                    {l.title}
                                </a>
                            )}</div>}
                        </div>
                    </div>
                </div>
            </Fade>
        )}
    </HowItWorksSection>

};

export default LandingHowItWorks;