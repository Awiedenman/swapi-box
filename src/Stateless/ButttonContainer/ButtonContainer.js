import React from 'react';
import './ButtonContainer.css';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const ButtonContainer = ( { setData } ) => {
  console.log( setData )

   return (
     <div className="button-container">
     < h1 className='title'> swapi-box </h1>
       < Button 
          setData={ setData }
          name='people' />
       < Button 
          name='vehicles'
          setData = { setData } />
       < Button 
          name='planets' 
          setData = { setData } />
     </div>
   )
}

ButtonContainer.propTypes = {
  setData: PropTypes.func.isRequired
}

export default ButtonContainer;