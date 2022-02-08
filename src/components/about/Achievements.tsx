import React from 'react';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/about.json`);

const achievements = [
    {
        image: require('../../assets/images/achievements/zhero.png'),
        title: 'Zhero',
        subTitle: " ",
        content: <>A CTF team founded by a <span className="text-primary">group of school student participants </span>
            at InCTF Junior 2019 is now ranked <strong>48<sup>th</sup> globally</strong> among 24k teams.</>
    },
    {
        image: require('../../assets/images/achievements/nilabha.jpg'),
        title: 'Nilabha Saha',
        subTitle: '2018, 2019, 2020 Participant',
        content: <>
            won Gold medal in NSUCRYPTO, <span className="text-primary">Russian Cryptography Olympiad</span> 2020
            in School Students category
        </>
    },
    {
        image: require('../../assets/images/achievements/rajvardhan.jpg'),
        title: 'Rajvardhan Agarwal',
        subTitle: '2020 Winner, 2018, 2019 Participant',
        content: <>
            received the renowned Offensive Security Certified Professional (<span className="text-primary">OSCP</span>)
            certification in <span className="text-primary">class 11</span>
        </>
    },
    {
        image: require('../../assets/images/achievements/vishnu_dev.jpeg'),
        title: 'Vishnu Dev',
        subTitle: '2016 Participant, team bi0s member',
        content: <>
            found security bugs in popular software like QEMU, VirtualBox and
            FreeBSD and got assigned with <span className="text-primary">multiple CVEs</span>
            (CV 2020 7030, 2929, 7454, 7455)
        </>
    }
]

const AboutAchievements = () => {
    if (!data.Achievements) {
        return null;
    }
    return (
        <div id="impact" className="container mx-auto" style={{ padding: '7.5vw 1.2rem' }}>
            <div className="text-center">
                <h1 className="font-bold text-3xl lg:text-4xl mb-3">{data.AchievementsHeader}</h1>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
                {data.Achievements.map((a, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                        <div className="opacity-80 mb-5 text-sm">{a.subTitle}</div>
                        <img
                            src={require(`../../data/${eventID}/${a.image}`)}
                            alt={a.title}
                            style={{ height: '180px' }}
                            className="rounded-lg shadow-lg"
                            draggable={false}
                        />
                        <div className="font-bold text-xl mt-4">{a.title}</div>
                        <div style={{ fontSize: '0.95rem', width: '300px', maxWidth: '100%' }}>{a.content}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutAchievements;