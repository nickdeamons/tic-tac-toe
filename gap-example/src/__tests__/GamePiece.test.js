import React from 'react';
import {mount} from 'enzyme';
import GamePiece from '../components/Game/GamePiece';

import Player from '../models/Player';

const player = new Player('Tester', 'O', 2);
const handleClick = (event, player) => {
 //console.log('click called')
}

describe('GamePiece', () => {
  const piece = mount(<GamePiece handlePieceClick={handleClick} pieceKey='1' player={{}} />);
  
  it('Renders and has props: player, key, handleClick', () => {
    piece.simulate('click', player)
    // Test the GameBoard sending back the player as a prop
    piece.setProps({'player': player})
    expect(piece.props().player.piece).toEqual('O')
    expect(piece.props().player.piece).not.toEqual('X')
  });
  
  it('GamePiece accepts a click', () => {
    piece.simulate('click', player)
  });
  
  it('GamePiece reports its owning Player', () => {
  
  });
  
  it('GamePiece can be reset', () => {
    piece.instance().reset()
    expect(piece.state().selected).toEqual(false)
    expect(piece.state().player.piece).toEqual(undefined)
  });
})