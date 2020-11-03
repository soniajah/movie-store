import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { SiThemoviedatabase } from "react-icons/si";

function Navbar() {
  return (
    <div className="nav-bar">
      <ul className="nav-bar-container">        
        <li className="nav-link">
          <Link to='/home' className="nav-link"><SiThemoviedatabase size={50} /> </Link>
        </li>     
      </ul>      
    </div>
  )
}

export default Navbar
