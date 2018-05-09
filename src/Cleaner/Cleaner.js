import { homeworldNameData, homeworldPopulationData, personSpeciesData } from '../ApiCalls/ApiCalls'

const cleaner = ( data, category ) => {
  switch (category ) {
  
    case 'people':

      const cleanPeople = data.results.map( async person => {
        // console.log(person)
        return {
          [person.name]: {
            'Homeworld': await homeworldNameData( person.homeworld ),
            'Population of Homeworld': await homeworldPopulationData( person.homeworld ),
            'Species': await personSpeciesData( person.species )
          }
        }
      })
      // console.log(Promise.all(cleanPeople))
      return Promise.all(cleanPeople)
        

    case 'vehicles':

      const cleanVehicles = data.results.map(vehicle => {
        return {
          [vehicle.name]: {
            'name': vehicle.name,
            'Model': vehicle.model,
            'Class': vehicle.class,
            'Number of passengers': vehicle.passengers
          }
        }
      })
      return cleanVehicles;

    case 'films':

      const cleanFilms = data.results.map( film => {
        return {
          title: film.title, 
          Crawl: film.opening_crawl,
          releaseDate: film.release_date
        }
      })
      return cleanFilms;


    case 'planets':

      const cleanPlanet = data.results.map( planet => {
        console.log(data);
        
        return {
          [ planet.name ]: {
            Name: planet.name,
            Terrain: planet.terrain,
            Population: planet.population,
            Climate: planet.climate,
            // Residents: planet.residents
          }
        }
      })
    return cleanPlanet
    default: return 'howdy';
  }
}

export default cleaner;