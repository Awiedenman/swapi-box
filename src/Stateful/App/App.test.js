import { shallow, mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {

      beforeEach(() => {
        wrapper = shallow( < App /> )
      })

      it.skip('should call starWarsData with the correct paramenters', () => {
        const mockStarWarsDAta = jest.fn();
        const mockParams = [{
            'A New Hope': "It is a period of civil war" },
          { 'Attack of the Clones': "There is unrest in the Galactic" },
          { 'The Phantom Menace': "Turmoil has engulfed the Galactic Republic" }
        ]

        wrapper.instance().mockStarWarsDAta().toaHaveBeenCalledWith(mockParams)

      })

    }