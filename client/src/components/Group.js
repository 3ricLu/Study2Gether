import React, {useState} from 'react';
import '../styles/group.css';
import Navigation from './Navigation';

function Group() {

    function handleGroup() {

    }

    function handleJoinGroup() {

    }

    function handleCreateGroup() {

    }

    return (
        <div className='App'>
            <div className='Main'>
                <Navigation/>
                <div className='content-container'>

                    
                    {/* MAP */}
                    <div className='map-container'>

                                        {/* WELCOME CONTAINER */}
                                        <div className='welcome-container'>
                        <div className='subtitle' id='join'>Join a Team</div>
                        <div className='text'>Enter a team code to join.
                        </div>
                        <div className='text'>
                            <input className='input' placeholder='Group Code'>
                            </input>
                            <button className='group-btn'>
                                Submit
                            </button>
                         </div>
                    </div>
                    
                    {/* WELCOME CONTAINER */}
                    <div className='welcome-container'>
                        <div className='subtitle' id='create'>Create a Team</div>
                        <div className='text'>Be the admin of your own team.</div>
                        <br></br>
                        <div className='text'>
                        <button className='group-btn'>
                                Create
                            </button></div>
                    </div>

                        {/* CARDS */}
                    <div className='group-collective-card-container'>
                        {/* INDIVIDUAL CARDS */}
                        <div className='group-card-container' onClick={handleGroup}>
                            <div className='group-left'>
                                {/* ICON CAN GO HERE */}
                            </div>
                            <div className='group-right'>
                                <div className='group-title'>Team Stars</div>
                                <div className='group-desc'>Tournament on June 12th</div>
                                <div className='group-info-container'>
                            </div>
                                {/* <div className='group-info'>Details</div>
                                <div className='group-admin'>Eric</div> */}
                            </div>
                        </div>

                        {/* INDIVIDUAL CARDS */}
                        <div className='group-card-container' onClick={handleGroup}>
                            <div className='group-left'>
                                {/* ICON CAN GO HERE */}
                            </div>
                            <div className='group-right'>
                                <div className='group-title'>Team moon</div>
                                <div className='group-desc'>Playing on August 16th</div>
                                <div className='group-info-container'>
                            </div>
                                {/* <div className='group-info'>Details</div>
                                <div className='group-admin'>Eric</div> */}
                            </div>
                        </div>  
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Group;