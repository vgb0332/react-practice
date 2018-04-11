import React, { Component } from 'react';
import $ from 'jquery';
import './MapInfo.css';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class MapInfo extends Component {
  componentDidMount() {
    console.log('mounted');
  }

  componentWillReceiveProps() {
    console.log('props updatede');
  }

  render() {
    const { message, building, land } = this.props;
    console.log(land);
    let info = [];
    let listLeftItems, listRightItems;
    if(land){
      $.each(land[0], function(index, item){
        console.log(index);
        if(index === 'polygon') return true;
        info.push({
            'index' : index,
            'value' : item
        });
      });

      console.log(info);
      listLeftItems = info.map( (item, index) => (
        <li key={index}> { item.index } </li>
      ));

      listRightItems = info.map( (item, index) => (
        <li key={index}> { item.value } </li>
      ));
    }

    var ul_style = {
      'listStyleType' : 'none',
      'padding' : '0'
    };

    return (
      <div>
        <div className="MapInfo title">
          { message }
        </div>
        <Grid>
          <Row className="MapInfo">
            <Col xs={6} md={6}>
              <ul style={ul_style}>
                { listLeftItems }
              </ul>
            </Col>
            <Col xs={6} md={6}>
              <ul style={ul_style}>
                { listRightItems }
              </ul>
            </Col>
          </Row>
        </Grid>
      </div>

    );
  }
}

export default MapInfo;
