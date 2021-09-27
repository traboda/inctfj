import React from 'react';
import ScrollContainer from "react-indiana-drag-scroll";
import shortid from "shortid";
import styled from "@emotion/styled";

import Base from "./shared/Base";
import TopBar from "./shared/TopBar";


const PageCover = styled.div`
    background-image: ${() => `url(${require('../assets/images/covers/inctfj_mountains.jpg')})`};
    background-size: cover;
    background-position: center;
    min-height: 60vmin;
`;

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
      height: 50vmin;
  }
  .inctf_video_cover {
      height: 35vmin;
      
  }
`;

const PromotePage = () => {

    const posters = [
        require('../assets/images/posters/p1.JPG'),
        require('../assets/images/posters/p2.JPG'),
        require('../assets/images/posters/p3.JPG'),
        require('../assets/images/posters/p4.JPG'),
        require('../assets/images/posters/p5.jpg'),
        // require('../assets/images/posters/1.jpg'),
        // require('../assets/images/posters/2.jpg'),
        // require('../assets/images/posters/3.jpg'),
        // require('../assets/images/posters/4.jpg'),
        // require('../assets/images/posters/5.jpg'),
        // require('../assets/images/posters/6.jpg'),
    ];


    const videos = [
        {
            "cover": require('../assets/images/covers/videos/2020_promo_1.jpg'),
            "link": "https://www.youtube.com/watch?v=AO4p6M4l-VA&feature=youtu.be"
        },
        {
            "cover": require('../assets/images/covers/videos/2019_highlights.jpg'),
            "link": "https://www.youtube.com/watch?v=sxRZ06Rbh_c"
        }
    ]

    const handlePosterDownload = (p) => {
        const link = document.createElement('a');
        link.href = p;
        const name = p.toString().match(/.*\/(.+?)\./)[1];
        link.setAttribute('download', `${name}.jpg`)
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return <Base meta={{ title: "Publicize InCTF Jr." }}>
        <TopBar includeSpace={false} />
        <PageCover />
        <ShareSection>
            <div className="flex justify-center text-center py-2">
                <div>
                    <h3>Download Posters</h3>
                    <p>Click on the image to download the poster, and feel free to share them anywhere! (Drag to view more posters)</p>
                </div>
            </div>
            <ScrollContainer vertical className="scroll-container p-6 container mx-auto sm:px-4 flex w-full">
                {posters.map((p) =>
                <div key={shortid.generate()} className="flex items-center justify-center p-1">
                    <button onClick={() => handlePosterDownload(p)}>
                        <img alt="download poster" className="inctf_poster" src={p} />
                        <div className="download_icon">
                            <img src={require('../assets/images/icons/download.png')} alt="download" />
                        </div>
                    </button>
                </div>)}
            </ScrollContainer>
        </ShareSection>
        <ShareSection>
            <div className="flex items-center justify-center text-center">
                <div>
                    <h3>Promotional Videos</h3>
                </div>
            </div>
            <ScrollContainer vertical className="scroll-container p-6 container mx-auto sm:px-4 flex w-full">
                {videos.map(({ cover, link }) =>
                    <div key={shortid.generate()} className="flex items-center justify-center p-1">
                        <a href={link} target="_blank">
                            <img alt="download poster" className="inctf_video_cover" src={cover} />
                            <div className="youtube_icon">
                                <img src={require('../assets/images/icons/play_button.png')} alt="download" />
                            </div>
                        </a>
                    </div>
                )}
            </ScrollContainer>
        </ShareSection>
    </Base>;

};

export default PromotePage;