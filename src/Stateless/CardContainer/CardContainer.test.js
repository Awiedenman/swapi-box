import React from 'react';
import CardContainer from './CardContainer';
import { shallow, mount } from 'enzyme';

describe('CardContainer', () => {
    const mockName = 'Luke';
    const mockCategoryData = [ {data: {
        Terrain: "Terrain: grasslands, mountains",
        Population: "Population: 2000000000",
        Climate: "Climate: temperate",
        Residents: "Residents: Leia Organa,Bail Prestor Organa,Raymus Antilles"
      },
      name:
      "Alderaan"
    } ];
    const mockAddFavoite = jest.fn();
    const mockFavCardClicked = true;
    const wrapper = shallow( 
          <CardContainer
            categoryData={ mockCategoryData }
            addFavorite={ mockAddFavoite }
            favCardClicked={ mockFavCardClicked }
          />
           )

  it('should match the snapshot if the cards are rendered on page', () => {
    expect( CardContainer ).toMatchSnapshot()
  })

})