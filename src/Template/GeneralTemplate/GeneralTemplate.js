import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './GeneralTemplate.css';

const GeneralTemplate = ({ children }) => {
    return (
        <div className='generalTemplate__container'>
            <input type='checkbox' id='menu'></input>
            <label for='menu' className='menu'>
                <FontAwesomeIcon icon={faBars} />
            </label>
            <nav className=''>
                <div>
                    <Link to='/'><p>Que documentação?</p></Link>
                    <ul className='generalTemplate__list'>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/about'><li>Dicas</li></Link>
                        <Link to='/docs'><li>Documentações</li></Link>
                    </ul>
                </div>
            </nav>

            {children}

            <footer className='footer'>
                <p>2020 Projeto final do Bootcamp da reprograma por <a href='https://ilzinha.github.io/' target='_blank' rel="noopener noreferrer"><span>Ilza Medeiros</span></a></p>
            </footer>
        </div>

    )
}

export default GeneralTemplate;