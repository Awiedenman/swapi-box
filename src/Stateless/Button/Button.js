import React from 'react';
import './Button.css'

const Button = ( { name } ) => {
  
  return (
    <div>
      <button>{ name }</button>
    </div>
  )
}

export default Button;