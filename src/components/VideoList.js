import React from 'react';
import VideoListItem from './VideoListItem';
import './VideoList.scss';

const VideoList = ({ title, videos }) => (
  <section className="section-full videoList">
    <h2 className="heading">{title}</h2>
    <ul>
      {videos.map(v => <VideoListItem key={v.etag} video={v} />)}
    </ul>
  </section>
);

export default VideoList;