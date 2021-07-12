import React from 'react';
import './ContentTitle.css';

const ContentTitle = ({ actionTitle, titleDescription, style }) => {
    return(
        <div style={{...style}}>
            <h1 className="ContentTitle">{actionTitle}</h1>
            <p className="ContentTitle__text">{titleDescription}</p>
        </div>
    );
}

export default ContentTitle;