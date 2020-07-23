import React from 'react';
import Button from '../Button/Button';

import './Input.css';


const Input = ({ type, onChange, placeholder, value, onClick }) => {
    return (
        <div>
        <input type={type} onChange={onChange}  placeholder={placeholder} value={value}></input>
        <Button onClick={onClick} btnText="Buscar" />
      
      </div>
        
    )
}

export default Input;