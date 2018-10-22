import React from 'react'
import SearchBar from './SearchBar';
import LocationBar from './LocationBar';
import NavBar from './NavBar';

const Header = () => (
  <React.Fragment>
    <SearchBar />
    <LocationBar />
    <NavBar />
  </React.Fragment>
);

export default Header;