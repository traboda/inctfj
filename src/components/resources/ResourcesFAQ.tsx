import React from 'react';
import Link from 'next/link';

const ResourcesFAQ = () => {
  return (
    <div className="bg-gray-800 md:px-6 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="font-bold text-2xl mb-2">
          Checkout Frequently Asked Questions
        </div>
        <Link legacyBehavior href="/faq" passHref>
          <a>
            Open FAQ 
            {' '}
            <i className="fa fa-chevron-right ml-1" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ResourcesFAQ;