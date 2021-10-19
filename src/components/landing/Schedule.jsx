import React from 'react';
import Fade from 'react-reveal/Fade';

const Schedule = () => {

    const timeline = [
        {
            "date": "October 21",
            "timing": "06:00 - 08:00 PM",
            "event": "Introduction to CTF",
            "presenter": "Namitha & Revathi",
        },
        {
            "date": "October 22",
            "timing": "06:00 - 08:00 PM",
            "event": "Basics of Web",
            "presenter": "Rohit, Rahul & Aneesh",
        },
        {
            "date": "October 23-24",
            "timing": "06:00 - 08:00 PM",
            "event": "Introduction to Web Exploitation",
            "presenter": "Yadhu & Sayooj",
        },
        {
            "date": "October 25-26",
            "timing": "06:00 - 08:00 PM",
            "event": "Introduction to Cryptography",
            "presenter": "Abhishek & Sahith",
        },
        {
            "date": "October 27-28",
            "timing": "06:00 - 08:00 PM",
            "event": "Introduction to Cyber Forensics",
            "presenter": "Sridevi, Abhishek, Pranav",
        },
        {
            "date": "October 29-30",
            "timing": "06:00 - 08:00 PM",
            "event": "Introduction to Reverse Engineering",
            "presenter": "Barla Abhishek, Simran",
        },
        {
            "date": "Oct. 31 - Nov. 01",
            "timing": "06:00 - 08:00 PM",
            "event": "Introduction to Binary Exploitation",
            "presenter": "Adithya, Nikhil, Hrishikesh",
        }
    ]

    return <div>
        <div className="container min-w-lg mx-auto sm:px-4 lg:px-8 py-10">
            <div className="flex justify-center">
                <div style={{ maxWidth: '100%', width: '1000px' }}>
                    <div className="px-4 py-8 mb-8">
                        <p className="mb-2">
                            All Trainings will be publicly made available for free through live-streaming on
                            our official Youtube channel. Students can ask their doubts through the live
                            chat, and we will have a team of experts available to assist you.
                        </p>
                        <p className="mb-2">
                            You can find more resourceful videos & live-stream all our trainings through
                            our channel. So please subscribe & share it with your friends.
                        </p>
                        <a
                            className="px-4 py-3 font-semibold bg-primary hover:bg-red-700 text-white rounded-lg"
                            href="https://www.youtube.com/c/InCTFj"
                            target="_blank"
                            rel="noopener nofollow"
                        >
                            Our Youtube Channel <i className="fa fa-chevron-right" />
                        </a>
                    </div>
                    <div className="flex flex-wrap  hidden md:flex font-bold mx-0 py-2 border-b">
                        <div className="md:w-1/4 pr-4 pl-4  flex items-center p-1">
                            Date
                        </div>
                        <div className="md:w-1/4 pr-4 pl-4  flex items-center p-1">
                            Timing
                        </div>
                        <div className="md:w-1/4 pr-4 pl-4 flex items-center p-1">
                            Workshop
                        </div>
                        <div className="md:w-1/4 pr-4 pl-4 p-1">
                            Trainer
                        </div>
                    </div>
                    {timeline.map((t, index) =>
                        <Fade delay={index*220}>
                            <div className="flex flex-wrap  mx-0 py-2 border-b">
                                <div className="md:w-1/4 w-full pr-4 pl-4 flex items-center px-1">
                                    <span className="font-semibold text-xl">{t.date}</span>
                                </div>
                                <div className="md:w-1/4 w-full pr-4 pl-4 flex items-center mb-2 md:mb-0 px-1">
                                    <span className="text-lg">{t.timing}</span>
                                </div>
                                <div className="md:w-1/4 pr-4 pl-4 flex items-center px-1 pb-1">
                                    <span className="text-xl font-semibold" style={{ color: '#4A148C'}}>{t.event}</span>
                                </div>
                                {t?.presenter ? <div className="md:w-1/4 w-full pr-4 pl-4 px-1">
                                    <div className="flex items-center">
                                        <div>
                                            <div className="h6 mb-1">{t.presenter}</div>
                                        </div>
                                    </div>
                                </div> : <div className="hidden md:block"> - </div>}
                            </div>
                        </Fade>
                    )}
                </div>
            </div>
        </div>
    </div>

};

export default Schedule;