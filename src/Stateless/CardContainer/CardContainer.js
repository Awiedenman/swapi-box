import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css'

const CardContainer = ({ categoryData }) => {
// console.log(categoryData)
  const renderCards = categoryData.map(( card, index) => 
    // console.log(data.populationOfHomeworld)
        <Card 
          key={ index }
          card={ card } 
        />
  )

  return(
    <div className='card-container'>

      { renderCards }
    </div>
  )
}

export default CardContainer;