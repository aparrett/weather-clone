import React from 'react'

const VideoColumnItem = ({ video, onVideoSelect }) => (
  <li onClick={() => onVideoSelect(video)}>
    <div className="thumbnail-wrapper">
      <img alt={video.snippet.description} src={video.snippet.thumbnails.medium.url} />
    </div> 
    <div className="title-wrapper">
      <div className="media-title">{video.snippet.title}</div>
    </div>
  </li>
);

export default VideoColumnItem;