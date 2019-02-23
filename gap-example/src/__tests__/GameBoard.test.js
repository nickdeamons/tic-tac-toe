import React from 'react';
import {mount} from 'enzyme';
import GameBoard from '../components/Game/GameBoard';

describe('GameBoard',  () => {
  let board, boardInstance, gamePieces
  beforeEach(() => {
    board = mount(<GameBoard />)
    // create state reference
    boardInstance = board.instance();
    // grab all the game pieces
    gamePieces =  board.find('.GameBoard').children('.GamePiece')
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
      gamePieces.at(0).simulate('click')
      expect(boardInstance.state.player).toEqual(1)
      expect(boardInstance.state.gamePieces[0].piece).toEqual('X')
    });
    it('Checks for a winner', () => {
      expect(boardInstance.state.winner.pieces).toEqual(undefined)
      gamePieces.at(0).simulate('click')
      expect(boardInstance.state.winner.pieces).toEqual(undefined)
    });

    it('Can "cats"', () => {
      gamePieces.at(0).simulate('click')
      gamePieces.at(1).simulate('click')
      gamePieces.at(2).simulate('click')
      gamePieces.at(3).simulate('click')
      gamePieces.at(6).simulate('click')
      gamePieces.at(4).simulate('click')
      gamePieces.at(5).simulate('click')
      gamePieces.at(8).simulate('click')
      gamePieces.at(7).simulate('click')
      expect(boardInstance.state.draw).toEqual(true)
    })
    it('Has a TicTacToe!', () => {
      gamePieces.at(0).simulate('click')
      gamePieces.at(1).simulate('click')
      gamePieces.at(3).simulate('click')
      gamePieces.at(4).simulate('click')
      gamePieces.at(6).simulate('click')
      expect(boardInstance.state.winner.piece).toEqual('X')
    });
    it('Can undo moves', () => {
      gamePieces.at(0).simulate('click')
      expect(board.find('#undo-btn').length).toEqual(1)
      expect(boardInstance.state.gamePieces[0].piece).toEqual('X')
      board.find('#undo-btn').at(0).simulate('click')
      expect(boardInstance.state.gamePieces[0].piece).toEqual('')
    })
    it('Shows reset', () => {
      gamePieces.at(0).simulate('click')
      expect(board.find('#reset-btn').length).toEqual(1)
    })

    describe('Game Over', () => {
      it('Has X win', () => {
        gamePieces.at(0).simulate('click')
        gamePieces.at(1).simulate('click')
        gamePieces.at(3).simulate('click')
        gamePieces.at(4).simulate('click')
        gamePieces.at(6).simulate('click')
        expect(boardInstance.state.winner.piece).toEqual('X')
      });
      it('Has O win', () => {
        gamePieces.at(8).simulate('click')
        gamePieces.at(1).simulate('click')
        gamePieces.at(3).simulate('click')
        gamePieces.at(4).simulate('click')
        gamePieces.at(6).simulate('click')
        gamePieces.at(7).simulate('click')
        expect(boardInstance.state.winner.piece).toEqual('O')
      })
      it('GameBoard forces user to reset board', () => {
        gamePieces.at(8).simulate('click')
        gamePieces.at(1).simulate('click')
        gamePieces.at(3).simulate('click')
        gamePieces.at(4).simulate('click')
        gamePieces.at(6).simulate('click')
        gamePieces.at(7).simulate('click')
        expect(board.find('#reset-btn').length).toEqual(1)
        expect(board.find('#undo-btn').length).toEqual(0)
      });
      it('GameBoard resets successfully', () => {
        gamePieces.at(0).simulate('click')
        expect(board.find('#reset-btn').length).toEqual(1)
        board.find('#reset-btn').at(0).simulate('click')
        // check to see if that piece has reset
        expect(boardInstance.state.gamePieces[0].piece).toEqual('')
        // check more state properties to ensure resets
        expect(boardInstance.state.player).toEqual(0)
        expect(boardInstance.state.lastClicked).toEqual(-1)
        expect(boardInstance.state.moveList.length).toEqual(0)
        expect(boardInstance.state.playerOneSelected.length).toEqual(0)
        expect(boardInstance.state.playerTwoSelected.length).toEqual(0)
        expect(boardInstance.state.activeGame).toEqual(true)
        expect(boardInstance.state.draw).toEqual(false)
      });
    });
  });
});