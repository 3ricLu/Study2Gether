import '../styles/room.css';
import Navigation from './Navigation';

function Room () {
    // Chat room component
    return (
        <div className='App'>
            <div className='Main'>
                <Navigation/>
                <div className='content-container'>
                    <div className='sidebar-container'>
                        {/* PROGRAM */}
                        <div className='sidebar-title'>Available Room</div>
                        <div className='dropdown-container'>
                            <select className='select'>
                                <option value="all">Any</option>
                                <option value="bba">LH1009</option>
                                <option value="cs">LH1010</option>
                                <option value="cs">LH1012</option>
                            </select>
                        </div>

                        {/* YEAR */}
                        <div className='sidebar-title'>Duration</div>
                        <div className='dropdown-container'>
                            <select className='select'>
                                <option value="all">Any</option>
                                <option value="one">1 Hour</option>
                                <option value="two">2 Hours</option>
                                <option value="three">3 Hours</option>
                                <option value="four">4 Hours</option>
                                <option value="five">5 Hours</option>
                            </select>
                        </div>

                        <div className='sidebar-title'>Date</div>
                        <div className='dropdown-container'>
                            <select className='select'>
                                <option value="all">May 15</option>
                                <option value="one">May 16</option>
                                <option value="two">May 17</option>
                                <option value="three">May 18</option>
                                <option value="four">May 19</option>
                                <option value="five">May 20</option>
                            </select>
                        </div>

                        <div className='sidebar-title'>Time</div>
                        <div className='dropdown-container'>
                            <select className='select'>
                                <option value="all">9AM</option>
                                <option value="one">10AM</option>
                                <option value="two">11AM</option>
                                <option value="three">12PM</option>
                                <option value="four">1PM</option>
                                <option value="five">2PM</option>
                                <option value="five">3PM</option>
                                <option value="five">4PM</option>
                                <option value="five">5PM</option>
                                <option value="five">6PM</option>
                                <option value="five">7PM</option>
                                <option value="five">8PM</option>
                                <option value="five">9PM</option>
                            </select>
                        </div>

                        {/* BUTTON */}
                        <div className='btn-container'>
                            <button className='save-btn'>Book Room</button>
                        </div>

                    </div>
                    
                    {/* MAP */}
                    <div className='map-container'>

                        {/* INDIVIDUAL CARDS */}
                        <div className='friend-card-container'>
                            <div className='friend-left'>
                                {/* ICON CAN GO HERE */}
                                <div className='text'>Booked 2 Hours</div>
                            </div>
                            <div className='friend-right'>
                                <div className='friend-title'>LH3094</div>
                                <div className='friend-desc'><i className='fa fa-heart'></i>Group Members</div>
                                <div className='friend-desc'><i className='fa fa-star'></i> Eric, Nick, Varan</div>
                                <div className='friend-info-container'>
                                </div>
                                {/* <div className='group-info'>Details</div>
                                <div className='group-admin'>Eric</div> */}
                            </div>
                            <div className='friend-right-right'>
                                <div className='text'>Request to Join</div>
                            </div>
                        </div> 

                        {/* INDIVIDUAL CARDS */}
                        <div className='friend-card-container'>
                            <div className='friend-left'>
                                {/* ICON CAN GO HERE */}
                                <div className='text'>Booked 1 Hours</div>
                            </div>
                            <div className='friend-right'>
                                <div className='friend-title'>DD Study Room</div>
                                <div className='friend-desc'><i className='fa fa-heart'></i>Group Members</div>
                                <div className='friend-desc'><i className='fa fa-star'></i>John</div>
                                <div className='friend-info-container'>
                                </div>
                                {/* <div className='group-info'>Details</div>
                                <div className='group-admin'>Eric</div> */}
                            </div>
                            <div className='friend-right-right'>
                                <div className='text'>Request to Join</div>
                            </div>
                        </div> 

                        {/* INDIVIDUAL CARDS */}
                        <div className='friend-card-container'>
                            <div className='friend-left'>
                                {/* ICON CAN GO HERE */}
                                <div className='text'>Booked 3 Hours</div>
                            </div>
                            <div className='friend-right'>
                                <div className='friend-title'>LH1001</div>
                                <div className='friend-desc'><i className='fa fa-heart'></i>Group Members</div>
                                <div className='friend-desc'><i className='fa fa-star'></i>Bob</div>
                                <div className='friend-info-container'>
                                </div>
                                {/* <div className='group-info'>Details</div>
                                <div className='group-admin'>Eric</div> */}
                            </div>
                            <div className='friend-right-right'>
                                <div className='text'>Request to Join</div>
                            </div>
                        </div> 

                        {/* INDIVIDUAL CARDS */}
                        <div className='friend-card-container'>
                            <div className='friend-left'>
                                {/* ICON CAN GO HERE */}
                                <div className='text'>Open Room</div>
                            </div>
                            <div className='friend-right'>
                                <div className='friend-title'>LH1012</div>
                                <div className='friend-info-container'>
                                </div>
                                {/* <div className='group-info'>Details</div>
                                <div className='group-admin'>Eric</div> */}
                            </div>
                            <div className='friend-right-right'>
                                <div className='text'>Book</div>
                            </div>
                        </div> 

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Room; 