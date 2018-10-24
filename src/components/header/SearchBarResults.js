import React, { Component } from 'react';

const SearchBarResultsList = ({ cities, handleCityClick }) => {
  if (cities.length === 0) 
    return <div className="no-results">No items to display.</div>;

  return (
    <ul>
      {cities.map(city => 
        <li key={city.postalCode} city={city} onClick={() => handleCityClick(city)}>
          {city.longName}
        </li>
      )}
    </ul>
  );
};

class SearchBarResults extends Component {
  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = e => {
    if (this.node.contains(e.target)) return;

    this.props.hideResults();
  }

  handleCityClick(city) {
    this.props.addCity(city);
    this.props.hideResults();
  }

  render() {
    return (
      <div className="searchBar__results" ref={node => this.node = node}>
        {!this.props.doneLoading && 
          <div className="loadingBar">
            <div className="loadingBar__bar"/>
          </div>}
        <div className="title">Search Results</div>
        <SearchBarResultsList 
          cities={this.props.cities} 
          handleCityClick={this.handleCityClick.bind(this)}
        />
      </div>
    );
  }
}

export default SearchBarResults;