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
      // Player, X_X, it's your turn!
      expect(board.find('#currentPlayer').text()).toEqual('Player, X_X, it\'s your turn!')
    });
    it('Updates the correct piece and player on click', () => {
      //board.childAt(0).find('.GamePiece').simulate('click')
      board.find('.GameBoard').children('.GamePiece').at(0).simulate('click')
      expect(boardInstance.state.player).toEqual(1)
      expect(boardInstance.state.gamePieces[0].piece).toEqual('X')
    });
    it('Checks for a winner', () => {
      
    });
    it('Is playable until full', () => {
      
    })
    it('Gameboard has TicTacToe!', () => {

    });
    it('Can undo last move', () => {

    })
    it('Can reset', () => {

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