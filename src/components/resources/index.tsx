import React from 'react';

const resources = [
    {
        title: 'Introduction to bios wiki, Youtube Channel and Challenge portal',
        url: 'https://www.youtube.com/embed/8gOrKO0hJ34?list=PLmpHrYT9y1LyQfWtPb3nX9bCgK_y8jr6U'
    },
    {
        title: 'How to use InCTF junior discord server?',
        url: 'https://www.youtube.com/embed/pbNp45IvmP4?list=PLmpHrYT9y1LyQfWtPb3nX9bCgK_y8jr6U'
    },
    {
        title: 'How to use the dashboard?',
        url: 'https://www.youtube.com/embed/xpzb4S3G3FY?list=PLmpHrYT9y1LyQfWtPb3nX9bCgK_y8jr6U'
    },
    {
        title: 'How to register?',
        url: 'https://www.youtube.com/embed/twS3pzPjRzA?list=PLmpHrYT9y1LyQfWtPb3nX9bCgK_y8jr6U'
    }
]

const ResourcesComponent = () => {
    return (
        <div>
            <div
                className="flex items-center justify-center text-center bg-gray-900 flex-col"
                 style={{ minHeight: '50vh' }}
            >
                <h1 className="text-white">InCTF Jr. Resources</h1>
                <p className="text-white opacity-75">Get started with InCTF Jr. with our learning materials</p>
            </div>

            <div className="py-12">
                <div className="mx-auto px-4" style={{ maxWidth: 660 }}>
                    <div className="grid grid-cols-1 gap-8">
                        {resources.map((r, i) => (
                            <div key={i}>
                                <h4 className="mt-6 font-semibold">{r.title}</h4>

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
                </div>
            </div>
        </div>
    );
};

export default ResourcesComponent;