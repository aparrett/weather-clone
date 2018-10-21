import React from 'react';

const VideoColumn = ({ videos }) => {
  if (videos.length === 0 ) return null;
  
  return (
    <ul>{videos.map(v => <li>{v.etag}</li>)}</ul>
  );
};

export default VideoColumn;