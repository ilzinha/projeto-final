import React from 'react';

import './Card.css'

const Card = ({ id, image, alt, name, link }) => {
    return (
        <div key={id}>
            <a href={link} target='_blank' rel="noopener noreferrer">
                <img src={image} alt={alt}></img>
                <h5>{name}</h5>
            </a>
        </div>

    )
}

export default Card;