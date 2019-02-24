import React, {Component} from 'react';
import classNames from 'classnames/bind';

import './GameBoard.css';

import GameStatus from './GameStatus'

import Player from '../../models/Player';
import WinConditions from '../../models/WinConditions';

class GameBoard extends React.Component {
     
  constructor() {
    super();

    const gamePieces = new Array(9);
    gamePieces.fill({piece: '', selected: false});

    this.state = {
      activeGame: true,
      draw: false,
      gamePieces: gamePieces,
      lastClicked: -1,
      moveList: new Array(),
      player: 0,
      players: [new Player('1', 'X', 0), new Player('2', 'O', 1)],
      playerOneSelected: new Array(),
      playerTwoSelected: new Array(),
      winner: {}
    }
  }

  get currentPlayer() {
    return {...this.state.players[this.state.player]}
  }

  setPiece = (index) => {
    const gamePieces = [].concat(this.state.gamePieces)
    gamePieces[index] = {piece: this.state.players[this.state.player].piece, selected: true};
    return gamePieces
  }
  unSetPiece = (index) => {
    const gamePieces = [].concat(this.state.gamePieces)
    gamePieces[index] = {piece: '', selected: false};
    return gamePieces
  }
  hasWinner = (playerOneMoves, playerTwoMoves) => {
    let winner = {} // if this remains empty there is no winner yet
    for(var i=0; i<WinConditions.length && !winner.piece;i++) {
      const condition = WinConditions[i]
      // check to see if every element in the condition array exists within the players' moves
      if(condition.every((value) => {
        return playerOneMoves.indexOf(value) > -1
      })) {
        winner = this.state.players[0]
      }
      // check to see if every element in the condition array exists within the players' moves
      if(condition.every((value) => {
        return playerTwoMoves.indexOf(value) > -1
      })) {
        winner = this.state.players[1]
      }
    }  /**/
    return winner;
  }
  handleGamePieceClick = (index) => {
    if(this.state.activeGame && !this.state.gamePieces[index].selected) {
      const moves = ([].concat(this.state.moveList))
      moves.push(index)
      const playerOneMoves = [].concat(this.state.playerOneSelected)
      const playerTwoMoves = [].concat(this.state.playerTwoSelected)
      if(this.state.player === 0) {
        playerOneMoves.push(index)
        playerOneMoves.sort()
      } else {
        playerTwoMoves.push(index)
        playerTwoMoves.sort()
      }
      const gamePieces = this.setPiece(index)
      const winner = this.hasWinner(playerOneMoves, playerTwoMoves)
        if(!winner.piece) {
          if(moves.length === 9) {
            // cats game
            this.setState({
              lastClicked: index,
              moveList: moves,
              gamePieces: gamePieces,
              player: 0,
              draw: true,
              activeGame: false,
              playerOneSelected: playerOneMoves,
              playerTwoSelected: playerTwoMoves,
            })
          } else {
            // keep playing
            this.setState({
              lastClicked: index,
              moveList: moves,
              gamePieces: gamePieces,
              playerOneSelected: playerOneMoves,
              playerTwoSelected: playerTwoMoves,
              player: Math.abs(this.state.player - 1)
            })
          }
        } else {
          // declare winner
          this.setState({
            winner: winner,
            lastClicked: index,
            moveList: moves,
            gamePieces: gamePieces,
            playerOneSelected: playerOneMoves,
            playerTwoSelected: playerTwoMoves,
            activeGame: false
          })
        }
    }
  }
  undo = () => {
    const move = this.state.moveList.slice(this.state.moveList.length - 1).pop();
    const moves = [].concat(this.state.moveList)
    moves.length = moves.length - 1;
    const gamePieces = this.unSetPiece(move)
    const playerOneMoves = [].concat(this.state.playerOneSelected)
    const playerTwoMoves = [].concat(this.state.playerTwoSelected)
    if(this.state.player === 1) { // it would be the opposite players turn
      playerOneMoves.length = playerOneMoves.length - 1
    } else {
      playerTwoMoves.length = playerTwoMoves.length - 1
    }
    this.setState({
      lastClicked: move,
      moveList: moves,
      gamePieces: gamePieces,
      playerOneSelected: playerOneMoves,
      playerTwoSelected: playerTwoMoves,
      player: Math.abs(this.state.player - 1)
    })
  }
  reset = () => {
    const gamePieces = new Array();
    for(let i=0; i< 9;i++) {
      gamePieces.push({piece: '', selected: false})
    }
    this.setState( {
      gamePieces: gamePieces,
      player: 0,
      lastClicked: -1,
      moveList: [],
      activeGame: true,
      winner: {},
      draw: false,
      playerOneSelected: [],
      playerTwoSelected: []
    })
  }
  render() {
    return (
      <div>
        <GameStatus draw={this.state.draw} currentPlayer={this.state.players[this.state.player]} winner={this.state.winner} />
        <div className="GameBoard__wrap">
          <div className={ classNames({ Cats: this.state.draw, X: this.state.winner.piece === 'X', O: this.state.winner.piece === 'O', GameBoard: 'GameBoard', GameOver: !this.state.activeGame})}>
            {this.state.gamePieces.map((element, index) => {
              let gamePieceClasses = classNames({
                X: element.piece === 'X',
                O: element.piece === 'O',
                selected: element.selected,
                GamePiece: 'GamePiece'
              })
              return (<div key={`piece_${index}`} className={gamePieceClasses} onClick={() => { this.handleGamePieceClick(index)}}>
                {element.piece  === 'X' || element.piece === 'O' ? element.piece : ' '}
              </div>)
            })}
          </div>
        </div>
        { this.state.moveList.length > 0 ?
          <div className="buttons">
          {this.state.activeGame ? 
            <button className="secondary" id="undo-btn" onClick={this.undo}>Undo</button> : ''
          }
            <button className="primary" id="reset-btn" onClick={this.reset}>Reset</button>
          </div>
          : '' 
        }
      </div>
    )
  }
}

export default GameBoard;