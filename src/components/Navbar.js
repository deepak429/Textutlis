import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  navber-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid ">
    <Link className="navbar-brand text-primary" to="" > {props.nav_brand}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"  style={{background:props.mode==='light'?'':'#958c8c'}}>
        <span className="navbar-toggler-icon" ></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
           <Link className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item">
           <Link className={`nav-link text-${props.mode==='light'?'dark':'light'} `} to="/about">{props.co}</Link>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable {props.mode}mod</label>
</div>
      </div>
    </div>
  </nav>
  )
}
// it use for validate string 
Navbar.propTypes = {
  nav_brand:PropTypes.string.isRequired,
  co:PropTypes.string
}
Navbar.defaultProps={
  nav_brand : "Textutlis",
  co:"about"

}