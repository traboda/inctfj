import React from 'react';
import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";

const QuickInfoSection = styled.section`
      background: #E3F2FD;
      padding: 3.5vh 2vw;
      user-select: none;
      .col-md-4 {
          display: flex;
          align-items: center;
          justify-content: center;
      }
      img {
          max-height: 56px;
          margin-bottom: 12px;
      } 
      .qs {
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          line-height: 1;
          margin-bottom: 0.5rem;
      }
      .ans {
        font-size: 20px;
        line-height: 1.1;
        font-weight: 300;
      }
`;

const LandingQuickInfo = () => {

    const landingInfo = [
        {
            image: require('../../assets/images/icons/trophy.png'), left: true,
            question: "What?", answer: <>Learn & Hack <br /> Capture The Flag (CTF) Contest</>
        },
        {
            image: require('../../assets/images/icons/calendar.png'), up: true,
            question: "When?", answer: <>
                <div>09:00 AM, Dec. 28 to</div>
                09:00 PM, Dec. 29 (36 Hrs)
            </>
        },
        {
            image: require('../../assets/images/icons/backpack.png'), right: true,
            question: "For Whom?", answer: "Grade 08-12 School Students"
        }
    ]

    return <QuickInfoSection>
        <div className="row mx-0">{landingInfo.map((l) =>
            <div className="col-md-4 p-2">
                <Fade left={l.left} right={l.right} up={l.up}>
                    <div className="row w-100 mx-0">
                        <div className="d-flex align-items-center justify-content-center col-3 p-2 p-md-0">
                            <img draggable="false" alt={l.question} src={l.image} />
                        </div>
                        <div className="col-9 d-flex align-items-center p-0">
                            <div>
                                <div className="qs">{l.question}</div>
                                <div className="ans">{l.answer}</div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        )}</div>
    </QuickInfoSection>

};

export default LandingQuickInfo;