import React, { useState } from 'react';
import dynamic from 'next/dynamic'
import styled from "@emotion/styled";
import Fade from 'react-awesome-reveal';
import Pulse from 'react-awesome-reveal';
import Modal from 'react-modal';

const ReactPlayer = dynamic(() => import('react-player/youtube'))
const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

import {disableBodyScroll, clearAllBodyScrollLocks} from "body-scroll-lock";

const TestimonialSection = styled.section`
    padding: 8vh 1rem;
    .testimonial-title {
      font-weight: 700;
      text-transform: uppercase;
      color: #555;
      padding: 0.5rem 1rem;
      line-height: 1;
      display: flex;
      justify-content: center;
      align-items: center;
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
      cursor: pointer;
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

    const [showPlayer, setShowPlayer] = useState(false);

    const openVideo = () => {
        const targetElement = document.querySelector(".app");
        disableBodyScroll(targetElement);
        setShowPlayer(true);
    };

    return <TestimonialSection className="container mx-auto">
        <Pulse>
            {data.LandingTestimonialsHeader &&
            <div className="testimonial-title mb-3">
                <img src={require('../../assets/images/icons/play_button.png')} alt="View Video Testimonials"/>
                {data?.LandingTestimonialsHeader}
            </div>
            }
        </Pulse>
        <div className="flex flex-wrap  mx-0">
            {data.LandingTestimonials?.map((p, index) => <div className="w-1/2 md:w-1/3 lg:w-1/6 p-1">
                <Fade delay={index*200}>
                    <a onClick={openVideo}>
                        <img alt="testimonial student" draggable="false" src={require(`../../data/${eventID}/${p}`)} />
                    </a>
                </Fade>
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