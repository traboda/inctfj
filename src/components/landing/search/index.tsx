import React from 'react';
import SearchBar from "./SearchBar";
import Link from 'next/link';

const LandingSearch = () => {
    return (
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
            <div className="w-full" style={{ maxWidth: 600 }}>
                <h1 className="text-center mb-4 font-bold">Search you queries</h1>
                <SearchBar />

                <div className="mt-2 flex flex-wrap justify-center">
                    <Link passHref href="/discord">
                        <a className="mt-4 mr-4 bg-primary text-white py-2 px-5 rounded-lg flex">Join Discord</a>
                    </Link>
                    <Link passHref href="/faq">
                        <a className="mt-4 border border-primary text-primary py-2 px-5 rounded-lg flex">Visit FAQ page</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingSearch;