import React, {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Movie from './components/pages/Movie/Movie';
import SignUp from './components/pages/SignUp/SignUp';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Redirect } from 'react-router';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
 
  const handleChange = e => {
    const value = e.target.value 
    var name = e.target.name
    setUser({...user, [name]: value});
  }  

  const handleSubmit = e => {
    e.preventDefault(); 
    fetch("http://localhost:5000/auth",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(res => {
      if(res.loggedin == true) {
        setIsLoggedIn(true)
        setUser({name: res.name, userId: res.id})
        return <Redirect to="/home" />
      }      
    })       
  }

  return (
    <div> 
      {isLoggedIn ? (
        <>
          <Router>
            <Navbar isLoggedIn={isLoggedIn} name={user.name}  setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
            <Switch>
            <Route path="/home">
              <Home user={user} />
            </Route>
            <Route path="/movie">
              <Movie user={user} />
            </Route>
            <Redirect from="/" to="/home" />
            </Switch>                
          </Router>          
        </>
      ) : (
        <>
          <Router>
            <Switch> 
              <Route path="/">
                <Login isLoggedIn={isLoggedIn} user={user} handleChange={handleChange} handleSubmit={handleSubmit} />
              </Route>
              <Route path="/sign-up">
                <SignUp isLoggedIn={isLoggedIn} user={user} handleChange={handleChange} handleSubmit={handleSubmit} />
              </Route>
              <Redirect from="/sign-up" to="/" />             
            </Switch>                
          </Router>           
        </>
      )}
    </div>
  );
}

export default App;
