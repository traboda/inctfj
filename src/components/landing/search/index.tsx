import React from 'react';
import SearchBar from "./SearchBar";

const LandingSearch = ({ showImage = true }) => {
    return (
        <div>
            <div style={{ padding: '5vh 1rem 15vh 1rem' }} className="container mx-auto flex flex-col items-center justify-center">
                <div className="w-full" style={{ maxWidth: 600 }}>
                    <h1 className="text-center font-semibold text-primary mb-8">Have a Question?</h1>
                    <SearchBar />
                </div>
            </div>
            {showImage && (
                <img
                    alt="amritapuri vector illustration"
                    draggable="false"
                    src={require('../../../assets/images/logos/amritapuri_vector.png')}
                />
            )}
        </div>
    );
};

export default LandingSearch;