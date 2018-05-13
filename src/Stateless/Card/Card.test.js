import React from 'react';
import Card from './Card';
import { shallow, mount } from 'enzyme';

describe('Card', () => {
  let wrapper;
  let card;
  beforeEach( () => {
    card = {data: {location: 'sansabar'}}
    wrapper = shallow ( 
              < Card 
                  card={ card }  
              />
            )
  })

  it('should match the snapshot when cards are rendered on the page', () => {
    expect( Card ).toMatchSnapshot()
  })
})
