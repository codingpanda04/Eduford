import React from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import {NavLink} from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className='navbar'> 
       <div className='logo'>
        <img src={assets.logo} alt="logo" />
       </div>
       <div className="links">
          <ul>
            <NavLink to='/'>Home</NavLink>
            <NavLink to="/about">About</NavLink>  
            <NavLink to="/course">Course</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </ul>
       </div>
    </div>
  )
}

export default Navbar
