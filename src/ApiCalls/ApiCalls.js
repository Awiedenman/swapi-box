import cleaner from '../cleaner/Cleaner';

export const starWarsData = async ( category ) => {
  try {
    const url = `https://swapi.co/api/${ category }/`;
    const response = await fetch( url );
    if (response.status === 200){
      const data = await response.json();
      return await cleaner( data, category );
    } else {
      throw new Error( response.status );
    }
  } catch ( error ){
    throw error;
  }
};

export const homeworldNameData = async ( url ) => {
  try {
    const response = await fetch( url );
    if (response.status === 200){
      const data = await response.json();
      return data.name;
    } else {
      throw new Error( response.status );
    }
  } catch ( error ){
    throw error;
  }
};

export const homeworldPopulationData = async ( url ) => {
  try {
    const response = await fetch( url );
    if ( response.status === 200 ){
      const data = await response.json();
      return data.population;
    } else {
      throw new Error( response.status );
    }
  } catch ( error ){
    throw error;
  }
}; 

export const personSpeciesData = async ( url ) => {
  try {
    const response = await fetch( url );
    if ( response.status === 200 ){
      const data = await response.json();
      return data.name;
    } else {
      throw new Error( response.status );
    }
  } catch ( error ){
    throw error;
  }
};

export const planetResidents = async ( url ) => {
  try {
    const response = await fetch( url );
    if ( response.status === 200 ){
      const data = await response.json();
      return data.name;
    } else {
      throw new Error(response.status);
    }
  } catch ( error ){
    throw error;
  }
};
