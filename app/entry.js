import React from 'react';
import ReactDOM from 'react-dom';
require('jquery/dist/jquery.js');
require('bootstrap/dist/js/bootstrap.js');
require('bootstrap/dist/css/bootstrap.css');
import HeaderNavigation from './components/HeaderNavigation.jsx';
import ProductBox  from './components/ProductBox.jsx';

require("./style.css");
// document.write(require("./content.js"));
$("#bootstrap").append("<div>import bootstrap</div>")

// ReactDOM.render(
// 	<productBox />,
// 	document.getElementById("content")
// );
ReactDOM.render(
  <div>
    <HeaderNavigation />
  </div>
  , document.getElementById('app')
);
