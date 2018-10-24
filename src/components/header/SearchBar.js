import React, { Component } from 'react'
import './SearchBar.scss';
import searchIcon from '../assets/search-icon.png';
import { findCities } from '../../service/geo';

class SearchBar extends Component {
  state = { city: null, citiesFound: [], showResults: false, doneLoading: false };
  
  handleChange(e) {
    this.setState({ city: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();

    this.setState({ doneLoading: false });

    const citiesFound = await findCities(this.state.city);
    this.setState({ citiesFound, showResults: true, doneLoading: true });
  }

  renderResultsList() {
    const cities = this.state.citiesFound;

    if (cities.length === 0) return <div className="no-results">No items to display.</div>;

    return this.state.citiesFound.map(city => 
      <li key={city.adminCode2}>{`${city.placeName}, ${city.adminName1}, ${city.countryCode}`}</li>
    );
  }

  render() {
    return (
      <div className="searchBar">
        <div className="searchBar__wrapper">
          <div className="logo">
            <div>The Weather Clone</div>
          </div>
          <div className="searchBar__rest">
            <div className="searchBar__search">
              <img src={searchIcon} alt="Search for the weather in your area" />
              <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder="Show me the weather in..." onChange={this.handleChange.bind(this)} />
              </form>
              {this.state.showResults &&
                <div className="searchBar__results">
                  {!this.state.doneLoading && 
                    <div className="loadingBar"><div className="loadingBar__bar"/></div>}
                  <div className="title">Search Results</div>
                  <ul>
                    {this.renderResultsList()}
                  </ul>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;