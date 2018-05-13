import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css'
import PropTypes from 'prop-types';

const CardContainer = ({ categoryData, addFavorite, favCardClicked }) => {
// console.log(categoryData)
let selectedClass = favCardClicked === true ? 'card selected' : 'card'
  const renderCards = categoryData.map(( card, index) => 
    // console.log(data.populationOfHomeworld)
    <Card 
    selectedClass={ selectedClass }
    key={ index }
    card={ card } 
    addFavorite={ addFavorite }
    favCardClicked={ favCardClicked }
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

