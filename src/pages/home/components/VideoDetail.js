import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) return null;

  const url = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title="random weather video" className="embed-responsive-item" src={url} />
      </div>
    </div>
  );
}
export default VideoDetail;