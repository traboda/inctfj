import React from 'react';
import Link from 'next/link';

const ResourcesFAQ = () => {
    return (
        <div className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="font-bold text-2xl mb-2">
                    Read about frequently asked questions
                </div>
                <Link href="/faq" passHref>
                    <a className="underline">Learn More.</a>
                </Link>
            </div>
        </div>
    );
};

export default ResourcesFAQ;