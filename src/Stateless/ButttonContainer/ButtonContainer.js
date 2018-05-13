import React from 'react';
import './ButtonContainer.css';
import Button from '../Button/Button';
import Favorites from '../../Stateless/Favorites/Favorites';
import PropTypes from 'prop-types';

const ButtonContainer = ( { setData, count, showFavorites } ) => {
  console.log( setData )

   return (
     <div className="button-container">
     < h1 className='title'> swapi-box </h1>
      < Favorites
          count={ count }
          showFavorites={ showFavorites }/>
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
  setData: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  showFavorites: PropTypes.func.isRequired
}

export default ButtonContainer;