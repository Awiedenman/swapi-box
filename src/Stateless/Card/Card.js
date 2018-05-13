import React from 'react';
import './Card.css'
import PropTypes from 'prop-types';

const Card = ( { card, addFavorite, favCardClicked, selectedClass } ) => {
  // debugger;
  // console.log(card)
  const dynamicCards = Object.keys(card.data).map(( value, index) => 
      <p key={index}> 
          { card.data[value] }
          { favCardClicked } </p>
      )

  return (
    <div className={ selectedClass }>
      < div className = "fav-star"
        onClick = { () => addFavorite(card) }> 
        < span role="img" aria-label="favorite button"> ⭐️ </span> 
      </div >
      <h1> { card.name } </h1>
          { dynamicCards }
    </div>
  )

}



Card.propTypes = {
  card: PropTypes.object.isRequired,
  addFavorite: PropTypes.func.isRequired,
  favCardClicked: PropTypes.bool.isRequired,
  selectedClass: PropTypes.string.isRequired
}

export default Card;