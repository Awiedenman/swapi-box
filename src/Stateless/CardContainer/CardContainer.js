import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css'
import PropTypes from 'prop-types';

const CardContainer = ({ categoryData, addFavorite, favCardClicked }) => {
let selectedClass = favCardClicked === true ? 'card selected' : 'card'
  const renderCards = categoryData.map(( card, index) => 
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



CardContainer.propTypes = {
  categoryData: PropTypes.array.isRequired,
  addFavorite: PropTypes.func.isRequired,
  favCardClicked: PropTypes.bool.isRequired 
}

export default CardContainer;
