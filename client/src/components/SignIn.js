import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/signin.css';
import firebaseApp, { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import axios from 'axios';


function SignIn() {
    // Log In
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)

    const attemptLogin = () => {
      signInWithEmailAndPassword(auth, email, password).then((credentials) => {
        navigate('/profile')
      }).catch((error) => {

      });
    }

    const attemptRegister = async () => {
      createUserWithEmailAndPassword(auth, email, password).then(async (credentials) => {
        navigate('/profile')
      }).catch((error) => {

      })
    }

    const switchLogin = () => {
      setIsRegistering(!!!isRegistering)
    }

    return(
        <div className='App'>
          <div className='main'>
            <div className='side-container'></div>
            <div className='login-container'>
              <div className='login-box'>
                <div className='sub'>
                  Study2Gether
                </div>
                <div className='text-left'>
                  Experience studying together. 
                </div>
                <br></br>
                <div className='login-username'>
                  <input className='input' placeholder='Email' onChange={(e) => {setEmail(e.target.value)}}>
                  </input>
                </div>
                <div className='password'>
                  <input className='input' type='password' placeholder='Password' onChange={(e) => {setPassword(e.target.value)}}>
                  </input>
                </div>
                {isRegistering && 
                  <div>
                    <div className='login-username'>
                    </div>
                    <input className='input' placeholder='Username' onChange={(e) => {setUsername(e.target.value)}}></input>
                    <button className='login-btn' onClick={attemptRegister}>Register</button>
                    <button className='register-btn' onClick={switchLogin}>Return to sign in</button>
                  </div>
                }
                {!isRegistering &&
                  <div>
                    <button className='login-btn' onClick={attemptLogin}>Sign In</button>
                    <button className='register-btn' onClick={switchLogin}>Don't have an account? Register</button>
                  </div>
                }
                </div>
            </div>
          </div>
        </div>
    )
}

export default SignIn; 