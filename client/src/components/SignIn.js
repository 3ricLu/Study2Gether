import React, { useState } from "react";
import "../styles/signin.css";
import firebaseApp, { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom';

function SignIn() {

  const navigate = useNavigate();
  // Log In
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [isRegistering, setIsRegistering] = useState(false)
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const Login = () => {
    signInWithEmailAndPassword(auth, email, password).then((credentials) => {
      navigate('/profile')
    }).catch((error) => {

    });
    }

  const Logout = () => {
    setUser({name: "", email: "", password: "" })
  };

  return (
    <div className="SignIn">
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };
  return (
      <>
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Sign In</h2>
        {(error != "") ? (<div className="error">{error}</div>) : ""}

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}/>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" onChange={(e) => setDetails({ ...details, password: e.target.value })}
            value={details.password}/>
        </div>

        <button className="submit" onClick={Login}>Sign In</button>
        
        <div className="sign-up">
            Don't have an account? Sign Up
        </div>
      </div>
      
    </form>
    
    </>
    
  );
}

export default SignIn;
