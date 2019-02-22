import React, {Component} from 'react';
import GamePiece from './GamePiece';

import './GameBoard.css';

import Player from '../../models/Player';

class GameBoard extends React.Component {
     
  constructor() {
    super();
    this.state = {
      player: 0,
      players: [new Player('X_X'), new Player('O_O')]
    }
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
      gameBoard.push(<GamePiece key={i} handleClick={this.handleGamePieceClick} />)
    }
    return gameBoard
  }
  render() {
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