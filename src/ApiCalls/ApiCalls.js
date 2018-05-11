import cleaner from '../cleaner/Cleaner'

export const starWarsData = async ( category ) => {
  try{
    // console.log( category )
    const url = `https://swapi.co/api/${ category }/`
    // const randomNumber = Math.floor(( Math.random() * 7))
    // console.log(url)
    const response = await fetch( url )
    const data = await response.json()
    return cleaner( data, category )
  } catch( error) {
    throw error
  }
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

export const planetResidents = async ( url ) => {
  const response = await fetch( url )
  const data = await response.json()
  
  return data.name
}