import React from 'react';
import styled from "@emotion/styled";

const SponsorsContainer = styled('div')`
    background: white;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    a {
        margin-right: 1.5rem;
        color: #333;
        text-decoration: none!important;
        font-size: 90%;
        img {
          max-height: 50px;
          margin-bottom: 8px;
       }
    }
`;

const SponsorBar = () => {

    return <section className="p-4">
        <h4 className="text-center">Our Sponsors</h4>
        <SponsorsContainer>
            <a href="http://jnanamarga.in/" rel="nofollow noopener">
                <img
                    alt="Jnana Marga Technologies" draggable="false"
                    src={require('../../assets/images/logos/jnanamarga_tech.jpg')}
                />
                <div>Silver Sponsor</div>
            </a>
            <a href="http://app.traboda.com/" rel="nofollow noopener">
                <img
                    alt="Traboda CyberLabs" draggable="false"
                    src={require('../../assets/images/logos/traboda_dark.png')}
                />
                <div>Platform Sponsor</div>
            </a>
        </SponsorsContainer>
    </section>

};

export default SponsorBar;