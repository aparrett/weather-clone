import React from 'react'
import './CityBar.scss';
import { cityNameShort } from '../../util/cityNames';

const CityBar = ({ cities }) => (
  <div className="cityBar">
    {cities.map(city => <div key={city.adminCode2} className="cityBar__city">{cityNameShort(city)}</div>)}
  </div>
);

export default CityBar;