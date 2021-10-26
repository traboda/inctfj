import React from 'react';
import Fade from "react-reveal/Fade";
import styled from "@emotion/styled";

const Wrapper = styled.div`
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
`;

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
        link: "http://jnanamarga.in/",
        desg: "Silver Sponsor"
    },
]

const SponsorsSection = () => {
    return (
        <Wrapper>
            <div className="flex flex-wrap">
                <div className="inctfj-sponsors text-red-500 w-full p-0 mt-3 mb-3 opacity-80 text-lg text-center">InCTF Jr 2021 Sponsors</div>
                <div className="w-full flex justify-center">
                    <p className="text-center opacity-8 mb-3" style={{ maxWidth: '100%', fontSize: '95%', lineHeight: 1.4, width: '450px' }}>
                        We thank these organizations for believing that <br/> CyberSecurity Education Should Start From School.
                    </p>
                </div>
                {inCTFJrSponsors.map((s, i) =>
                    <div className="md:w-1/2 px-2 w-1/2 flex justify-center items-end p-1" key={i}>
                        <Fade>
                            <a href={s.link} target="_blank">
                                <img draggable="false" alt="Sponsor Logo" src={s.image} />
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
                {inCTFSponsors.map((s, i) =>
                    <div className="md:w-1/4 px-2 w-1/2 p-1 flex justify-center text-center items-end" key={i}>
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
                {pastSponsors.map((s, i) =>
                    <div className="md:w-1/5 px-1 flex items-center justify-center w-1/3 p-1" key={i}>
                        <Fade><img draggable="false" alt="Sponsor Logo" src={s.image} /></Fade>
                    </div>
                )}
            </div>
        </Wrapper>
    );
};

export default SponsorsSection;