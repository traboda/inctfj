import React from 'react';
import Fade from 'react-reveal/Fade';

const Schedule = () => {

    const timeline = [
        {
            "timing": "03:00 - 03:05 PM",
            "event": "Prayer",
        },
        {
            "timing": "03:05 - 03:15 PM",
            "event": "Welcome Address",
            "presenter": "Dr. Balakrishnan Shankar",
            "desg": "Associate Dean, Amrita School of Engineering, Amritapuri",
            "image": require('../../assets/images/photos/guests/dr_balakrishnan_shankar.jpg')
        },
        {
            "timing": "03:15 - 03:25 PM",
            "event": "CyberSecurity at Amrita",
            "presenter": "Dr. Krishnashree Achuthan",
            "desg": "Director, Center for CyberSecurity Systems & Networks, Amrita Vishwa Vidyapeetham",
            "image": require('../../assets/images/photos/guests/dr_krishnasree.jpg')
        },
        {
            "timing": "03:25 - 03:45 PM",
            "event": "KeyNote Address",
            "presenter": "Dr. Biswajit Saha",
            "desg": "Director, Vocational Education & Skill Training, CBSE",
            "image": require('../../assets/images/photos/guests/dr_biswajit.jpg')
        },
        {
            "timing": "03:45 - 03:50 PM",
            "event": "InCTF Contest Details",
            "presenter": "Prof. Vipin Pavithran",
            "desg": "Founder & Chief Mentor - team bi0s & InCTF",
            "image": require('../../assets/images/photos/guests/prof_vipin.jpg')
        },
        {
            "timing": "03:50 - 04:00 PM",
            "event": "Vote of Thanks",
            "presenter": "Prof. Sumeet Bahl",
            "desg": "Director, Amrita Center for Research Collaborations",
            "image": require('../../assets/images/photos/guests/sumeet_bahl.jpeg')
        }
    ]

    return <div>
        <div className="container-lg px-3 py-5">
            <div className="row mt-3 mb-4 px-1 mx-0">
                <div className="col-md-4 d-flex align-items-center justify-content-center p-1 mb-3">
                    <Fade left>
                        <img
                            alt="Dr. Biswajit Saha" draggable="false"
                            style={{ width: '80%' }}
                            src={require('../../assets/images/photos/guests/guest_of_honour.jpeg')}
                        />
                    </Fade>
                </div>
                <div className="col-md-8 d-flex align-items-center px-1">
                    <Fade right>
                        <div>
                            <h5 className="font-weight-bold mb-0">Guest of Honour</h5>
                            <h3 style={{ color: '#FF6F00' }} className="font-weight-bold mb-0">Dr. Biswajit Saha</h3>
                            <div>Director, Central Board of Secondary Education</div>
                            <div className="mt-2 " style={{ fontSize: '13px' }}>
                                <p className="mb-1">
                                    Dr. Biswajit Saha is Director (Trainings & Skill Education) in CBSE, New Delhi.
                                    Manages the works of Skill curriculum design, development of Student resource books &
                                    Training Manuals and Monitors the execution of various Teachers Training Programmes
                                    by 16 CBSE-Centre of Excellences. He also represents CBSE in various National &
                                    International Committees.
                                </p>
                                <p className="mb-0">
                                    Dr Saha handled execution of various development projects of World Bank, AICTE, UGC and MeitY.
                                    He had actively participated in the drafting of NVEQF, NSQF notified by MHRD & MSDE in 2012
                                    & 2013 respectively. He drives promotion of future skill in schools with strong industry
                                    association and oversee Digital Education movement under VidyaDaan @ DIKSHA.
                                </p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
            <h3 className="font-weight-bold">Event Schedule</h3>
            <h5 style={{ color: '#FF6F00' }}>Opening Ceremony</h5>
            <div className="row d-none d-md-flex font-weight-bold mx-0 py-2 border-bottom">
                <div className="col-md-3  d-flex align-items-center p-1">
                    Timing
                </div>
                <div className="col-md-4 d-flex align-items-center p-1">
                    Event
                </div>
                <div className="col-md-4 p-1">
                    Presenter
                </div>
            </div>
            {timeline.map((t, index) =>
                <Fade delay={index*220}>
                    <div className="row mx-0 py-2 border-bottom">
                        <div className="col-md-3 d-flex align-items-center px-1">
                            <span style={{ fontSize: '18px' }}>{t.timing}</span>
                        </div>
                        <div className="col-md-4 d-flex align-items-center px-1 pb-1">
                            <span style={{ fontWeight: '600', color: '#4A148C'}}>{t.event}</span>
                        </div>
                        {t?.presenter ? <div className="col-md-4 px-1">
                            <div className="d-flex align-items-center">
                                <img
                                    draggable="false" alt={t.presenter}
                                    src={t.image}
                                    style={{
                                        maxWidth: '72px',
                                        borderRadius: '10px',
                                        marginRight: '10px'
                                    }}
                                />
                                <div>
                                    <div className="h6 mb-1 font-weight-bold" style={{ color: '#FF6F00'}}>{t.presenter}</div>
                                    <div style={{ fontSize: '12px' }}>{t.desg}</div>
                                </div>
                            </div>
                        </div> : <div className="d-none d-md-block"> - </div>}
                    </div>
                </Fade>
            )}
        </div>
    </div>

};

export default Schedule;