var React = require('react');
var ReactDOM = require('react-dom');
import 'bootstrap/dist/js/bootstrap.js'
// import 'bootstrap/dist/css/bootstrap.css'

require("./style.css");
// document.write(require("./content.js"));
$("#bootstrap").append("<div>import bootstrap</div>")


var AppComponent = require('./components/productBox.jsx');
ReactDOM.render(
	<AppComponent />,
	document.getElementById("content")
);
