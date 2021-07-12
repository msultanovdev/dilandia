import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({ ButtonTitle, goTo }) => {
    return(
        <Link className="Button" to={goTo}>{ButtonTitle}</Link>
    );
}

export default Button;