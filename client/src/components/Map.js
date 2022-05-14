import React, {useState} from 'react';
import '../styles/map.css';
import Navigation from './Navigation';
import {GoogleMap, withScriptjs, Marker, InfoWindow} from 'react-google-maps';

function Map() {
    return (
        <GoogleMap
        defaultZoom={18}
        defaultCenter={{ lat: 43.473559, lng: -80.527860}}/>
        )
}



export default Map;