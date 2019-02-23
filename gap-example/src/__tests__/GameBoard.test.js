import React from 'react';
import {mount} from 'enzyme';
import GameBoard from '../components/Game/GameBoard';

describe('GameBoard',  () => {
  let board, boardInstance
  beforeEach(() => {
    board = mount(<GameBoard />)
    boardInstance = board.instance();
  })
  describe('Initialize',  () => {
    it('Renders and has 9 GamePieces', () => {
      expect(board.find('.GameBoard').find('.GamePiece').length).toEqual(9);
    });
    it('Starts with Player 1 (X)', () => {
      expect(boardInstance.state.player).toEqual(0);
    });
  });
 
  describe('Gameplay', () => {
    it('Shows current player', () => {
      expect(board.find('#currentPlayer').text()).toEqual('Player, 1, it\'s your turn!')
    });
    it('Updates the correct piece and player on click', () => {
      board.find('.GameBoard').children('.GamePiece').at(0).simulate('click')
      expect(boardInstance.state.player).toEqual(1)
      expect(boardInstance.state.gamePieces[0].piece).toEqual('X')
    });
    it('Checks for a winner', () => {
      expect(boardInstance.state.winner.pieces).toEqual(undefined)
      board.find('.GameBoard').children('.GamePiece').at(0).simulate('click')
      expect(boardInstance.state.winner.pieces).toEqual(undefined)
    });
    it('Is playable until full or draw', () => {
      
    })
    it('Can "cats"', () => {
      board.find('.GameBoard').children('.GamePiece').at(0).simulate('click')
      board.find('.GameBoard').children('.GamePiece').at(1).simulate('click')
      board.find('.GameBoard').children('.GamePiece').at(2).simulate('click')
      board.find('.GameBoard').children('.GamePiece').at(3).simulate('click')
      board.find('.GameBoard').children('.GamePiece').at(6).simulate('click')
      board.find('.GameBoard').children('.GamePiece').at(4).simulate('click')
      board.find('.GameBoard').children('.GamePiece').at(5).simulate('click')
      board.find('.GameBoard').children('.GamePiece').at(8).simulate('click')
      board.find('.GameBoard').children('.GamePiece').at(7).simulate('click')
      expect(boardInstance.state.draw).toEqual(true)
    })
    it('Has a TicTacToe!', () => {
      board.find('.GameBoard').children('.GamePiece').at(0).simulate('click')
      board.find('.GameBoard').children('.GamePiece').at(1).simulate('click')
      board.find('.GameBoard').children('.GamePiece').at(3).simulate('click')
      board.find('.GameBoard').children('.GamePiece').at(4).simulate('click')
      board.find('.GameBoard').children('.GamePiece').at(6).simulate('click')
      expect(boardInstance.state.winner.piece).toEqual('X')
    });
    it('Can undo moves', () => {
      board.find('.GameBoard').children('.GamePiece').at(0).simulate('click')
      expect(board.find('#undo-btn').length).toEqual(1)
      expect(boardInstance.state.gamePieces[0].piece).toEqual('X')
      board.find('#undo-btn').at(0).simulate('click')
      expect(boardInstance.state.gamePieces[0].piece).toEqual('')
    })
    it('Shows reset', () => {
      board.find('.GameBoard').children('.GamePiece').at(0).simulate('click')
      expect(board.find('#reset-btn').length).toEqual(1)
    })
    it('Performs reset', () => {
      board.find('.GameBoard').children('.GamePiece').at(0).simulate('click')
      expect(board.find('#reset-btn').length).toEqual(1)
      board.find('#reset-btn').at(0).simulate('click')
      // check to see if that piece has reset
      expect(boardInstance.state.gamePieces[0].piece).toEqual('')
      // check more state properties to ensure resets
      expect(boardInstance.state.player).toEqual(0)
      expect(boardInstance.state.lastClicked).toEqual(-1)
      expect(boardInstance.state.moveList.length).toEqual(0)
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