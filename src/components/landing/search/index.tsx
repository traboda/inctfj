import React from 'react';
import { motion } from 'framer-motion';

import SearchBar from './SearchBar';

import animation from '@/src/animation';

const LandingSearch = () => (
  <motion.div
    variants={animation}
    initial="fade"
    whileInView="animated"
  >
    <div style={{ padding: '5vh 1rem 15vh 1rem' }} className="container mx-auto flex flex-col items-center justify-center">
      <div className="w-full" style={{ maxWidth: 600 }}>
        <h1 className="text-3xl md:text-4xl text-center font-semibold text-primary mb-8">Have a Question?</h1>
        <SearchBar />
      </div>
    </div>
    <img
      alt="amritapuri vector illustration"
      draggable="false"
      src="/assets/images/logos/amritapuri_vector.png"
    />
  </motion.div>
);

export default LandingSearch;