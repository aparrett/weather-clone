import React from 'react';

const VideoListItem = ({ video }) => (
  <li>
    <div className="thumbnail-wrapper">
      <img alt={video.snippet.description} src={video.snippet.thumbnails.medium.url} />
    </div> 
    <div className="details">
      <div className="channel">{video.snippet.channelTitle}</div>
      <div className="title">{video.snippet.title}</div>
    </div>
  </li>
);

export default VideoListItem;