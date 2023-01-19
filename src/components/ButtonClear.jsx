import React from 'react'
import '../styles/ButtonClear.css'


const ButtonClear = (props) => (
    <button className='button-clear'>
        {props.children}
    </button>
);


export default ButtonClear;