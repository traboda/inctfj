import React from 'react';
import styled from "@emotion/styled";
import Zoom from 'react-reveal/Zoom';
import Tada from 'react-reveal/Tada';
import ReactPlayer from 'react-player/youtube'


const AboutInCTFSection = styled.section`
    img {
      max-width: 100%;
      padding: 0.5rem;
      border-radius: 8px;
      box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.3);
    }
    h2 {
        font-weight: 900;
        font-size: calc(1.5rem + 1.8vw);
        span {
          color: #E65100;
        }
    }
   a {
       display: inline-block;
       text-align: center;
       margin-bottom: 0.5rem;
       margin-right: 0.5rem;
       background: #E65100;
       color: white;
       font-weight: 600;
       padding: 0.5rem 2rem;
       text-decoration: none!important;
       border-radius: 8px;
       box-shadow: 2px 6px 8px rgba(0,0,0,0.3);
    }
    .features-list {
      img {
         max-height: 180px;
         width: 90px;
         max-width: 100%;
         box-shadow: none!important;
         padding: 0;
      }
      .feature-card {
          transition: all 2s ease;
          &:hover{
            img {
               max-height: 200px;
               width: 100px;
            }
            transition: all 2s ease;
          }
      }
   }
`;

const LandingAboutInCTF = () => {

    const features = [
        {
            "image": require('../../assets/images/icons/ticket_bubble.png'),
            "title": "No Participation Fee",
        },
        {
            "image": require('../../assets/images/icons/baby_walk_bubble.png'),
            "title": "No Prior Knowledge Required",
        },
        {
            "image": require('../../assets/images/icons/prize_bubble.png'),
            "title": "Certificates for All",
        }
    ]

    return <AboutInCTFSection>
        <Zoom up>
            <div className="row mx-0">
                <div className="col-lg-6 p-md-4 p-2">
                    <ReactPlayer url="https://www.youtube.com/watch?v=sxRZ06Rbh_c" width="100%" height="60vmin" />
                </div>
                <div className="col-lg-6 py-md-4 py-3 px-md-3 px-lg-0 d-flex">
                    <div>
                        <div className="px-3">
                            <h2 className="mt-2">What is <span>InCTF Jr</span>?</h2>
                            <p>
                                Amrita InCTF Junior is a National level Cybersecurity contest for school students in India.
                                Realizing the vital role cybersecurity plays now and in the future for a safer world,
                                many countries are now introducing cybersecurity education at the school level to develop
                                interest and nurture talent in this area. Participation in the contest is fully free and
                                no prior knowledge is required for taking part.
                            </p>
                        </div>
                        <div className="d-flex px-2 mt-3 justify-content-center justify-content-md-start align-items-center">
                            <a style={{ background: '#E65100' }} title="Learn more about InCTF Jr" href="/about">More About InCTF Jr.</a>
                            <a  style={{ background: '#4A148C' }} title="View FAQ" href="/faq">View FAQ</a>
                        </div>
                        <div className="features-list mt-2 py-2">
                            <div className="row mx-0">
                                {features.map((f) =>
                                    <div className="col-md-4 p-0">
                                        <Tada delay={500}>
                                            <div className="feature-card row mx-0">
                                                <div className="col-4 text-center col-md-12 px-1">
                                                    <img alt={f.title} src={f.image} />
                                                </div>
                                                <div className="col-8 text-md-center d-flex align-items-center justify-content-md-center text-left col-md-12 px-1">
                                                    <div className="h6 mb-0 w-75">{f.title}</div>
                                                </div>
                                            </div>
                                        </Tada>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Zoom>
    </AboutInCTFSection>

};

export default LandingAboutInCTF;