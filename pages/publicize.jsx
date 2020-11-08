import React from 'react';
import styled from "@emotion/styled";

import Base from "../src/components/shared/Base";
import TopBar from "../src/components/shared/TopBar";


const PageCover = styled.div`
    background-image: ${() => `url(${require('../src/assets/images/covers/inctfj_mountains.jpg')})`};
    background-size: cover;
    background-position: center;
    min-height: 60vmin;
`;

const PosterSection = styled.section`
  padding: 5vh 1rem;
  button {
      background: none!important;
      border: none;
      padding: 0;
      &:focus, &:hover {
          outline: none;
          .download_icon {
            display: flex;
            transition: all 1s ease;
          }
      }
      position: relative;
  }
  .download_icon {
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
  p { font-size: 13px; margin-bottom: 0.25rem; }
  h3 {
      font-weight: 600;
      color: #005cbf;
      margin-bottom: 0.5rem;
  } 
  img {
      max-width: 100%;
      max-height: 300px;
      box-shadow: 2px 5px 12px rgba(0,0,0,0.35);
  }
`

export default () => {

    const posters = [
        require('../src/assets/images/posters/1.jpg'),
        require('../src/assets/images/posters/2.jpg'),
        require('../src/assets/images/posters/3.jpg'),
    ];

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
        <PosterSection className="row mx-0">
            <div className="col-12 d-flex justify-content-center text-center py-2">
                <div>
                    <h3>Download Posters</h3>
                    <p>Click on the image to download the poster, and feel free to share them anywhere!</p>
                </div>
            </div>
            {posters.map((p) =>
            <div className="col-6 d-flex align-items-center justify-content-center col-md-3 col-lg-2 p-1">
                <button onClick={() => handlePosterDownload(p)}>
                    <img alt="download poster" src={p} />
                    <div className="download_icon">
                        <img src={require('../src/assets/images/icons/download.png')} alt="download" />
                    </div>
                </button>
            </div>
        )}</PosterSection>
    </Base>
};
