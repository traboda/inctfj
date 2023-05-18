import React from 'react';
import styled from '@emotion/styled';

import TopBar from '../src/components/shared/TopBar';
import Footer from '../src/components/shared/Footer';
import PageHeader from '../src/components/PageHeader';
import PageFooterExplorer from '../src/components/PageFooterExplorer';
import SiteView from '../src/components/SiteView';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const rules = require(`../src/data/${eventID}/rules.json`);

const RulesContainer = styled('div')`
    padding: 1rem 2vw;
    h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }
    h2 {
      margin: 1.35rem 0;
      font-size: calc(1.2rem + 0.35vw);
    }
    h3 {
      font-size: calc(1.15rem + 0.25vw);
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 1rem;
    }
    ul {
        padding-left: 1.5rem;
        list-style: square;  
        margin-bottom: 1.5rem;
        li {
          margin-bottom: 0.5rem;
        }
    }
    ol {
        padding-left: 1.5rem;
        list-style: decimal;
        margin-bottom: 1.5rem;
        li {
            margin-bottom: 0.5rem;
        }
    }
`;

const RulePage = () => {

  return (
    <SiteView meta={{ title: 'Rules' }}>
      <TopBar darkenOnSidebar includeSpace />
      <PageHeader
        title="Rules"
        breadcrumb={[
          {
            title: 'Championship',
            link: '/championship',
          },
          {
            title: 'Rules',
            link: '/rules',
            isActive: true,
          },
        ]}
      />
      <div className="flex justify-center p-4">
        <RulesContainer className="container">
          <div style={{ width: '100%', maxWidth: '900px' }}>
            {rules.rule.map((rule, index) => {
              if (rule.tag === 'p') {
                return <p key={index}>{rule.text}</p>;
              } else if (rule.tag === 'h1') {
                return <h1 key={index}>{rule.text}</h1>;
              } else if (rule.tag === 'h2') {
                return <h2 key={index}>{rule.text}</h2>;
              } else if (rule.tag === 'h3') {
                return <h3 key={index}>{rule.text}</h3>;
              } else if (rule.tag === 'ul') {
                return (<ul key={index}>
                  {rule.text.map((text, index) => {
                    return <li key={index}>{text}</li>;
                  })}
                </ul>);
              } else if (rule.tag === 'ol') {
                return (<ol key={index}>
                  {rule.text.map((text, index) => {
                    return <li key={index}>{text}</li>;
                  })}
                </ol>);
              }

            },
            )}
          </div>
        </RulesContainer>
      </div>
      <PageFooterExplorer
        items={[
          {
            'title': 'FAQ',
            'text': 'Answers to common questions',
            'link': '/faq',
          },
          {
            'title': 'Promote',
            'text': 'Promote InCTF Junior',
            'link': '/promote',
          },
          {
            'title': 'Our Reach & Impact',
            'text': 'See our reach & impact',
            'link': '/about#our-reach',
          },
        ]}
      />
      <Footer />
    </SiteView>
  );
};

export default RulePage;