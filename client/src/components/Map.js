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
            />
            
            {/* MARKER */}
            {selectedBuilding == "Lazaridis" && (
                <InfoWindow
                    position={{ lat: 43.475059, lng: -80.529466 }}>
                    <div>Lazaridis</div>
                </InfoWindow>
            )}

            {/* MARKER */}
            {selectedBuilding == "Lazaridis" && (
                <InfoWindow
                    position={{ lat: 43.475059, lng: -80.529466 }}>
                    <div>Lazaridis</div>
                </InfoWindow>
            )}
            
        </div>

        )
}



export default Map;