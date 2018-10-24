import React, { Component } from 'react'
import './SearchBar.scss';
import searchIcon from '../assets/search-icon.png';
import { findCities } from '../../service/geo';
import SearchBarResults from './SearchBarResults';

class SearchBar extends Component {
  state = { city: null, citiesFound: [], showResults: false, doneLoading: false };
  
  handleChange(e) {
    this.setState({ city: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();

    this.setState({ doneLoading: false });

    const citiesFound = await findCities(this.state.city);
    this.setState({ citiesFound: [...citiesFound], showResults: true, doneLoading: true });
  }

  hideResults() {
    this.setState({ showResults: false });
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
                <input 
                  type="text" 
                  placeholder="Show me the weather in..." 
                  onChange={this.handleChange.bind(this)} 
                />
              </form>
              {this.state.showResults && 
                <SearchBarResults 
                  doneLoading={this.state.doneLoading} 
                  cities={this.state.citiesFound} 
                  hideResults={this.hideResults.bind(this)}
                  addCity={this.props.addCity}
                />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;