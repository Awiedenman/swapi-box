import React from 'react';
import './Button.css'

const Button = ( { name, setData } ) => {
  
  return (
    < div className = "button-div" >
      <button className="button" onClick= { () => setData(name)}>{ name } </button>
    </div>
  )
}

export default Button;