import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/signin.css';

function SignIn() {

    const navigate = useNavigate();

    function handleClickSignIn() {
        navigate('/profile')
    }

    return(
        <div className='App'>
            <button onClick={handleClickSignIn}>Sign In</button>
        </div>
    )
}

export default SignIn; 