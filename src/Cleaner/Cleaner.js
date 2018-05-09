
const cleaner = ( response, category ) => {
  switch (category ) {
  
    case 'people':

      const cleanPeople = response.results.map(person => {
        return {
          [person.name]: {
            'Homeworld': "https://swapi.co/api/planets/1/",
            'Species': "https://swapi.co/api/species/1/",
            'Population of Homeworld': person.homeworld.polpulation
          }
        }
      })
      // Promise.all( [ homeWorldCall, speciesCall ] )
        return cleanPeople;

    case 'vehicle':

      const cleanVehicles = response.results.map(vehicle => {
        return {
          [vehicle.name]: {
            'name': vehicle.name,
            'Model': vehicle.model,
            'Class': vehicle.class,
            'Number of passengers': vehicle.passengers
          }
        }
      })
      return cleanPlanet;

    case 'films':

      const cleanFilms = response.results.map( film => {
        return {
          title: film.title, 
          Crawl: film.opening_crawl,
          releaseDate: film.release_date
        }
      })
      return cleanFilms;


    case 'planet':

      const cleanPlanet = response.results.map( planet => {
        return {
          [ planet.name ]: {
            Name: planet.name,
            Terrain: planet.terrain,
            Population: planet.population,
            Climate: planet.climate,
            Residents: planet.residents
          }
        }
      })
    return cleanPlanet
    default: return 'howdy';
  }
}

export default cleaner;