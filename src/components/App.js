import React, { Component } from 'react';
import Header from './header/Header';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

class App extends Component {
  state = { cities: [] };
  
  addCity(city) {
    if (!this.state.cities.some(c => c.postalCode === city.postalCode)) {
      this.setState(state => ({ cities: [...state.cities, city] }));
    }
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header addCity={this.addCity.bind(this)} cities={this.state.cities} />
          <Router />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;