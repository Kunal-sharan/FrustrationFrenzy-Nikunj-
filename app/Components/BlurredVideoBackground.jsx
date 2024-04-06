import React from 'react';

const BlurredVideoBackground = ({ videoSrc }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0">
      <video autoPlay loop muted className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 filter blur-md">
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

export default BlurredVideoBackground;
