import React, {useState} from 'react';
import '../styles/map.css';
import Navigation from './Navigation';
import {GoogleMap, withScriptjs, Marker, InfoWindow} from 'react-google-maps';

function Map() {

    // Hook for building selection 
    const [selectedBuilding, setSelectedBuilding] = useState("");

    return (
        <div> 
            <GoogleMap
            defaultZoom={18}
            defaultCenter={{ lat: 43.473559, lng: -80.527860}}/>

            <Marker
                position={{ lat: 43.475059, lng: -80.529466 }}
                onClick={() => {
                    setSelectedBuilding("Lazaridis");
                    console.log("Laz clicked");
                }}
                icon={{
                    url: '\kiwi.svg',
                    scaledSize: new window.google.maps.Size(75, 75),
                  }}
            />

            <Marker
                position={{ lat: 43.473277, lng: -80.525316 }}
                onClick={() => {
                    setSelectedBuilding("Science Building");
                    console.log("Science clicked");
                }}
                icon={{
                    url: '\kiwi.svg',
                    scaledSize: new window.google.maps.Size(75, 75),
                  }}
            />
            
            {/* MARKER */}
            {selectedBuilding == "Lazaridis" && (
                <InfoWindow
                    position={{ lat: 43.475059, lng: -80.529466 }}>
                    <div>Lazaridis</div>
                </InfoWindow>
            )}

            {/* MARKER */}
            {selectedBuilding == "Science Building" && (
                <InfoWindow
                    position={{ lat: 43.473277, lng: -80.525316 }}>
                    <div>Science Building</div>
                </InfoWindow>
            )}

        </div>

        )
}



export default Map;