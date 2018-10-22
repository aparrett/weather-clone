import React from 'react';
import HomeVideos from './components/HomeVideos';
import VideoList from '../../components/VideoList';
import Divider from '../../components/Divider';

const Home = () => (
  <div className="main-container">
    <HomeVideos />
    <Divider />
    <VideoList title="Trending" searchTerm="tornado f5" />
  </div>
);

export default Home;