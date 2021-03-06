import React from 'react';
import './style.css';
import {
    Link
} from "react-router-dom";



function Navbar() {
    return (

  <nav className="navbar navbar-expand-lg navbar-light bg" style={{backgroundColor: "#34568B"}}>
      <a className="navbar-brand" href="#"></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">About Me <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>

</nav>

    )
}

export default Navbar;