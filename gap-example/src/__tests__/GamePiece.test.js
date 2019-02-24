import React from 'react';
import {mount} from 'enzyme';
import GamePiece from '../components/Game/GamePiece';

describe('GamePiece',  () => {
  let gamePiece, gamePieceInstance
  beforeEach(() => {
    gamePiece = mount(<GamePiece piece='' selected={false} />)
    // create state reference    
    gamePieceInstance = gamePiece.instance()
  })
  it ('Receives initial props', () => {
    expect(gamePieceInstance.props.piece).toEqual('')
    expect(gamePieceInstance.props.selected).not.toBeTruthy()
  })
})