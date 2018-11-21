import React from 'react';
import Current from './components/Current';

const Today = () => (
  <div className="main-container">
    <div className="main-container__left">
      <Current />
    </div>
    <div className="main-container__right">
      Right    
    </div>
  </div>
);

export default Today;