import React, { useState } from 'react';

import TagSelector from '../TagSelector';
import Dropdown from '../landing/search/Dropdown';

const FAQFilter = ({ search, setSearch, tags, setTags, totalTags }) => {
  const [searchFocus, setSearchFocus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchFocus(false);
    // The search is already handled by the input onChange, so just blur the input
    if (e.target.querySelector('input')) {
      e.target.querySelector('input').blur();
    }
  };

  return (
    <div className="mx-4 mb-8">
      <form 
        className="w-full transition relative" 
        style={{ height: 'fit-content' }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Enter your question here..."
          className={`outline-none pl-4 pr-12 py-2 border rounded-t-lg shadow-inner focus:border-yellow-600 w-full ${searchFocus ? '' : 'rounded-b-lg'}`}
          onFocus={() => setSearchFocus(true)}
          onBlur={() => setTimeout(() => setSearchFocus(false), 200)}
        />
        <div
          className="absolute right-0 mr-4"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          {search?.length > 0 && (
            <button
              type="button"
              onClick={() => setSearch('')}
              className="fa fa-times text-red-500 mr-4"
            />
          )}
          <button type="submit" className="fas fa-search hover:text-black opacity-50" />
        </div>
        {searchFocus && <Dropdown search={search} setSearch={setSearch} />}
      </form>
      <div className="w-full mt-2">
        <TagSelector
          options={totalTags}
          isClearable={true}
          multiple={true}
          small={true}
          value={[...tags].map(t => ({ label: t, value: t }))}
          onChange={s => setTags(new Set(Array.isArray(s) ? s : [s]))}
        />
      </div>
    </div>
  );
};

export default FAQFilter;