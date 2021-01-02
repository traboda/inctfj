import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';

const SponsorshipArea = styled.section`
    align-items: center;
    justify-content: center;
    padding: 1rem;
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
    max-width: 700px;
    .h5 {
      color: #555;
      font-size: 18px;
    }
    img {
       max-height: 90px;
       width: auto;
       max-width: 100%;
       filter: saturate(0) contrast(50%);
       &:hover {
          filter: none!important;
       }
    }
`

const LandingSponsorship = ({ }) => {

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
            image: require('../../assets/images/sponsors/nciipc.png')
        },
        {
            image: require('../../assets/images/sponsors/netcon.png')
        },
        {
            image: require('../../assets/images/sponsors/juniper_networks.png')
        },
        {
            image: require('../../assets/images/sponsors/tbb.png')
        },
        {
            image: require('../../assets/images/sponsors/audius.png')
        }
    ]

    return <SponsorshipArea className="row mx-0">
        <Fade left>
            <div className="col-lg-6 p-1 p-lg-5 p-md-3">
                <div className="mb-2">Not a Student?</div>
                <h2>
                    Today You Can Help Us to
                    Make CyberSec Warriors of Tomorrow
                </h2>
                <p>
                    InCTFj is India's first & premier cyber security & CTF hacking contest for school students, having
                    helped over 10000 student participants from 21 states of India for the last 4 years.
                    We are offering a limited number of exclusive sponsorship opportunities to companies & organizations.
                    <div>Help us & take part in shaping cyber security warriors of tomorrow!</div>
                </p>
                <div>
                    {/*<a className="sponsorship-brochure-button" href="/sponsor">Sponsorship Brochure</a>*/}
                    <a className="contact-us-button" href="mailto:inctfj@am.amrita.edu">Contact Us</a>
                </div>

            </div>
        </Fade>
        <Fade right>
            <div className="col-lg-6 px-1">
                <LogoWall className="row mx-0">
                    <div className="h5 col-12 p-0 mt-3 mb-1 font-weight-bolder text-left text-uppercase">Past Sponsors</div>
                    {pastSponsors.map((s) =>
                        <div className="col-md-3 col-4 p-1">
                            <Fade><img alt="Sponsor Logo" src={s.image} /></Fade>
                        </div>
                    )}
                </LogoWall>
            </div>
        </Fade>
    </SponsorshipArea>

};

export default LandingSponsorship;