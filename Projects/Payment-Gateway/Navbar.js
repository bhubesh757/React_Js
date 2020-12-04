import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {RiMoneyEuroCircleLine} from 'react-icons/ri'
import { FaTimes, FaBars} from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'

function Navbar() {
    const [click, setclick] = useState(false)
    const [button, setbutton] = useState(true)

    const handleClick = () => setclick(!click)
    const closeMobileMenu = () => setclick(false) // what it does it return to the main page

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setbutton(false)
        }else{
            setbutton(true)
        }
    }
    useEffect (() => {
        showButton();
    },[button])

    window.addEventListener ('resize' , showButton)
    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <RiMoneyEuroCircleLine className='navbar-icon' />
              PayCoin
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Careers
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/sign-up' className='btn-link'>
                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to='/sign-up' className='btn-link' onClick={closeMobileMenu}>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      
                    >
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
        </>
    )
}

export default Navbar
