import React from 'react';
import styled from '@emotion/styled';


const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);

const RegCTASection = styled.section`
   h3 {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 0;
      line-height: 1.5;
   }
   a {
       display: inline-block;
       width: 100%;
       text-align: center;
       max-width: 400px;
       margin-bottom: 0.5rem;
       background: #E65100;
       color: white;
       font-weight: 600;
       padding: 0.8rem 1.2rem;
       text-decoration: none!important;
       border-radius: 8px;
       box-shadow: 2px 6px 12px rgba(0,0,0,0.3);
   }
`;

const CTAPartners = () => {

  return (
    <div className="bg-white mt-10 mb-20">
      <RegCTASection className="container mx-auto px-4 py-8">
        {data.CTAPartners && (
        <div className="grid md:grid-cols-4 items-center gap-6">
          <div className="md:col-span-3">
            <div className="flex items-center">
              {/*<img alt="star" className="hidden md:block mr-2" src={require('../../assets/images/icons/shooting_star.png')} />*/}
              <h3 style={{ maxWidth: '800px' }}>
                {data.CTAPartners.message}
              </h3>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center">
              <a rel="nofollow noref" href={data.CTAPartners.button.url}>{data.CTAPartners.button.label}</a>
            </div>
          </div>
        </div>
        )}
      </RegCTASection>
    </div>
  );

};

export default CTAPartners;