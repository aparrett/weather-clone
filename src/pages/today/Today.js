import React from 'react';
import Current from './components/Current';

const Today = () => (
  <div className="main-container">
    <div className="main-container__main">
      <Current />
    </div>
    <div className="main-container__aside">
      Almanac
    </div>
  </div>
);

export default Today;