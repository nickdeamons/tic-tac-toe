import React from 'react';
import {mount} from 'enzyme';
import GameStatus from '../components/Game/GameStatus';
import Player from '../models/Player';

describe('Game Status', () => {
  let status, statusInstance;
  let playerOne = new Player()
  beforeEach(() => {
    status = mount(<GameStatus currentPlayer={{}} winner={{}} draw={false} />)
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
  it('reports a winning game', () => {
    status.setProps({winner: playerOne})
    expect(status.props().winner).toMatchObject(playerOne)
    expect(status.find('.winner').text()).toEqual(`${playerOne.name} has won the game!`)
  })
  it('reports a cats game', () => {
    status.setProps({draw: true})
    expect(status.find('.winner').length).not.toEqual(1)
    expect(status.find('.draw').length).toEqual(1)
  })
})
