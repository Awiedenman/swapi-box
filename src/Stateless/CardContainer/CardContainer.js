import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css'
import PropTypes from 'prop-types';

const CardContainer = ({ categoryData, addFavorite }) => {
// console.log(categoryData)
  const renderCards = categoryData.map(( card, index) => 
    // console.log(data.populationOfHomeworld)
        <Card 
          key={ index }
          card={ card } 
          addFavorite={ addFavorite }
        />
  )

  return(
    <div className='card-container'>
      { renderCards }
    </div>
  )
}

export default CardContainer;


CardContainer.propTypes = {
  categoryData: PropTypes.array.isRequired
}

