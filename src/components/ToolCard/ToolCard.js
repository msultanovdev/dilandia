import React from 'react';
import './ToolCard.css';

const ToolCard = ({ toolCardImage, toolCardAction, toolCardText, toolCardDesctiption }) => {
    return(
        <div className="ToolCard">
            <div className="ToolCard__hero">
                <div className="ToolCard__img">
                    <img alt="tool card" className="ToolCard__image" src={toolCardImage} />
                </div>
                <div className="ToolCard__name">
                    <h1 className="ToolCard__title">{toolCardAction}</h1>
                    <p className="ToolCard__text">{toolCardText}</p>
                </div>
                <div>
                    <p className="ToolCard__description">
                        {toolCardDesctiption}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ToolCard;