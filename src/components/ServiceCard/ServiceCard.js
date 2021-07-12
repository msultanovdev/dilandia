import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ actionName, titleDescription, cardImage }) => {
    return(
        <div className="ServiceCard" >

            <div className="Service__Card">

                <div className="Service__Card-img-block">
                    <img alt="service pic" className="Service__Card-img" src={cardImage} />
                </div>

                <div className="Service__Card-name">
                    <div><h1 className="Service__Card-title">{actionName}</h1></div>
                    <div><p className="Service__Card-text">{titleDescription}</p></div>
                </div>
                
            </div>

        </div>
    );
}

export default ServiceCard;