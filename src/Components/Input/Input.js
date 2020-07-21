import React from 'react';
import TextField from '@material-ui/core/TextField';



  
const Input = ({ type, onChange, placeholder, value }) => {
    return (
        <div>
        {/* <input type={type} onChange={onChange}  placeholder={placeholder} value={value}></input> */}
        <TextField
        id="standard-textarea"
        label="Pesquise"
        placeholder={placeholder}
        multiline
        onChange={onChange}
        type={type}
      />
      </div>
        
    )
}

export default Input;