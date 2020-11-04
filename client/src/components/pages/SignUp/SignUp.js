import React, {useState} from 'react';
import '../Login/Login.css';
import { Link } from 'react-router-dom';


function SignUp({isLoggedIn, user, handleChange, handleSubmit}) {  
  return (
    <div className="login-form">
      <h1>Sign Up</h1>
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
      {/* <Link to={'/'} className='login-link'>
          Log in
      </Link>   */}
    </div>
  )
}

export default SignUp
