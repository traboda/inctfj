import React from 'react';


const Schedule = () => {

    const timeline = [
        {
            "timing": "03:00 PM",
            "event": "Prayer",
        },
        {
            "timing": "3:05 - 3:15 PM",
            "event": "Welcome Address",
            "presenter": "Dr. Balakrishnan Shankar",
            "desg": "Associate Dean, Amrita School of Engineering, Amritapuri",
            "image": require('../../assets/images/photos/guests/dr_balakrishnan_shankar.jpg')
        },
        {
            "timing": "3:15 - 3:25 PM",
            "event": "CyberSecurity at Amrita",
            "presenter": "Dr. Krishnashree Achuthan",
            "desg": "Director, Center for CyberSecurity Systems & Networks, Amrita Vishwa Vidyapeetham",
            "image": require('../../assets/images/photos/guests/dr_krishnasree.jpg')
        },
        {
            "timing": "3:25 - 3:30 PM",
            "event": "InCTF Contest Details",
            "presenter": "Prof. Vipin Pavithran",
            "desg": "Founder & Chief Mentor - team bi0s & InCTF",
            "image": require('../../assets/images/photos/guests/prof_vipin.jpg')
        },
        {
            "timing": "3:30 - 3:50 PM",
            "event": "KeyNote Address",
            "presenter": "Dr. Biswajit Saha",
            "desg": "Director, Vocational Education & Skill Training, CBSE",
            "image": require('../../assets/images/photos/guests/dr_biswajit.jpg')
        },
        {
            "timing": "3:55 - 4:000 PM",
            "event": "Vote of Thanks",
        }
    ]

    return <div>
        <div className="container-lg px-3 py-5">
            <h3 className="font-weight-bold">Schedule</h3>
            <h5>Opening Ceremony</h5>
            <div className="row d-none d-md-block font-weight-bold mx-0 py-2 border-bottom">
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
            {timeline.map((t) =>
                <div className="row mx-0 py-2 border-bottom">
                    <div className="col-md-3  d-flex align-items-center p-1">
                        {t.timing}
                    </div>
                    <div className="col-md-4 d-flex align-items-center p-1">
                        <span style={{ fontWeight: '600', color: '#4A148C'}}>{t.event}</span>
                    </div>
                    {t?.presenter ? <div className="col-md-4 p-1">
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
            )}
        </div>
    </div>

};

export default Schedule;