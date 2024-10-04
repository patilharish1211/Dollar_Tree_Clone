import React, { useState } from 'react';
import axios from 'axios';
import './Login.jsx';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userdata = {
      email,
      password
    };
    axios.post("https://reqres.in/api/login", userdata, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        const tokenFromRequest = JSON.stringify(res.data.token);
        localStorage.setItem("token", tokenFromRequest);
        console.log(tokenFromRequest);
        alert("Login successful!");
        navigate('/ProductPage')
      })
      .catch((err) => {
        console.error(err);
        alert("Login failed!🚨");
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("You Logged Successfully!👍");
  };

  return (
    <>
    <div className="login-container mt-5 container"style={{textAlign: 'center'}}>
    {/* <h1 className="login-title">Login Page</h1> */}
    <form onSubmit={handleSubmit} className="login-form" style={{}}>
      <label className="login-label fs-5" style={{color: '#007935', fontWeight: 'bold'}}>Email:</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter Your Email"
        name="email"
        required
        className="login-input"
        style={{marginLeft: '15px', height: '35px', width: '25%', border: '1px solid #007935', outline: 'none', borderRadius: '10px', textAlign: 'center'}}
      /> <br />

      <label className="login-label fs-5 mt-4" style={{color: '#007935', fontWeight: 'bold'}}>Password:</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter Your Password"
        name="password"
        required
        className="login-input mt-3"
        style={{marginLeft: '15px', height: '35px', width: '25%', border: '1px solid #007935', outline: 'none', borderRadius: '10px',  textAlign: 'center'}}
      /> <br />

      <div className="container mt-4">
        <button type="submit" className="login-button" style={{padding: '7px 25px', border: ' 2px solid #007935', backgroundColor: 'white', fontSize: '18px', fontWeight: 'bold', color: '#007935', borderRadius: '10px'}}>Login</button>
        {/* <button onClick={handleLogout} type="button" className="logout-button">Logout</button> */}
      </div>
    </form>
  </div>
    </>
);
};

export default Login;