import React from 'react';
import Fade from 'react-reveal/Fade';

const data = require(`../../data/training.json`);

const Schedule = () => {


    return <div>
        <div className="container min-w-lg mx-auto sm:px-4 lg:px-8 py-10">
            <div className="flex justify-center">
                <div style={{ maxWidth: '100%', width: '1000px' }}>
                    <div className="px-4 py-8 mb-8">
                        {data.trainingDesc.map((item, index) => {
                            return <div key={index}>
                                <p className="mb-4">{item}</p>
                            </div>

                        }
                        )}
                        <a
                            className="px-4 py-3 inline-block font-semibold bg-primary hover:bg-red-700 text-white rounded-lg"
                            href={data.youtubeChannel}
                            target="_blank"
                            rel="noopener nofollow"
                        >
                            Our Youtube Channel <i className="fa fa-chevron-right" />
                        </a>
                    </div>
                    <div className="flex flex-wrap  hidden md:flex font-bold mx-0 py-2 border-b">
                        <div className="md:w-1/6 pr-4 pl-4  flex items-center p-1">
                            Schedule
                        </div>
                        <div className="md:w-4/6 pr-4 pl-4 flex items-center p-1">
                            Workshop
                        </div>
                        <div className="md:w-1/6 pr-4 pl-4 p-1">
                            Link
                        </div>
                    </div>

                    {data.schedule.map((t, index) =>
                        <Fade delay={index*220}>
                            <div className="flex flex-wrap  mx-0 py-2 border-b">
                                <div className="md:w-1/6 w-full flex items-center px-1">
                                    <div>
                                        <div className="font-semibold text-xl">{t.date}</div>
                                        <span>{t.timing}</span>
                                    </div>
                                </div>
                                <div className="md:w-4/6 flex items-center px-1 pb-1">
                                    <div>
                                        <div className="text-xl font-semibold" style={{ color: '#4A148C'}}>{t.event}</div>
                                        {t?.presenter && <div className="text-lg mt-1">{t.presenter}</div>}
                                    </div>
                                </div>
                                <div className="md:w-1/6 w-full flex items-center mb-2 md:mb-0 px-1">
                                    {t?.link && (
                                        <a href={t.link} target="_blank" className="hover:text-primary">
                                            <i className="fab fa-youtube text-red-600 mr-1" /> Watch
                                        </a>
                                    )}
                                </div>
                            </div>
                        </Fade>
                    )}
                </div>
            </div>
        </div>
    </div>

};

export default Schedule;