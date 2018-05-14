import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ( { card, addFavorite, favCardClicked, selectedClass } ) => {
  const dynamicCards = Object.keys(card.data).map(( value, index) => 
    <p key={index}> 
      { card.data[value] }
      { favCardClicked } </p>
  );

  return (
    <div className={ selectedClass }>
      < div className = "fav-star"
        onClick = { () => addFavorite(card) }> 
        < span role="img" aria-label="favorite button"> ⭐️ </span> 
      </div >
      <h1> { card.name } </h1>
      { dynamicCards }
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  addFavorite: PropTypes.func,
  favCardClicked: PropTypes.bool,
  selectedClass: PropTypes.string
};

export default Card;