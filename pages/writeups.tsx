import React, { useState } from 'react';
import styled from '@emotion/styled';

import TopBar from '../src/components/shared/TopBar';
import Footer from '../src/components/shared/Footer';
import postsIndex from '../src/data/writeups/index.json';
import WriteUpCard from '../src/components/writeup/WriteUpCard';
import PageHeader from '../src/components/PageHeader';
import PageFooterExplorer from '../src/components/PageFooterExplorer';
import TagSelector from '../src/components/TagSelector';
import SiteView from '../src/components/SiteView';

export const BlogPage = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const WriteupListingPage = () => {

  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState(null);

  const CHALLENGE_CATEGORIES = [
    {
      'label': 'Cryptography',
      'value': 'crypto',
    },
    {
      'label': 'Forensics',
      'value': 'forensics',
    },
    {
      'label': 'Reversing',
      'value': 'reversing',
    },
    {
      'label': 'Pwn',
      'value': 'pwn',
    },
    {
      'label': 'Web',
      'value': 'web',
    },
  ];

  const fetchedPosts = (() => {
    const posts = [];
    Object.keys(postsIndex).forEach((key) => {
      const { query } = postsIndex[key];
      try {
        const post = require(`../src/data/writeups/${query.id}.yaml`);
        posts.push(post);
      } catch (e) {
      }
    });
    return posts;
  })();

  return (
    <SiteView meta={{ title: 'Challenge Solution WriteUps' }}>
      <TopBar />
      <PageHeader
        title="Challenge Solutions"
        breadcrumb={[
          {
            link: '/resources',
            title: 'Resources',
          },
          {
            link: '/writeups',
            isActive: true,
            title: 'WriteUps',
          },
        ]}
        description="
                     Read the solution write-ups for InCTF Jr challenges, and solve them following
                     the write-up and get yourself started!
                "
      />
      <BlogPage>
        <div className="container px-4 py-6 mx-auto">
          <div className="flex items-center">
            <div className="md:1/2 flex items-center p-2">
              <input
                type="text"
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                placeholder="Type to search..."
                className="outline-none pl-4 pr-12 py-2 border rounded-t-lg shadow-inner focus:border-yellow-600 w-full rounded-b-lg"
              />
            </div>
            <div className="md:1/2 flex items-center p-2">
              <TagSelector
                options={CHALLENGE_CATEGORIES}
                isClearable
                value={category}
                onChange={(t) => setCategory((Array.isArray(t) ? {} : t)?.value === category?.value ? null : t)}
              />
            </div>
          </div>
          {fetchedPosts.length > 0 ?
            <div className="flex flex-wrap">
              {fetchedPosts.filter((v) =>
                (category == null || v?.category.toLowerCase() === category.value.toLowerCase()) &&
                            ((keyword?.length < 1) || (v.title?.toLowerCase().startsWith(keyword.toLowerCase()))),
              ).map((w, i) => (
                <div className="w-full md:w-1/2 lg:w-1/3 p-2" key={i}>
                  <WriteUpCard {...w} />
                </div>
              ))}
            </div> :
            <div>No WriteUps</div>}
        </div>
      </BlogPage>
      <PageFooterExplorer
        items={[
          {
            'title': 'Workshops',
            'text': 'Attend Free Training Workshops',
            'link': '/trainings',
          },
          {
            'title': 'FAQ',
            'text': 'Answers to common questions',
            'link': '/faq',
          },
          {
            'title': 'Videos',
            'text': 'Videos to help get started',
            'link': '/resources#videos',
          },
          {
            'title': 'bi0s Wiki',
            'text': 'Learn fundamental concepts',
            'link': 'https://wiki.bi0s.in',
          },
          {
            'title': 'Practice Challenges',
            'text': 'Prepare solving challenges',
            'link': 'https://app.traboda.com/challenges',
          },
          {
            'title': 'Promote',
            'text': 'Promote InCTF Junior',
            'link': '/promote',
          },
          {
            'title': 'Join Discord Server',
            'text': 'Get help from our community',
            'link': '/discord',
          },
        ]}
      />
      <Footer />
    </SiteView>
  );

};

export default WriteupListingPage;