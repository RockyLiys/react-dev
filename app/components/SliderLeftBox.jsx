import React from 'react';
import ReactDOM from 'react-dom';
import * as bootstrap from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];


const GridInstance = (
  <Grid fluid>
    <Row className="show-grid">
      <Col xs={3} md={2}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code><br/>{dummySentences.slice(0, 6).join(' ')}</Col>
      <Col xs={12} md={10}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code><br/>{dummySentences.slice(0, 6).join(' ')}</Col>
    </Row>
  </Grid>
);


ReactDOM.render(GridInstance, document.getElementById('sideLeft'));
