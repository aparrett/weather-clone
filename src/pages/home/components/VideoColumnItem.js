import React from 'react'

const VideoColumnItem = ({ video, onVideoSelect }) => (
  <li onClick={() => onVideoSelect(video)}>
    <div className="media-top">
      <img alt={video.snippet.description} src={video.snippet.thumbnails.default.url} />
    </div> 
    <div className="media-bottom">
      <div className="media-title">{video.snippet.title}</div>
    </div>
  </li>
);

export default VideoColumnItem;