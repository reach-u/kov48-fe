import React, {Component, Fragment} from 'react';
import ReactMapGL from 'react-map-gl';
import {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const bounds = {
  lat: {
    max: 59.7,
    min: 57.4,
  },
  lon: {
    max: 28.3,
    min: 21.5,
  },
  zoom: {
    min: 6,
  },
};

class Map extends Component {
  state = {
    viewport: {
      width: 100,
      height: 100,
      latitude: 58.383,
      longitude: 26.714,
      pitch: 0,
      bearing: 0,
      zoom: 14,
    },
    tooltipInfo: null,
  };


  onViewportChange = viewport => {
    const {lat, lon} = bounds;

    if (viewport.longitude > lon.max) {
      viewport.longitude = lon.max;
    } else if (viewport.longitude < lon.min) {
      viewport.longitude = lon.min;
    }
    if (viewport.latitude > lat.max) {
      viewport.latitude = lat.max;
    } else if (viewport.latitude < lat.min) {
      viewport.latitude = lat.min;
    }

    this.setState({viewport: {...viewport, bearing: 0}});
  };


  componentDidMount = () => {
    const {offsetHeight, offsetWidth} = document.getElementById('map-wrapper');
    this.setState({viewport: {...this.state.viewport, width: offsetWidth, height: offsetHeight}});
  };


  render() {
    const {data} = this.props;
    const {viewport} = this.state;

    return (
      <div id="map"
           style={{
             position: 'relative',
             top: 0,
             bottom: 0,
             width: '100%',
             height: '100%',
           }}>
        <ReactMapGL
          {...viewport}
          onViewportChange={this.onViewportChange}
          mapboxApiAccessToken="pk.eyJ1IjoidGVldGphZ29tYWdpIiwiYSI6ImNqYXRibHVwbjVvNW0yd3E4Y3B4a3VpeGcifQ.5oMSO4PmSFVDqiu6elj0QQ"
          mapStyle="mapbox://styles/mapbox/light-v9"
          width={900}
          height={400}
          maxPitch={0}>
          {data.map((item, idx) => (
            <Marker latitude={item.lat} longitude={item.lon}>
              <FontAwesomeIcon icon="check"/>
            </Marker>
          ))}
        </ReactMapGL>
      </div>


    );
  }
}


export default Map;