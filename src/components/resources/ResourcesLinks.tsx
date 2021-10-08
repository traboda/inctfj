import React from 'react';
import resources from './links';

const ResourcesLinks = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {resources.map((r, i) => (
                <div key={i} className="relative" style={{ paddingTop: '56.25%' }}>
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
                </div>
            ))}
        </div>
    );
};

export default ResourcesLinks;