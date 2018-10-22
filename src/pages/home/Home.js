import React, { Component } from 'react';
import HomeVideos from './components/HomeVideos';
import VideoList from '../../components/VideoList';
import { fetchVideos } from '../../service/youtube';
import Divider from '../../components/Divider';

class Home extends Component {
  state = { trendingVideos: [] };

  async componentDidMount() {
    const trendingVideos = await fetchVideos('tornado f5');
    this.setState({ trendingVideos });
  }

  render() {
    return (
      <div className="main-container">
        <HomeVideos />
        <Divider />
        <VideoList title="Trending" videos={this.state.trendingVideos} />
      </div>
    );
  }
}

export default Home;