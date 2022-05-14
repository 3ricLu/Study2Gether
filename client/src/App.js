import React, { useState } from 'react';
import SignIn from './components/SignIn';
import logo from './logo.svg';
import './App.css';

function App() {

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
  }

  const Logout = () => {
    console.log("Logout");
  }

  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button>Logout</button>
        </div>
      ) : (<SignIn/>)}
    </div>
  );
}

export default App;
