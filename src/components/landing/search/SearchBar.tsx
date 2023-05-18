import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

import Dropdown from './Dropdown';

const SearchBar = ({ placeholder = 'Type your question...', isFocused = false }) => {
  const [search, setSearch] = useState('');
  const [searchFocus, setSearchFocus] = useState(false);

  const router = useRouter();

  return (
    <div className="w-full relative rounded">
      <div
        className="border pl-6 pr-12 py-3 relative bg-white shadow-inner"
        style={{
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          borderBottomRightRadius: searchFocus ? 0 : 8,
          borderBottomLeftRadius: searchFocus ? 0 : 8,
        }}
      >
        <input
          type="text"
          className="p-0 outline-none w-full"
          placeholder={placeholder}
          value={search}
          autoFocus={isFocused}
          onChange={e => setSearch(e.target.value)}
          onFocus={() => setSearchFocus(true)}
          onBlur={() => setTimeout(() => setSearchFocus(false), 100)}
        />
        <i
          className="fas fa-search absolute right-0 opacity-75 cursor-pointer mr-6"
          style={{ transform: 'translateY(-50%)', top: '50%' }}
          onClick={() => router.push(`/faq?q=${encodeURI(search)}`)}
        />
      </div>
      <AnimatePresence>
        {searchFocus && (
        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}>
          <Dropdown search={search} />
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;