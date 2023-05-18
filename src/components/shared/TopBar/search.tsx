import React, {useState} from "react";
import dynamic from "next/dynamic";
import {AnimatePresence, AnimateSharedLayout, motion} from "framer-motion";
import Link from "next/link";
import {clearAllBodyScrollLocks, disableBodyScroll} from "body-scroll-lock";
import Logo from "../Logo";

const SearchBar = dynamic(() => import("../../landing/search/SearchBar"), { ssr: false });

const TopBarSearch = () => {

    const [showSearchModal, setSearchModal] = useState(false);

    return (
        <AnimateSharedLayout type="crossfade">
            {!showSearchModal &&
            <motion.button
                layoutId="search-button"
                className="fas fa-search justify-center text-lg text-black hover:text-primary ml-2"
                onClick={() => {
                    disableBodyScroll(document.body);
                    setSearchModal(true);
                }}
            />}
            <AnimatePresence>
                {showSearchModal && (
                    <motion.div
                        layoutId="search-button"
                        className="w-screen h-screen bg-white fixed top-0 left-0"
                        style={{ zIndex: 9000 }}
                        initial={{ borderRadius: 1000 }}
                        exit={{ borderRadius: 1000 }}
                        animate={{ borderRadius: 0 }}
                    >
                        <div className="flex flex-col justify-center items-center w-full h-full">
                            <button
                                className="fas fa-times text-xl absolute top-0 text-light hover:text-primary right-0 mt-4 mr-4 cursor-pointer"
                                onClick={() => {
                                    clearAllBodyScrollLocks();
                                    setSearchModal(false);
                                }}
                            />
                            <div style={{ padding: '5vh 1rem 15vh 1rem' }}
                                 className="container mx-auto flex flex-col items-center justify-center">
                                <div className="text-center w-full" style={{ maxWidth: 600 }}>
                                    <Link legacyBehavior href="/" passHref>
                                        <a className="flex justify-center mb-2">
                                            <Logo isDark maxHeight={120} />
                                        </a>
                                    </Link>
                                    <SearchBar
                                        placeholder="Search your queries & questions about InCTF Jr"
                                        isFocused
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </AnimateSharedLayout>
    );

};

export default TopBarSearch;