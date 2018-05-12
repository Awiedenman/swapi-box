import { shallow, mount } from 'enzyme';
// import ApiCalls from './ApiCalls'
import { starWarsData } from './ApiCalls'

describe('ApiCalls', () => {
  it('it call the fetch with the correct params', () => {
    const mockUrl = 'https://swapi.co/api/people/'
    const mockData = {
      count: 7,
      next : null,
      previous : null,
      results : [{
        characters: ["https://swapi.co/api/people/1/", "https://swapi.co/api/people/2/"],
        created: "2014-12-10T14:23:31.880000Z",
        director: "George Lucas",
        edited: "2015-04-11T09:46:52.774897Z",
        episode_id: 4,
        opening_crawl: "It is a period of civil war.",
        planets: ["https://swapi.co/api/planets/2/", "https://swapi.co/api/planets/3/", "https://swapi.co/api/planets/1/"],
        producer: "Gary Kurtz, Rick McCallum",
        release_date: "1977-05-25",
        species: ["https://swapi.co/api/species/5/", "https://swapi.co/api/species/3/", "https://swapi.co/api/species/2/", "https://swapi.co/api/species/1/", "https://swapi.co/api/species/4/"],
        starships: ["https://swapi.co/api/starships/2/", "https://swapi.co/api/starships/3/", "https://swapi.co/api/starships/5/", "https://swapi.co/api/starships/9/", "https://swapi.co/api/starships/10/", "https://swapi.co/api/starships/11/", "https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/13/"],
        title: "A New Hope",
        url: "https://swapi.co/api/films/1/",
        vehicles: ["https://swapi.co/api/vehicles/4/", "https://swapi.co/api/vehicles/6/", "https://swapi.co/api/vehicles/7/", "https://swapi.co/api/vehicles/8/"],
      }]
    }

    window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
      status: 200,
      json: () => Promise.resolve( mockData )
    }))

    starWarsData( 'people' )

    expect( window.fetch ).toHaveBeenCalledWith( mockUrl );
  })

  it('should throw an error  if the status is not ok', () => {
    window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
      status: 500
    }))

    const result = starWarsData( 'people' )
      // console.log(starWarsData('people'))
    const expected = Error('500') 

    expect( result ).rejects.toEqual( expected );
  })

  it('should throw an error if the response is bad', () => {
     window.fetch = jest.fn().mockImplementation(() => Promise.reject({
       status: 404
     }))
     const expected = {
       'status': 404
     }
      expect( starWarsData(' ')).rejects.toEqual( expected ) 
  })

})


