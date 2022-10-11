import Logo from '../images/logo.jpg'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import { links } from '../data'
import { GoThreeBars } from 'react-icons/go'
import { MdOutlineClose } from 'react-icons/md'


const Navbar = () => {

  return (
    <nav>
        <div className="nav__container">
          <ul className='nav__links'>
            {
              links.map(({ name, path }, index) => {
                return (
                  <li key={index}>
                    <NavLink to={path}>{name}</NavLink>
                  </li>
                )
              })
            }
          </ul>
          <img src={Logo} alt="nav__logo" className='nav__logo' />

          <button className='nav__toggle-btn' >
             <GoThreeBars />
          </button>
        </div>
    </nav>
  )
}

export default Navbar