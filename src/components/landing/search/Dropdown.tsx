import React from 'react';
import Link from 'next/link';
import reactStringReplace from 'react-string-replace';

import { filteredFAQ } from '../../faq/filterUtils';

const Dropdown = ({ search, setSearch = (question: string) => {} }) => {
  const faq = () => filteredFAQ(search, new Set(), 5);

  return (
    <div
      className="w-full border bg-white absolute top-full left-0 shadow-lg z-10 overflow-hidden"
      style={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
    >
      {faq().length ? (
        <div>
          {faq().map((f, i) => (
            <Link key={i} href={`/faq?q=${encodeURI(f.question)}`} passHref legacyBehavior>
              <a className="px-6 py-2 hover:bg-gray-100 flex" onClick={() => setSearch(f.question)}>
                <div>
                  {reactStringReplace(f.question, search, match => (
                    <span className="font-semibold">{match}</span>
                  ))}
                </div>
              </a>
            </Link>
          ))}
        </div>
      ) : (
        <div className="p-3 lg:p-6 text-center">
          <div className="mb-2">Do not see what you were looking for? </div>
          <Link legacyBehavior href="/discord" passHref>
            <a className="text-primary hover:text-blue-800">
              Join our discord server
              <i className="fa fa-external-link ml-1" />
            </a>
          </Link>
          <span> to get help from experts.</span>
        </div>
      )}
    </div>
  );
};

export default Dropdown;