import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Movie from './components/pages/Movie/Movie';
import SignUp from './components/pages/SignUp/SignUp';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>      
      <Router>
        <Navbar />
        <Switch>
          {/* <Route path="/sign-up" component={SignUp} /> */}
          {/* <Route exact path="/" component={Login} /> */}
          <Route path="/home" component={Home} />
          <Route path="/movie" component={Movie} />
        </Switch>                
      </Router> 
    </div>
  );
}

export default App;
