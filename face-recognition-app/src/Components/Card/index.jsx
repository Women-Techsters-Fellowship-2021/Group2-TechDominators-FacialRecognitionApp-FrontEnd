import React from 'react';
import './index.css';

function Card({ image, title, description }) {
    return (
        <div className="Card">
            <div className="cardImage">
                <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Card;