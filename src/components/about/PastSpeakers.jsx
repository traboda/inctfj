import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';


const PastSpeakersSection = styled.section`
    padding: 5vh 5vw;
    background: #FFF9C4;
    h4 {
        font-weight: 600;
        margin-bottom: 0.15rem;
    }
    img {
        max-width: 100%;
        transition: 1s all ease;
        &:hover {
          transform: scale(1.15)!important;
          transition: 1s all ease;
        }
        overflow: hidden!important;
    }
    .speakers-list {
        display: flex;
        align-items: center;
    }
`;

const PastINCTFSpeakers = () => {

  const speakers = [
    { 'image': '/assets/images/photos/speakers/1.jpg' },
    { 'image': '/assets/images/photos/speakers/2.jpg' },
    { 'image': '/assets/images/photos/speakers/11.jpg' },
    { 'image': '/assets/images/photos/speakers/3.jpg' },
    { 'image': '/assets/images/photos/speakers/4.jpg' },
    { 'image': '/assets/images/photos/speakers/5.jpg' },
    { 'image': '/assets/images/photos/speakers/6.jpg' },
    { 'image': '/assets/images/photos/speakers/7.jpg' },
    { 'image': '/assets/images/photos/speakers/8.jpg' },
    { 'image': '/assets/images/photos/speakers/9.jpg' },
    { 'image': '/assets/images/photos/speakers/10.jpg' },
    { 'image': '/assets/images/photos/speakers/12.jpg' }];

  const [currHighlight, setHighlight] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setHighlight(Math.floor(Math.random() * 12));
    }, 1000);
  }, []);

  return (<PastSpeakersSection>
    <div className="py-3">
      <h4>Talks & Sessions</h4>
      <h5>By Leading Professionals & Security Researchers</h5>
    </div>
    <div className="flex flex-wrap  mx-0 speakers-list">
      {speakers.map((s, index) =>
        (<div className="w-1/3 md:w-1/5 pr-4 pl-4 p-0">
          <div>
            <div>
              <img
                alt="Speaker"
                draggable="false"
                src={s.image}
                style={{ transform: index === currHighlight ? 'scale(1.15)' : null }}
              />
            </div>
          </div>
        </div>),
      )}
    </div>
  </PastSpeakersSection>);

};

export default PastINCTFSpeakers;