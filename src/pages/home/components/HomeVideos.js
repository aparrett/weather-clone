import React, { Component } from 'react';
import { fetchVideos } from '../../../service/youtube';
import VideoDetail from './VideoDetail';
import VideoColumn from './VideoColumn';

class HomeVideos extends Component {
  state = { selectedVideo: null, videos: [] }

  componentDidMount() {
    this.fetchWeatherVideos();
  }

  async fetchWeatherVideos() {
    const videos = await fetchVideos('weather forecast');
    this.setState({ selectedVideo: videos[0], videos });
  }

  onVideoSelect(video) {
    this.setState({ selectedVideo: video });
  }

  render() {
    const { selectedVideo, videos } = this.state;

    return (
      <main>
        <VideoDetail video={selectedVideo}/>
        <VideoColumn 
          onVideoSelect={this.onVideoSelect.bind(this)} 
          videos={videos.filter(v => v.etag !== selectedVideo.etag)}
        />
      </main>
    ); 
  }
}

export default HomeVideos;