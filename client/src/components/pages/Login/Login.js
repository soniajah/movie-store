import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login({user, handleLoginChange, handleLogin}) {
  return (
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          <input type="text" name="name" value={user.name} onChange={handleLoginChange} placeholder="username" />
        </label>
        <label>
          <input type="password" name="password" value={user.password} onChange={handleLoginChange} placeholder="password" />
        </label>
        <input type="submit" value="LogIn" />
      </form>  
      <div className="m-3">
        <Link to={'/sign-up'}>
            Sign Up
        </Link> 
      </div>        
    </div>
  )
}

export default Login
