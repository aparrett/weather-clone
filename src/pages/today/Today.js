import React from 'react';
import Current from './components/Current';

const Today = () => (
  <div className="main-container">
    <div className="main-container__main">
      <Current />
    </div>
    <aside className="main-container__aside">
      Almanac
    </aside>
  </div>
);

export default Today;