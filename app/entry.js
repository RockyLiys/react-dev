import React from 'react';
import ReactDOM from 'react-dom';
require('jquery/dist/jquery.js');
require('bootstrap/dist/js/bootstrap.js');
require('bootstrap/dist/css/bootstrap.css');
import HeaderNavigation from './components/HeaderNavigation.jsx';
import buttonsInstance  from './components/ProductBox.jsx';

require("./style.css");

ReactDOM.render(buttonsInstance, document.getElementById('header'));

ReactDOM.render(
  <div>
    <HeaderNavigation />
  </div>
  , document.getElementById('navigation')
);
