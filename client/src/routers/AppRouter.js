import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// Importing Pages
import SignIn from '../components/SignIn';
import Profile from '../components/Profile';
import Navigation from '../components/Navigation';
import Group from '../components/Group';
import Chat from '../components/Chat';
import Room from '../components/Room';

function AppRouter() {
    // Setting the default title 
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<SignIn/>}/>
                <Route exact path='/profile' element={<Profile/>}/>
                <Route exact path='/team' element={<Group/>}/>
                <Route exact path='/chat' element={<Chat/>}/>
                <Route exact path='/map' element={<Room/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter; 