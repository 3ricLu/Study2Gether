import React, {useState} from 'react';
import '../styles/profile.css';
import Navigation from './Navigation';
import Map from './Map';
import {GoogleMap, withScriptjs, Marker, InfoWindow, withGoogleMap} from 'react-google-maps';

// Constants
const MapWrapped = withScriptjs(withGoogleMap(Map));

function Profile () {
    return (
        <div className='App'>
            <div className='Main'>
                <Navigation/>
                <div className='content-container'>
                    <div className='sidebar-container'>
                        {/* PROGRAM */}
                        <div className='sidebar-title'>Program</div>
                        <div className='dropdown-container'>
                            <select className='select'>
                                <option value="bba">Business</option>
                                <option value="cs">Computer Science</option>
                                <option value="ma">Math</option>
                            </select>
                        </div>

                        {/* YEAR */}
                        <div className='sidebar-title'>Year</div>
                        <div className='dropdown-container'>
                            <select className='select'>
                                <option value="one">1st Year</option>
                                <option value="two">2nd Year</option>
                                <option value="three">3rd Year</option>
                                <option value="four">4th Year</option>
                                <option value="five">5th Year</option>
                            </select>
                        </div>

                        {/* COURSE */}
                        <div className='sidebar-title'>Skill</div>
                        <div className='dropdown-container'>
                            <select className='select'>
                                <option value="103">Experienced</option>
                                <option value="104">Intermediate</option>
                                <option value="212">Beginner</option>
                            </select>
                        </div>

                        {/* BUTTON */}
                        <div className='btn-container'>
                            <button className='save-btn'>Save Profile</button>
                        </div>

                    </div>
                    
                    {/* MAP */}
                    <div className='map-container'>
                        <MapWrapped
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                            process.env.REACT_APP_GOOGLE_KEY
                            }`}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `100%` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile; 