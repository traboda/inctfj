import React from 'react';
import styled from "@emotion/styled";
import Zoom from 'react-reveal/Zoom';

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
        font-size: calc(1.25rem + 1.2vw);
        margin-bottom: 1.75rem;
        span {
          color: #E65100;
        }
    }
    p {
        font-size: calc(1.1rem + 0.2vw);
        margin-bottom: 1.5rem;
        max-width: 90%;
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

const HighlightFeature = styled('div')`
    margin-bottom: 1.75rem;
    line-height: 1.3;
    font-size: calc(1.2rem + 0.15vw);
    span {
        display: inline-block;
    }
`;

const LandingAboutInCTF = () => (
    <AboutInCTFSection>
        <Zoom up>
            <div className="flex flex-wrap  mx-0">
                <div className="md:w-2/3 p-2">
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
                </div>
                <div className="md:w-1/3 flex justify-end items-center p-3">
                    <div>
                        <HighlightFeature>
                            National Level Cyber Security <wbr /> <span>Talent Incubation</span>
                        </HighlightFeature>
                        <HighlightFeature>
                            5-month Long Completely Free, <wbr /> <span>End-to-End Programme</span>
                        </HighlightFeature>
                        <HighlightFeature>
                            Beginner Friendly & <wbr /> <span>Exclusively for School Students</span>
                        </HighlightFeature>
                        <HighlightFeature>
                            Organized by India's No.1 Ranked <wbr />
                            <span>CTF CyberSecurity Team - bi0s</span>
                        </HighlightFeature>
                    </div>
                </div>
            </div>
        </Zoom>
    </AboutInCTFSection>
);

export default LandingAboutInCTF;