import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import animation from '@/src/animation';


const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

const HowItWorksSection = styled.section`
  text-align: center;
  img {
     max-width: 100%;
     width: 150px;
     box-shadow: none!important;
     padding: 0;
     margin-bottom: 10px;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 0;
    margin-top: 0;
    padding: 0;
    }
  h3 {
      text-transform: uppercase;
      font-weight: 900;
      img {
        box-shadow: none!important;
      }
  }
  a {
      text-decoration: none!important;
      display: inline-flex;
      align-items: center;
      line-height: 1;
      background: #eee;
      border-radius: 5px;
      padding: 4px 10px;
      img {
        margin-bottom: 0;
        max-height: 28px;
        margin-right: 8px;
      }
  }
`;


const LandingHowItWorks = () => {

  const steps = [
    ...data.Captions.map((caption, index) => ({
      ...caption,
      'title': caption.title, 'icon': '/assets/images/icons/' + caption.icon,
      'delay': (index + 1) * 100, 'left': true,
    })),
  ];

  return (
    <HowItWorksSection className="motto-cards flex flex-wrap py-8 container mx-auto px-4">
      <div className="w-full flex justify-center p-0 mb-12">
        <motion.h2
          variants={animation}
          initial="fade"
          whileInView="animated"
          className="py-2 rounded-r mt-4 mb-2 md:flex inline-block items-center font-bold text-center"
        >
          <img
            draggable="false"
            alt="How it Works?"
            src="/assets/images/icons/thinking.png"
            className="mr-2 my-0 p-0 shadow-none inline-block"
            style={{ width: '64px' }}
          />
          How Does it Work?
        </motion.h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s, index) => (
          <motion.div
            variants={animation}
            initial={s.animate}
            whileInView="animated"
            key={`${s.icon}_${index}`}
          >
            <div className="flex flex-wrap">
              <div className="md:w-full flex items-center justify-center w-1/4 p-1 md:p-0">
                <img draggable="false" alt={s.title} src={s.icon} />
              </div>
              <div className="md:w-full mb-4 w-3/4 text-left md:text-center p-2 md:p-0 flex items-center">
                <div className="text-3xl font-bold tracking-wider mt-2 md:mx-auto">{s.title}</div>
              </div>
              <p className="w-full text-base text-left md:text-center">
                {s.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </HowItWorksSection>
  );

};

export default LandingHowItWorks;