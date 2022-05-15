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
            
            {/* MARKER */}
            {selectedBuilding == "Lazaridis" && (
                <InfoWindow
                    position={{ lat: 43.475059, lng: -80.529466 }}>
                    <div className='container'>
                        <div className='logo'></div>
                        <div className='title-text'>Lazaridis</div>
                        <div className='text'>Status: Busy</div>
                        <div className='text'>Open Rooms: LH1009, LH1010</div>
                    </div>
                </InfoWindow>
            )}


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
            {selectedBuilding == "Science Building" && (
                <InfoWindow
                    position={{ lat: 43.473277, lng: -80.525316 }}>
                </InfoWindow>
            )}

            <Marker
                position={{ lat: 43.473802, lng: -80.529328 }}
                onClick={() => {
                    setSelectedBuilding("Arts");
                    console.log("Arts clicked");
                }}
                icon={{
                    url: '\kiwi.svg',
                    scaledSize: new window.google.maps.Size(75, 75),
                  }}
            />
            
            {/* MARKER */}
            {selectedBuilding == "Arts" && (
                <InfoWindow
                    position={{ lat: 43.473802, lng: -80.529328 }}>
                    <div>Arts</div>
                </InfoWindow>
            )}

            <Marker
                position={{lat: 43.475210, lng: -80.525739}}
                onClick={() => {
                    setSelectedBuilding("Athletic Complex");
                    console.log("Athletic Complex clicked");
                }}
                icon={{
                    url: '\kiwi.svg',
                    scaledSize: new window.google.maps.Size(75, 75),
                  }}
            />
            
            {/* MARKER */}
            {selectedBuilding == "Athletic Complex" && (
                <InfoWindow
                    position={{ lat: 43.475210, lng: -80.525739}}>
                    <div>Bench Press Currently in use</div>
                </InfoWindow>
            )}
            
            <Marker
                position={{ lat: 43.472857, lng: -80.529958 }}
                onClick={() => {
                    setSelectedBuilding("Library Building");
                    console.log("Library clicked");
                }}
                icon={{
                    url: '\kiwi.svg',
                    scaledSize: new window.google.maps.Size(75, 75),
                  }}
            />
            
            
            {/* MARKER */}
            {selectedBuilding == "Library Building" && (
                <InfoWindow
                    position={{ lat: 43.472857, lng: -80.529958 }}>
                    <div className='container'>
                        <div className='logo-lib'></div>
                        <div className='title-text'>Library</div>
                        <div className='text'>Status: Busy</div>
                        <div className='text'>Open Rooms: F3 Open</div>
                    </div>
                </InfoWindow>
            )}
            
        </div>

        )
}



export default Map;