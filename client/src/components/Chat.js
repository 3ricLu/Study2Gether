import React, {useState} from 'react';
import '../styles/chat.css';
import Navigation from './Navigation';

function Chat () {

    return (
        <div className='main'>
            <Navigation/>
            <div>This is the chat page</div>
        </div>
    )
}

export default Chat; 