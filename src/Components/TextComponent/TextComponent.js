import React from 'react';

import './TextComponent.css'

const TextComponent = ({textContent}) => {
    return (
        <div className='textContainer'>
            <p className='textContainer--paragraph'>{textContent}</p>
        </div>
    )
}

export default TextComponent;