import React from 'react';
import './ButtonContainer.css'
import Button from '../Button/Button'

const ButtonContainer = ( props ) => {
   return (
     <div>
       < Button name="People" />
       < Button name="Vehicle" />
       < Button name="Planets" />
     </div>
   )
}

export default ButtonContainer;