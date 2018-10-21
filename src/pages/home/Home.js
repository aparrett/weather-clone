import React, { Component } from 'react';
import { fetchVideos } from '../../service/youtube';
import VideoDetail from './components/VideoDetail';
import VideoColumn from './components/VideoColumn';

class Home extends Component {
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
      <React.Fragment>
        <VideoDetail video={selectedVideo}/>
        <VideoColumn 
          onVideoSelect={this.onVideoSelect.bind(this)} 
          videos={videos.filter(v => v.etag !== selectedVideo.etag)}
        />
      </React.Fragment>
    ); 
  }
}

export default Home;