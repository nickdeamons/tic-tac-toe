import React from 'react';
import {mount} from 'enzyme';
import GameBoard from '../components/Game/GameBoard';
//import GamePiece from '../components/Game/GamePiece';

describe('GameBoard',  () => {
  const board = mount(<GameBoard />)
  const boardInstance = board.instance();
  // shallow render the Gameboard
  describe('Initialize',  () => {
    it('GameBoard renders and has 9 GamePieces', () => {
      expect(board.find('.GameBoard').find('.GamePiece').length).toEqual(9);
    });
    it('GameBoard starts with Player 1 (X)', () => {
      expect(boardInstance.state.player).toEqual(0);
    });
  });
 
  describe('Gameplay', () => {
    it('Shows current player', () => {
      
    });
    it('Triggers next player on a GamePiece click', () => {
      //board.childAt(0).find('.GamePiece').simulate('click')

    });
    it('Checks for a winner', () => {
      
    });
    it('Gameboard has TicTacToe!', () => {

    });
    it('Can undo last move', () => {

    })
    describe('Game Over', () => {
      it('GameBoard reports a winner or tie', () => {

      });
      it('GameBoard forces user to reset board', () => {
        
      });
      it('GameBoard resets successfully', () => {
      
      });
    });
  });
});