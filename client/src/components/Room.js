import React, {useState} from 'react';
import '../styles/room.css';
import Navigation from './Navigation';

function Room () {

    return (
        <div className='main'>
            <Navigation/>
            <div>This is the Room page</div>
        </div>
    )
}

export default Room; 