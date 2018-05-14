import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  let wrapper;
  beforeEach( () => {
    const mockCard ={
      data: {
        Climate: "Climate: frozen",
        Population: "Population: unknown",
        Residents: "Residents: N/A",
        Terrain: "Terrain: tundra, ice caves, mountain ranges",
        name: "Hoth"
      }};

    const mockAddFavoite = jest.fn();
    const mockFavCardClicked = true;
    wrapper = shallow( 
      < Card 
        card={ mockCard }
        addFavorite = { mockAddFavoite }
        favCardClicked = { mockFavCardClicked }
  
      />
    );
  });

  it('should match the snapshot when cards are rendered on the page', () => {
    expect( wrapper ).toMatchSnapshot();
  });
});
