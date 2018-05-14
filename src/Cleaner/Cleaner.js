import { homeworldNameData, homeworldPopulationData, personSpeciesData, planetResidents } from '../ApiCalls/ApiCalls';

var cleaner = ( data, category ) => {
  switch (category ) {
  
    case 'people':

      var cleanPeople = data.results.map( async person => {
        return {
          name: `${ person.name }`,
          data: {
            favCardClicked: false,
            homeworld: 
              `Homeworld: ${ await homeworldNameData(person.homeworld) }`,
            populationOfHomeworld: 
              `Population: ${ await homeworldPopulationData(person.homeworld) }`,
            species: 
              `Species: ${ await personSpeciesData(person.species) }`
          }
            
        };
      });
      return Promise.all(cleanPeople);

    case 'vehicles':

      var cleanVehicles = data.results.map(vehicle => {
        return {
          name: `${ vehicle.name }`,
          data: {
            model: `Model: ${ vehicle.model }`,
            class: `Class: ${ vehicle.class }`,
            NumberOfPassengers: `Passengers: ${ vehicle.passengers }`
          }
        };
      });
      return cleanVehicles;

    case 'films':

      var cleanFilms = data.results.map( film => {
        return {
          title: film.title, 
          crawl: film.opening_crawl,
          releaseDate: film.release_date
        };
      });
      return cleanFilms;


    case 'planets':

      var cleanPlanet = data.results.map( async planet => {
        var residents = planet.residents.map( resident => {
          return planetResidents( resident );
        });
        
        let residentInfo = await Promise.all(residents);
        if (!residentInfo.length) {
          residentInfo = 'N/A';
        }
        return {
          name: `${ planet.name }`,
          data: {
            Terrain: `Terrain: ${ planet.terrain }`,
            Population: `Population: ${ planet.population }`,
            Climate: `Climate: ${ planet.climate }`,
            Residents: `Residents: ${ residentInfo }`
          }
        }; 
      });
      
      return Promise.all(cleanPlanet);

    default: return 'howdy';
  }
};

export default cleaner;