import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) return null;

  const url = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="">
        <iframe title="random weather video" src={url} />
      </div>
    </div>
  );
}
export default VideoDetail;