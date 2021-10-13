import React from 'react';
import TagSelector from "./TagSelector";

const FAQFilter = ({ search, setSearch, tags, setTags, totalTags }) => {
    return (
        <div className="mx-4 mb-8">
            <form className="w-full transition relative" style={{ height: 'fit-content' }}>
                <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Enter your question here..."
                    className="outline-none pl-4 pr-12 py-2 border rounded-lg shadow-inner focus:border-yellow-600 w-full"
                />
                <div
                    className="absolute right-0 mr-4"
                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                >
                    {search?.length > 0 && (
                        <button
                            type="button" onClick={() => setSearch('')}
                            className="fa fa-times text-red-500 mr-4"
                        />
                    )}
                    <button type="submit" className="fas fa-search hover:text-black opacity-50" />
                </div>
            </form>
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