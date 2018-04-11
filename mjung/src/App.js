import React, { Component } from 'react';
import './common.css';
import Map from  './components/Map';
import './App.css';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row className="App">
          <Col xs={12} md={12}>
            <div className="App-header logo-bg-color">
              Mark's first React App!
            </div>
          </Col>
          <Col xs={12} md={12}>
            <Map />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
