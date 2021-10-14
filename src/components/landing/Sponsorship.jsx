import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';
import SponsorsSection from "./SponsorsSection";

const SponsorshipArea = styled.section`
    justify-content: center;
    padding: 5vh 0;
    h2 {
      font-weight: 700;
      font-size: 32px;
      margin-bottom: 1rem;
      div {
        font-size: 90%;
      }
    }
    p {
        max-width: 650px;
        div {
          font-size: 16px;
          font-weight: 500;
        }
    }
    a {
       display: inline-block;
       color: white;
       font-weight: 600;
       padding: 0.5rem 1rem;
       text-decoration: none!important;
       border-radius: 8px;
       box-shadow: 2px 6px 12px rgba(0,0,0,0.3);
       margin: 0.5rem 0;
    }
    .sponsorship-brochure-button {
       background: #E65100;
    }
    .contact-us-button {
        background: #1A237E;
    }
`;

const LogoWall = styled.div`
    max-width: 100%;
    width: 900px;
    a {
      box-shadow: none!important;
      color: black;
      text-align: center;
    }
    .h5 {
      color: #555;
      font-size: 18px;
    }
    .past-sponsors {
      img {
        height: 64px!important;
        filter: saturate(0) contrast(50%);
        &:hover {
          filter: none!important;
        }
      }
    }
    .inctfj-sponsors {
      img {
        height: 90px!important;
      }
    }
    img {
       display: inline;
       max-height: 90px;
       width: auto;
       max-width: 100%;
    }
`

const LandingSponsorship = () => {

    const inCTFJrPartners = [
        {
            image: require('../../assets/images/logos/cbse_logo.png'),
            link: "https://cbseacademic.nic.in/web_material/Circulars/2021/93_Circular_2021.pdf",
        },
        {
            image: require('../../assets/images/logos/ssi_logo.jpg'),
        },
    ]

    return <SponsorshipArea className="flex flex-wrap mx-auto container px-4">
        <Fade left>
            <div className="lg:w-1/2 p-0">
                <div>
                    <div className="mb-2">Not a Student?</div>
                    <h2>
                        Today You Can Help Us to
                        Make CyberSec Warriors of Tomorrow
                    </h2>
                    <p>
                        InCTFj is India's first & only cyber security & CTF hacking championship for school students, having
                        helped over 20000 student participants from 23 states of India for the last 5 years.
                        We are offering a limited number of exclusive sponsorship opportunities to companies & organizations.
                        <div className="text-lg mt-3">Help us & take part in shaping cyber security warriors of tomorrow!</div>
                    </p>
                    <div className="mt-2 mx-0 mb-8">
                        {/*<a className="sponsorship-brochure-button" href="/sponsor">Sponsorship Brochure</a>*/}
                        <a className="contact-us-button" href="mailto:inctfj@am.amrita.edu">Contact Us</a>
                    </div>
                </div>
                <LogoWall style={{ width: '100%', maxWidth: '700px' }}>
                    <div className="bg-white rounded-xl shadow-md p-0 my-6 md:p-6">
                        <div className="flex flex-wrap">
                            <div className="inctfj-sponsors text-red-500 w-full p-0 mt-3 mb-3 opacity-80 text-lg text-center">
                                InCTF Jr 2021 - Official Partners
                            </div>
                            {inCTFJrPartners.map((s) =>
                                <div className="md:w-1/2 p-1 w-full flex items-center">
                                    <Fade>
                                        <a href={s.link} target="_blank">
                                            <img draggable="false" alt="Sponsor Logo" src={s.image} />
                                        </a>
                                    </Fade>
                                </div>
                            )}
                        </div>
                    </div>
                </LogoWall>
            </div>
        </Fade>
        <Fade right>
            <div className="w-full lg:w-1/2">
                <LogoWall>
                    <div className="bg-white rounded-xl shadow-md px-2 py-8 md:p-4">
                        <SponsorsSection />
                    </div>
                </LogoWall>
            </div>
        </Fade>
    </SponsorshipArea>

};

export default LandingSponsorship;