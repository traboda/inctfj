import React, {useState} from 'react';
import VideoLinks from '../../data/videos';
import TagSelector from "../TagSelector";

const YoutubeVideosSection = () => {

    const [tag, setTag] = useState(null);
    const [keyword, setKeyword] = useState('');

    const filterOptions = [
        {
            "label": "How To?",
            "value": "how-to"
        },
        {
            "label": "Category Introductions",
            "value": "cat-intro"
        },
        {
            "label": "Challenge Solutions",
            "value": "chall-solution"
        }
    ]

    console.log(tag);

    return (
        <div id="videos">
            <div className="text-center mb-4">
                <h3 className="text-2xl lg:text-3xl text-primary mb-2 font-semibold">YouTube Videos</h3>
                <p className="ml-2 text-gray-800 text-lg">
                    These videos will help you get started easily
                </p>
            </div>
            <div className="flex flex-wrap mb-2">
                <div className="md:1/2 flex items-center p-2">
                    <input
                        type="text"
                        value={keyword}
                        onChange={e => setKeyword(e.target.value)}
                        placeholder="Type to search..."
                        className="outline-none pl-4 pr-12 py-2 border rounded-t-lg shadow-inner focus:border-yellow-600 w-full rounded-b-lg"
                    />
                </div>
                <div className="md:1/2 flex items-center p-2">
                    <TagSelector
                        options={filterOptions}
                        isClearable
                        value={tag}
                        // @ts-ignore
                        onChange={(t) => setTag(t?.value === tag?.value ? null : t)}
                    />
                </div>
            </div>
            <div className="flex flex-wrap">
                {VideoLinks.filter((v) =>
                    (tag == null || (v?.tags?.length > 0 &&  v.tags.indexOf(tag?.value) != -1)) &&
                    ((keyword?.length < 1) || (v.title?.toLowerCase().startsWith(keyword.toLowerCase())))
                ).map((v) => (
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