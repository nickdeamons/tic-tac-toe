import React from 'react';
import {mount} from 'enzyme';
import GameStatus from '../components/Game/GameStatus';
import Player from '../models/Player';

describe('Game Status', () => {
  let status, statusInstance;
  let playerOne = new Player()
  beforeEach(() => {
    status = mount(<GameStatus currentPlayer={{}} />)
    // create state reference
    statusInstance = status.instance();
    status.setProps({currentPlayer: playerOne})
  });
  it('renders without crashing', () => {
   expect(status.props().currentPlayer).toMatchObject(playerOne)
  })
  it('receives a new player object', () => {
    let playerTwo = new Player('2', 'O', 1);
    status.setProps({currentPlayer: playerTwo})
    expect(status.props().currentPlayer).toMatchObject(playerTwo)
  })
})
