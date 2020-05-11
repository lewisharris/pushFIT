import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return(
        <nav className='main-nav'>
           <ul className="navbar-list">
               <li className="navbar-list-item focus-nav-icon">Get Started</li>
               <li className="navbar-list-item">about</li>
               <li className="navbar-list-item">help</li>
           </ul>
        </nav>
    )
}

export default Navbar