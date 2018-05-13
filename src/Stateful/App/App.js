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
    favCardClicked: false,
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

  addFavorite = ( card ) => {
    let favorites = this.state.favorites;
    if (favorites.includes( card )){
      favorites = favorites.filter( fav => {
        return !fav === card 
      })
    } else {
        favorites.push( card )
    }
      favCardClicked: !this.state.favCardClicked
      this.setState({ favorites: favorites })
  }

  showFavorites =( name ) => {
    console.log( name )
    this.setState({ category: name })
  }


//if this.state 


  render() {
// {this.renderLoader}
// {this.renderButton}
        const onLandingPage = this.state.onLandingPage;
        return(
          <div className="App">

            <ButtonContainer 
                setData={ this.setData }
                count={ this.state.favorites.length }
                showFavorites={ this.showFavorites }
            />   

         { onLandingPage ? (
            <OpeningScroll 
                randomScroll={ this.state.film }/>
         ) : ( 
            <CardContainer 
              categoryData={ this.state[ this.state.category ] } 
              addFavorite={ this.addFavorite }  
              favCardClicked={ this.state.favCardClicked }       
            />
         )}
          </div>
        )
    }
  }


export default App;


// mock starWarsData and see if it is getting me the state i need