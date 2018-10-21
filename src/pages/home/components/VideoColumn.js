import React from 'react';
import VideoColumnItem from './VideoColumnItem';

const VideoColumn = ({ videos, onVideoSelect }) => {
  if (videos.length === 0 ) return null;
  
  return (
    <ul>
      {videos.map(v => 
        <VideoColumnItem video={v} key={v.etag} onVideoSelect={onVideoSelect} />)
      }
    </ul>
  );
};

export default VideoColumn;