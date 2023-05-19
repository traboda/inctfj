import React from 'react';
import styled from '@emotion/styled';


const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const Data = require(`../../data/${eventID}/index.json`);

const OrganizersSection = styled.section`
    user-select: none;
    .content-container {
      padding: 5vh 5vw;
      h3 {
          text-align: center;
          font-weight: 700;
          font-size: 26px;
          text-transform: uppercase;
          color: #E65100;
          margin-bottom: 2rem;
        }
        h4 {
          font-size: 18px;
          font-weight: 600;
          color: #444;
        }
        img {
          max-height: 78px;
          max-width: 100%;
          margin-bottom: 1rem;
        }
        .md\\:w-1\\/3 {
            padding: 1rem;
            p {
              font-size: 12px;
              max-width: 450px;
              margin-bottom: 0;
            }
        }
    }
    img {
      max-width: 100%;
    }
`;

const LandingOrganizers = () => {


  return (<OrganizersSection>
    <div className="content-container">
      <h3>Organized By</h3>
      <div className="flex flex-wrap grid md:grid-cols-3 mx-0">
        <div>
          <div className="w-full pr-4 pl-4 md:order-1 order-2 md:text-right text-center ">
            <a href="https://amrita.edu">
              <img
                alt="Amrita Vishwa Vidyapeetham"
                src={`/${eventID}/${Data.Organizers[0].logo}`}
                className="md:ml-auto md:mr-0 mx-auto"
              />
            </a>
            <h4>
              {Data.Organizers[0].header}
            </h4>
            <div className="flex md:justify-end justify-center">
              <p>
                {Data.Organizers[0].desc}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full pr-4 pl-4 text-center md:order-2 order-1">
            <a href="https://bi0s.in">
              <img
                alt="Team bi0s"
                src={`/${eventID}/${Data.Organizers[1].logo}`}
                className="mx-auto"
              />
            </a>
            <h4>
              {Data.Organizers[1].header}
            </h4>
            <div className="flex justify-center">
              <p>
                {Data.Organizers[1].desc}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full pr-4 pl-4 md:order-2 order-1 md:text-left text-center">
            <a href="https://www.amrita.edu/center/cyber-security">
              <img
                alt="Amrita Center for Cyber Security Systems & Networks"
                src={`/${eventID}/${Data.Organizers[2].logo}`}
                className="inline"
              />
            </a>
            <h4>
              {Data.Organizers[2].header}
            </h4>
            <div className="flex md:justify-start justify-center">
              <p>
                {Data.Organizers[2].desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </OrganizersSection>);

};

export default LandingOrganizers;