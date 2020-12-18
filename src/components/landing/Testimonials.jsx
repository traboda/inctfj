import React, { useState } from 'react';
import dynamic from 'next/dynamic'
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import Modal from 'react-modal';

const ReactPlayer = dynamic(() => import('react-player/youtube'))


import {disableBodyScroll, clearAllBodyScrollLocks} from "body-scroll-lock";

const TestimonialSection = styled.section`
    padding: 1rem;
    background: #E1F5FE;
    .h5 {
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

const CloseButton = styled.button`
   background: none!important; top: 1rem; right: 1rem; position: absolute; padding: 0!important;
   img { width: 32px; }
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
    ];

    const [showPlayer, setShowPlayer] = useState(false);

    const openVideo = () => {
        const targetElement = document.querySelector(".app");
        disableBodyScroll(targetElement);
        setShowPlayer(true);
    };

    return <TestimonialSection >
        <Pulse>
            <div className="h5">
                <img src={require('../../assets/images/icons/play_button.png')} alt="View Video Testimonials"/>
                Hear it from the hackers
            </div>
        </Pulse>
        <div className="row mx-0">
            {participants.map((p, index) => <div className="col-6 col-md-4 col-lg-2 p-1">
                <Fade delay={index*200}><a onClick={openVideo}><img alt="testimonial student" draggable="false" src={p.image} /></a></Fade>
            </div>)}
        </div>
        <Modal
            isOpen={showPlayer}
            onRequestClose={() => { clearAllBodyScrollLocks(); setShowPlayer(false); }}
            style={{
                overlay: {
                    zIndex: 9000, background: 'rgba(0,0,0,0.8)',
                    height: '100vh',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                },
                content: {
                    position: 'unset', top: 0, left: 0, right: 0, padding: '5px',
                    border: 'none', background: 'none',  width: '100%',
                }
            }}
        >
            <CloseButton
                className="px-4 border-0 rounded"
                onClick={() => { clearAllBodyScrollLocks(); setShowPlayer(false)}}
            >
                <img alt="close" src={require('../../assets/images/icons/close.png')} />
            </CloseButton>
            {showPlayer && <ReactPlayer url="https://www.youtube.com/watch?v=U5zVYdYJBwQ" autoplay width="100%" height="80vmin" />}
        </Modal>
    </TestimonialSection>
};

export default LandingTestimonials;