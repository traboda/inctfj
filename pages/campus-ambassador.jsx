import React from 'react'
import classes from './campus.module.css'
import Herogirl from '../src/assets/images/campus/hero-girl.png'
import TopBar from "../src/components/shared/TopBar";
import Footer from "../src/components/shared/Footer";
import SiteView from "../src/components/SiteView";
import Dots from '../src/assets/images/campus/dots.png'
import Perkback from '../src/assets/images/campus/Rectangle-24.png'
import Gridimg1 from '../src/assets/images/campus/Frame 69.png'
import Gridimg2 from '../src/assets/images/campus/Frame 67.png'
import Gridimg3 from '../src/assets/images/campus/Frame 66.png'
import Gridimg4 from '../src/assets/images/campus/Frame 65.png'
import Whiteimg from '../src/assets/images/campus/image 16.png'
import Ideate from '../src/assets/images/campus/Ideate.jpeg'
import Promote from '../src/assets/images/campus/Promote.jpeg'
import Innovate from '../src/assets/images/campus/Innovate.jpeg'
import Represent from '../src/assets/images/campus/Represent.jpeg'

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
const backgroundStyle = {
    backgroundImage: `url(${Perkback})`,
    backgroundSize: '70%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 35% bottom 35%',
  };
function Campus() {
    return (
        <SiteView meta={{ title: "Campus " }}>
            <TopBar />
            <>
                {/* first section starts here */}
                <section className={classes.maincampusdiv}>
                    <div className={classes.maincampustextdiv}>
                        <div className={classes.maincampusinnertextdiv}>
                            <img src={Dots} alt="" />
                            <h1 className="leading-tight tracking-tight main-amb-heading dark:text-white "
                            >Campus Ambassador Program</h1>
                            <p className="py-8 ">
                                In addition to the challenges and rewards, the ICA program
                                provides a chance for participants to i mprove their professional
                                skills and stand out in their careers. Internship and Placement
                                offers awaits the top Campus Ambassador</p>
                            <button className='text-xl px-10 py-5 inline-block font-semibold ml-3 rounded-lg bg-black text-white hover:bg-blue-800 shadow hover:shadow-xl mt-5'>Apply Now</button>
                        </div>
                    </div>
                    <div className={classes.maincampusimgdiv}>
                    <img src={Dots} alt="" className={classes.dotimage}/>
                        <img src={Herogirl} alt="hero-girl image campus ambassador" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                </section>
            </>

            {/* second section starts here */}

            <section className={classes.campusperkssection} style={backgroundStyle}>
                <div className={classes.absoluteimg}>
                    <img src={Dots} alt="background-dots" />
                </div>
                <div className={classes.campusperkssectionflex}>
                    <div className={classes.campusperkssectionflexdiv1}>
                        <div className={classes.leafshapeddiv}>
                            <h2>Perks</h2>
                        </div>
                        <div className={classes.leafshapeddivpara} style={{marginLeft:'2rem'}}>
                            <p>We build readymade websites, mobile applications, and elaborate online business services.</p>
                        </div>
                    </div>
                    <div className={classes.campusperkssectionflexdiv2}>
                        <div className={classes.campusperksgrid}>
                            <div className={classes.griditem} style={{marginTop:'10vh'}}>
                                <img src={Gridimg4} alt="icon1" />
                                <img src={Gridimg3} alt="icon2" />
                            </div>
                            <div className={classes.griditem}>
                                <img src={Gridimg1} alt="icon3" />
                                <img src={Gridimg2} alt="icon4" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={classes.whatwillwedosection}>

                <div className={classes.whatwillheadingdiv}>
                    <h1>What will You Do ?</h1>
                </div>
                <div className={classes.whatwillflexdiv}>
                    <div className={classes.whatwillflexdivinner}>
                        <img src={Represent} alt="white-image"/>
                        <h1>Represent</h1>
                        <p>Inctf at your college and act as a link between the students of your college and Inctf.</p>
                    </div>
                    <div className={classes.whatwillflexdivinner}>
                        <img src={Promote} alt="white-image"/>
                        <h1>Promote</h1>
                        <p>Ideate, plan, organise and promote the events of Techfest through various mediums and channels</p>
                    </div>
                    <div className={classes.whatwillflexdivinner}>
                        <img src={Innovate} alt="white-image"/>
                        <h1>Innovate</h1>
                        <p>Strategize and experiment with innovative marketing and publicity strategies to drive up student participation</p>
                    </div>
                    <div className={classes.whatwillflexdivinner}>
                        <img src={Ideate} alt="white-image"/>
                        <h1>Ideate</h1>
                        <p>Engage in discussions with the other CAs and the Techfest Coordinators to bring new ideas to the fest</p>
                    </div>
                </div>
            </section>

            <section>
                <div className={classes.campusfaqdivheading}>
                    <h1>Frequently Asked Questions :</h1>
                </div>
            <Container className="!p-0">
                <div className={classes.campusaccordion}>
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