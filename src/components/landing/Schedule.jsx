import React from 'react';
import Fade from 'react-reveal/Fade';

const Schedule = () => {

    const timeline = [
        {
            "date": "Oct 21",
            "timing": "06:00 - 08:00 PM",
            "event": "Introduction to CTF",
            "presenter": "Namitha & Revathi",
            "link": "https://youtu.be/-PvKBido90I",
        },
        {
            "date": "Oct 22",
            "timing": "06:00 - 08:00 PM",
            "event": "Basics of Web",
            "presenter": "Rohit, Rahul & Aneesh",
            "link": "https://youtu.be/clcfThE2UIg",
        },
        {
            "date": "Oct 23",
            "timing": "06:00 - 08:00 PM",
            "event": "Introduction to Web Exploitation (Day 1)",
            "presenter": "Yadhu & Sayooj",
            "link": "https://youtu.be/uHiLpyfEhpw",
        },
        {
            "date": "Oct 24",
            "timing": "06:00 - 08:00 PM",
            "event": "Introduction to Web Exploitation (Day 2)",
            "presenter": "Yadhu & Sayooj",
            "link": "https://youtu.be/LlOnd4wbTI4",
        },
        {
            "date": "Oct 25",
            "timing": "06:00 - 08:00 PM",
            "event": "Introduction to Cryptography (Day 1)",
            "presenter": "Abhishek & Sahith",
            "link": "https://youtu.be/RtY8RFA95Qk",
        },
        {
            "date": "Oct 26",
            "timing": "06:00 - 08:00 PM",
            "event": "Introduction to Cryptography (Day 2)",
            "presenter": "Abhishek & Sahith",
            "link": "https://youtu.be/RMWo6HtND9M",
        },
        {
            "date": "Oct 27",
            "timing": "06:00 - 08:00 PM",
            "event": "Introduction to Cyber Forensics (Day 1)",
            "presenter": "Sridevi, Abhishek, Pranav",
            "link": "https://youtu.be/OwN76dCekAM",
        },
        {
            "date": "Oct 28",
            "timing": "06:00 - 08:00 PM",
            "event": "Introduction to Cyber Forensics (Day 2)",
            "presenter": "Sridevi, Abhishek, Pranav",
            "link": "https://youtu.be/sc1uiHCJDJo",
        },
        {
            "date": "Oct 29",
            "timing": "06:00 - 08:00 PM",
            "event": "Introduction to Reverse Engineering (Day 1)",
            "presenter": "Barla Abhishek, Simran",
            "link": "https://youtu.be/ZWJ6X6alAaQ",
        },
        {
            "date": "Oct 30",
            "timing": "06:00 - 08:00 PM",
            "event": "Introduction to Reverse Engineering (Day 2)",
            "presenter": "Barla Abhishek, Simran",
            "link": "https://youtu.be/fHqTXYdrqlk",
        },
        {
            "date": "Oct 31",
            "timing": "06:00 - 08:00 PM",
            "event": "Introduction to Binary Exploitation (Day 1)",
            "presenter": "Adithya, Nikhil, Hrishikesh",
            "link": "https://youtu.be/yMkyHCR7fqw",
        },
        {
            "date": "Nov 01",
            "timing": "06:00 - 08:00 PM",
            "event": "Introduction to Binary Exploitation (Day 2)",
            "presenter": "Adithya, Nikhil, Hrishikesh",
            "link": "https://youtu.be/QoRgu0uiyA0"
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
                        <p className="mb-4">
                            You can find more resourceful videos & live-stream all our trainings through
                            our channel. So please subscribe & share it with your friends.
                        </p>
                        <a
                            className="px-4 py-3 inline-block font-semibold bg-primary hover:bg-red-700 text-white rounded-lg"
                            href="https://www.youtube.com/c/InCTFj"
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
                    {timeline.map((t, index) =>
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