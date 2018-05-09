import cleaner from '../cleaner/cleaner'

export const starWarsData = async ( category ) => {
  const url = `https://swapi.co/api/${ category }/`
  // const randomNumber = Math.floor(( Math.random() * 6) + 1 )
  const response = await fetch( url )
  const data = await response.json()
  return cleaner( data, category )
}

export const homeworldNameData = async ( url ) => {
  const response = await fetch( url )
  const data = await response.json()
  return data.name
}

export const homeworldPopulationData = async ( url ) => {
  const response = await fetch( url )
  const data = await response.json()
  return data.population
}

export const personSpeciesData = async ( url ) => {
  const response = await fetch( url )
  const data = await response.json()
  return data.name
}