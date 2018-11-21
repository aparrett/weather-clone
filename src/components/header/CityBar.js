import React from 'react'
import './CityBar.scss';

const CityBar = ({ cities }) => (
  <div className="cityBar">
    <div className="header-wrapper">
      <div className="cityBar__cities">
        {cities.slice(0, 4).map(city => 
          <div 
            key={`${Math.abs(city.lat)}${Math.abs(city.lng)}`} 
            className="cityBar__city"
          >
            {city.shortName}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default CityBar;