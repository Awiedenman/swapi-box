import React, { Component } from 'react';
import './App.css';
import { starWarsData } from '../../ApiCalls/ApiCalls';
import ButtonContainer from '../../Stateless/ButttonContainer/ButtonContainer';
import OpeningScroll from '../../Stateless/OpeningScroll/OpeningScroll';
import CardContainer from '../../Stateless/CardContainer/CardContainer';

class App extends Component {
constructor() {
  super();
  this.state = {
    onLandingPage : true,
    film : [],
    people : [],
    vehicles : [],
    planets: [],
    favorites: [],
    category: ''
  }
}

// const renderLoader() {
    //if(!films.length){
    //render loader
// } else {
//   return filmText
// }

// render CardContainer = () => {
// }

  async componentDidMount() {
    const randomNumber = Math.floor((Math.random() * 7))
    const filmDataCall = await starWarsData( 'films' )
      await this.setState({ film: filmDataCall[ randomNumber ]})
   
  }
  // console.log(peopleDataCall)

  setData = async name => {
    const dataCall = await starWarsData( name )
    this.setState({ onLandingPage: false, category: name, [ name ]: dataCall } )
  }

  addFavotite = ( card ) => {
    this.setState({ favorites: [ ...this.state.favorites, card ]})
  }



  render() {
// {this.renderLoader}
// {this.renderButton}
        const onLandingPage = this.state.onLandingPage;
        return(
          <div className="App">
          
            <ButtonContainer 
                setData={ this.setData }/> 

         { onLandingPage ? (
            <OpeningScroll 
                randomScroll={ this.state.film }/>
         ) : ( 
            <CardContainer 
              categoryData={ this.state[ this.state.category ] } 
              addFavorite={ this.addFavotite }          
            />
         )}
          </div>
        )
    }
  }


export default App;


// mock starWarsData and see if it is getting me the state i need