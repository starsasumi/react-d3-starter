import './index.html';
import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './chart.jsx';

var sampleData = [
  {id: '100', x: 7, y: 25, z: 18},
  {id: '200', x: 11, y: 45, z: 30},
];
var sampleDomain = {x: [0, 30], y: [0, 100]};

ReactDOM.render(
  <Chart
    data={sampleData}
    domain={sampleDomain} />
  , document.getElementById('app'));
