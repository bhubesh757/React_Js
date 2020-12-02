import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'


function Navbar() {
    const [click, setclick] = useState(false);
    const [button, setbutton] = useState(true)

    const handleClick = () => setclick (!click)
    // console.log(!click);

    const closeMobileMenu = () => setclick (false)

    const showButton = () => {
        if (window.innerWidth <= 960 ){
            setbutton(false)
        }else{
            setbutton(true)
        }
    };

    useEffect(() => {
        showButton()
    },[])

    window.addEventListener(`resize`, showButton)
    return ( 
        <>
        <nav className = 'navbar'> 
        <div className = 'navbar-container'>
            <Link to ='/' className = 'navbar-logo' onClick = {closeMobileMenu} >
            SR    <i className="fas fa-blog"></i>
            </Link>
            <div className = 'menu-icon' onClick = {handleClick} >
                <i className = {click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className = {click ? 'nav-menu active' :'nav-menu'}>
                <li className = 'nav-item'>
                    <Link to = '/' className = 'nav-links' onClick = {closeMobileMenu}>Home</Link>
                    
                </li>
                <li className = 'nav-item'>
                    <Link to = '/' className = 'nav-links' onClick = {closeMobileMenu}>Services</Link>
                    
                </li>
                <li className = 'nav-item'>
                    <Link to = '/' className = 'nav-links' onClick = {closeMobileMenu}>Products</Link>
                    
                </li>
                <li className = 'nav-item'>
                    <Link to = '/' className = 'nav-links-mobile' onClick = {closeMobileMenu}>Sign Up</Link>
                    
                </li>
            </ul>
            {button && <Button buttonStyle = 'btn--outline'>Sign Up</Button>}
        </div>
        
        </nav>
        
        
        </>
    )
}

export default Navbar
