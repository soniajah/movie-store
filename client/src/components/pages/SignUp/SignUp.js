import React from 'react';
import '../Login/Login.css';

function SignUp({ handleSingUpChange, handleSingUp}) {  
  return (
    <div className="login-form">
      <h1>Sign Up</h1>
      <form onSubmit={handleSingUp}>
        <label>
          Username:
          <input type="text" name="name"  onChange={handleSingUpChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password"  onChange={handleSingUpChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>      
    </div>
  )
}

export default SignUp
