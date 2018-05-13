import React from 'react';
import './Card.css'
import PropTypes from 'prop-types';

const Card = ( { card, addFavorite } ) => {
  // debugger;
  console.log(card)
  const dynamicCards = Object.keys(card.data).map(( value, index) => 
      <p key={index}> { card.data[value]} </p>
      )

  return (
    <div className='card'>
    < div onClick={ () => addFavorite( { card } )}> ⭐️ < /div>
    <h1> { card.name } </h1>
         { dynamicCards }
    </div>
  )

}

export default Card;


Card.protoTyoes = {
  card: PropTypes.object.isRequired
}