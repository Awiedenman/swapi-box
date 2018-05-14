import React from 'react';
import ButtonContainer from "./ButtonContainer";
import { shallow } from 'enzyme';


describe( 'ButtonContainer', () => {
  const mockCount = 1;
  const MockShowFavorite = jest.fn();
  const wrapper = shallow(
    < ButtonContainer
      count = { mockCount }
      showFavorites = { MockShowFavorite }
    />
  );
  it( 'should match the snapshot of the buttons when the page loads', () => {
    expect( wrapper ).toMatchSnapshot();
  });
});