import { shallow, mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe.skip('App', () => {

  beforeEach(() => {
    const wrapper = mount( 
      < App /> 
    );
  });

  it.skip('should call starWarsData with the correct paramenters', () => {
    const mockParams = 'vehicles';

    starWarsDAta('vehicles');

    wrapper.instance().mockStarWarsDAta().toaHaveBeenCalledWith(mockParams);

  });

});