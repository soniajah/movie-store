import React from 'react';
import './Login.css';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';
import './Login.css'



function Login() {
  return (
    <div className="login-form">
      <LoginForm />    
      {/* <Link to={'/sign-up'} className='sign-up-link'>
          Sign Up
      </Link>   */}
    </div>
  )
}

export default Login
