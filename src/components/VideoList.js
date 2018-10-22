import React, { Component } from 'react';
import VideoListItem from './VideoListItem';
import { fetchVideos } from '../service/youtube';
import './VideoList.scss';

class VideoList extends Component {
  state = { videos: [] };

  async componentDidMount() {
    const videos = await fetchVideos(this.props.searchTerm);
    this.setState({ videos });
  }
  
  render() {
    return (
      <section className="section-full videoList">
        <h2 className="heading">{this.props.title}</h2>
        <ul>
          {this.state.videos.map(v => <VideoListItem key={v.etag} video={v} />)}
        </ul>
      </section>
    );
  }
}

export default VideoList;