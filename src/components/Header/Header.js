import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { page } from '../../router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './style.css';

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    return(      
            <header className="Header" >
                <nav className="Header__nav" >
                    <NavLink to="/" className="Header__logo" >Dilandia</NavLink>

                    <div className="Header__navMenu" onClick={() => setMenuActive(!menuActive)} >
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                        
                    
                    
                    <ul className="Header__mainNav" >
                        <li className="Header__navItem" ><NavLink exact activeClassName="Header__navLink--active" className="Header__navLink" to={page.home}>Home</NavLink></li>
                        <li className="Header__navItem" ><NavLink exact activeClassName="Header__navLink--active" className="Header__navLink" to={page.work}>Work</NavLink></li>
                        <li className="Header__navItem" ><NavLink exact activeClassName="Header__navLink--active" className="Header__navLink" to={page.services}>Services</NavLink></li>
                        <li className="Header__navItem" ><NavLink exact activeClassName="Header__navLink--active" className="Header__navLink" to={page.about}>About</NavLink></li>
                    </ul>

                    <ul className="Header__secondaryNav" >
                        <li className="Header__navItem" ><NavLink exact activeClassName="Header__navLink--active" className="Header__navLink" to={page.contactUs}>Contact Us</NavLink></li>
                    </ul>
                </nav>
            </header>
    );
}

export default Header;