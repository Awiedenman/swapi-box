import React from 'react';
import './ButtonContainer.css'
import Button from '../Button/Button'

const ButtonContainer = ( { setData } ) => {
  // console.log( props )

   return (
     <div>
       < Button 
          setData={ setData }
          name='people' />
       < Button 
          name='vehicles'
          setData = { setData } />
       < Button 
          name='planets' 
          setData = { setData }/>
     </div>
   )
}

export default ButtonContainer;