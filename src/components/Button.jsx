import React from 'react'
import '../styles/Button.css'


function Button(props) {

  //Validar si el boton es un operador
  const isOperator = value => {
    return isNaN(value) && (value != '.') && (value != '=');
  };

  return(
    <div 
      className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trim()}
      onClick={ () => props.manejarClic(props.children)}>
      {props.children}
    </div>
    );
}


export default Button;