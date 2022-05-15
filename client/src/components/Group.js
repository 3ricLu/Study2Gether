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

                        {/* CARDS */}
                    <div className='group-collective-card-container'>
                        {/* INDIVIDUAL CARDS */}
                        <div className='group-card-container' onClick={handleGroup}>
                            <div className='group-left'>
                                {/* ICON CAN GO HERE */}
                            </div>
                            <div className='group-right'>
                                <div className='group-title'>CP103</div>
                                <div className='group-desc'>Studying for the midterm on June 12th</div>
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
                                <div className='group-title'>CP212</div>
                                <div className='group-desc'>Reviewing ranges in excel VBA</div>
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