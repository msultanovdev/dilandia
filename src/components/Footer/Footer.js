import React from 'react';
import { NavLink } from 'react-router-dom';
import { page } from '../../router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faPaperPlane, faEnvelope, faLaptop } from '@fortawesome/free-solid-svg-icons'; 

import './style.css';

const Footer = () => {
    
    return(
        <footer className="Footer" >
            <NavLink exact to={page.home} activeClassName="Header__link-active" className="Footer__logo" >Dilandia</NavLink>
            <div className="Footer__media" >
                <div className="Footer_phone">
                    <a className="Phone" href="tel: +998903552060"><FontAwesomeIcon icon={faPhone} /></a>
                    <p className="Phone__number">+998-90-355-20-60</p>
                </div>
                <div className="Footer__telegram">
                    <a className="Social__telegram" href="https://telegram.org/"><FontAwesomeIcon icon={faPaperPlane} /></a>
                    <p className="Social__tg" >user: @dilandia</p>
                </div>
                <div className="Footer__mail">
                    <a className="Social__mail" href="https://mail.google.com/mail/u/0/#inbox"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <p className="Social__email" >mukhammadamin.sultanov@gmail.com</p>
                </div>
                <div className="Footer__instagram">
                    <a className="Social__instagram" href="https://www.instagram.com/invites/contact/?i=1aeutibqwzk59&utm_content=2g74t15"><FontAwesomeIcon icon={faLaptop} /></a>
                    <p className="Social__insta">@s.mukhammadamin</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;