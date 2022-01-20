import React from 'react';
import Fade from "react-reveal/Fade";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  .past-sponsors {
    img {
        height: auto;
        width:200px;
        
      }
  }
  img {
    display: inline;
    max-height: 120px;
    width: auto;
    max-width: 100%;
  }
`;

const pastSponsors = [
    {
        image: require('../../assets/images/sponsors/isaca.png'),
    },
    {
        image: require('../../assets/images/sponsors/csoi.png'),
    },
    {
        image: require('../../assets/images/sponsors/ieee.png'),
    },
    {
        image: require('../../assets/images/sponsors/amfoss.png'),
    },
    {
        image: require('../../assets/images/sponsors/shakti.png'),
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
        image: require('../../assets/images/sponsors/secfence.jpg'),
        maxHeight: '70px',
        desg: "Gold Sponsor",
    },
    {
        image: require('../../assets/images/sponsors/bugcrowd.png'),
        maxHeight: '50px',
        desg: "Gold Sponsor",
    },
    {
        image: require('../../assets/images/sponsors/GL-blue.png'),
        maxHeight: '50px',
        desg: "Gold Sponsor",
    },
    {
        image: require('../../assets/images/sponsors/Logo_SE.png'),
        maxHeight: '40px',
        desg: "Gold Sponsor",
    },
    {
        image: require('../../assets/images/sponsors/h&rblock.png'),
        maxHeight: '150px',
        desg: "Silver Sponsor",
    },
    {
        image: require('../../assets/images/sponsors/Audius_Logo.png'),
        maxHeight: '30px',
        desg: "Prize Sponsor",
    },
    
];



const SponsorsSection = () => {
    return (
        <Wrapper>           
            <div className="flex my-3 flex-wrap my-6">
                <div className="w-full p-0 mt-3 mb-3 text-red-500 opacity-80 text-center">InCTF 2021 Sponsors</div>
                <div className="w-full justify-center">
                    <p className="w-full text-center opacity-8 mb-3" style={{ maxWidth: '100%', fontSize: '95%', lineHeight: 1.4, width: '450px' }}>
                        We thank these organizations for investing in the CyberSecurity Workforce of Tomorrow.
                        
                    </p>
                    
                </div>
                {inCTFSponsors.map((s, i) =>
                    <div className="md:w-1/4 px-2 w-1/2 py-3 flex justify-center text-center items-end"  key={i}>
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
                <div className="w-full p-0 mt-3 mb-3 text-red-500 opacity-80 text-center">COMMUNITY PARTNERS</div>
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