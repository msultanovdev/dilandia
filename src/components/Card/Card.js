import React from 'react';
import './Card.css';

const Card = ({ actionTitle, titleDescription, cardImage }) => {
    return(
        <div>
            <a href="https://colibrisoft.uz/">
                <div className="Card">
                    <div className="Card__img">
                        <img alt="card pic" className="Card__image" src={cardImage} />
                    </div>
                    <div className="Card__name">
                        <h1 className="Card__title">{actionTitle}</h1>
                        <h3 className="Card__text">{titleDescription}</h3>
                    </div>
                </div>
            </a>  
        </div>
    );
}

export default Card;