import React, {Component} from 'react';
import GamePiece from './GamePiece';

import './GameBoard.css';

import Player from '../../models/Player';

class GameBoard extends React.Component {
     
  constructor() {
    super();
    this.state = {
      player: 0,
      players: [new Player('X_X', 'X', 0), new Player('O_O', '0', 1)]
    }
  }

  get currentPlayer() {
    return {...this.state.players[this.state.player]}
  }
  nextPlayerTurn = () => {
    this.setState({
      player: Math.abs(this.state.player - 1)
    })
  }
  handleGamePieceClick = () => {
    this.nextPlayerTurn()
  }
  createBoard = () => {
    let gameBoard = []
    for(let i = 0; i < 9; i++) {
      gameBoard.push(<GamePiece key={i} handlePieceClick={this.handleGamePieceClick} player={this.currentPlayer} />)
    }
    return gameBoard
  }
  render() {{}
    return (
      <div>
        <h2><strong>{this.state.players[this.state.player].displayText}</strong>, it's your turn!</h2>
        <div className="GameBoard">
          {this.createBoard()}
        </div>
      </div>
    )
  }
}

export default GameBoard;