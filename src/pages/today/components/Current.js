import React, { Component } from 'react';
import '../assets/Current.scss';

class CurrentMain extends Component {
  render() {
    return (
      <div className="current__main">
        <div className="current__main-title">
          <div className="current__main-location">Saint Peters, MO</div>
          <div className="current__main-time">as of 8:41 am CST</div>
        </div>
        <div className="current__main-weather">
          <div className="current__main-weather-temp">38<sup>°</sup></div>
          <div className="current__main-weather-desc">Sunny</div>
          <div className="current__main-weather-rest">
            <div>feels like 38<sup>°</sup></div>
            <div>H 60<sup>°</sup> / L 40<sup>°</sup></div>
            <div>UV Index 1 of 10</div>
          </div>
        </div>
        <div className="current__main-video-link">
          <a href="#" title="Link Not Yet Implemented">
            This is Where a Video Headline Will Go
          </a>
        </div>
      </div>
    );
  }
}

class CurrentPanel extends Component {
  render() {
    return (
      <div className="current__panel">
        Panel
      </div>
    );
  }
}

class Current extends Component {
  render() {
    return (
      <div className="current">
        <CurrentMain />
        <CurrentPanel />
      </div>
    );
  }
}

export default Current;