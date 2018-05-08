import React, { Component } from 'react';
import './App.css';
import { filmCrawl } from '../../ApiCalls/FilmApi';

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

async componentDidMount() {
  await filmCrawl()
  console.log( await filmCrawl())
}

  render() {

    return (
      <div className="App">
        {/* <Header className="App-header" /> */}
        {/* <CardContainer /> */}
        
      </div>
    );
  }
}

export default App;
