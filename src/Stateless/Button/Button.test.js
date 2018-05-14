
import React from 'react';
import Button from './Button';
import { shallow, mount } from 'enzyme';

describe('Button', () => {
  let wrapper;
 
  beforeEach( () => {
    wrapper = shallow( 
          <Button
            name= {name}
          />
           )
  })

  it('should match the snapshot of the button on page',() =>{
    expect(Button).toMatchSnapshot()
  })
})