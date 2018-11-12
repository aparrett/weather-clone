import React from 'react'
import './CityBar.scss';

const CityBar = ({ cities }) => (
  <div className="cityBar">
    {cities.slice(0, 4).map(city => 
      <div key={`${Math.abs(city.lat)}${Math.abs(city.lng)}`} className="cityBar__city">
        {city.shortName}
      </div>
    )}
  </div>
);

export default CityBar;