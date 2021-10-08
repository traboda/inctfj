import React from 'react';

const resources = [
    {
        url: 'https://www.youtube.com/embed/twS3pzPjRzA?list=PLmpHrYT9y1LyQfWtPb3nX9bCgK_y8jr6U'
    },
    {
        url: 'https://www.youtube.com/embed/8gOrKO0hJ34?list=PLmpHrYT9y1LyQfWtPb3nX9bCgK_y8jr6U'
    },
    {
        url: 'https://www.youtube.com/embed/pbNp45IvmP4?list=PLmpHrYT9y1LyQfWtPb3nX9bCgK_y8jr6U'
    },
    {
        url: 'https://www.youtube.com/embed/xpzb4S3G3FY?list=PLmpHrYT9y1LyQfWtPb3nX9bCgK_y8jr6U'
    }
];

const ResourcesLinks = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {resources.map((r, i) => (
                <div key={i}>
                    <div className="relative" style={{ paddingTop: '56.25%' }}>
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
                </div>
            ))}
        </div>
    );
};

export default ResourcesLinks;