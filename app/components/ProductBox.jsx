import React from 'react';
// var ProductBox = React.createClass({
//     render: function () {
//         return (
//             <div className="productBox">
//                 Hello World!!!!
//             </div>
//         );
//     }
// });
import * as bootstrap from 'react-bootstrap';
// import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Button from 'react-bootstrap/lib/Button';
const buttonsInstance = (
  <bootstrap.ButtonToolbar>
    {/* Standard button */}
    <Button>Default</Button>

    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
    <Button bsStyle="primary">Primary</Button>

    {/* Indicates a successful or positive action */}
    <Button bsStyle="success">Success</Button>

    {/* Contextual button for informational alert messages */}
    <Button bsStyle="info">Info</Button>

    {/* Indicates caution should be taken with this action */}
    <Button bsStyle="warning">Warning</Button>

    {/* Indicates a dangerous or potentially negative action */}
    <Button bsStyle="danger">Danger</Button>

    {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
    <Button bsStyle="link">Link</Button>
</bootstrap.ButtonToolbar>
);
export default buttonsInstance;
