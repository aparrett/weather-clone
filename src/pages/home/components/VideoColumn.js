import React from 'react';
import VideoColumnItem from './VideoColumnItem';
import '../assets/VideoColumn.scss';

const VideoColumn = ({ videos, onVideoSelect }) => {
  if (videos.length === 0 ) return null;
  
  return (
    <ul className="videoColumn">
      {videos.map(v => 
        <VideoColumnItem video={v} key={v.etag} onVideoSelect={onVideoSelect} />)
      }
    </ul>
  );
};

export default VideoColumn;