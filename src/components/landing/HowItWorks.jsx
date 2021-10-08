import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';

const HowItWorksSection = styled.section`
  text-align: center;
  img {
     max-width: 100%;
     width: 150px;
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
                    "title": "learn from bi0s wiki", "url": "https://wiki.bi0s.in/"
                },
                {
                    "title": "practice on Traboda", "url": "https://app.traboda.com/"
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

    return <HowItWorksSection className="motto-cards flex flex-wrap py-5 mx-0">
        <div className="w-full flex p-0 mb-12">
            <h2 className="md:px-4 px-1 py-2 rounded-r mt-4 mb-2 md:flex inline-block items-center bg-blue-600 text-gray-100 uppercase shadow font-bold text-center mb-0">
                <img
                    draggable="false"
                    alt="How it Works?"
                    src={require('../../assets/images/icons/thinking.png')}
                    className="mr-2 my-0 p-0 shadow-none inline-block"
                    style={{ width: '64px' }}
                />
                How does it Work?
            </h2>
        </div>
        {steps.map((s) =>
            <Fade left={s.left} right={s.right} top={s.top} delay={s.delay}>
                <div className="md:w-1/3 pr-4 pl-4 px-3">
                    <div className="flex flex-wrap  mx-0">
                        <div className="md:w-full pr-4 pl-4 flex items-center justify-center w-1/4 p-1 md:p-0">
                            <img draggable="false" alt={s.title} src={s.icon} />
                        </div>
                        <div className="md:w-full pr-4 pl-4 w-3/4 text-left md:text-center p-2 md:p-0">
                            <h3>{s.title}</h3>
                        </div>
                        <div className="w-full text-left md:text-center">
                            <p>{s.content}</p>
                            {(s.links && s.links.length > 0) &&
                            <div className="w-full mt-3 mb-4">{s.links.map((l) =>
                                <a className="inline-block mx-2 py-2 px-3 mb-2" target="_blank" href={l.url}>
                                    <i className="fa fa-external-link mr-2" />
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