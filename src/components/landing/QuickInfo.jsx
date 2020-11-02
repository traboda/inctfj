import React from 'react';
import styled from "@emotion/styled";

const QuickInfoSection = styled.section`
      background: #E3F2FD;
      padding: 3.5vh 2vw;
      .col-md-4 {
          display: flex;
          align-items: center;
          justify-content: center;
      }
      img {
          max-height: 56px;
          margin-bottom: 12px;
      } 
      h3 {
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          line-height: 1;
          margin-bottom: 0.5rem;
      }
      h1 {
        font-size: 20px;
        line-height: 1.1;
        font-weight: 300;
      }
`;

const LandingQuickInfo = () => {

    return <QuickInfoSection>
        <div className="row mx-0">
            <div className="col-md-4 p-2">
                <div className="row w-100 mx-0">
                    <div className="d-flex align-items-center justify-content-center col-3 p-2 p-md-0">
                        <img src={require('../../assets/images/icons/trophy.png')} />
                    </div>
                    <div className="col-9 d-flex align-items-center p-0">
                        <div>
                            <h3>What?</h3>
                            <h1>Learn & Hack <br /> Capture The Flag (CTF) Contest</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 p-2">
                <div className="row w-100 mx-0">
                    <div className="d-flex align-items-center justify-content-center col-3 p-2 p-md-0">
                        <img src={require('../../assets/images/icons/calendar.png')} />
                    </div>
                    <div className="col-9 d-flex align-items-center p-0">
                        <div>
                            <h3>When?</h3>
                            <h1>December 20, 2020</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 p-2">
                <div className="row w-100 mx-0">
                    <div className="d-flex align-items-center justify-content-center col-3 p-2 p-md-0">
                        <img src={require('../../assets/images/icons/backpack.png')} />
                    </div>
                    <div className="col-9 d-flex align-items-center p-0">
                        <div>
                            <h3>For Whom?</h3>
                            <h1>Grade 10-12 School Students</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </QuickInfoSection>

};

export default LandingQuickInfo;