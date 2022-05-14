import React, {useState} from 'react';
import '../styles/map.css';
import Navigation from './Navigation';
import {GoogleMap, withScriptjs, Marker, InfoWindow} from 'react-google-maps';

function Map() {
    return (
        <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 43.473217, lng: -80.527977}}/>
        )
}



export default Map;