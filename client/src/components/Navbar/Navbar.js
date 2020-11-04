import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { SiThemoviedatabase } from "react-icons/si";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";

function Navbar({isLoggedIn, name, setIsLoggedIn, setUser}) {

  const logout = () => {
    setIsLoggedIn(false)
    setUser({name:"", userId: ""})
  }

  return (
    <nav className="nav-bar">      
      <ul className="nav-bar-container">        
        <li className="nav-link">
          <Link to='/home' className="nav-link">
            <SiThemoviedatabase size={50} /> 
          </Link>
        </li>                     
      </ul>  
      { isLoggedIn ? <div className="nav-bar-user">
        <FaRegUserCircle size={20} />{name}
        <Link to="/" className="nav-link" onClick={logout}>
          <RiLogoutCircleRLine size={20} /> 
        </Link></div> : 
        <button>Log In</button>
      }   
    </nav>
  )
}

export default Navbar
