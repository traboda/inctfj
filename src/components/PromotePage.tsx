import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import shortid from 'shortid';
import styled from '@emotion/styled';

import TopBar from './shared/TopBar';
import Breadcrumb from './shared/Breadcrumb';
import Footer from './shared/Footer';
import SiteView from './SiteView';

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../data/${eventID}/promote.json`);

const ShareSection = styled.section`
  padding: 3.5vh 1rem;
  button, a {
      background: none!important;
      border: none;
      padding: 0;
      &:focus, &:hover {
          outline: none;
          .download_icon, .youtube_icon {
            display: flex;
            transition: all 1s ease;
          }
          .inctf_poster {
              filter: saturate(0);
              transition: 1s all ease;
              box-shadow: none!important;
          }
      }
      position: relative;
  }
  .download_icon, .youtube_icon {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.6);
      transition: all 1s ease;
  }
  .youtube_icon {
      img {
          max-width: 56px;
      }
  }
  p { font-size: 13px; margin-bottom: 0.25rem; }
  h3 {
      font-weight: 600;
      color: #005cbf;
      margin-bottom: 0.5rem;
  } 
  .inctf_poster, .inctf_video_cover {
      transition: 1s all ease;
      box-shadow: 2px 5px 12px rgba(0,0,0,0.35);
  }
  .inctf_poster {
      max-height: 50vmin;
  }
  .inctf_video_cover {
      height: 35vmin;
      
  }
`;

const PromotePage = () => {

  const handlePosterDownload = (p) => {
    const link = document.createElement('a');
    link.href = p;
    const name = p.toString().match(/.*\/(.+?)\./)[1];
    link.setAttribute('download', `${name}.jpg`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (<SiteView meta={{ title: 'Publicize ' }}>
    <TopBar />
    <div className="px-4 py-8 flex items-end justify-center">
      <div style={{ width: '1000px', maxWidth: '100%' }}>
        <div className="flex items-center py-5" style={{ minHeight: '30vh' }}>
          <div>
            <div className="w-full text-left mb-2">
              <Breadcrumb
                items={[
                  {
                    link: '/resources',
                    title: 'Resources',
                  },
                  {
                    link: '/promote',
                    isActive: true,
                    title: 'Promote',
                  },
                ]}
              />
            </div>
            <h1 className="text-primary text-5xl lg:text-6xl py-4">{data.promoteHeader}</h1>
          </div>
        </div>
      </div>
    </div>
    {/*<ShareSection>*/}
    {/*  <div className="flex justify-center text-center py-2">*/}
    {/*    <div>*/}
    {/*      <h3>{data.downloadHeader}</h3>*/}
    {/*      <p>{data.desc}</p>*/}
    {/*    </div>*/}
    {/*  </div>*/}
    {/*  <ScrollContainer vertical className="scroll-container p-6 container mx-auto sm:px-4 flex w-full">*/}
    {/*    {data.promotionalImages.map((p) =>*/}
    {/*      (<div key={shortid.generate()} className="flex items-center justify-center p-1">*/}
    {/*        <button onClick={() => handlePosterDownload(`/${eventID}/${p}`)}>*/}
    {/*          <img alt="download poster" className="inctf_poster" src={`/${eventID}/${p}`} />*/}
    {/*          <div className="download_icon">*/}
    {/*            <img src="/assets/images/icons/download.png" alt="download" />*/}
    {/*          </div>*/}
    {/*        </button>*/}
    {/*      </div>))}*/}
    {/*  </ScrollContainer>*/}
    {/*</ShareSection>*/}
    <ShareSection>
      <div className="flex items-center justify-center text-center">
        <div>
          <h3>{data.promotionalVideosHeader}</h3>
        </div>
      </div>
      <ScrollContainer vertical className="scroll-container p-6 container mx-auto sm:px-4 flex w-full">
        {data.promotionalVideos.map(({ cover, link }) =>
          (<div key={shortid.generate()} className="flex items-center justify-center p-1">
            <a href={link} target="_blank">
              <img alt="download poster" className="inctf_video_cover" src={`/${eventID}/${cover}`} />
              <div className="youtube_icon">
                <img src="/assets/images/icons/play_button.png" alt="download" />
              </div>
            </a>
          </div>),
        )}
      </ScrollContainer>
    </ShareSection>
    <Footer />
  </SiteView>);

};

export default PromotePage;