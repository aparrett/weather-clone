import React from 'react'
import './SearchBar.scss';
import searchIcon from './assets/search-icon.png';

const SearchBar = () => (
  <div className="searchBar">
    <div className="searchBar__wrapper">
      <div className="logo">
        <div>The Weather Clone</div>
      </div>
      <div className="searchBar__rest">
        <div className="searchBar__search">
          <img src={searchIcon} alt="Search for the weather in your area" />
          <input type="text" placeholder="Show me the weather in..." />
        </div>
      </div>
    </div>
  </div>
);

export default SearchBar;