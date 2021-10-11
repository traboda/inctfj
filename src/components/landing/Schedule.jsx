import React from 'react';
import Fade from 'react-reveal/Fade';

const Schedule = () => {

    const timeline = [
        {
            "date": "October 15",
            "timing": "06:00 - 08:00 PM",
            "event": "Introduction to CTF",
            "presenter": "Namitha & Revathi",
        },
        {
            "date": "October 17",
            "timing": "06:00 - 08:00 PM",
            "event": "Basics of Web",
            "presenter": "Rohit, Rahul & Aneesh",
        },
        {
            "date": "October 18-19",
            "timing": "06:00 - 08:00 PM",
            "event": "Introduction to Web Exploitation",
            "presenter": "Yadhu & Sayooj",
        },
        {
            "date": "October 20-21",
            "timing": "06:00 - 08:00 PM",
            "event": "Introduction to Cryptography",
            "presenter": "Alekh & Sahith",
        },
        {
            "date": "October 22-23",
            "timing": "06:00 - 08:00 PM",
            "event": "Introduction to Cyber Forensics",
            "presenter": "Sridevi, Abhishek, Pranav",
        },
        {
            "date": "October 24-25",
            "timing": "06:00 - 08:00 PM",
            "event": "Introduction to Reverse Engineering",
            "presenter": "Barla Abhishek, Simran",
        },
        {
            "date": "October 26-27",
            "timing": "06:00 - 08:00 PM",
            "event": "Introduction to Binary Exploitation",
            "presenter": "Adithya, Nikhil, Hrishikesh",
        },
        // {
        //     "timing": "03:15 - 03:25 PM",
        //     "event": "CyberSecurity at Amrita",
        //     "presenter": "Dr. Krishnashree Achuthan",
        //     "desg": "Director, Center for CyberSecurity Systems & Networks, Amrita Vishwa Vidyapeetham",
        //     "image": require('../../assets/images/photos/guests/dr_krishnasree.jpg')
        // },
        // {
        //     "timing": "03:25 - 03:45 PM",
        //     "event": "KeyNote Address",
        //     "presenter": "Dr. Biswajit Saha",
        //     "desg": "Director, Vocational Education & Skill Training, CBSE",
        //     "image": require('../../assets/images/photos/guests/dr_biswajit.jpg')
        // },
        // {
        //     "timing": "03:45 - 03:50 PM",
        //     "event": "InCTF Contest Details",
        //     "presenter": "Prof. Vipin Pavithran",
        //     "desg": "Founder & Chief Mentor - team bi0s & InCTF",
        //     "image": require('../../assets/images/photos/guests/prof_vipin.jpg')
        // },
        // {
        //     "timing": "03:50 - 04:00 PM",
        //     "event": "Vote of Thanks",
        //     "presenter": "Prof. Sumeet Bahl",
        //     "desg": "Director, Amrita Center for Research Collaborations",
        //     "image": require('../../assets/images/photos/guests/sumeet_bahl.jpeg')
        // }
    ]

    return <div>
        <div className="container min-w-lg mx-auto sm:px-4 px-8 py-10">
            {/*<div className="flex flex-wrap  mt-3 mb-4 px-1 mx-0">*/}
            {/*    <div className="md:w-1/3 pr-4 pl-4 flex items-center justify-center p-1 mb-3">*/}
            {/*        <Fade left>*/}
            {/*            <img*/}
            {/*                alt="Dr. Biswajit Saha" draggable="false"*/}
            {/*                style={{ width: '80%' }}*/}
            {/*                src={require('../../assets/images/photos/guests/guest_of_honour.jpeg')}*/}
            {/*            />*/}
            {/*        </Fade>*/}
            {/*    </div>*/}
            {/*    <div className="md:w-2/3 pr-4 pl-4 flex items-center px-1">*/}
            {/*        <Fade right>*/}
            {/*            <div>*/}
            {/*                <h5 className="font-bold mb-0">Guest of Honour</h5>*/}
            {/*                <h3 style={{ color: '#FF6F00' }} className="font-bold mb-0">Dr. Biswajit Saha</h3>*/}
            {/*                <div>Director, Central Board of Secondary Education</div>*/}
            {/*                <div className="mt-2 " style={{ fontSize: '13px' }}>*/}
            {/*                    <p className="mb-1">*/}
            {/*                        Dr. Biswajit Saha is Director (Trainings & Skill Education) in CBSE, New Delhi.*/}
            {/*                        Manages the works of Skill curriculum design, development of Student resource books &*/}
            {/*                        Training Manuals and Monitors the execution of various Teachers Training Programmes*/}
            {/*                        by 16 CBSE-Centre of Excellences. He also represents CBSE in various National &*/}
            {/*                        International Committees.*/}
            {/*                    </p>*/}
            {/*                    <p className="mb-0">*/}
            {/*                        Dr Saha handled execution of various development projects of World Bank, AICTE, UGC and MeitY.*/}
            {/*                        He had actively participated in the drafting of NVEQF, NSQF notified by MHRD & MSDE in 2012*/}
            {/*                        & 2013 respectively. He drives promotion of future skill in schools with strong industry*/}
            {/*                        association and oversee Digital Education movement under VidyaDaan @ DIKSHA.*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </Fade>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <h3 className="text-5xl text-center mb-6 font-bold">Training Schedule</h3>
            {/*<h5 style={{ color: '#FF6F00' }}>Opening Ceremony</h5>*/}
            <div className="flex justify-center">
                <div style={{ maxWidth: '100%', width: '1000px' }}>
                    <div className="text-center mb-6">
                        More details and links to join the free online beginner-level training programme will be shared soon.
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