import React from 'react';
import OpeningScroll from './OpeningScroll';
import { shallow } from 'enzyme';

describe( 'OpeningScroll', () => {
  it('should match the snapshot of  scroll on page load', () =>{
    const mockRandomScroll = {
      crawl: "War! The Republic is crumbling",
      releaseDate: "2005-05-19",
      title: "Revenge of the Sith"
    };
    const wrapper = shallow(
      <OpeningScroll 
        randomScroll= { mockRandomScroll }
      />
    );

    expect( wrapper ).toMatchSnapshot();
  });
});
