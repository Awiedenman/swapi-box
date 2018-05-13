
import React from 'react';
import Button from './Button';
import { shallow, mount } from 'enzyme';

describe('Button', () => {
  let wrapper;
  // const mockSetData = jest.fn()
 
  beforeEach( () => {
    wrapper = shallow( 
          <Button
            name= {name}
            // setData={ setData}
          />
           )
  })

  it('should match the snapshot of the button on page',() =>{
    expect(Button).toMatchSnapshot()
  })
})