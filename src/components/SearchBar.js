import React, { Component } from 'react'
import './SearchBar.scss';
import searchIcon from './assets/search-icon.png';
import { findCities } from '../service/geo';

class SearchBar extends Component {
  state = { city: null, citiesFound: [] };
  
  handleChange(e) {
    this.setState({ city: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const citiesFound = await findCities(this.state.city);
    this.setState({ citiesFound });
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;