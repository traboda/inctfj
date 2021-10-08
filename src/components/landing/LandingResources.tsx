import React from 'react';
import resources from '../resources/links';
import Pulse from 'react-reveal/Pulse';

const LandingResources = () => {
    return (
        <div style={{ padding: '4vh 1rem 8vh 1rem' }}>
            <Pulse>
                <div className="flex mb-3 items-center text-center justify-center">
                    <img src={require('../../assets/images/icons/learn.png')} alt="Video resources" width={26}/>
                    <span className="ml-2 font-bold uppercase text-gray-800 text-lg">
                        These videos will help you get started easily
                    </span>
                </div>
            </Pulse>

            <div className="grid grid-cols-4 gap-8 mt-4">
                {resources.map((r, i) => (
                    <div key={i} className="relative" style={{ paddingTop: '56.25%' }}>
                        <Pulse delay={i * 200}>
                            <iframe
                                className="w-full h-full absolute top-0 left-0 rounded-lg"
                                width="1280"
                                height="720"
                                src={r.url}
                                title="InCTF Jr. resource"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </Pulse>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LandingResources;