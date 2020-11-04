import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Home from '../Home/Home';
import { Redirect } from 'react-router';
import { useHistory } from "react-router-dom";


function LoginForm() {
  const [user, setUser] = useState([]) 

  const handleChange = e => {
    const value = e.target.value 
    var name = e.target.name
    setUser({...user, [name]: value});
  }  

  const handleSubmit = e => {
    e.preventDefault(); 
    console.log(user)   
    fetch("http://localhost:5000/auth",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      if(res.loggedin == true) {
        setUser({name: res.name, userId: res.id})     
        // updateUser({name: res.name, userId: res.id})   
        console.log(user)      
        window.location += "home"
        // return <Redirect to="/home" />
      }
      else {
        alert(res)
      }
    })       
  }

  return (
    <div className="login-form">
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
    </div>
  )
}

export default LoginForm
