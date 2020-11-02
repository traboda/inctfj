import React from 'react';
import styled from "@emotion/styled";

const OrganizersSection = styled.section`
    background: #E0F2F1;
    user-select: none;
    .content-container {
      padding: 5vh 5vw;
      h4 {
          text-align: center;
          font-weight: 700;
          font-size: 26px;
          text-transform: uppercase;
          color: #00BFA5;
          margin-bottom: 2rem;
        }
        h5 {
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
            border-right: 2px solid #999;
           }
        }
        .col-md-6 {
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
            <h4>Organzied By</h4>
            <div className="row mx-0">
                <div className="col-md-6 order-md-1 order-2 text-right amrita">
                    <img alt="Amrita Vishwa Vidyapeetham" src={require('../../assets/images/logos/amritapuri_dark.png')} />
                    <h5>India's No.1 Ranked Private University</h5>
                    <div className="d-flex justify-content-end">
                        <p>
                            Amrita Vishwa Vidyapeetham, founded in 1994, within the next 2 decades has emerged among the
                            leading universities in India, and has been conferred the status of Institute of Eminence by the
                            Govt. of India. It is ranked as the fourth best university in the NIRF Ranking 2020, and has been
                            swiftly establishing itself as a world class teaching and research institution.
                        </p>
                    </div>
                </div>
                <div className="col-md-6 order-md-2 order-1">
                    <img src={require('../../assets/images/logos/bi0s_dark.png')} />
                    <h5>India's No.1 Ranked CTF Hacking Team</h5>
                    <div className="d-flex">
                        <p>
                            Team bi0s is a community of college student focusing on cyber security,
                            and actively participating in CTF contests worldwide. For several years now,
                            team bi0s has been consistently been the No.1 CTF team in India. The team
                            members also actively involve in security research projects, organizing training
                            programs & CTFs, and developing security tools.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <img src={require('../../assets/images/logos/amritapuri_vector.png')} />
    </OrganizersSection>;

};

export default LandingOrganizers;