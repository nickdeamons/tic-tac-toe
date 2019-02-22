import React, {Component} from 'react';
import GamePiece from './GamePiece';

import './GameBoard.css';

const handleGamePieceClick = (event) => {

}

const createBoard = () => {
  let gameBoard = []
  for(let i = 0; i < 9; i++) {
    gameBoard.push(<GamePiece key={i} />)
  }
  return gameBoard
}
class GameBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      player: 1
    }
  }
  render() {
  return (
    <div>
      <h2><strong>Player {this.state.player}</strong>, it's your turn!</h2>
      <div className="GameBoard">
        {createBoard()}
      </div>
    </div>
    )
  }
}

export default GameBoard;