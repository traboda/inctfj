import React from 'react';
import Link from 'next/link';
import reactStringReplace from 'react-string-replace';

import { filteredFAQ } from "../../faq/filterUtils";

const Dropdown = ({ search }) => {
    const faq = () => filteredFAQ(search, new Set(), 5);

    return (
        <div
            className="w-full border bg-white absolute top-full left-0 shadow-lg z-10 overflow-hidden"
            style={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
        >
            {faq().length ? (
                <div>
                    {faq().map((f, i) => (
                        <Link key={i} href={`/faq?q=${encodeURI(f.question)}`} passHref>
                            <a className="px-6 py-2 hover:bg-gray-100 flex">
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
                <div className="px-6 py-3 text-center">
                    <span>Didn't find what you were looking for? </span>
                    <Link href="/discord" passHref>
                        <a className="underline">Join our discord server</a>
                    </Link>
                    <span> to get help from experts.</span>
                </div>
            )}
        </div>
    );
};

export default Dropdown;