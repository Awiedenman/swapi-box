import React from 'react';
import './Favorites.css';
import PropTypes from 'prop-types';

const Favorites = ( { count, showFavorites } ) => {
  let name = 'favorites';
  return(
    <div className="favorites-display">
      <button className="showFavorites-button" onClick={ () => showFavorites( name )}> Favoites 
        <span className="fav-counter"> { count } </span>
      </button>
    </div>
  )
}

export default Favorites;