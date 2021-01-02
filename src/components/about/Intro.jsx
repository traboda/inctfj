import React from 'react';
import Fade from "react-reveal/Fade";
import styled from "@emotion/styled";

const IntroSectionWrap = styled.div`
    user-select: none;
`;


const InctfIntro = () => {

    const participantImages = [
        require('../../assets/images/photos/participants/1.jpg'),
        require('../../assets/images/photos/participants/2.jpg'),
        require('../../assets/images/photos/participants/3.jpg'),
        require('../../assets/images/photos/participants/4.jpg')
    ]

    return <IntroSectionWrap>
        <div className="container-lg py-4 px-1">
            <div className="row mx-0">
                <div className="col-md-8 d-flex align-items-center p-3">
                    <div>
                        <Fade up><h1 className="font-weight-bold">Why InCTF Junior?</h1></Fade>
                        <Fade>
                            <p>
                                A recent report has revealed that a miniscule 0.6% of graduate students are currently working in
                                cyber security while cyber attacks and breaches are manifesting in the country. In order to
                                encourage the youth to participate, they need to be taught at a young age about the importance of
                                computer security. A lot of research have been proven to be the best way to approach this is
                                Capture the Flag style contests. These contests typically simulate real life scenarios that enable
                                participants to develop real world security skills. Many of the countries like USA and China have
                                realized the need for cyber security education and are conducting CTF contests for school students.
                            </p>
                        </Fade>
                        <Fade>
                            <p>
                                Having realized the dire need for such a training culture in India, team bi0s, the cyber security
                                student community of Amrita Vishwa Vidyapeetham is organizing Amrita InCTF Junior, an online Capture
                                the Flag style contest specifically designed to introduce cyber security awareness and training
                                in high school students.
                            </p>
                        </Fade>
                    </div>
                </div>
                <div className="col-md-4 p-2">
                    <div className="row mx-0">{participantImages.map((i,index) =>
                        <Fade delay={index*150}>
                            <div className="col-6 p-1"><img draggable="false" style={{ maxWidth: '100%' }} src={i} alt="INCTF participant" /></div>
                        </Fade>
                    )}</div>
                </div>
            </div>
        </div>
    </IntroSectionWrap>;

};

export default InctfIntro;