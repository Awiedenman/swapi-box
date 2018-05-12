import React from 'react';
import './Card.css'

const Card = ( { card } ) => {
  // debugger;
  console.log(card)
  const dynamicCards = Object.keys(card.data).map(( value, index) => 
      <p key={index}> { card.data[value]} </p>
      )

  return (
    <div className='card'>
    <h1> { card.name } </h1>
         { dynamicCards }
    </div>
  )

}

export default Card;


// snapshot