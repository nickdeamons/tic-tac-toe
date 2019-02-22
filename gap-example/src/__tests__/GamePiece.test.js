import React from 'react';
import {shallow} from 'enzyme';
import GamePiece from '../components/Game/GamePiece';

describe('GamePiece', () => {
  const piece = shallow(<GamePiece />);
  const handleClick = (event, key, player) => {

  }
  it('GamePiece renders and has no values', () => {
    //expect(piece.children()).toHaveLength(9);
  });
  
  it('GamePiece accepts a click', () => {
  
  });
  
  it('GamePiece reports its owning Player', () => {
  
  });
  
  it('GamePiece can be reset', () => {
  
  });
})
