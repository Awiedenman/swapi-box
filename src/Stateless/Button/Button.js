import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';


const Button = ( { name, setData } ) => {
  
  return (
    < div className = "button-div" >
      <button 
        className="button"
        onClick= { () => setData(name)}>{ name } </button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  setData: PropTypes.func
};

export default Button;