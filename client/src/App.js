import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import Movie from './components/pages/Movie/Movie'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>      
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie" component={Movie} />
        </Switch>                
      </Router> 
    </div>
  );
}

export default App;
