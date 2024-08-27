import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../img/logo.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    }
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container-homepage ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/practice">Practice</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/signup">Login/Register</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
