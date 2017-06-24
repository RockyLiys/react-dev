var React = require('react');
var ReactDOM = require('react-dom');
require('jquery/dist/jquery.js');
require('bootstrap/dist/js/bootstrap.js');
require('bootstrap/dist/css/bootstrap.css');

require("./style.css");
// document.write(require("./content.js"));
$("#bootstrap").append("<div>import bootstrap</div>")


var AppComponent = require('./components/productBox.jsx');
ReactDOM.render(
	<AppComponent />,
	document.getElementById("content")
);
