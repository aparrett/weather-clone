import React, { Component } from 'react';
import '../assets/Current.scss';
import moment from 'moment-timezone';
import { abbrTimeZone } from '../../../util/time';
import { getWeather } from '../../../service/weather';

const CurrentWeather = ({ weather }) => {
  const high = Math.round(weather.daily.data[0].temperatureHigh);
  const low = Math.round(weather.daily.data[0].temperatureLow);

  return (
    <div className="current__main-weather">
      <div className="current__main-weather-temp">{Math.round(weather.currently.temperature)}<sup>°</sup></div>
      <div className="current__main-weather-desc">{weather.currently.summary}</div>
      <div className="current__main-weather-rest">
        <div>feels like {Math.round(weather.currently.apparentTemperature)}<sup>°</sup></div>
        <div>H {high}<sup>°</sup> / L {low}<sup>°</sup></div>
        <div>UV Index {weather.currently.uvIndex} of 10</div>
      </div>
    </div>
  );
};

class CurrentMain extends Component {
  state = {
    timeAtLoad: moment().format('hh:mm a'),
    timeZone: abbrTimeZone(),
    weather: null
  }

  componentDidMount() {
    this.fetchWeather();
  }

  async fetchWeather() {
    const weather = await getWeather(38.7875, -90.6299);
    this.setState((state) => ({ ...state, weather }));
  }

  render() {
    return (
      <div className="current__main">
        <div className="current__main-title">
          <div className="current__main-location">Saint Peters, MO</div>
          <div className="current__main-time">
            as of {this.state.timeAtLoad + ' ' + this.state.timeZone}
          </div>
        </div>
        {this.state.weather && <CurrentWeather weather={this.state.weather} />}
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