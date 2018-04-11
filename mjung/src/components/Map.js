/*global daum*/

import React, { Component } from 'react';
import $ from 'jquery';
import MapInfo from './MapInfo';
import './Map.css';

class Map extends Component {
  state = {
    'message' : '',
    'building' : '',
    'land' : ''
  };

  componentDidMount() {
    let el = document.getElementById('map');
    let map = new daum.maps.Map(el, {
      center: new daum.maps.LatLng(37.498206, 127.027610),
      disableDoubleClickZoom : true
    });

    let mapTypeControl = new daum.maps.MapTypeControl();
    map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);
    daum.maps.event.addListener(map, 'rightclick', this.clickEvent);

    map.relayout();
  }

  clickEvent = (mouseEvent) => {
   let latlng = mouseEvent.latLng;

   let map_component = this; //this is for setState

   let message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
   message += '경도는 ' + latlng.getLng() + ' 입니다';
   console.log(message);
   map_component.setState({
     'message' : message,
   });

   const geocoder = new daum.maps.services.Geocoder();

   geocoder.coord2RegionCode(latlng.getLng(), latlng.getLat(), function(address, status) {
      if (status === daum.maps.services.Status.OK) {
            console.log(address);
            const data = {
                            bjdongCd : address[0]['code'],
                            lat : mouseEvent.latLng.jb,
                            lng : mouseEvent.latLng.ib
                          };

            $.ajax({
              type: "post",
              url: "http://www.re-go.kr/raiz1.3/get/singlePolygon",
              data:data,
              success: function(data) {
                 if(data.length > 1){
                   let info = JSON.parse(data);
                   console.log(info);
                   map_component.setState({
                     'message' : message,
                     'building' : info.building,
                     'land' : info.land
                   });
                 }
              }
           });
      }
  });
 }

  render() {
    const style = {
      width: '100%',
      height: '70vw',
    };

    return (
      <div>
        <div id="map" style={style}>
        </div>
        <MapInfo
          message={this.state.message}
          building = {this.state.building}
          land = {this.state.land}
        />
      </div>
    );
  }

}

export default Map;
