import React, { Component } from 'react';

const SearchBarResultsList = ({ cities }) => {
  if (cities.length === 0) 
    return <div className="no-results">No items to display.</div>;

  return cities.map(city => 
    <li key={city.adminCode2}>
      {`${city.placeName}, ${city.adminName1}, ${city.countryCode}`}
    </li>
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

  render() {
    return (
      <div className="searchBar__results" ref={node => this.node = node}>
        {!this.props.doneLoading && 
          <div className="loadingBar">
            <div className="loadingBar__bar"/>
          </div>}
        <div className="title">Search Results</div>
        <ul>
          <SearchBarResultsList cities={this.props.cities} />
        </ul>
      </div>
    );
  }
}

export default SearchBarResults;