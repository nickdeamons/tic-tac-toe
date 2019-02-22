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
      {this.state.player}
      <div className="GameBoard">
        {createBoard()}
      </div>
    </div>
    )
  }
}

export default GameBoard;