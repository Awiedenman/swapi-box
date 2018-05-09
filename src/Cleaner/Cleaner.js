
const cleaner = ( response, category ) => {
  switch ( category ) {
  
    case 'people':

      const cleanPeople = response.results.reduce(( personObj, person ) => {
        if (!personObj[person.name]) {
          personObj[person.name] = {
            'Homeworld': person.homeworld,
            'Species': person.species,
            'Population of Homeworld': person.homeworld.polpulation
          }
        }
        return personObj;
      }, {})
      // console.log( cleanPeople )
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
          [film.title]: film.opening_crawl
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