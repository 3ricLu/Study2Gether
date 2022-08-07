import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/navigation.css';
//React component for the navigation bar.
function Navigation() {
    // Constants
    const navigate = useNavigate();

    // Navigation Pages
    //Functions below navigate the user to the other pages
    function handleClickProfile() {
        navigate('/profile')
    }

    function handleClickMap() {
        navigate('/map')
    }

    function handleClickTeam() {
        navigate('/team')
    }

    function handleClickChat() {
        navigate('/chat')
    }

    function handleClickLogo() {
        navigate('/profile')
    }


    // Navigation bar looks
    return (
        <div className='App'>
            <div className='nav'>
                <div className='nav-title-container'>
                    <div className='nav-logo' onClick={handleClickLogo}></div>
                    <div className='nav-title'>Study2Gether</div>
                </div>
                <div className='nav-options'>
                    <button className='nav-button' onClick={handleClickProfile}>Profile</button>
                    <button className='nav-button' onClick={handleClickMap}>Map</button>
                    <button className='nav-button' onClick={handleClickTeam}>Team Search</button>
                    <button className='nav-button' onClick={handleClickChat}>Chat</button>
                </div>
            </div>
        </div>
    )
}

export default Navigation;