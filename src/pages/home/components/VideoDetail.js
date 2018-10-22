import React from 'react';
import '../assets/VideoDetail.scss';

const VideoDetail = ({ video }) => {
  if (!video) return null;

  const url = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="videoDetail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" title="random weather video" src={url} />
      </div>
      <div className="details">
        <h1 className="headline">{video.snippet.title}</h1>
        <div className="description">{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;