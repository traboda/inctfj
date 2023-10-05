import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

const ContactsBarSection = styled.section`
    padding: 5vh 3vw;
    background: #222640;
    color: white;
    img {
      max-height: 64px;
      margin-right: 8px;
    }
    a {
      font-size: 16px;
      &:hover {
         color: #fd7e14!important;
      }
    }
    .social-bar {
        a {
          font-size: 32px;
          color: #AAA;
          margin-right: 12px;
          &:hover {
            color: #fd7e14;
          }
        };
    }
`;

const PoweredByTraboda = styled('div')`
    font-size: 16px;
    div {
        opacity: 0.8;
        margin-bottom: 0.5rem;
    }
    img {
        position: inherit;
        display: block;
        max-height: 64px;
        max-width: 200px;
    }
`;

const LandingContactsBar = () => {

  return (
    <ContactsBarSection>
      <div className="flex flex-wrap">
        <div className="w-full flex justify-center flex-wrap">
          {data?.LandingPoweredby?.map((item, index) => (
            <Link href={item.url} key={index}>
              <PoweredByTraboda className="p-4" key={index}>
                <div className="mb-2">{item.header}</div>
                <img src={`/${eventID}/${item.logo}`} alt="Traboda" />
              </PoweredByTraboda>
            </Link>
          ))}
        </div>
      </div>
    </ContactsBarSection>
  );

};

export default LandingContactsBar;
