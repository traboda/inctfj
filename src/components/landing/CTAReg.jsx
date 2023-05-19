import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import animation from '@/src/animation';


const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

const RegCTASection = styled.section`
   h3 {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 0;
   }
   a {
       display: inline-block;
       width: 100%;
       text-align: center;
       max-width: 400px;
       margin-bottom: 0.5rem;
       background: #E65100;
       color: white;
       font-weight: 600;
       padding: 0.8rem 1.2rem;
       text-decoration: none!important;
       border-radius: 8px;
       box-shadow: 2px 6px 12px rgba(0,0,0,0.3);
   }
`;

const CTAReg = ({ UTMSource: _ = null }) => (
  <motion.div
    className="bg-white"
    variants={animation}
    initial="fade"
    whileInView="animated"
  >
    <RegCTASection className="container mx-auto px-4 md:py-10">
      <div className="flex flex-wrap">
        <div>
          <div className="md:w-2/3 flex items-center py-2">
            <img alt="star" className="hidden md:block mr-2" src="/assets/images/icons/shooting_star.png" />
            <h3>
              {data.CTAreg.message}
            </h3>
          </div>
        </div>
        {/*<div>*/}
        {/*    <div className="md:w-1/3 px-0 md:px-2 flex items-center justify-center w-full">*/}
        {/*        <iframe*/}
        {/*            className="border-0"*/}
        {/*            style={{ width: '400px', maxWidth: '100vw', height: '190px', overflow: 'auto' }}*/}
        {/*            src={`${data.CTAreg.button.url}/reg-frame?color=000&primary=F13F17&primary_text=fff${UTMSource ? `&utm_source=${UTMSource}` : ''}`}*/}
        {/*        />*/}
        {/*    </div>*/}
        {/*</div>*/}
      </div>
    </RegCTASection>
  </motion.div>
);

export default CTAReg;