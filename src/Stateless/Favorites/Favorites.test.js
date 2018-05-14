import React from 'react';
import Favorites from './Favorites';
import { shallow } from 'enzyme';

describe('Favorites', () => {
  const mockCount= 1;
  const mockShowFavorites = jest.fn();
  const wrapper = shallow(
    < Favorites
      count = { mockCount }
      showFavorites = {mockShowFavorites }
    />
  );
  it('should match the snapshot of the favorites component ont he page', () => {
    expect( wrapper ).toMatchSnapshot();

  });
});