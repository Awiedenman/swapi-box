export default class Cleaner {
  
  peopleCleaner= () => {
    const cleanPeople = people.results.reduce(( personObj, person ) => {
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
  }

  vehicleCleaner = () => {
    const cleanVehicles = vehicles.results.map(vehicle => {
      return {
        [vehicle.name]: {
          'name': vehicle.name,
          'Model': vehicle.model,
          'Class': vehicle.class,
          'Number of passengers': vehicle.passengers
        }
      }
      // console.log( cleanVehicles )
    })
  }

  filmCleaner = () => {
    const cleanFilms = films.results.map(film => {
      return {
        [film.title]: film.opening_crawl
      }
    })
    //  console.log( cleanFilms )
  }

  planetCleaner = () => {
    const cleanPlanet = planets.results.map(planet => {
      return {
        [planet.name]: {
          Name: planet.name,
          Terrain: planet.terrain,
          Population: planet.population,
          Climate: planet.climate,
          Residents: planet.residents
        }
      }
    })
    // console.log(cleanPlanet)
  }
}

