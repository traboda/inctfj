import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';

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

    const pastSponsors = [
        {
            image: require('../../assets/images/sponsors/amazon.png'),
        },
        {
            image: require('../../assets/images/sponsors/cisco.png'),
        },
        {
            image: require('../../assets/images/sponsors/vmware.png'),
        },
        {
            image: require('../../assets/images/sponsors/nciipc.png'),
        },
        {
            image: require('../../assets/images/sponsors/audius.png'),
        }
    ];

    const inCTFSponsors = [
        {
            image: require('../../assets/images/sponsors/salesforce.png'),
            desg: "Event Sponsor",
        },
        {
            image: require('../../assets/images/sponsors/zoho.png'),
            desg: "Diamond Sponsor",
        },
        {
            image: require('../../assets/images/sponsors/vmware.png'),
            desg: "Diamond Sponsor",
        },
        {
            image: require('../../assets/images/sponsors/crowdstrike.png'),
            desg: "Platinum Sponsor",
        },
        {
            image: require('../../assets/images/sponsors/cred.png'),
            desg: "Gold Sponsor",
        },
        {
            image: require('../../assets/images/sponsors/h&rblock.png'),
            maxHeight: '50px',
            desg: "Silver Sponsor",
        },
    ];

    const inCTFJrSponsors = [
        {
            image: require('../../assets/images/sponsors/traboda.png'),
            link: "https://traboda.com",
            desg: "Platform Sponsor"
        },
        {
            image: require('../../assets/images/sponsors/jnanamarga_tech.jpg'),
            link: "https://jnanamarga.in/",
            desg: "Silver Sponsor"
        },
    ]

    const inCTFJrPartners = [
        {
            image: require('../../assets/images/logos/cbse_logo.png'),
            link: "https://cbseacademic.nic.in/web_material/Circulars/2021/93_Circular_2021.pdf",
        },
        {
            image: require('../../assets/images/logos/ssi_logo.jpg'),
        },
    ]

    return <SponsorshipArea className="flex flex-wrap mx-0">
        <Fade left>
            <div className="lg:w-1/2 p-0 lg:p-4">
                <div className="px-4 md:px-8 lg:px-12">
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
                        <div className="flex flex-wrap">
                            <div className="inctfj-sponsors text-red-500 w-full p-0 mt-3 mb-3 opacity-80 text-lg text-center">InCTF Jr 2021 Sponsors</div>
                            <div className="w-full flex justify-center">
                                <p className="text-center opacity-8 mb-3" style={{ maxWidth: '100%', fontSize: '95%', lineHeight: 1.4, width: '450px' }}>
                                    We thank these organizations for believing that <br/> CyberSecurity Education Should Start From School.
                                </p>
                            </div>
                            {inCTFJrSponsors.map((s) =>
                                <div className="md:w-1/2 px-2 w-1/2 flex justify-center items-end p-1">
                                    <Fade>
                                        <a href={s.link} target="_blank">
                                            <img
                                                style={{ maxHeight: s?.maxHeight }}
                                                draggable="false" alt="Sponsor Logo" src={s.image}
                                            />
                                            {s?.desg && (<div className="text-sm mt-3 font-light">{s.desg}</div>)}
                                        </a>
                                    </Fade>
                                </div>
                            )}
                        </div>
                        <div className="flex my-3 flex-wrap my-6">
                            <div className="w-full p-0 mt-3 mb-3 text-red-500 opacity-80 text-center">InCTF 2021 Sponsors</div>
                            <div className="w-full flex justify-center">
                                <p className="text-center opacity-8 mb-3" style={{ maxWidth: '100%', fontSize: '95%', lineHeight: 1.4, width: '450px' }}>
                                    We thank these organizations for investing in the CyberSecurity Workforce of Tomorrow.
                                </p>
                            </div>
                            {inCTFSponsors.map((s) =>
                                <div className="md:w-1/4 px-2 w-1/2 p-1 flex justify-center text-center items-end">
                                    <div className="text-center">
                                        <Fade>
                                            <img
                                                style={{ maxHeight: s?.maxHeight }}
                                                draggable="false" alt="Sponsor Logo"
                                                src={s.image}
                                            />
                                            {s?.desg && (<div className="text-sm mt-3 font-light">{s.desg}</div>)}
                                        </Fade>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex my-3 past-sponsors flex-wrap">
                            <div className="w-full p-0 mt-3 mb-3 text-red-500 opacity-80 text-center">InCTF 2019 Sponsors</div>
                            {pastSponsors.map((s) =>
                                <div className="md:w-1/5 px-1 flex items-center justify-center w-1/3 p-1">
                                    <Fade><img draggable="false" alt="Sponsor Logo" src={s.image} /></Fade>
                                </div>
                            )}
                        </div>
                    </div>
                </LogoWall>
            </div>
        </Fade>
    </SponsorshipArea>

};

export default LandingSponsorship;