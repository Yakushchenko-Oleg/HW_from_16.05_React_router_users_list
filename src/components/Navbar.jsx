// import React from 'react'

import { NavLink } from "react-router-dom"

const Navbar = () => {
  const setActiveLink = ({isActive})=> isActive ? "navbar__item navbar__item-active" : "navbar__item"
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to='/' className={setActiveLink}>Users</NavLink></li>
        <li><NavLink to='/task' className={setActiveLink}>Task</NavLink></li>
    
      </ul>
    </nav>

  )
}

export default Navbar
