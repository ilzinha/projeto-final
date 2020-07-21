import React from 'react';
import { Link } from 'react-router-dom'

import './GeneralTemplate.css';

const GeneralTemplate = ({ children }) => {
    return (
        <div className='generalTemplate__container'>
            <input type="checkbox" id="menu"></input>
            <label for="menu" class="menu">Menu</label>
            <nav className=''>
                <div>
                    <Link to='/'><p>Que documentação?</p></Link>
                    <ul className='generalTemplate__list'>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/about'><li>Sobre</li></Link>
                        <Link to='/docs'><li>Documentação</li></Link>
                    </ul>
                </div>
            </nav>
            {children}
        </div>

    )
}

export default GeneralTemplate;