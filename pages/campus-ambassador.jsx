import React from 'react'
import classes from './campus.module.css'
import Herogirl from '../src/assets/images/campus/hero-girl.png'
import Backgroundabout from '../src/assets/images/campus/about-bg.png'
import Aboutboygirl from '../src/assets/images/campus/about-img.png'
import Benefitimg1 from '../src/assets/images/campus/benifit-img-2.png'
import Bullet from '../src/assets/images/campus/bullet.png'
import Benefitimg2 from '../src/assets/images/campus/benifit-img.png'
import TopBar from "../src/components/shared/TopBar";
import Footer from "../src/components/shared/Footer";
import SiteView from "../src/components/SiteView";
import Dots from '../src/assets/images/campus/dots.png'

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';


import Container from './container';

const faqdata = [
    {
        question: 'Who is eligible for the IAC Programme?',
        answer: 'Any student studying in the college is eligible for registration',
        numbers:'01'
    },
    {
        question: 'How can I refer to my friends ?',
        answer:
            'Upon registration, you will receive an email with a referral code which can be shared with your friends during registration',
        numbers:'02'
    },
    {
        question: 'How can I know my points',
        answer:
            'You can visit our website and search for you referral code to see the number of referrals you have',
        numbers:'03'
    },
    {
        question: 'When will I get the rewards',
        answer: 'The reward details will be published in our website on June 30',
        numbers:'04'
    },
    {
        question: 'What should I do to clear my other queries?',
        answer: 'Email your queries to inctf@am.amrita.edu',
        numbers:'05'
    },
];

function Campus() {
    return (
        <SiteView meta={{ title: "Campus " }}>
            <TopBar />
            <div>
                <section className={classes.maincampusdiv}>
                    <div className={classes.maincampustextdiv}>
                        <div className={classes.maincampusinnertextdiv}>
                            <img src={Dots} alt="" />
                            <h1 className="leading-tight tracking-tight main-amb-heading dark:text-white "
                            >Campus Ambassador Program</h1>
                            <p className="py-8 "
                                style={{ color: '#F13F17', lineHeight: '2.2rem', fontSize: '1.4rem', maxWidth: '700px' }}>
                                In addition to the challenges and rewards, the ICA program
                                provides a chance for participants to i mprove their professional
                                skills and stand out in their careers. Internship and Placement
                                offers awaits the top Campus Ambassador</p>
                            <button className='text-2xl px-10 py-5 inline-block font-semibold ml-3 rounded-lg bg-primary text-white hover:bg-blue-800 shadow hover:shadow-xl mt-10'>Apply Now</button>
                        </div>
                    </div>
                    <div className={classes.maincampusimgdiv}>
                    <img src={Dots} alt="" className={classes.dotimage}/>
                        <img src={Herogirl} alt="hero-girl image campus ambassador" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                </section>


                {/* <section className={classes.maincampusaboutdiv1} style={{ backgroundImage: `url(${Backgroundabout})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <div className={classes.maincampusaboutdiv1innerwrapper}>
                        <div className={classes.div2img}>
                            <img src={Aboutboygirl}></img>
                        </div>
                        <div className={classes.div2text} style={{ backgroundColor: '#F13F17', padding: '2rem', borderRadius: '25px' }}>
                            <div>
                                <h1 className='text-white'>About inCTF Campus Ambassador</h1>
                                <p>
                                    The ICA (InCTF Campus Ambassador) Programme is designed to help
                                    participants develop their interpersonal skills and compete on a
                                    leaderboard through a series of challenges. As they progress
                                    through the Programme, ICA's will have the opportunity to earn
                                    points and unlock rewards along the way</p>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* <section className={classes.section3}>
                    <div style={{ width: '100%' }}>
                        <h2>BENEFITS</h2>
                        <h1>
                            Enhance Your Abilities as an Amrita InCTF <span style={{ color: '#F13F17' }}>Campus Ambassador</span>
                        </h1>
                    </div>
                    <div className={classes.section3innerdisplayflex}>
                        <div className={classes.section3imgdiv}>
                            <img src={Benefitimg1} alt="" />
                        </div>
                        <div className={classes.section3textdiv}>
                            <div>
                                <ol className='list-outside list-decimal'>
                                    <li>Opportunity to develop your leadership, communication, and marketing skills</li>
                                    <li>Chance to network and build public relations at the national level.</li>
                                    <li>Internship and Placement offers awaits the top Campus Ambassador</li>
                                    <li>Be a part of a network of thousands of students across the country and collaborate with them.</li>
                                    <li>chance to provide a valuable opportunity for the technical, managerial, and literary clubs at your college to showcase their skills among 500+ other colleges.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={classes.section4}>
                    <div className={classes.section4textdiv}>
                        <h1>Responsibility</h1>
                        <ol className='list-outside list-decimal'>
                            <li>Identifying potential participants for InCTF on your campus.</li>
                            <li>Spreading the word in your campus about events and workshops conducted by InCTF.</li>
                            <li>Acting as our in-house representative for the outreach events conducted by InCTF</li>
                            <li>Displaying posters sent by InCTF on your college noticeboard.</li>
                            <li>Coordinating with InCTF organizers.</li>
                        </ol>
                    </div>
                    <div className={classes.section4imgdiv}>
                        <img src={Benefitimg2} alt="" />
                    </div>
                </section> */}
            </div>

            <section>
            <Container className="!p-0">
                <div className=" p-2 mx-auto rounded-2xl" style={{width:'50%',fontSize:'1.1rem'}}>
                    {faqdata.map((item, index) => (
                        <div key={item.question} className="mb-5">
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75">
                                            <span><span style={{margin:'auto 2rem',color:'#D43C20',fontWeight:'bold'}}>{item.numbers}</span>{item.question}</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'transform rotate-180' : ''
                                                    } w-5 h-5 main-amb-heading `}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 ">
                                            {item.answer}
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    ))}
                </div>
            </Container>
            </section>
            <Footer />
        </SiteView>
    )
}

export default Campus