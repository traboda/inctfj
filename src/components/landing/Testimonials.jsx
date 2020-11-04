import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';

const TestimonialSection = styled.section`
    padding: 1rem;
    background: #E1F5FE;
    h5 {
      font-weight: 700;
      text-transform: uppercase;
      color: #555;
      padding: 0.5rem 1rem;
      line-height: 1;
      img {
        width: 36px;
        box-shadow: none!important;
        margin-right: 8px;
        &:hover {
          transform: none!important;
        }
      }
    }
    img {
      max-width: 100%;
      border-radius: 8px;
      box-shadow: 3px 5px 8px rgba(0,0,0,0.3);
      filter: saturate(1.1) brightness(1.12);
      transition: 0.5s all ease!important;
      &:hover {
        transform: translateY(-15px)!important;
        transition: 0.5s all ease!important;
      }
    }
`;

const LandingTestimonials = () => {

    const participants = [
        {
            image: require('../../assets/images/covers/testimonials/yashodan_ahm.png'),
        },
        {
            image: require('../../assets/images/covers/testimonials/megha_blr.png'),
        },
        {
            image: require('../../assets/images/covers/testimonials/vishwa_pdy.png'),
        },
        {
            image: require('../../assets/images/covers/testimonials/tarunjith_pdy.png'),
        },
        {
            image: require('../../assets/images/covers/testimonials/nilabha_kol.png'),
        },
        {
            image: require('../../assets/images/covers/testimonials/prajwal_kl.png'),
        },
    ]

    return <TestimonialSection >
        <Pulse>
            <h5>
                <img src={require('../../assets/images/icons/play_button.png')} alt="View Video Testimonials"/>
                Hear it from the hacker's -
            </h5>
        </Pulse>
        <div className="row mx-0">
            {participants.map((p, index) =>
                <div className="col-6 col-lg-2 p-1">
                    <Fade delay={index*200}><div><img draggable="false" src={p.image} /></div></Fade>
                </div>
            )}
        </div>
    </TestimonialSection>
};

export default LandingTestimonials;