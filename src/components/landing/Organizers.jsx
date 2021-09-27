import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';

const OrganizersSection = styled.section`
    background: #E3F2FD;
    user-select: none;
    .content-container {
      padding: 5vh 5vw;
      h3 {
          text-align: center;
          font-weight: 700;
          font-size: 26px;
          text-transform: uppercase;
          color: #E65100;
          margin-bottom: 2rem;
        }
        h4 {
          font-size: 18px;
          font-weight: 600;
          color: #444;
        }
        img {
          max-height: 78px;
          max-width: 100%;
          margin-bottom: 1rem;
        }
        .amrita {
           @media (min-width: 700px){
              border-right: 1px solid #999;
           }
        }
        .cyber {
           @media (min-width: 700px){
              border-left: 1px solid #999;
           }
        }
        .md\\:w-1\\/3 {
            padding: 1rem;
            p {
              font-size: 12px;
              max-width: 450px;
              margin-bottom: 0;
            }
        }
    }
    img {
      max-width: 100%;
    }
`;

const LandingOrganizers = () => {


    return <OrganizersSection>
        <div className="content-container">
            <h3>Organized By</h3>
            <div className="flex flex-wrap  mx-0">
                <Fade left>
                    <div className="md:w-1/3 pr-4 pl-4 md:order-1 order-2 text-right amrita">
                        <a href="https://amrita.edu">
                            <img alt="Amrita Vishwa Vidyapeetham" src={require('../../assets/images/logos/amritapuri_dark.png')} className="ml-auto" />
                        </a>
                        <h4>India's No.1 Ranked Private University</h4>
                        <div className="flex justify-end">
                            <p>
                                Amrita Vishwa Vidyapeetham, founded in 1994, within the next 2 decades has emerged among the
                                leading universities in India, and has been conferred the status of Institute of Eminence by the
                                Govt. of India. It is ranked as the fourth best university in the NIRF Ranking 2020, and has been
                                swiftly establishing itself as a world class teaching and research institution.
                            </p>
                        </div>
                    </div>
                </Fade>
                <Fade up>
                    <div className="md:w-1/3 pr-4 pl-4 bi0s text-center md:order-2 order-1">
                        <a href="https://bi0s.in">
                            <img alt="Team bi0s" src={require('../../assets/images/logos/bi0s_dark.png')} className="mx-auto" />
                        </a>
                        <h4>India's No.1 Ranked CTF Hacking Team</h4>
                        <div className="flex justify-center">
                            <p>
                                Team bi0s is a community of college student focusing on cyber security,
                                and actively participating in CTF contests worldwide. For several years now,
                                team bi0s has consistently been the No.1 CTF team in India. The team
                                members also actively involve in security research projects, organizing training
                                programs & CTFs, and developing security tools.
                            </p>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="md:w-1/3 pr-4 pl-4 cyber md:order-2 order-1">
                        <a href="https://www.amrita.edu/center/cyber-security">
                            <img alt="Team bi0s" src={require('../../assets/images/logos/amrita_cyber.png')} />
                        </a>
                        <h4>India's Leading CyberSec. Researchers</h4>
                        <div className="flex">
                            <p>
                                Amrita Center for Cyber Security Systems and Networks promote partnership between
                                industry, academia and the government to foster innovative research and education
                                in Cyber Security, thus enhancing knowledge, deriving solutions, benefiting society
                                and mitigating risks. The Center is supported by the Government of India throught
                                many of its Departments and Mission REACH programs. The Center has been designated
                                as a Center of Relevance and Excellence (CORE) for Cyber Security in India.
                            </p>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
        <img alt="amritapuri vector illustration" draggable="false" src={require('../../assets/images/logos/amritapuri_vector.png')} />
    </OrganizersSection>;

};

export default LandingOrganizers;