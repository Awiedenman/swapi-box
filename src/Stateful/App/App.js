import React, { Component } from 'react';
import './App.css';
import { starWarsData } from '../../Api/Api';
import ButtonContainer from '../../Stateless/ButttonContainer/ButtonContainer'

class App extends Component {
constructor() {
  super();
  this.state = {
    film : [],
    people : [],
    vehicles : [],
    planets: []
  }
}

// handleInput( category ){
//   const data = await starWarsData( category );
//   const cleanData = await cleanData( data )
//   this.setState( cleanData )
// }

async componentDidMount() {
  const apiCall = await starWarsData( 'films')
  console.log( apiCall )
}

  render() {

    return (
      <div className="App">
        <header> swapi-box</header>
        <ButtonContainer />
        {/* <CardContainer /> */}
        
      </div>
    );
  }
}

export default App;
