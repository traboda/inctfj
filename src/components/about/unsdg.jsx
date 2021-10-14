import React from "react";
import styled from "@emotion/styled";

const UNSection = styled('section')`
    padding: 7.5vh 2vw;
    background: #B6114D;
`

const UNSDGSection = () => (
    <UNSection>
        <div className="py-3 text-center px-2">
            <h3 className="text-lg lg:text-2xl text-white mb-2">Amrita InCTF Junior proudly supports the</h3>
            <img
                alt="United Nations Sustainable Development Goals"
                src={require('../../assets/images/unsdg_logo.png')}
                draggable="false"
                style={{ maxHeight: '150px' }}
                className="inline"
            />
        </div>
        <div className="flex justify-center text-center items-center">
            <div style={{ maxWidth: '900px', width: '100%' }}>
                <div className="flex flex-wrap justify-center items-center">
                    <div className="w-1/2 md:w-1/4 p-2">
                        <img
                            src={require('../../assets/images/ungsdg4.png')}
                            draggable="false"
                            className="inline shadow-md rounded-lg"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/4 p-2">
                        <img
                            src={require('../../assets/images/ungsdg5.png')}
                            draggable="false"
                            className="inline shadow-md rounded-lg"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/4 p-2">
                        <img
                            src={require('../../assets/images/ungsdg8.png')}
                            draggable="false"
                            className="inline shadow-md rounded"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/4 p-2">
                        <img
                            src={require('../../assets/images/ungsdg10.png')}
                            draggable="false"
                            className="inline shadow-md rounded"
                        />
                    </div>
                </div>
            </div>
        </div>
    </UNSection>
);

export default UNSDGSection;