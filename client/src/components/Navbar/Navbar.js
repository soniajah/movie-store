import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav-bar">
      <ul className="nav-bar-container">        
        <li className="nav-link">
          <Link to='/' className="nav-link">Home</Link>
        </li>     
      </ul>      
    </div>
  )
}

export default Navbar
