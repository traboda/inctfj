import React from 'react';
import VideoLinks from '../../data/videos';

const YoutubeVideosSection = () => {

    return (
        <div id="videos">
            <div className="text-center mb-4">
                <h3 className="text-2xl lg:text-3xl text-primary mb-2 font-semibold">YouTube Videos</h3>
                <p className="ml-2 text-gray-800 text-lg">
                    These videos will help you get started easily
                </p>
            </div>
            <div className="flex flex-wrap">
                {VideoLinks.map((v) => (
                    <div
                        key={v.videoID}
                        className="w-full md:w-1/3 lg:w-1/4 p-1 md:p-2 lg:p-3"
                    >
                        <a
                            target="_blank"
                            rel="noopener nofollow"
                            href={`https://youtube.com/watch/${v.videoID}`}
                            className="block shadow-lg border h-full rounded-lg transition-all hover:shadow"
                        >
                            <div className="text-center">
                                <img
                                    alt={`Watch ${v.title} on YouTube `}
                                    className="inline rounded-t-lg w-full"
                                    src={`https://img.youtube.com/vi/${v.videoID}/mqdefault.jpg`}
                                />
                            </div>
                            <div className="font-semibold p-3" style={{ lineHeight: 1.1 }}>
                                {v.title}
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default YoutubeVideosSection;