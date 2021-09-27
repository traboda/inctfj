import React from 'react';
import styled from "@emotion/styled";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


const AboutInCTFSection = styled.section`
    padding: 8vh 2.5vw;
    img {
      max-width: 100%;
      padding: 0.5rem;
      border-radius: 8px;
      box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.3);
    }
    h2 {
        font-weight: 700;
        line-height: 1.2;
        font-size: calc(1.5rem + 1.8vw);
        margin-bottom: 1.5rem;
        span {
          color: #E65100;
        }
    }
    p {
        font-size: calc(1.2rem + 0.25vw);
        margin-bottom: 1.5rem;
    }
    a {
       display: inline-block;
       text-align: center;
       margin-bottom: 0.5rem;
       margin-right: 0.5rem;
       background: #E65100;
       color: white;
       font-weight: 600;
       padding: 0.5rem 1.2rem;
       text-decoration: none!important;
       border-radius: 8px;
       box-shadow: 2px 6px 8px rgba(0,0,0,0.3);
    }
   .features-list {
      img {
         max-height: 180px;
         width: 90px;
         max-width: 100%;
         box-shadow: none!important;
         padding: 0;
        margin-bottom: 0.5rem;
      }
   }
`;

const LandingAboutInCTF = () => {

    const features = [
        {
            "image": require('../../assets/images/icons/ticket_bubble.png'),
            "title": "No Participation Fee",
        },
        {
            "image": require('../../assets/images/icons/baby_walk_bubble.png'),
            "title": "No Prior Knowledge Required",
        },
        {
            "image": require('../../assets/images/icons/prize_bubble.png'),
            "title": "e-Certificates for All",
        }
    ]

    return <AboutInCTFSection>
        <Zoom up>
            <div className="flex flex-wrap  mx-0">
                <div className="lg:w-2/3">
                    <div>
                        <div className="px-3">
                            <h2 className="mt-2">
                                India's CyberSecurity Championship & <wbr />
                                <span>Talent Incubation Programme</span> <wbr />
                                for School Students
                            </h2>
                            <p>
                                Democratizing cyber-security education by making it accessible to everyone at a very
                                young age and anchoring them on the track for excellent careers is what Amrita's India
                                Capture The Flag (InCTF) Junior programme is all about.
                            </p>
                            <p>
                                Today, InCTF Junior is a Cyber-Security talent incubator that exposes participants to
                                the cyber-security world, helping them to learn & grow their skills hands-on.
                            </p>
                            <p>
                                It presents them exciting opportunities of getting mentored, peer-networking,
                                and perhaps a platform to showcase their talent and get recognized & rewarded.
                            </p>
                        </div>
                        {/*<div className="md:flex px-2 mt-3 justify-center md:justify-start items-center">*/}
                        {/*    <a style={{ background: '#FF1100' }} title="How to register" href="https://youtu.be/twS3pzPjRzA" target="_blank">*/}
                        {/*        Watch How to Get Started*/}
                        {/*    </a>*/}
                        {/*    <a style={{ background: '#E65100' }} title="Learn more about InCTF Jr" href="/about">About InCTF Jr.</a>*/}
                        {/*    <a  style={{ background: '#4A148C' }} title="View FAQ" href="/faq">View FAQ</a>*/}
                        {/*</div>*/}
                        {/*<div className="features-list mt-2 py-2">*/}
                        {/*    <div className="flex flex-wrap  mx-0">*/}
                        {/*        {features.map((f) =>*/}
                        {/*            <div className="md:w-1/3 pr-4 pl-4 p-0">*/}
                        {/*                <Fade delay={500}>*/}
                        {/*                    <div className="feature-card flex flex-wrap  mx-0">*/}
                        {/*                        <div className="w-1/3 text-center md:w-full pr-4 pl-4 px-1">*/}
                        {/*                            <img alt={f.title} src={f.image} />*/}
                        {/*                        </div>*/}
                        {/*                        <div className="w-2/3 md:text-center flex items-center md:justify-center text-left md:w-full pr-4 pl-4 px-1">*/}
                        {/*                            <div className="h6 mb-0 w-3/4">{f.title}</div>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </Fade>*/}
                        {/*            </div>*/}
                        {/*        )}*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                    </div>
                </div>
            </div>
        </Zoom>
    </AboutInCTFSection>

};

export default LandingAboutInCTF;