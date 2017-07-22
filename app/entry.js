import React from 'react';
import ReactDOM from 'react-dom';
require('jquery/dist/jquery.js');
require('bootstrap/dist/js/bootstrap.js');
require('bootstrap/dist/css/bootstrap.css');
import Navigation from './components/Navigation.jsx';
import BreadcrumbInstance   from './components/HeaderBox.jsx';
import ButtonGroupInstance   from './components/SliderLeftBox.jsx'
require("./style.css");



ReactDOM.render(
  <div>
    <Navigation />
  </div>
  , document.getElementById('navigation')
);

ReactDOM.render(BreadcrumbInstance, document.getElementById('header'));
ReactDOM.render(ButtonGroupInstance, document.getElementById('sideLeft'));
