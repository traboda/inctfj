import React  from 'react';
import styled from "@emotion/styled";

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";
import Footer from "../src/components/shared/Footer";
import PageHeader from "../src/components/PageHeader";
import PageFooterExplorer from "../src/components/PageFooterExplorer";


const LogoWrap = styled.div`
      background-color: ${({ dark}) => dark ? '#333' : 'white'};
      padding: 2rem;
      border-radius: 1rem;
      background-size: 30px 30px;
      background-position: 0 0,45px 45px;
      background-image: ${({ dark}) =>
        dark ?
            `linear-gradient(45deg,#222427 25%,transparent 0,transparent 75%,#222427 0,#222427),linear-gradient(45deg,#222427 25%,transparent 0,transparent 75%,#222427 0,#222427);` :
            `linear-gradient(45deg,#f6f6f6 25%,transparent 0,transparent 75%,#f6f6f6 0,#f6f6f6),linear-gradient(45deg,#f6f6f6 25%,transparent 0,transparent 75%,#f6f6f6 0,#f6f6f6)`
    };
    img {
      max-width: 100%;
    }
    a {
        background: #304FFE!important;
        color: white;
        margin-right: 0.5rem;
        font-size: 15px;
        padding: 0.5rem 1rem;
        border-radius: 0.15rem;
        text-decoration: none!important;
    }
`

const BrandingPage = () => {

    return <Base meta={{ title: "Brand Kit" }}>
        <TopBar darkenOnSidebar includeSpace={false} />
        <PageHeader
            title="Brand Kit"
            description="Brand Assets & Guidelines for InCTF Junior"
        />
        <div style={{ background: '#eee', minHeight: '50vh' }}>
            <div className="flex justify-center px-1 py-5">
                <div className="flex flex-wrap mx-0" style={{ maxWidth: '900px' }}>
                    <div className="md:w-1/3 p-2">
                        <LogoWrap>
                             <img src={require('../src/assets/images/branding/colorful.png')} alt="Colorful Logo" />
                             <a href={require('../src/assets/images/branding/colorful.png')}>PNG</a>
                        </LogoWrap>
                    </div>
                    <div className="md:w-1/3 p-2">
                        <LogoWrap dark>
                            <img src={require('../src/assets/images/branding/light_version.png')} alt="Light Logo" />
                            <a href={require('../src/assets/images/branding/light_version.png')}>PNG</a>
                        </LogoWrap>
                    </div>
                    <div className="md:w-1/3 p-2">
                        <LogoWrap>
                            <img src={require('../src/assets/images/branding/full_black.png')} alt="Colorful Logo" />
                            <a href={require('../src/assets/images/branding/full_black.png')}>PNG</a>
                        </LogoWrap>
                    </div>
                </div>
            </div>
        </div>
        <PageFooterExplorer
            items={[
                {
                    "title": "Advisory Board",
                    "text": "View our elite panel of advisors",
                    "link": "/advisory-board"
                },
                {
                    "title": "Organizers",
                    "text": "View our team of organizers",
                    "link": "/organizers"
                },
                {
                    "title": "Our Reach & Impact",
                    "text": "See our reach & impact",
                    "link": "/about#our-reach"
                },
            ]}
        />
        <Footer />
    </Base>;

};

export default BrandingPage;