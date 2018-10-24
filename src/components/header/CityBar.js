import React from 'react'
import './CityBar.scss';

const CityBar = ({ cities }) => (
  <div className="cityBar">
    {cities.map(city => <div key={city.adminCode2} className="cityBar__city">{city.shortName}</div>)}
  </div>
);

export default CityBar;