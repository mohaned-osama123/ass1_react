import React from 'react'
import style from"./Navbar.module.css"
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
     <nav className={`${style.nav} navbar navbar-expand-lg `}>
  <div className="container text-white">
    <a className= {`${style.change} navbar-brand`} href="#Home">START FRAMEWORK</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
        <li className="nav-item me-3">
          <NavLink className="nav-link active " aria-current="page" to="About">About</NavLink>
        </li>
        <li className="nav-item me-3">
          <NavLink className="nav-link active " aria-current="page" to="Portofoli">Portfolio</NavLink>
        </li>
        <li className="nav-item me-3">
          <NavLink className="nav-link active " aria-current="page" to="Contact">Contact</NavLink>
        </li>
       
       
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}
