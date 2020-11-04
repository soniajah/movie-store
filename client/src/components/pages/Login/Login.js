import React from 'react';
import './Login.css';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';
import './Login.css'



function Login({updateUser}) {
  return (
    <div className="login-form">
      <LoginForm updateUser={updateUser} />    
      {/* <Link to={'/sign-up'} className='sign-up-link'>
          Sign Up
      </Link>   */}
    </div>
  )
}

export default Login
