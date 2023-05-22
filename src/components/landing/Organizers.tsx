import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import animation from '@/src/animation';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const Data = require(`../../data/${eventID}/index.json`);

const OrganizersSection = styled.section`
    user-select: none;
    .content-container {
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

const LandingOrganizers = () => (
  <OrganizersSection>
    <div className="container mx-auto content-container px-4">
      <motion.h3
        variants={animation}
        initial="fade"
        whileInView="animated"
      >
        Organized By
      </motion.h3>
      <div className="flex flex-wrap grid md:grid-cols-3 gap-8">
        {Data.Organizers.map((org, index) => (
          <motion.div
            variants={animation}
            initial={org.animate}
            whileInView="animated"
            key={`${org.name}_${index}`}
          >
            <div className="w-full md:order-2 order-1 md:text-center">
              <a href="https://www.amrita.edu/center/cyber-security" className="flex md:justify-center">
                <img
                  alt={org.name}
                  src={`/${eventID}/${org.logo}`}
                  className="inline"
                />
              </a>
              <h4>
                {org.header}
              </h4>
              <p className="text-sm">
                {org.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </OrganizersSection>
);

export default LandingOrganizers;