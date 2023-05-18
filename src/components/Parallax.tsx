import React from 'react';
import styled from '@emotion/styled';

const ImageParallax = styled('div')`
  background-attachment: fixed;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-device-width: 1366px) {
    & {
      background-attachment: scroll;
    }
  }
`;

const Parallax = ({ background, height = '450px' }) => {

  return (
    <ImageParallax
      style={{
        minHeight: height,
        backgroundImage: `url(${background})`,
      }}
    />
  );

};

export default Parallax;