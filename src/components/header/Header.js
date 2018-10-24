import React from 'react'
import SearchBar from './SearchBar';
import CityBar from './CityBar';
import NavBar from './NavBar';

const Header = ({ addCity, cities }) => (
  <React.Fragment>
    <SearchBar addCity={addCity} />
    <CityBar cities={cities} />
    <NavBar />
  </React.Fragment>
);

export default Header;