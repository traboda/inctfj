import React, {useState} from 'react';
import {useRouter} from "next/router";
import Dropdown from "./Dropdown";
import { AnimatePresence, motion} from "framer-motion";

const SearchBar = () => {
    const [search, setSearch] = useState('');

    const router = useRouter();

    return (
        <div className="w-full relative shadow rounded-full">
            <div
                className="border pl-6 pr-12 py-3 relative bg-white shadow-inner"
                style={{
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    borderBottomRightRadius: search.length ? 0 : 30,
                    borderBottomLeftRadius: search.length ? 0 : 30,
                }}
            >
                <input
                    type="text"
                    className="p-0 outline-none w-full"
                    placeholder="Enter your query here..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

                <i
                    className="fas fa-search absolute right-0 opacity-75 cursor-pointer mr-6"
                    style={{ transform: 'translateY(-50%)', top: '50%' }}
                    onClick={() => router.push(`/faq?q=${encodeURI(search)}`)}
                />
            </div>

            <AnimatePresence>
                {search.length && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}>
                        <Dropdown search={search} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SearchBar;