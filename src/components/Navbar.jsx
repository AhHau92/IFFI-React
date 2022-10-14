import Logo from '../images/logo.jpg'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import { links } from '../data'
import { links__mobile } from '../data'
import Menubar from '../images/menu.png'
import Cross from '../images/cross.png'


const Navbar = () => {

  const [isNavShowing, setIsNavShowing] = useState(true);

  return (
    <nav>
        <div className="nav__container">
          <ul className='nav__links'>
            {
              links.map(({ name, path }, index) => {
                return (
                  <li key={index}>
                    <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''} >{name}</NavLink>
                  </li>
                )
              })
            }
          </ul>
          <div className='nav__img'>
            <img src={Logo} alt="nav__logo" className='nav__logo' />
            <img src={Menubar} alt="" className='nav__toggle-btn' onClick={() => setIsNavShowing(prev => !prev)}/> 
          </div>
        </div>
          
          <ul className={`nav__links__mobile ${isNavShowing ? 'show__nav' : 'hide__Nav'}`}>
            {
              links__mobile.map(({ name, path }, index) => {
                return (
                  <li key={index}> 
                    <NavLink to={path} className={({isActive}) => isActive ? 'active-nav__mobile' : ''} onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                    
                  </li>
                )
              })
            }
            <img src={Cross} className='nav__cross' onClick={() => setIsNavShowing(prev => !prev)}/>
          </ul>
          

            
          
        
    </nav>
  )
}

export default Navbar