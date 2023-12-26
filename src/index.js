import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

//css
import './sidebar/sidebar.css';

import reportWebVitals from './reportWebVitals';

//第３章
import MyHello from './chap03/MyHello';
import EventBasic from './chap03/EventBasic';
import StateBasic from './chap03/StateBasic';

//useStateとuseRefの例
import Stopwatch from './stopwatch/StopWatch';

import SideBar from './sidebar/SideBar';

//weather app
import LocationComponent from './weather/LocationComponent';
// import WeatherComponent from './weather/WeatherComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <LocationComponent></LocationComponent>
  </StrictMode>
);

reportWebVitals();
