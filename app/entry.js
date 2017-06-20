var React = require('react');
var ReactDOM = require('react-dom');


require("./style.css");
// document.write(require("./content.js"));

var AppComponent = require('./components/productBox.jsx');
ReactDOM.render(
	<AppComponent />, 
	document.getElementById("content")
);