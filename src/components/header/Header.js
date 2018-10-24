import React from 'react'
import SearchBar from './SearchBar';
import LocationBar from './LocationBar';
import NavBar from './NavBar';

const Header = ({ addCity }) => (
  <React.Fragment>
    <SearchBar addCity={addCity} />
    <LocationBar />
    <NavBar />
  </React.Fragment>
);

export default Header;