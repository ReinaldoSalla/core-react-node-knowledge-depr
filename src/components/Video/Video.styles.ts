import styled from 'styled-components';

const VideoBackground = styled.video`
  position: fixed;

  @media (min-aspect-ratio: 16/9) {
    width: 100%;
    height: auto;
  }

  @media (max-aspect-ratio: 16/9) {
    width: auto;
    height: 100%;
  }
`;

export default VideoBackground;