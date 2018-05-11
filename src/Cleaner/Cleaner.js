import { homeworldNameData, homeworldPopulationData, personSpeciesData, planetResidents } from '../ApiCalls/ApiCalls'

const cleaner = ( data, category ) => {
  switch (category ) {
  
    case 'people':

      const cleanPeople = data.results.map( async person => {
        // console.log(person)
        return {
            name: `name: ${ person.name }`,
            data: {
              homeworld: `Homeworld: ${ await homeworldNameData(person.homeworld) }`,
                populationOfHomeworld: `Population: ${ await homeworldPopulationData(person.homeworld) }`,
                species: await personSpeciesData(person.species)
            }
            
        }
      })
      // console.log(Promise.all(cleanPeople))
      return Promise.all(cleanPeople)

    case 'vehicles':

      const cleanVehicles = data.results.map(vehicle => {
        return {
            'name': vehicle.name,
            'Model': vehicle.model,
            'Class': vehicle.class,
            'Number of passengers': vehicle.passengers
        }
      })
      return cleanVehicles;

    case 'films':

      const cleanFilms = data.results.map( film => {
        return {
          title: film.title, 
          crawl: film.opening_crawl,
          releaseDate: film.release_date
        }
      })
      return cleanFilms;


    case 'planets':

      const cleanPlanet = data.results.map( async planet => {
        
        const residents = planet.residents.map( async resident => {
          return planetResidents( resident )
        })
        
        const stuff = await Promise.all(residents)

        return {
            Name: planet.name,
            Terrain: planet.terrain,
            Population: planet.population,
            Climate: planet.climate,
            Residents: stuff
        } 
      
      })
      
      return Promise.all(cleanPlanet)
    default: return 'howdy';
  }
}

export default cleaner;