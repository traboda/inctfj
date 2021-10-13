import React from 'react';

const achievements = [
    {
        image: require('../../assets/images/achievements/Zhero.jpeg'),
        title: 'Zhero',
        subTitle: <>Our team bi0s is ranked 14<sup>th</sup></>,
        content: <>A CTF team founded by a <span className="text-primary">group of school student participants </span>
            at InCTF Junior 2019 is now ranked <strong>48<sup>th</sup> globally</strong> among 24k teams.</>
    },
    {
        image: require('../../assets/images/achievements/Nilabha Saha.jpeg'),
        title: 'Nilabha Saha',
        subTitle: 'InCTF Jr Participant in 2018, 2019, 2020)',
        content: <>won Gold medal in NSUCRYPTO, <span className="text-primary">Russian Cryptography Olympiad</span> 2020
            in School Students category (InCTF Jr Participant in 2018, 2019, 2020)</>
    },
    {
        image: require('../../assets/images/achievements/Rajvardhan Agarwal.jpeg'),
        title: 'Rajvardhan Agarwal',
        subTitle: 'InCTF Jr 2020 Winner, Participant in 2018, 2019',
        content: <>received the renowned Offensive Security Certified Professional (<span className="text-primary">OSCP</span>)
            certification in <span className="text-primary">class 11</span></>
    },
    {
        image: require('../../assets/images/achievements/Vishnu Dev.jpeg'),
        title: 'Vishnu Dev',
        subTitle: 'InCTF Jr 2016 Participant, joined Amrita & team bi0s later',
        content: <>Found security bugs in popular software like QEMU, VirtualBox and
            FreeBSD and got assigned with <span className="text-primary">multiple CVEs</span> (CV 2020 7030, 2929, 7454, 7455)</>
    }
]

const AboutAchievements = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="font-bold">Recent Achievements of InCTF Junior Participants</h1>
            <h5 className="text-primary opacity-75 font-semibold uppercase">Be the part of the history yourself</h5>

            <div className="mt-12 grid gap-8 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
                {achievements.map((a, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                        <img src={a.image} alt={a.title} className="w-32 rounded-full h-32 shadow-lg" draggable={false} />
                        <div className="font-bold text-3xl mt-4">{a.title}</div>
                        <div className="opacity-75 text-base">{a.subTitle}</div>
                        <div className="mt-4 leading-normal text-lg">{a.content}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutAchievements;