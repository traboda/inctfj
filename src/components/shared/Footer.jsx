import React, { useContext } from 'react';
import styled from "@emotion/styled";
import SocialMediaLinks from "./SocialMediaLinks";
import ConfigContext from "../SiteView/context";

const FooterContainer = styled.footer`
    background: #222640;
    color: white;
    padding: 1rem;
    font-size: 14px;
    img {
      max-height: 64px;
      max-width: 100%;
    }
`;

const FooterLinksBar = styled.nav`
    a {
       font-size: 13px;
       color: white;
       opacity: 0.8;
       margin-right: 8px;
       margin-bottom: 5px;
       &:hover {
         color: #fd7e14;
         text-decoration: none;
       }
    }
`;

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;

const Footer = () => {

    const { assets } = useContext(ConfigContext);
    const footerConfig = require(`../../data/${eventID}/footer.json`);

    return <FooterContainer>
        <div className="container min-w-lg mx-auto sm:px-4 px-1 pt-3">
            <div className="flex flex-wrap  mx-0">
                <div className="md:w-2/3 order-2 md:order-1 text-center md:text-left px-1">
                    <div className="md:flex items-center block">
                        <img draggable="false" className="inline" alt="Amrita InCTF Junior" src={require(`../../data/${eventID}/assets/${assets?.logo.light}`)} />
                        <div className="md:ml-6 py-3">
                            <div className="line-height-1 opacity-80 my-2 md:mb-1 md:mt-0">
                                {footerConfig?.copyrightText}
                            </div>
                            {footerConfig?.menu?.length > 0 && (
                                <FooterLinksBar>
                                    {footerConfig?.menu.map((link, index) => (
                                        <a key={index} href={link.link}>{link.title}</a>
                                    ))}
                                </FooterLinksBar>
                            )}
                        </div>
                    </div>
                </div>
                <div className="social-bar md:w-1/3 py-4 md:py-0 w-full order-1 md:order-2 text-white flex items-center md:justify-end justify-center px-1">
                    <SocialMediaLinks />
                </div>
            </div>
        </div>
    </FooterContainer>

};

export default Footer;