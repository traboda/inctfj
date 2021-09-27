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

    return <section className="p-6 bg-white">
        <div className="flex flex-wrap ">
            <div className="md:w-1/2 pr-4 pl-4 p-2">
                <h4 className="text-center">Our Sponsors</h4>
                <SponsorsContainer>
                    <a href="http://jnanamarga.in/" target="_blank" rel="nofollow noopener">
                        <img
                            alt="Jnana Marga Technologies" draggable="false"
                            src={require('../../assets/images/logos/jnanamarga_tech.jpg')}
                        />
                        <div>Silver Sponsor</div>
                    </a>
                    <a href="http://app.traboda.com/" target="_blank" rel="nofollow noopener">
                        <img
                            alt="Traboda CyberLabs" draggable="false"
                            src={require('../../assets/images/logos/traboda_dark.png')}
                        />
                        <div>Platform Sponsor</div>
                    </a>
                </SponsorsContainer>
            </div>
            <div className="md:w-1/2 pr-4 pl-4 flex items-center justify-center p-2">
                <div>
                    <h4 className="text-center">Our Partners</h4>
                    <SponsorsContainer>
                        <a href="http://www.sciencesociety.in/" target="_blank" rel="nofollow noopener">
                            <img
                                alt="Jnana Marga Technologies" draggable="false"
                                src={require('../../assets/images/logos/ssi_logo.jpg')}
                            />
                        </a>
                    </SponsorsContainer>
                </div>
            </div>
        </div>
    </section>

};

export default SponsorBar;