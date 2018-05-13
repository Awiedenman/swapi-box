import { starWarsData, homeworldNameData, homeworldPopulationData, personSpeciesData, planetResidents } from './ApiCalls'

describe('ApiCalls', () => {

  describe('starWarsData', () => {

    const mockUrl = 'https://swapi.co/api/people/'
    const mockData = {
      count: 87,
      next: "https://swapi.co/api/people/?page=2",
      previous: null,
      results: [{
              name: "Luke Skywalker",
              height: "172",
              mass: "77",
              hair_color: "blond",
              skin_color: "fair",
              eye_color: "blue",
              birth_year: "19BBY",
              gender: "male",
              homeworld: "https://swapi.co/api/planets/1/",
              films: [
                  "https://swapi.co/api/films/2/",
                  
              ],
              species: [
                  "https://swapi.co/api/species/1/"
              ],
              vehicles: [
                  "https://swapi.co/api/vehicles/14/",
                  "https://swapi.co/api/vehicles/30/"
              ],
              starships: [
                  "https://swapi.co/api/starships/12/",
                  "https://swapi.co/api/starships/22/"
              ],
              created: "2014-12-09T13:50:51.644000Z",
              edited: "2014-12-20T21:17:56.891000Z",
              url: "https://swapi.co/api/people/1/"
      }],
    }

    it('it call the fetch with the correct params', () => {

      window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
        status: 200,
        json: () => Promise.resolve( mockData )
      }))

      starWarsData( 'people' )

      expect( window.fetch ).toHaveBeenCalledWith( mockUrl );
    })

    it('should throw an error if the status is not ok', () => {
      window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
        status: 500
      }))

      const result = starWarsData( 'people' )
      const expected = Error('500') 

      expect( result ).rejects.toEqual( expected );
    })

    it('should throw an error if the response fails', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject({
        status: 404
      }))
      const expected = {
        'status': 404
      }
        expect( starWarsData(' ')).rejects.toEqual( expected ) 
    })
  })


  describe( 'homeworldData', () => {

    const mockUrl = 'https://swapi.co/api/planets/1/'
    const mockData = {
      name: "Tatooine",
      rotation_period: "23",
      orbital_period: "304",
      diameter: "10465",
      climate: "arid",
      gravity: "1 standard",
      terrain: "desert",
      surface_water: "1",
      population: "200000",
      residents: [
          "https://swapi.co/api/people/1/",
          "https://swapi.co/api/people/2/",
          "https://swapi.co/api/people/4/",
        ],
        films: [
          "https://swapi.co/api/films/5/",
          "https://swapi.co/api/films/4/",
        ],
        created: "2014-12-09T13:50:49.641000Z",
        edited: "2014-12-21T20:48:04.175778Z",
        url: "https://swapi.co/api/planets/1/"
    }

    it('should call fetch with the correct params', () => {

      window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
        status: 200,
        json: () => Promise.resolve( mockData)
      }))

      homeworldNameData( 'https://swapi.co/api/planets/1/' )

      expect( window.fetch).toHaveBeenCalledWith( mockUrl )
    })

    it('should throw and error if the status is not ok', () => {
      window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
        status: 500
      }))

      const result = homeworldNameData( 'https://swapi.co/api/planets/1/' )
      const expected = Error( '500' )

      expect( result ).rejects.toEqual( expected )
    })

    it('should throw an error if the fetch response fails', () => {
      window.fetch = jest.fn().mockImplementation( () => Promise.reject({ 
        status: 404
      }))
      const expected = {
        'status': 404
      }
      expect ( homeworldNameData(' ')).rejects.toEqual( expected )
    })
  })


  describe('homeworldPopulationData', () => {
  
    const mockUrl = 'https://swapi.co/api/planets/1/'
    const mockData = {
      name: "Tatooine",
      rotation_period: "23",
      orbital_period: "304",
      diameter: "10465",
      climate: "arid",
      gravity: "1 standard",
      terrain: "desert",
      surface_water: "1",
      population: "200000",
      residents: [
          "https://swapi.co/api/people/1/",
          "https://swapi.co/api/people/2/",
          "https://swapi.co/api/people/4/"
        ],
        films: [
          "https://swapi.co/api/films/5/",
          "https://swapi.co/api/films/4/",
        ],
        created: "2014-12-09T13:50:49.641000Z",
        edited: "2014-12-21T20:48:04.175778Z",
        url: "https://swapi.co/api/planets/1/"
      }
      
    it('should call fetch with the correct params', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockData)
      }))

      homeworldPopulationData('https://swapi.co/api/planets/1/')

      expect(window.fetch).toHaveBeenCalledWith(mockUrl)
    })

    it('should throw an error if the status is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }))

      const result = homeworldPopulationData('https://swapi.co/api/planets/1/')
      const expected = Error('500')

      expect(result).rejects.toEqual(expected)
    })

    it('should throw an error if the fetch response fails', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject({
        status: 404
      }))
      const expected = {
        'status': 404
      }

      expect(homeworldPopulationData(' ')).rejects.toEqual( expected );
    })
  })
  
  describe( 'personSpeciesData', () => {

    const mockUrl = 'https://swapi.co/api/species/1/'
    const mockData = {

      name: "Human",
      classification: "mammal",
      designation: "sentient",
      average_height: "180",
      skin_colors: "caucasian, black, asian, hispanic",
      hair_colors: "blonde, brown, black, red",
      eye_colors: "brown, blue, green, hazel, grey, amber",
      average_lifespan: "120",
      homeworld: "https://swapi.co/api/planets/9/",
      language: "Galactic Basic",
      people: [
        "https://swapi.co/api/people/1/",
        "https://swapi.co/api/people/4/",
      ],
      films: [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/7/"
      ],
      created: "2014-12-10T13:52:11.567000Z",
      edited: "2015-04-17T06:59:55.850671Z",
      url: "https://swapi.co/api/species/1/"
    }

    it('should call fetch with the correct the params', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockData)
      }))

      homeworldPopulationData('https://swapi.co/api/species/1/')

      expect(window.fetch).toHaveBeenCalledWith(mockUrl)
    })

    it('should throw an error if the status does not come back ok', () => {

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }))

      const result = personSpeciesData(mockUrl)
      const expected = Error('500')

      expect(result).rejects.toEqual(expected)

    })
    
    it('should throw an error if the fetch response fails', () => {
      window.fetch = jest.fn().mockImplementation( () => Promise.reject({
        'status': 404
      }))
      const expected = {
        'status': 404
      }
      
      expect(personSpeciesData(' ')).rejects.toEqual( expected );
    })
  })


  describe('planetResidents', () => {

    const mockUrl= "https://swapi.co/api/people/1/";
    const mockData= {
      count: 87,
      next: "https://swapi.co/api/people/?page=2",
      previous: null,
      results: [{
              name: "Luke Skywalker",
              height: "172",
              mass: "77",
              hair_color: "blond",
              skin_color: "fair",
              eye_color: "blue",
              birth_year: "19BBY",
              gender: "male",
              homeworld: "https://swapi.co/api/planets/1/",
              films: [
                "https://swapi.co/api/films/2/",

              ],
              species: [
                "https://swapi.co/api/species/1/"
              ],
              vehicles: [
                "https://swapi.co/api/vehicles/14/",
                "https://swapi.co/api/vehicles/30/"
              ],
              starships: [
                "https://swapi.co/api/starships/12/",
                "https://swapi.co/api/starships/22/"
              ],
              created: "2014-12-09T13:50:51.644000Z",
              edited: "2014-12-20T21:17:56.891000Z",
              url: "https://swapi.co/api/people/1/"
      }]
    }

    it('should call planetResidents using the correct params', () => {

      window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
        status: 200,
        json: () => Promise.resolve( mockData )
      }))

      planetResidents( "https://swapi.co/api/people/1/" );

      expect( window.fetch ).toHaveBeenCalledWith( mockUrl )
    })

    it('should throw an error if the fetch response returns not ok', () => {
      window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
        status: 500
      }))
      const result = planetResidents( mockUrl );
      const expected = Error( '500' )

      expect( result ).rejects.toEqual( expected )
    })

    it('should throw an error if the fetch fails to return a response', () => {
      window.fetch = jest.fn().mockImplementation( () => Promise.reject({
        status: 404
      }))

      const expected = {
        'status': 404
      }

      expect( planetResidents(' ') ).rejects.toEqual( expected )
    })
  })
})


  


























