import React from 'react';
import { page } from '../../router';
import { NavLink } from 'react-router-dom';

import './Menu.css';

const Menu = ({ active, setActive }) => {
    return(
        <div className={active ? 'Menu__active' : 'Menu'} onClick={() => setActive(false)}>
            <ul className="Menu__mainNav" onClick={e => e.stopPropagation} >
                    <li className="Menu__navItem" ><NavLink  exact activeClassName="Menu__navLink-active" className="Menu__navLink" to={page.home}>Home</NavLink></li>
                    <li className="Menu__navItem" ><NavLink  exact activeClassName="Menu__navLink-active" className="Menu__navLink" to={page.work}>Work</NavLink></li>
                    <li className="Menu__navItem" ><NavLink  exact activeClassName="Menu__navLink-active" className="Menu__navLink" to={page.services}>Services</NavLink></li>
                    <li className="Menu__navItem" ><NavLink exact activeClassName="Menu__navLink-active" className="Menu__navLink" to={page.about}>About</NavLink></li>
            </ul>
        </div>
    );
}

export default Menu;