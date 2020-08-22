import React from 'react';
// import video from '../../assets/videos/ocean.mp4';
// import video from '../../assets/videos/clouds.mp4';
// import video from '../../assets/videos/earth.mp4';
// import video from '../../assets/videos/calm.ocean.mp4';
import VideoBackground from './Video.styles';

const Video = () => (
  <VideoBackground autoPlay muted loop>
    {/* <source src={video} type='video/mp4' /> */}
  </VideoBackground>
);

export default Video;
