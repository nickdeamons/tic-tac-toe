import React from 'react';
import {mount, render} from 'enzyme';
import GameBoard from '../components/Game/GameBoard';
//import GamePiece from '../components/Game/GamePiece';

describe('GameBoard',  () => {
  const board = mount(<GameBoard />)
  const boardInstance = board.instance();
  // shallow render the Gameboard
  describe('Initialize',  () => {
     /**/
     it('GameBoard renders and has 9 GamePieces', () => {
      expect(board.childAt(0).find('.GamePiece').length).toEqual(9);
    });
    it('GameBoard starts with Player 1 (X)', () => {
      expect(boardInstance.state.player).toEqual(1);
    });
  });
 
  describe('Gameplay', () => {
     /*it('GameBoard shows current player', () => {
      it('Gameboard piece click triggers next player', () => {
        it('Checks for a winner', () => {
          describe('Game Over', () => {
            it('GameBoard reports a winner or tie', () => {

            });
            it('GameBoard forces user to reset board', () => {
              it('GameBoard resets successfully', () => {
            
              });
            });
          });
        });
        })
      })
    }); */
  });

});