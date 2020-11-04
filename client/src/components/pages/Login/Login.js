import React from 'react';
import './Login.css';
// import { Link } from 'react-router-dom';

function Login({isLoggedIn, user, handleChange, handleSubmit}) {
  return (
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="name" value={user.name} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={user.password} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>           
      {/* <Link to={'/sign-up'} className='sign-up-link'>
          Sign Up
      </Link>   */}
    </div>
  )
}

export default Login
