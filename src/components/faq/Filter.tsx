import React from 'react';
import TagSelector from "./TagSelector";

const FAQFilter = ({ search, setSearch, tags, setTags, totalTags }) => {
    return (
        <div className="mx-4 mb-8">
            <div className="w-full transition relative" style={{ height: 'fit-content' }}>
                <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search..."
                    className="outline-none pl-4 pr-12 py-2 border rounded-lg shadow-inner focus:border-yellow-600 w-full"
                />
                <div
                    className="absolute right-0 mr-4 cursor-pointer"
                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                >
                    <i className="fas fa-search opacity-50" />
                </div>
            </div>

            <div className="w-full mt-2">
                <TagSelector
                    options={totalTags}
                    isClearable={true}
                    multiple={true}
                    small={true}
                    value={[...tags].map(t => ({ label: t, value: t }))}
                    onChange={s => setTags(new Set(s))}
                />
            </div>
        </div>
    );
};

export default FAQFilter;