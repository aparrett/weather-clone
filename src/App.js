import React, { Component } from 'react';
import Home from './pages/home/Home.js';
import Header from './components/Header.js';

class App extends Component {
  state = { cities: [] };
  
  addCity(city) {
    this.setState(state => ({ cities: [...state.cities, city] }));
  }

  render() {
    return (
      <React.Fragment>
        <Header addCity={this.addCity.bind(this)} cities={this.state.cities} />
        <Home />
      </React.Fragment>
    );
  }
}

export default App;